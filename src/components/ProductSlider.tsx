"use client";

import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlideLeft from "~/assets/svg/SlideLeft.svg";
import SlideRight from "~/assets/svg/SlideRight.svg";

export type ProductItemT = {
  thumbLabel: string;
  imgName: string;
  descript: React.JSX.Element;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SlidePrevArrow(props: any) {
  const { onClick } = props;
  return <SlideLeft onClick={onClick} className="arrow prev" />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SlideNextArrow(props: any) {
  const { onClick } = props;
  return <SlideRight onClick={onClick} className="arrow next" />;
}

interface ProductSliderProps {
  items: ProductItemT[];
}

export default function ProductSlider(props: ProductSliderProps) {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slider1Ref = React.useRef<Slider>(null);
  const slider2Ref = React.useRef<Slider>(null);
  const [nav1, setNav1] = React.useState<Slider | undefined>();
  const [nav2, setNav2] = React.useState<Slider | undefined>();

  React.useEffect(() => {
    setNav1(slider1Ref.current ?? undefined);
    setNav2(slider2Ref.current ?? undefined);
  }, []);

  return (
    <div className="prdSlide">
      <div className={`grid gap-4 mb-4 grid-cols-4`}>
        {props.items.map((itm, i) => (
          <div
            key={i}
            className={`thm${activeSlide == i ? " sel" : ""} ${
              props.items.length === 2 && i === 0 ? "col-start-2" : ""
            }`}
            onClick={() => slider1Ref.current?.slickGoTo(i)}
          >
            <Image
              src={`/img/prod_${itm.imgName}.png`}
              width={144}
              height={69}
              alt="AI NPC"
              className=""
            />
            <label>{itm.thumbLabel}</label>
          </div>
        ))}
      </div>

      <Slider
        ref={slider1Ref}
        asNavFor={nav2}
        infinite
        arrows
        dots
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        initialSlide={0}
        prevArrow={<SlidePrevArrow />}
        nextArrow={<SlideNextArrow />}
        beforeChange={(current, next) => {
          setActiveSlide(next);
        }}
      >
        {props.items.map((itm, i) => (
          <div key={i} className="h-[361px]">
            <Image
              src={`/img/prod_${itm.imgName}.png`}
              width={636}
              height={361}
              alt={itm.thumbLabel}
              className="w-full h-full"
            />
          </div>
        ))}
      </Slider>
      <Slider ref={slider2Ref} asNavFor={nav1} arrows={false} draggable={false}>
        {props.items.map((itm, i) => (
          <div key={i}>{itm.descript}</div>
        ))}
      </Slider>
    </div>
  );
}
