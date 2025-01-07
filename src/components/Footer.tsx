"use client";
import Link from "next/link";
import Image from "next/image";

import LogoTitle from "~/assets/svg/LogoTitle.svg";
import ArrowRight from "~/assets/svg/ArrowRight.svg";

export default function Footer() {
  return (
    <footer className="p-7 bg-black text-white w-full">
      <div className="flex">
        <Image
          src="/img/logo64b.png"
          width={32}
          height={32}
          alt="logo"
          style={{ transform: "scale(80%)" }}
        />
        <LogoTitle
          style={{
            marginLeft: "-10px",
            marginTop: "5px",
            height: "26px",
            transform: "scale(80%)",
          }}
        />
      </div>

      <div className="text-md lg:text-xl my-2 lg:my-4">
        If you have hany questions about DeepXRLab&apos;s metaverse solutions,
        <br />
        please send an inquiry email to{" "}
        <a
          href="mailto:info@deepxrlab.com"
          className="font-bold text-md lg:text-2xl"
        >
          info@deepxrlab.com
        </a>{" "}
        or click the button below.
      </div>

      <Link href="/contact">
        <button className="rounded-full border text-2xl flex items-center gap-2 px-3 py-1 cursor-pointer">
          Send message <ArrowRight width="18" />
        </button>
      </Link>

      <div className="py-4 lg:pt-8 grid gap-4 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="text-xl font-bold">Location</div>
          <div className="text-md py-2">
            3F, 38-8, Nonhyeon-ro 38-gil, Gangnam-gu,
            <br />
            Seoul, Republic of Korea
            <br />
            +82 010 3675 3199 | info@deepxrlab.com
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Company</div>
          <div className="text-md py-2">
            DeepXRLab develops metaverse platforms and industrial metaverse
            solutions based on innovative Deep-XR and Meta-VFX technologies.
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Menu</div>
          <div className="text-md py-4 flex gap-3 justify-between lg:grid lg:grid-cols-1">
            <Link href="/about">About</Link>
            <Link href="/product">Product</Link>
            <Link href="/rnd">R&D</Link>
            <Link href="/news">News</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-100">
        © 2024 DeepXRLab. All rights reserved.
        {/* <div className="text-black">{process.env.NEXT_PUBLIC_VER_NAME}</div> */}
      </div>
    </footer>
  );
}
