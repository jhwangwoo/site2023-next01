import Image from "next/image";
import React from "react";
import Link from "next/link";

const movieTitle = {
    title: "영화 소개",
    desc: "다양한 과학 영화를 추천 하고 있습니다!",
    link: "자세히보기",
};
const movieText = [
    {
        img: "/assets/images/movie/movie01.png",
        title: "인터스텔라",
        num: "무비이미지1",
    },
    {
        img: "/assets/images/movie/movie02.png",
        title: "마리퀴리",
        num: "무비이미지2",
    },
    {
        img: "/assets/images/movie/movie03.png",
        title: "스토어웨어",
        num: "무비이미지3",
    },
    {
        img: "/assets/images/movie/movie04.png",
        title: "더문",
        num: "무비이미지4",
    },
    {
        img: "/assets/images/movie/movie05.png",
        title: "미드나이트스카이",
        num: "무비이미지5",
    },
    {
        img: "/assets/images/movie/movie06.png",
        title: "FINCH",
        num: "무비이미지6",
    },
];
function MovieDesc({ img, title }) {
    return (
        <div>
            <Image width={400} height={616} src={img} alt={title} />
        </div>
    );
}

const Movie = () => {
    return (
        <section id="movieSection" className="movie__wrap section jamsil">
            <div className="movie__inner container">
                <div className="movie__text">
                    <h3>{movieTitle.title}</h3>
                    <p>{movieTitle.desc}</p>
                    <Link href="/movie" className="button-blue">
                        {movieTitle.link}
                    </Link>
                </div>
                <div className="movie__item">
                    {movieText.map((text, index) => (
                        <MovieDesc
                            key={index}
                            img={text.img}
                            title={text.title}
                            num={text.num}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Movie;
