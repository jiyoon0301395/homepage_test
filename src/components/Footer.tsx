"use client";
import Link from "next/link";
import Image from "next/image";

import LogoTitle from "~/assets/svg/LogoTitle.svg";
import ArrowRight from "~/assets/svg/ArrowRight.svg";

// React 컴포넌트 Footer(웹 페이지 하단 영역)를 정의하고, 다른 파일에서 이 컴포넌트를 가져다 사용할 수 있도록 기본 내보내기를 설정
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

      {/* CHANGED: 두께 변경 font-thin */}
      <div className="text-md lg:text-xl my-2 lg:my-4 font-thin">
        {/* CHANGED: 오타 수정 hany -> any*/}
        If you have any questions about DeepXRLab&apos;s metaverse solutions,
        <br />
        please send an inquiry email to{" "}
        <a
          href="mailto:info@deepxrlab.com"
          // CHANGED: info@deepxrlab.com 밑줄 추가
          className="font-bold text-md lg:text-2xl underline"
        >
          info@deepxrlab.com
        </a>{" "}
        or click the button below.
      </div>

      <Link href="/contact">
        {/* CHANGED:
        간격 gap 2 -> 3 *
        패딩 px 3 -> 5
        위쪽 공백 추가 mt-6*/}
        <button className="rounded-full border text-2xl flex items-center gap-3 px-5 py-1 cursor-pointer mt-6">
          {/* CHANGED: 화살표 너비 18 -> 20 */}
          Send message <ArrowRight width="20" />
        </button>
      </Link>

      <div className="py-4 lg:pt-8 grid gap-4 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          {/* CHANGED: 공백 추가 */}
          <div className="text-xl font-bold mb-2 mt-4">Location</div>
          {/* CHANGED: 글자 굵기 얇게 수정 font-light 추가 */}
          <div className="text-md py-2 leading-relaxed font-light">
            {/* CHANGED: 주소 수정 */}
            #1011(10F), 66, Seongsui-ro, Seongdong-gu,
            <br />
            Seoul, Republic of Korea
            <br />
            +82 010 3675 3199 | info@deepxrlab.com
          </div>
        </div>
        {/*CHANGED: Company 삭제 */}
        <div>
          <div className="text-xl font-bold">Menu</div>
          {/*CHANGED: menu 세로 정렬 *}
          {/* <div className="text-md py-4 flex flex-col gap-3"> */}
          <div
            className="text-md py-4 flex flex-col gap-3 font-thin"
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
        {/* <div className="text-black">{process.env.NEXT_PUBLIC_VER_NAME}</div> */}
      </div>
    </footer>
  );
}
