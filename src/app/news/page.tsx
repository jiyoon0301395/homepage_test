import React from "react";
import Link from "next/link";
import Image from "next/image";

import AppFrame from "~/components/AppFrame";
import SectionDivider from "~/components/SectionDivider";
import TextToken from "~/components/TextToken";

export interface NewsProps {
  title: string;
  date: string;
  image: string;
  href: string;
}

function NewsItem(props: NewsProps) {
  return (
    <Link href={props.href} target="_blank">
      <Image
        src={`/img/${props.image}`}
        width={386}
        height={274}
        alt={props.href}
        className="w-full"
      />
      <div className="font-bold text-sm">{props.date}</div>
      <div className="truncate text-sm">{props.title}</div>
    </Link>
  );
}
export default function NewsPage() {
  return (
    <AppFrame>
      <SectionDivider />
      <h1>NEWS</h1>
      <TextToken>LINK NEWS</TextToken>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-4">
        <NewsItem
          title="딥엑스알랩 딥엑스알랩 “3D·AI 기술로 아바타에 인격을 불어 넣습니다”"
          date="2023.12.21"
          image="news_link_231221.jpg"
          href="https://www.donga.com/news/article/all/20231221/122726859/1"
        />
        <NewsItem
          title="나만의 AI 솔루션을 Headless XR Platform으로 구축하는 기업 ‘딥엑스알랩’"
          date="2023.12.06"
          image="news_link_231206.jpg"
          href="https://magazine.hankyung.com/job-joy/article/202312069590d"
        />
        <NewsItem
          title="中 베이징서 한국 우수기업 로드쇼, 투자유치"
          date="2023.11.17"
          image="news_link_231117.jpg"
          href="https://www.fnnews.com/news/202311141724577767"
        />
        <NewsItem
          title='"중국 파트너 찾으러 왔어요"…K-스타트업 베이징 향한 까닭은?'
          date="2023.11.15"
          image="news_link_231115.jpg"
          href="https://www.news1.kr/articles/5231084"
        />
        <NewsItem
          title='"서울 스타트업 팅하오!" 中서 투자유치 로드쇼 성료'
          date="2023.11.14"
          image="news_link_231114.jpg"
          href="https://news.mt.co.kr/mtview.php?no=2023111416340296544"
        />
      </div>
    </AppFrame>
  );
}
