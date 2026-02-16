"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Megaphone, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const roles = [
  {
    icon: Code,
    title: "Engineering",
    description:
      "Build scalable, beautiful tech that serves millions of devotees",
    openings: "5 positions",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Craft interfaces that honor tradition while embracing modernity",
    openings: "2 positions",
  },
  // {
  //   icon: Megaphone,
  //   title: "Marketing",
  //   description: "Tell the story of digital devotion to the world",
  //   openings: "3 positions"
  // },
  // {
  //   icon: Users,
  //   title: "Community",
  //   description: "Connect temples, priests, and devotees with care and authenticity",
  //   openings: "4 positions"
  // }
];

export default function Careers() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-white via-purple-50 to-purple-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full">
            <p className="text-sm font-medium text-purple-700 tracking-wide uppercase flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Join Our Mission
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
            Come Build the Digital Mandir of Bharat
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8" />

          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-6">
            This is not just a job. It's a calling.
          </p>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join a team of builders, dreamers, and believers working to preserve
            India's spiritual heritage through technology. If you're passionate
            about culture, faith, and impact — you belong here.
          </p>
        </motion.div>

        {/* Open roles */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <role.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                      {role.openings}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-3">
                    {role.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {role.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-12 bg-gradient-to-br from-purple-900 to-purple-800 rounded-3xl text-white mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-light mb-8 text-center">
            What We Offer
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h4 className="text-xl font-light mb-2">Purpose-Driven Work</h4>
              <p className="text-purple-200">
                Build something that matters to millions
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h4 className="text-xl font-light mb-2">Fast Growth</h4>
              <p className="text-purple-200">
                Learn from the best, scale with impact
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-light mb-2">Cultural Pride</h4>
              <p className="text-purple-200">
                Help revive and preserve our heritage
              </p>
            </div>
          </div>
        </motion.div> */}

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-8 text-xl rounded-full shadow-2xl hover:shadow-purple-200 transition-all duration-300"
          >
            View Open Positions
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
