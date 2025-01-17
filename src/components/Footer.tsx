"use client";
import Link from "next/link";
import Image from "next/image";

import LogoTitle from "~/assets/svg/LogoTitle.svg";
import ArrowRight from "~/assets/svg/ArrowRight.svg";

export default function Footer() {
  return (
    <footer className="p-7 bg-black text-white w-full">
      <div className="flex my-[30px]">
        <Image
          src="/img/logo64b.png"
          width={45}
          height={36}
          alt="logo"
          style={{ transform: "scale(80%)" }}
        />
        <LogoTitle
          style={{
            marginLeft: "-10px",
            marginTop: "5px",
            height: "36px",
            transform: "scale(80%)",
          }}
        />
      </div>

      {/* TODO: if you have~ font: Inter */}
      {/* TODO: if you have~ 부분 자동줄바꿈 금지 while-space : nowrap 적용 */}
      {/* <div className="text-[20px] lg:text-xl my-2 lg:my-4 font-thin">
        If you have any questions about DeepXRLab&apos;s metaverse solutions,
        <br />
        please send an inquiry email to{" "}
        <a
          href="mailto:info@deepxrlab.com"
          className="font-bold text-md lg:text-2xl underline"
        >
          info@deepxrlab.com
        </a>{" "}
        or click the button below.
      </div> */}

      <div className="text-md lg:text-xl my-2 lg:my-4">
        If you have hany questions about DeepXRLab&apos;s metaverse
        <br className="lg:hidden md:hidden" /> solutions,
        <br />
        please send an inquiry email to{" "}
        <a
          href="mailto:info@deepxrlab.com"
          className="font-bold text-md lg:text-2xl"
        >
          info@deepxrlab.com
        </a>{" "}
        <span className="whitespace-nowrap"></span>
        or click
        <br className="md:hidden" /> the button below.
      </div>

      <Link href="/contact">
        <button className="rounded-full border text-2xl flex items-center gap-3 px-5 py-1 cursor-pointer mt-[30px]">
          Send message <ArrowRight width="20" />
        </button>
      </Link>

      <div className="py-4 lg:pt-8 grid gap-4 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="text-[24px] font-bold mb-[20px] mt-4">Location</div>
          <div className="text-md py-2 leading-relaxed font-thin space-y-2">
            <div>#1011(10F), 66, Seongsui-ro, Seongdong-gu,</div>
            <div>Seoul, Republic of Korea</div>
            <div>+82 010 3675 3199 | info@deepxrlab.com</div>
          </div>
        </div>
        <div>
          {/* TODO: menu 올리기 */}
          <div className="text-[24px] font-bold">Menu</div>
          <div
            className="text-md py-4 flex flex-col gap-[20px] font-thin"
            style={{ fontWeight: 10 }}
          >
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
      </div>
    </footer>
  );
}
