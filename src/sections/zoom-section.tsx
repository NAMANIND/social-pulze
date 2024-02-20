import styles from "../styles/zoom.module.css";
import Picture1 from "../../public/images/1.jpeg";
import Picture2 from "../../public/images/2.webp";
import Picture3 from "../../public/images/3.webp";
import Picture4 from "../../public/images/4.webp";
import Picture5 from "../../public/images/5.webp";
import Picture6 from "../../public/images/6.webp";
import Picture7 from "../../public/images/7.webp";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Zoomsection() {
  const container = useRef(null);
  const over = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: overl } = useScroll({
    target: over,
    offset: ["start start", "end end"],
  });

  const height = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    ["100vh", "100vh", "100vh"]
  );

  const top = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    ["0vh", "0vh", "0vh"] // Adjust the values to interpolate between 0vh and 30vh
  );
  const heightover = useTransform(
    overl,
    [0, 0.2, 0.6],
    ["15vh", "15vh", "15vh"]
  );
  const opacityover = useTransform(overl, [0, 0.6], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  //   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0", "20px"]);

  const scale4 = useTransform(scrollYProgress, [1, 0], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [1, 0], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [1, 0], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [1, 0], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [1, 0], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale5,
    },
    {
      src: Picture7,
      scale: scale5,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture4,
      scale: scale8,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture2,
      scale: scale9,
    },

    {
      src: Picture2,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <motion.div
        style={{ position, opacity, top: "40%", x: "-50%" }}
        className=" fixed left-1/2 z-10 flex flex-col items-center mix-blend-difference"
      >
        <div className=" align-center align-center flex flex-row justify-center   ">
          {/* <img src="/sp-1.svg" className="h-auto w-10 " alt=""></img> */}
          <h1 className="  ml-4 text-center font-heading  text-[120px] font-bold leading-[1] text-white">
            Social Pulze
          </h1>
        </div>
      </motion.div>
      <motion.div style={{ height, top }} className={styles.sticky}>
        <div className={styles.test}>
          {pictures.map(({ src, scale }, index) => {
            return (
              <>
                <motion.div key={index} style={{ scale }} className={styles.el}>
                  <motion.div
                    className={styles.imageContainer}
                    style={{ borderRadius }}
                  >
                    {src == Picture1 ? (
                      <video
                        ref={over}
                        src={require("../../public/images/video.mp4")}
                        autoPlay
                        muted
                        loop
                      />
                    ) : (
                      <Image src={src} fill alt="image" placeholder="blur" />
                    )}
                  </motion.div>
                </motion.div>
              </>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className={styles.pageoverlay}
        style={{ height: heightover, opacity: opacityover }}
      ></motion.div>
    </div>
  );
}
