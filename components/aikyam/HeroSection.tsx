"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-purple-300 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-purple-300 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 border border-purple-300 rounded-full animate-pulse delay-2000" />
      </div>

      {/* Diya glow effect */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-radial from-yellow-400 to-transparent rounded-full opacity-30"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-radial from-amber-400 to-transparent rounded-full opacity-20"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        {/* Sacred symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="inline-block text-8xl text-yellow-400 filter drop-shadow-lg">
            ॐ
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Aikyam
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl sm:text-3xl md:text-4xl mb-4 text-purple-100 font-light"
        >
          The Sacred Digital Harmony
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <p className="text-xl md:text-2xl text-purple-200 leading-relaxed font-light">
            Aikyam is a stealth mode startup operating in India’s Faith-Tech
            sector. We see immense opportunity and rapid evolution in this
            emerging space.
          </p>

          <p className="text-lg md:text-xl text-purple-300 mt-4 leading-relaxed">
            Anticipating complex technological challenges, we are building
            cutting-edge AI solutions for language processing, image
            recognition, intelligent search, personalized recommendations, and
            more.
          </p>

          <p className="text-lg md:text-xl text-purple-300 mt-4 leading-relaxed">
            Our team is developing scalable backend systems and reliable mobile
            applications to power the next generation of spiritual technology.
          </p>

          <p className="text-lg md:text-xl text-purple-300 mt-4 leading-relaxed">
            If you're excited to be part of this mission, we’d love to connect —
            we’re hiring!
          </p>
        </motion.div>

        {/* CTA Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full px-4 sm:px-0"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-purple-900 font-semibold px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-full shadow-2xl hover:shadow-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            <Smartphone className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
            <span className="hidden sm:inline">
              Experience Aikyam (Android)
            </span>
            <span className="sm:hidden">Android App</span>
          </Button>

          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-purple-900 font-semibold px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-full shadow-2xl hover:shadow-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            <Smartphone className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
            <span className="hidden sm:inline">Experience Aikyam (iOS)</span>
            <span className="sm:hidden">iOS App</span>
          </Button>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0"
        >
          {/* <Button 
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-yellow-400 text-yellow-400 hover:bg-purple-800 px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            <Users className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
            <span className="hidden sm:inline">Join as a Priest</span>
            <span className="sm:hidden">Join Priest</span>
          </Button> */}

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-yellow-400 text-yellow-400 hover:bg-purple-800 px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            <Briefcase className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
            <span className="hidden sm:inline">See Open Roles</span>
            <span className="sm:hidden">Careers</span>
          </Button>
        </motion.div>

        {/* Floating lotus petals */}
        <motion.div
          className="absolute bottom-0 left-1/4 text-6xl opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🪷
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-1/4 text-5xl opacity-20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🪷
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-50 to-transparent" />
    </section>
  );
}
