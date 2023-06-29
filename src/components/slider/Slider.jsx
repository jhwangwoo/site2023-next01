import React from "react";
import Link from "next/link";
import Image from "next/image";

const sliderTitle = {
    title: (
        <h3>
            science <br />
            Technology
        </h3>
    ),
    desc: (
        <p>
            과학은 어떤 것이든 진실을 찾고
            <br /> 이해하기 위해 끊임없이 탐구하는 모험입니다.
        </p>
    ),
};

const Slider = () => {
    return (
        <section id="sliderSection" className="slider__wrap section jamsil">
            <div className="silder__inner">
                <h2 className="blind">배너 슬라이더</h2>
                <div className="slider__img">
                    <div className="slider s1 container">
                        <div className="text">
                            <>{sliderTitle.title}</>
                            <>{sliderTitle.desc}</>
                            <Link href="/" className="more button-red">
                                더 알아보기
                            </Link>
                        </div>
                        <div className="img" aria-label="hidden">
                            <Image
                                width={200}
                                height={200}
                                src="/assets/images/slider/slidericon01.png"
                                alt="이미지1"
                            />
                            <Image
                                width={250}
                                height={250}
                                src="/assets/images/slider/slidericon02.png"
                                alt="이미지2"
                            />
                            <Image
                                width={200}
                                height={200}
                                src="/assets/images/slider/slidericon03.png"
                                alt="이미지3"
                            />
                        </div>
                        <div className="circle" aria-label="hidden">
                            <span className="circle c1"></span>
                            <span className="circle c2"></span>
                            <span className="circle c3"></span>
                            <span className="circle c4"></span>
                            <span className="circle c5"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;
