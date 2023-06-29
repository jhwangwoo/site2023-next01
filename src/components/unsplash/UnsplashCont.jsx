import React from "react";
import styles from "./unsplash.module.scss";
import Image from "next/image";

const UnsplashImg = ({ image }) => {
  return (
    <li>
      <a
        href={`https://unsplash.com/photos/${image.id}`}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          width={400}
          height={218}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </a>
    </li>
  );
};

const UnsplashCont = ({ unsplash }) => {
  return (
    <div className={styles.unsplash__cont + " container mb50"}>
      <ul>
        {unsplash.map((image, index) => (
          <UnsplashImg key={index} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default UnsplashCont;
