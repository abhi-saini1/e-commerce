"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../utils/cn";

export const TextgenerateEffect = ({
    words,
    className,
}: {
    words: string,
    className: string,
}) => {
    const [scope, animate] = useAnimate();
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
    }, [animate]);

    const Renderwords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, i) => (
                    <motion.span key={word + i} className="opacity-0 xl:text-5xl lg:text-5xl md:text-[28px] text-[24px]">
                        {word}{""}
                    </motion.span>
                ))}
            </motion.div>
        );
    }

    return (
        <div className={cn("font-bold", className)}>
            <div className="font-Playfair text-[50px] font-bold text-start">
                {Renderwords()}
            </div>
        </div>
    )
}