import React from "react";
import Image from "next/image";

import AppFrame from "~/components/AppFrame";
import SectionDivider from "~/components/SectionDivider";
import TextToken from "~/components/TextToken";
import GrayRBox from "~/components/GrayRBox";

export default function Home() {
  return (
    <AppFrame>
      <Image
        src="/img/home_top1.png"
        width={1456}
        height={816}
        alt="Welcome to DeepXRLab"
        className="object-cover w-full max-h-[480px]"
      />
      <SectionDivider />
      <h1 className="mb-6">AI NPC</h1>
      <div className="text-center text-[24px]">
        Meet your personalized AI NPC, crafted just for you. Unlock new
        possibilities
        <br />
        with dynamic, immersive interactions like never before.
      </div>
      <div className="flex flex-wrap gap-2 justify-center my-4">
        <TextToken>NPC Persona</TextToken>
        <TextToken>Voice(TTS, STT)</TextToken>
        <TextToken>Quick, Customer-Centric Production</TextToken>
        <TextToken>Variety Emotional Expressions</TextToken>
        <TextToken>Natural Movements</TextToken>
      </div>
      <div className="flex flex-wrap justify-around gap-8">
        <GrayRBox>
          <Image src="/img/home_mock1.png" width={205} height={205} alt="" />
          <div>Mobile - Healthcare & Fitness</div>
        </GrayRBox>
        <GrayRBox>
          <Image src="/img/home_mock2.png" width={205} height={205} alt="" />
          <div>PC - Health Counseling</div>
        </GrayRBox>
        <GrayRBox>
          <Image src="/img/home_mock3.png" width={205} height={205} alt="" />
          <div>NPC Kiosk - AI Counselor</div>
        </GrayRBox>
      </div>
      <div className="flex flex-wrap justify-around gap-8">
        <Image src="/img/home_npc1.png" width={130} height={130} alt="" />
        <Image src="/img/home_npc2.png" width={130} height={130} alt="" />
        <Image src="/img/home_npc3.png" width={130} height={130} alt="" />
        <Image src="/img/home_npc4.png" width={130} height={130} alt="" />
        <Image src="/img/home_npc5.png" width={130} height={130} alt="" />
      </div>
      <SectionDivider />
      <h1>XR Experience Platform</h1>
      <h4>
        Seamlessly move between reality and the virtual, across different
        spaces, delivering limitless immersive experiences.
      </h4>
      <div className="flex flex-wrap gap-8 justify-center my-4">
        <TextToken fixedSize>Metaverse</TextToken>
        <TextToken fixedSize>Multi Access</TextToken>
        <TextToken fixedSize>Seminar</TextToken>
        <TextToken fixedSize>Art Gallery</TextToken>
      </div>
      <div className="flex flex-wrap justify-around gap-8">
        <GrayRBox>
          <Image src="/img/home_mmm.png" width={205} height={205} alt="" />
          <div>MMM - 메타버스 회의 플랫폼</div>
        </GrayRBox>
        <GrayRBox>
          <Image src="/img/home_atg.png" width={205} height={205} alt="" />
          <div>ArtTelling - 메타버스 그림 전시 플랫폼</div>
        </GrayRBox>
      </div>
      <Image src="/img/home_arch.png" width={959} height={502} alt="" />
    </AppFrame>
  );
}
