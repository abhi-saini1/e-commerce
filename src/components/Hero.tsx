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
        <div className="xl:flex xl:flex-row lg:flex md:flex py-16 flex flex-col items-center justify-center">
          {/* Text */}
          <motion.div
            className="xl:w-[500px] lg:w-[450px] w-[350px] px-4 mb-8 lg:mb-0 xl:flex xl:items-start xl:flex-col lg:items-start flex flex-col items-center justify-center  "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <TextgenerateEffect className="" words={words} />
            <p className="xl:text-[16px] lg:text-[16px] text-[14px] font-normal">
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
              className="xl:w-[700px] lg:w-[550px]"
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
                className="xl:w-[700px] xl:h-[500px] lg:w-[700px] lg:h-[500px] w-[500px] h-[300px]"
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
