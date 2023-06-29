import React from "react";
import Link from "next/link";

const links = [
    {
        id: 1,
        title: "사이트",
        cont1_url: "/",
        cont1_title: "웹표준 사이트",
        cont2_url: "/",
        cont2_title: "반응형 사이트",
        cont3_url: "/",
        cont3_title: "패럴랙스 사이트",
        cont4_url: "/",
        cont4_title: "포트폴리오 사이트",
    },
    {
        id: 1,
        title: "유형",
        cont1_url: "/",
        cont1_title: "이미지 유형",
        cont2_url: "/",
        cont2_title: "카드 유형",
        cont3_url: "/",
        cont3_title: "이미지/텍스트 유형",
        cont4_url: "/",
        cont4_title: "배너 유형",
        cont5_url: "/",
        cont5_title: "텍스트 유형",
        cont6_url: "/",
        cont6_title: "푸터 유형",
    },
    {
        id: 1,
        title: "스크립트",
        cont1_url: "/",
        cont1_title: "검색 이펙트",
        cont2_url: "/",
        cont2_title: "퀴즈 이펙트",
        cont3_url: "/",
        cont3_title: "마우스 이펙트",
        cont4_url: "/",
        cont4_title: "슬라이드 이펙트",
        cont5_url: "/",
        cont5_title: "패럴랙스 이펙트",
        cont6_url: "/",
        cont6_title: "게임 이펙트",
    },
    {
        id: 1,
        title: "사이트",
        cont1_url: "/",
        cont1_title: "웹표준 사이트",
        cont2_url: "/",
        cont2_title: "반응형 사이트",
        cont3_url: "/",
        cont3_title: "패럴랙스 사이트",
        cont4_url: "/",
        cont4_title: "포트폴리오 사이트",
    },
];

const Footer = () => {
    return (
        <footer
            id="footer"
            className="footer__wrap bg-blue jamsil"
            role-lever="3"
            role="footing"
        >
            <div className="footer__inner container">
                <div className="footer__text">
                    <h5>Jung hwang woo</h5>
                    <p>
                        궁금한 사항의 메일로 연락 해주세요!
                        <br />
                        <Link href="mailto:ghkddn132@gmail.com">
                            ghkddn132@gmail.com
                        </Link>
                    </p>
                    <ul className="sns">
                        <li>
                            <Link href="/">
                                <span className="ir"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="ir"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="ir"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="ir"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="ir"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__menu">
                    <div>
                        <h4>사이트</h4>
                        <ul>
                            <li>
                                <Link href="/">웹표준 사이트</Link>
                            </li>
                            <li>
                                <Link href="/">반응형 사이트</Link>
                            </li>
                            <li>
                                <Link href="/">패럴랙스 사이트</Link>
                            </li>
                            <li>
                                <Link href="/">포트폴리오 사이트</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>유형</h4>
                        <ul>
                            <li>
                                <Link href="/">이미지 유형</Link>
                            </li>
                            <li>
                                <Link href="/">카드 유형</Link>
                            </li>
                            <li>
                                <Link href="/">이미지/텍스트 유형</Link>
                            </li>
                            <li>
                                <Link href="/">배너 유형</Link>
                            </li>
                            <li>
                                <Link href="/">텍스트 유형</Link>
                            </li>
                            <li>
                                <Link href="/">푸터 유형</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>스크립트</h4>
                        <ul>
                            <li>
                                <Link href="/">검색 이펙트</Link>
                            </li>
                            <li>
                                <Link href="/">퀴즈 이펙트</Link>
                            </li>
                            <li>
                                <Link href="/">마우스 이펙트</Link>
                            </li>
                            <li>
                                <Link href="/">슬라이드 이펙트</Link>
                            </li>
                            <li>
                                <Link href="/">패랠랙스 이펙트</Link>
                            </li>
                            <li>
                                <Link href="/">게임 이팩트</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>레퍼런스</h4>
                        <ul>
                            <li>
                                <Link href="/">CSS</Link>
                            </li>
                            <li>
                                <Link href="/">FONTS</Link>
                            </li>
                            <li>
                                <Link href="/">BLOG</Link>
                            </li>
                            <li>
                                <Link href="/">REFERENCE</Link>
                            </li>
                            <li>
                                <Link href="/">TUTORIAL </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    Copyright 2023. All Rights Reserved. - Designed by Jung
                    hwang woo
                </div>
            </div>
        </footer>
    );
};

export default Footer;
