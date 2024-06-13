"use client";
import React from "react";
import Image from "next/image";
import Button from "./Ui/Button";
import Link from "next/link";
import { TextgenerateEffect } from "./TextgenerateEffect";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(y, [-100, 100], [30, -30]);
  const words = `THE SHOE THAT WILL NOT LET YOU DOWN.`;

  return (
    <motion.section className="py-20" initial={{opacity:0}} animate={{opacity: 1, transition:{
      delay: 0.5, duration: 0.4, ease: 'easeIn'
    }}}>
      <div className="main-container">
        <div className="flex flex-col lg:flex-row my-16 lg:items-center lg:justify-between items-center justify-center">
          {/* Text */}
          <motion.div
            className="lg:w-[450px] w-[350px] px-4 mb-8 lg:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <TextgenerateEffect className="" words={words} />
            <p className="text-start font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              dignissimos nostrum laboriosam pariatur ipsam.
            </p>

            <div className="mt-3">
              <Link href="/shop">
                <Button>Shop Now</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full lg:w-auto"
          >
            <motion.div
              className="lg:w-[750px] w-[500px]"
              style={{ x, y, rotateY, rotateX, z: 100 }}
              drag
              dragElastic={0.18}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
              whileHover={{
                scale: 1.1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <Image
                src="/ban3.png"
                className=" h-auto w-full  lg:h-[450px] lg:w-[900px] "
                width={800}
                height={800}
                alt=""
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
