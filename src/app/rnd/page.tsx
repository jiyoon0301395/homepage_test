import React from "react";
import Image from "next/image";

import AppFrame from "~/components/AppFrame";
import SectionDivider from "~/components/SectionDivider";
import TextToken from "~/components/TextToken";

import CircleUnion from "~/assets/svg/CircleUnion.svg";

function SubSection({
  num,
  children,
}: {
  num: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center">
      <div className="relative">
        <CircleUnion />
        <div className="absolute inset-0 flex items-center pl-1 text-xs font-bold">
          {num}
        </div>
      </div>
      <div className="ml-2">{children}</div>
    </div>
  );
}
export default function RndPage() {
  return (
    <AppFrame>
      <SectionDivider />
      <h1>R&amp;D</h1>
      <TextToken fixedSize>AI NPC</TextToken>
      <Image src="/img/rnd_1.png" width={982} height={582} alt="AI NPC" />
      <SubSection num="1 - 1">Template NPC API</SubSection>
      <Image
        src="/img/rnd_2.png"
        width={982}
        height={582}
        alt="Template NPC API"
      />
      <SubSection num="1 - 2">GenAI NPC API</SubSection>
      <Image
        src="/img/rnd_3.png"
        width={982}
        height={582}
        alt="GenAI NPC API"
      />
      <SubSection num="1 - 3">Animation API</SubSection>
      <Image
        src="/img/rnd_4.png"
        width={982}
        height={582}
        alt="Animation API"
      />

      <br />
      <br />
      <TextToken>XR EXPERIENCE</TextToken>
      <Image src="/img/rnd_5.png" width={982} height={582} alt="XR Exp" />
      <Image src="/img/rnd_6.png" width={982} height={582} alt="XR Exp" />
    </AppFrame>
  );
}
