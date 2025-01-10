"use client";

import React from "react";

import AppFrame from "~/components/AppFrame";
import SectionDivider from "~/components/SectionDivider";
import TextToken from "~/components/TextToken";
import ProductSlider, { ProductItemT } from "~/components/ProductSlider";

import ArrowRight from "~/assets/svg/ArrowRight.svg";

const ainpcItems: ProductItemT[] = [
  {
    thumbLabel: "AI NPC\nWebRTC",
    imgName: "ainpc",
    descript: (
      <div>
        <h4>AI NPC WebRTC</h4>
        <ul>
          <li>Experience AI NPC services directly through the web.</li>
          <li>
            With <b>WebRTC technology</b>, lightning-fast performance.
          </li>
          <li>Accessible from any device with seamless web access.</li>
          <li>
            AI NPCs embodying unique personas and explore a variety of
            interactive experiences.
          </li>
        </ul>
      </div>
    ),
  },
  {
    thumbLabel: "LoveChat",
    imgName: "lovechat",
    descript: (
      <div>
        <h4>LoveChat</h4>
        <ul>
          <li>
            A chat game with gamified elements powered by AI NPC technology
          </li>
          <li>
            Choose from <b>16 different MBTI types</b>
          </li>
          <li>
            Interact with AI NPCs that embody personalities matching your MBTI
            choice.
          </li>
          <li>
            Find it on <b>Steam</b>.
          </li>
        </ul>
        <button className="text-white bg-gray-600 hover:bg-gray-500 focus:outline-none font-medium text-sm px-12 py-2 float-right">
          LOVE CHAT : Virtual Romance{" "}
          <ArrowRight height="12px" className="inline ml-2" />
        </button>
      </div>
    ),
  },
  {
    thumbLabel: "Health\nConsultant",
    imgName: "hcare",
    descript: (
      <div>
        <h4>Health Consultant</h4>
        <ul>
          <li>
            Professional health consultants to support your health assessments
          </li>
          <li>Equipped with expertise comparable to medical specialists</li>
          <li>
            Accessible anytime, anywhere without the need for a hospital visit.
          </li>
        </ul>
      </div>
    ),
  },
  {
    thumbLabel: "My Mini Pet",
    imgName: "mmpet",
    descript: (
      <div>
        <h4>My Mini Pet</h4>
        <ul>
          <li>A cat that resembles your face</li>
          <li>
            Create a custom cat using <b>generative AI</b> based on your facial
            features
          </li>
          <li>Share your cat photos and explore creations from other users.</li>
        </ul>
      </div>
    ),
  },
];

const xrItems: ProductItemT[] = [
  {
    thumbLabel: "ArtTelling",
    imgName: "atg",
    descript: (
      <div>
        <h4>ArtTelling</h4>
        <ul>
          <li>
            A <b>metaverse platform for art exhibitions</b>
          </li>
          <li>
            Upload and share artworks, and enjoy viewing others&apos; creations.
          </li>
          <li>
            Host meetings and lectures with built-in{" "}
            <b>conference and classroom features</b>.
          </li>
        </ul>
      </div>
    ),
  },
  {
    thumbLabel: "MMM",
    imgName: "mmm",
    descript: (
      <div>
        <h4>ArtTelling</h4>
        <ul>
          <li>
            A versatile <b>metaverse platform</b>
          </li>
          <li>
            Create your own unique character using <b>generative AI</b>.
          </li>
          <li>
            Enjoy features like{" "}
            <b>
              screen sharing, voice/text chatting, and collaborative YouTube
              watching
            </b>
          </li>
        </ul>
      </div>
    ),
  },
];

export default function ProductPage() {
  return (
    <AppFrame>
      <SectionDivider />
      <h1 className="mb-24">PRODUCT</h1>
      <TextToken>AI NPC</TextToken>
      <ProductSlider items={ainpcItems} />

      <TextToken>XR</TextToken>
      <ProductSlider items={xrItems} />
      <div>Page</div>
    </AppFrame>
  );
}
