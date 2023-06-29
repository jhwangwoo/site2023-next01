import Image from "next/image";
import React from "react";
import Link from "next/link";

const member = [
    {
        img: "/assets/images/member/member01.png",
        alt: "맴버1",
        link: "업적 보기",
    },
    {
        img: "/assets/images/member/member02.png",
        alt: "맴버2",
        link: "업적 보기",
    },
    {
        img: "/assets/images/member/member03.png",
        alt: "맴버3",
        link: "업적 보기",
    },
];

function MemberDesc({ img, alt, link }) {
    return (
        <div className="member">
            <figure className="member__header">
                <Image width={300} height={400} src={img} alt={alt} />
            </figure>
            <div className="member__body">
                <Link href="/" className="btn">
                    {link}
                </Link>
            </div>
        </div>
    );
}

const Member = () => {
    return (
        <section
            id="membersSection"
            className="members__wrap section center jamsil"
        >
            <h3>유명 과학자 소개</h3>
            <div className="members__inner">
                <p>기술 발전에 한 획을 그은 역사적인 분들을 소개합니다!</p>
                <div className="member__inner container">
                    {member.map((text, index) => (
                        <MemberDesc
                            key={index}
                            img={text.img}
                            alt={text.alt}
                            link={text.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Member;
