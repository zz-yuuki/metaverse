"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { newFeatures } from "../constants";
import { NewFeatures, TypingText, TitleText } from "../components";
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| What's New?" />
        <TitleText title={<>What's new about Gray Raven</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature, index) => (
            <NewFeatures key={feature} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <video
          autoPlay
          loop
          muted
          src="liv_vid.mp4"
          alt="liv_vid"
          className=" rounded-full"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
