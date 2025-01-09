"use client";

import React from "react";
// import { useFormState } from "react-dom";
// import { Checkbox, Label, Spinner } from "flowbite-react";

import { sendContactMsg, SendMessageResultType } from "./actions";
import ArrowRight from "~/assets/svg/ArrowRight.svg";

const initialState: SendMessageResultType = {
  message: undefined,
};

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      className="flex items-center gap-2 my-6"
      aria-disabled={pending}
      disabled={pending}
    >
      {/* {pending && <Spinner aria-label="Spinner" size="sm" />} */}
      <div className="font-bold text-lg">SEND MESSAGE</div>
      {/* CHANGE: bg-blue-400 ->  커스텀 색상 */}
      <div className="rounded-full bg-customBlue p-2">
        <ArrowRight width="16" />
      </div>
    </button>
  );
}

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  className?: string;
  required?: boolean;
  multiline?: boolean;
}

function InputField(props: InputFieldProps) {
  return (
    <div className={`mb-3 ${props.className}`}>
      <label htmlFor={props.name} className="text-xs block">
        {props.label}
      </label>
      {props.multiline ? (
        <textarea
          name={props.name}
          required={props.required}
          rows={5}
          className="bg-transparent border-b w-full text-xl"
        />
      ) : (
        <input
          name={props.name}
          type={props.type}
          required={props.required}
          className="bg-transparent border-b w-full text-xl"
        />
      )}
    </div>
  );
}

export default function SendMsgForm() {
  const [state, formAction, isPending] = React.useActionState(
    sendContactMsg,
    initialState
  );

  return (
    <form action={formAction}>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <InputField label="Your name" name="namae" required />
        <InputField label="Subject" name="subject" required />
        <InputField label="Email" name="email" type="email" required />
        <InputField label="Phone number" name="phone" type="tel" />
        <InputField
          className="col-span-2"
          label="Your message"
          name="msg"
          multiline
          required
        />
      </div>

      <div className="flex flex-col items-center">
        {/* CHANGED:
        텍스트 색상 blue-500 -> customBlue
        텍스트 굵기 기본 -> font-thin*/}
        <div className="flex gap-2 items-center whitespace-nowrap text-customBlue font-thin">
          <input
            type="checkbox"
            id="chkAgree"
            name="chk"
            value="Y"
            // CHANGED:
            // 체크박스 테두리 border-blue-500 -> customBlue/ 체크박스 바탕 색상 bg-white -> bg-black
            // 체크박스 포커스시 색상 bg-blue-800 -> customBlue
            // 체크박스 테두리 굵기 border-2 -> border
            className="relative peer shrink-0 appearance-none w-6 h-6 border border-customBlue rounded-sm bg-black mt-1 checked:bg-black checked:border-customBlue focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
          />
          <label htmlFor="chkAgree">I agree to the privacy policy.</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // CHANGED: 체크 표시 색상 text-blue-500 -> text-customBlue
            className="absolute w-6 h-6 mt-1 hidden peer-checked:block pointer-events-none text-customBlue"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            // CHANGED: 체크 표시 굵기 strokeWidth 4 -> 1
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <SubmitButton pending={isPending} />
      </div>

      <p>{state?.message}</p>
    </form>
  );
}
