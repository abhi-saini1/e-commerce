'use client'
import React from 'react'
import {motion, useScroll, useSpring} from 'framer-motion'
const Scroll = () => {
    const {scrollYProgress} = useScroll();
    const scaleY = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
        restDelta: 0.01
    })
  return (
    <motion.div style={{scaleY}}/>

    
  )
}

export default Scroll