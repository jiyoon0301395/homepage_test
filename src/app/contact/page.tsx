"use client";
import React from "react";

import AppFrame from "~/components/AppFrame";
import SectionDivider from "~/components/SectionDivider";
import SendMsgForm from "./SendMsgForm";

export default function ContactPage() {
  return (
    <AppFrame>
      <SectionDivider />
      <h1>CONTACT</h1>
      <div className="text-sm text-center my-8">
        {/* CHANGED: 주소 수정 */}
        #1011(10F), 66, Seongsui-ro, Seongdong-gu, Seoul, Republic of Korea
        <br />
        +82 010 3675 3199 | info@deepxrlab.com
      </div>

      <SendMsgForm />

      <h2 className="text-center text-xl my-4">GOOGLE MAP</h2>
      <iframe
        // CHANGED: 구글맵 위치 수정 논현 -> 성수
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d197.87300152278547!2d127.0561825!3d37.5405547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1699115369242!5m2!1sen!2sus"
        className="w-full h-[24rem] md:h-[32rem] pb-16"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </AppFrame>
  );
}
