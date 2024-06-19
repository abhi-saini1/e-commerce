"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextgenerateEffect = ({
    words,
    className,
}:{
    words: string,
    className: string,
}) =>{
    const [scope,animate] = useAnimate();
    const wordsArray = words.split("");

    useEffect(() => {
        animate(
          "span",
          {
            opacity: 1,
          },
          {
            duration: 2,
            delay: stagger(0.2),
          }
        );
      }, [scope.current]);

      const renderwords = ()=>{
        return (
            <motion.div ref={scope}>
                    {wordsArray.map((word,i)=>{
                        return (
                            <motion.span key={word + i}
                            className="opacity-0">
                                {word}{""}
                            </motion.span>
                        )
                    })}
            </motion.div>
        )
      }


      return (
        <div className={cn("font-bold", className)}>
        <div className="font-Playfair text-[50px] font-bold text-start">
          {renderwords()}
        </div>
    </div>
      )
}