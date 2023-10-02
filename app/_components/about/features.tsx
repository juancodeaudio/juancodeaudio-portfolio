'use client'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Title2, Paragraph } from "@/common/TextStyles";
import Cards from "./Cards";
import { CPlusPlusIcon, NextJSIcon, TSIcon, ProToolsIcon, AudacityIcon, AfterEffectsIcon, IllustratorIcon, PhotoshopIcon, AffinityIcon, AffinityPIcon } from "@/common/icons";
import { FaSquareJs, FaPython, FaSwift, FaSquareGithub, FaReact, FaSass, FaNode, FaFigma } from "react-icons/fa6";
import { HiFilm, HiMusicalNote } from "react-icons/hi2";

export const Features = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.8, 0.8, 1.4]);
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-20%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0.4, 1]
  );

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    [0, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    ["30px", "0px", "-30px"]
  );
  const gap1 = useTransform(
    scrollYProgress,
    [0.05, 0.3],
    ["20px", "40px"]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["30px", "0px", "-30px"]
  );
  const gap2 = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    ["20px", "40px"]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 0]
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    ["30px", "0px", "-30px"]
  );
  const gap3 = useTransform(
    scrollYProgress,
    [0.45, 0.7],
    ["20px", "40px"]
  );

  const text4Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 1, 0]
  );
  const text4Y = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    ["30px", "0px", "-30px"]
  );
  const gap4 = useTransform(
    scrollYProgress,
    [0.65, 0.9],
    ["20px", "40px"]
  );

  return (
    <section
      ref={targetRef}
      className="flex h-[700vh] flex-col items-center justify-start relative"
    >
      <div className="sticky top-[16.7vh] h-[50vh] lg:h-[66.8vh] w-screen px-16">
        <motion.div style={{ x, scale }} className="relative h-full w-[150vw]">
          <motion.div style={{ opacity }} className="h-[80vh] w-full">
            <motion.div className="absolute inset-0 h-[80vh] w-full">
              <Cards progress={scrollYProgress} sphereColor="#f5f5f5" />
            </motion.div>
          {/* <Cards progress={scrollYProgress} sphereColor="#f5f5f5" /> */}
            <motion.div style={{ opacity: text1Opacity }} className="absolute inset-0 h-[80vh] w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7ba3ff53] via-[#5786f553] via-5% to-transparent to-40%">
              <Cards progress={scrollYProgress} sphereColor="#5786F5" />
            </motion.div>
            <motion.div style={{ opacity: text2Opacity }} className="absolute inset-0 h-[80vh] w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7bffcc53] via-[#57f5d853] via-5% to-transparent to-40%">
              <Cards progress={scrollYProgress} sphereColor="#57f5d8" />
            </motion.div>
            <motion.div style={{ opacity: text3Opacity }} className="absolute inset-0 h-[80vh] w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffc47b53] via-[#f5ab5753] via-5% to-transparent to-40%">
              <Cards progress={scrollYProgress} sphereColor="#f5ab57" />
            </motion.div>
            <motion.div style={{ opacity: text4Opacity }} className="absolute inset-0 h-[80vh] w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#de7bff53] via-[#e057f553] via-5% to-transparent to-40%">
              <Cards progress={scrollYProgress} sphereColor="#e057f5" />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            opacity: text1Opacity,
            y: text1Y,
          }}
          className="translate-y-centered-offset absolute top-1/2 left-0 w-2/3"
        >
          <Title2 className="uppercase" text="Code" />
          <Paragraph>I have experience with multiple programming languages like Javascript, Python, C++ or Swift that can be used in different fields such as audio software, artificial intelligence, mobile apps or WEB development</Paragraph> 
          <motion.div className="flex mt-5" style={{gap: gap1}}>
            <div className="h-10 w-10">
              <CPlusPlusIcon />
            </div>
            <div className="h-10 w-10">
              <FaSquareJs className="h-full w-full fill-foreground/60" />
            </div>
            <div className="h-10 w-10">
              <FaPython className="h-full w-full fill-foreground/60" />
            </div>
            <div className="h-10 w-10">
              <FaSwift className="h-full w-full fill-foreground/60" />
            </div>
            <div className="h-10 w-10">
              <FaSquareGithub className="h-full w-full fill-foreground/60" />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            opacity: text2Opacity,
            y: text2Y,
          }}
          className="translate-y-centered-offset absolute top-1/2 left-0 w-2/3"
        >
          <Title2 className="uppercase" text="WEB" />
          <Paragraph>Access and complete any action in seconds with the command palette.</Paragraph>
          <motion.div className="flex mt-5" style={{gap: gap2}}>
            <div className="h-10 w-10">
              <TSIcon />
            </div>
            <div className="h-10 w-10">
              <FaReact className="h-full w-full fill-foreground/60" />
            </div>
            <div className="h-10 w-10">
              <FaNode className="h-full w-full fill-foreground/60" />
            </div>
            <div className="h-10 w-10">
              <NextJSIcon />
            </div>
            <div className="h-10 w-10">
              <FaSass className="h-full w-full fill-foreground/60" />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            opacity: text3Opacity,
            y: text3Y,
          }}
          className="translate-y-centered-offset absolute top-1/2 left-0 w-2/3"
        >
          <Title2 className="uppercase" text="Media" />
          <Paragraph>We´ve bundled useful tools to help you get your work done faster andmore efficiently.</Paragraph>
          <motion.div className="flex mt-5" style={{gap: gap3}}>
            <div className="h-10 w-10">
              <ProToolsIcon />
            </div>
            <div className="h-10 w-10">
              <AudacityIcon />
            </div>
            <div className="h-10 w-10">
              <HiFilm className="h-full w-full fill-foreground/60" />
            </div>
            <div className="h-10 w-10">
              <HiMusicalNote className="h-full w-full fill-foreground/60" />
            </div>
            <div className="h-10 w-10">
              <AfterEffectsIcon />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            opacity: text4Opacity,
            y: text4Y,
          }}
          className="translate-y-centered-offset absolute top-1/2 left-0 w-2/3"
        >
          <Title2 className="uppercase" text="Design" />
          <Paragraph>We´ve bundled useful tools to help you get your work done faster andmore efficiently.</Paragraph>
          <motion.div className="flex mt-5" style={{gap: gap4}}>
            <div className="h-10 w-10">
              <FaFigma className="h-full w-full fill-foreground/60" />
            </div>
            <div className="h-10 w-10">
              <AffinityIcon />
            </div>
            <div className="h-10 w-10">
              <AffinityPIcon />
            </div>
            <div className="h-10 w-10">
              <IllustratorIcon />
            </div>
            <div className="h-10 w-10">
              <PhotoshopIcon />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
