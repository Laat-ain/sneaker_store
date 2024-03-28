// LikeButton.jsx
/* import { useState } from "react";
import Image from "next/image";

const LikeButton = ({ vendorCode, onLike }) => {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
        onLike(vendorCode);
    };

    return (
        <button className={liked ? "liked" : ""} onClick={handleClick}>
            <Image
                className={styles.svgLike}
                src="/svg/like_pink.svg"
                alt="Like"
                height={3}
                width={3}
            />
        </button>
    );
};

export default LikeButton; */

import { useState } from "react";
import Image from "next/image";
import styles from "./LikeButton.module.css";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const arrayLike = [];

  const toggleLike = () => {
    arrayLike.push()
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div onClick={toggleLike}>
        <Image name = {"dfdf"}
          className={`${styles.svgLike} ${isLiked ? styles.liked : ""}`}
          src="/svg/like_pink.svg"
          alt="Like"
          height={3}
          width={3}
        />
      </div>
    </>
  );
};

export default LikeButton;