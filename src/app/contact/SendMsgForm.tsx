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
      <div className="rounded-full bg-blue-400 p-2">
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
        <div className="flex gap-2 items-center whitespace-nowrap text-blue-500">
          <input
            type="checkbox"
            id="chkAgree"
            name="chk"
            value="Y"
            className="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-blue-500 rounded-sm bg-white mt-1 checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
          />
          <label htmlFor="chkAgree">I agree to the privacy policy.</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
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
