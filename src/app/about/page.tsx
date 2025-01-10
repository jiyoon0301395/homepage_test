import React from "react";
import Image from "next/image";

import AppFrame from "~/components/AppFrame";
import SectionDivider from "~/components/SectionDivider";
import TextToken from "~/components/TextToken";

function MemberItem(props: {
  className?: string;
  face: string;
  name: string;
  role: string;
}) {
  return (
    <div className={props.className}>
      <Image
        src={`/img/face_${props.face}.png`}
        // CHANGED: 이미지 크기 수정 512->100
        width={100}
        height={100}
        alt={props.name}
        // CHANGED: 이미지 모서리 둥글게
        className="rounded-lg"
      />
      <div>{props.name}</div>
      <div>{props.role}</div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <AppFrame>
      <SectionDivider />
      <h1>ABOUT</h1>
      {/* CHANGED: 가운데 정렬, 공백 추가 mt-6, 글자 굵게 font-bold */}
      <div className="text-center mt-6 font-bold text-2xl">
        Headless AI Solutions to XR Experience World
      </div>
      {/* CHANGED: 가운데 정렬, 줄바꿈 위치 변경, 글자 두께 변경 */}
      <div className="text-center mt-10 text-base font-light space-y-3">
        DeepXRLab leverages GenAI technology to build next-generation AI NPCs
        and headless platforms with
        <br />
        unparalleled expertise. Our advanced solutions create a new paradigm,
        seamlessly bridging reality and
        <br />
        the virtual world to deliver truly immersive experiences.
      </div>

      <div className="flex flex-wrap gap-4 justify-center my-4 mt-6">
        <TextToken>XR PLATFORM</TextToken>
        <TextToken>DIGITAL AVATAR HEADLESS / XR PLATFORM</TextToken>
        <TextToken>GENERATIVE AI</TextToken>
      </div>

      <Image
        src="/img/about_logo.png"
        width={960}
        height={559}
        alt="DeepXRLab Logo"
      />
      {/* CHANGED: 크기, 두께 수정 */}
      <div className="text-3xl my-4 font-bold">MAN POWER</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
        <Image
          src="/img/about_rnd.png"
          width={300}
          height={364}
          alt="DeepXRLab Logo"
        />
        <Image
          src="/img/about_global.png"
          width={300}
          height={364}
          alt="DeepXRLab Logo"
        />
        <Image
          src="/img/about_1team.png"
          width={300}
          height={364}
          alt="DeepXRLab Logo"
        />
      </div>
      <div className="text-3xl my-14 font-bold">TEAM MEMBER</div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <MemberItem face="ceo" name="ChangHun. Kim" role="CEO" />
        <div className="col-span-3 md:col-span-4 lg:col-span-6 h-12" />

        <MemberItem face="mjchoi" name="Myungjin Choi" role="PhD" />
        <MemberItem face="qimeng" name="Qimeng Zhang" role="PhD" />
        <MemberItem face="bshong" name="Byeongsun Hong" role="Team leader" />
        <MemberItem face="yokim" name="Yongo Kim" role="Server" />
        <MemberItem face="sgjung" name="Sanggil Jung" role="Architect" />
        <MemberItem face="hongyu" name="Hongyu Jin" role="Researcher" />
        <MemberItem face="haoke" name="Deng Haoke" role="Researcher" />
        <MemberItem face="haoke" name="Feng Ji" role="Researcher" />
      </div>
    </AppFrame>
  );
}
