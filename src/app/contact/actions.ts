"use server";
import { db } from "@vercel/postgres";

//import { revalidatePath } from "next/cache";
export type SendMessageResultType = {
  message?: string;
};

// function Sleep(ms: number): Promise<void> {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), ms);
//   });
// }

type FromValueType = FormDataEntryValue | null;

async function notifyToSlack(
  name: FromValueType,
  subject: FromValueType,
  msg: FromValueType
) {
  try {
    const hookUrl = process.env.SLACK_WEBHOOK_URL;
    if (hookUrl) {
      const payload = {
        text: `${name}님이 메세지를 보냈습니다 (제목: ${subject}): ${msg
          ?.toString()
          .substring(0, 120)}`,
      };
      const slres = await fetch(hookUrl, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await slres.text();
      if (text != "ok") {
        console.error("SlackFailure:", text);
      }
    } else {
      console.error("Empty SLACK_WEBHOOK_URL");
    }
  } catch (ex) {
    console.error(ex);
  }
}

export async function sendContactMsg(
  prevState: SendMessageResultType,
  formData: FormData
): Promise<SendMessageResultType> {
  try {
    const name = formData.get("namae");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const msg = formData.get("msg");
    const agreed = formData.get("chk") == "Y";

    const client = await db.connect();
    const res = await client.query(
      "INSERT INTO contact_message (name,email,phone,subject,message,agreed) VALUES($1,$2,$3,$4,$5,$6) RETURNING ts",
      [name, email, phone, subject, msg, agreed]
    );
    const ts = res.rows[0].ts;
    const dateTs = new Date(ts);
    client.release();

    await notifyToSlack(name, subject, msg);

    //revalidatePath('/')
    return {
      message: `Message recorded at ${dateTs.toString()}. Thank you!`,
    } as SendMessageResultType;
  } catch (e) {
    console.error(e);
    return {
      message: "Failed to record the message. Sorry, could you try agin?",
    } as SendMessageResultType;
  }
}
