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
        width={512}
        height={512}
        alt={props.name}
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
      <h3>Headless AI Solutions to XR Experience World</h3>
      <h4>
        DeepXRLab leverages GenAI technology to build next-generation AI NPCs
        and headless platforms with unparalleled expertise. Our advanced
        solutions create a new paradigm, seamlessly bridging reality and the
        virtual world to deliver truly immersive experiences.
      </h4>

      <div className="flex flex-wrap gap-2 justify-center my-4">
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
      <h2>MAN POWER</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
      <h2>TEAM MEMBER</h2>
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
