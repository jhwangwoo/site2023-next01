import Image from "next/image";
import React from "react";
import Link from "next/link";

const portTitle = {
    title: "노벨상 수상",
    desc: "혁신적인 연구를 수행한 과학자들에게 수여되며, 여러 인물들이 이 영예를 안았습니다.",
};
const portText = [
    {
        portImg: "/assets/images/port/portbg01.png",
        iconImg: "/assets/images/member/member48.svg",
        title: "알버트 아인슈타인",
        desc: "상대성 이론",
    },
    {
        portImg: "/assets/images/port/portbg02.png",
        iconImg: "/assets/images/member/member30.svg",
        title: "마리 퀴리",
        desc: "방사선의 성질에 대한 연구",
    },
    {
        portImg: "/assets/images/port/portbg03.png",
        iconImg: "/assets/images/member/member06.svg",
        title: "마리오 빌라르 베르트",
        desc: "스핀 트랜지스터 개발에 대한 연구",
    },
    {
        portImg: "/assets/images/port/portbg04.png",
        iconImg: "/assets/images/member/member07.svg",
        title: "앨버트 민츠",
        desc: "마그네토-히드로다이나믹 발전기 개발",
    },
    {
        portImg: "/assets/images/port/portbg05.png",
        iconImg: "/assets/images/member/member08.svg",
        title: "마크스 퀴스",
        desc: "양자 정보 이론 개발",
    },
    {
        portImg: "/assets/images/port/portbg06.png",
        iconImg: "/assets/images/member/member09.svg",
        title: "마이클 코스테이니",
        desc: "유도 이온화에 대한 실험과 이론 연구",
    },
];
function PortDesc({ portImg, iconImg, title, desc }) {
    return (
        <div className="port">
            <figure className="port__header">
                <Image width={412} height={300} src={portImg} alt="배경" />
            </figure>
            <div className="port__body">
                <span>
                    <Image width={50} height={50} src={iconImg} alt="맴버" />
                </span>
                <div className="desc">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
}

const Portfolio = () => {
    return (
        <section id="portSection" className="port__wrap section center jamsil">
            <h3>{portTitle.title}</h3>
            <p>{portTitle.desc}</p>
            <div className="port__inner container">
                <div className="port__btn">
                    <ul>
                        <li>
                            <Link href="/">물리학</Link>
                        </li>
                        <li>
                            <Link href="/">화학</Link>
                        </li>
                        <li>
                            <Link href="/">생물학</Link>
                        </li>
                        <li>
                            <Link href="/">천문학</Link>
                        </li>
                    </ul>
                </div>
                <div className="port__cont">
                    {portText.map((text, index) => (
                        <PortDesc
                            key={index}
                            portImg={text.portImg}
                            iconImg={text.iconImg}
                            title={text.title}
                            desc={text.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;