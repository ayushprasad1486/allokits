"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { MailIcon, Instagram, Linkedin, Youtube } from "lucide-react";
import { getClients } from "@/lib/helper";
import CTASection from "@/components/CTASection";
import Marquee from "@/components/ui/marquee";
import { clientsData } from "@/db/clients";

export default function AboutPage() {
  const clients = getClients();
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            I'm Alok Dangi, with 2.5 years of experience and 2 years as a content creator, is a passionate electronics enthusiast. Offering professional video editing services, I’m dedicated to creating high-quality edits to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 justify-center items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassmorphismCard className="p-8">
              <div className="text-center">
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <Image
                    src="/niloybhowmick.png"
                    alt="Alok Dangi"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-white">
                  Alok Dangi
                </h2>
                <p className="text-blue-400 mb-4">
                  Video Editor, Content Creator & Motion Graphics Designer
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/dangialok77/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/allokits.pro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.youtube.com/@allokits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Youtube size={24} />
                  </a>
                  <a
                    href="mailto:allokitsedits@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <MailIcon size={24} />
                  </a>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                My Story
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I’m a dedicated video editor and electronics enthusiast, skilled in DaVinci Resolve, Photoshop & Canva. I create cinematic edits, smooth motion graphics, and compelling visual stories with precise transitions and audio syncing. From vibrant 1080x1920 visuals with 3D effects to dynamic logos, I deliver polished, impactful content. With fast turnarounds, clear communication, and a passion for excellence, I’m here to make your vision stand out.
                </p>
                <p>
                  If you're looking for someone who blends creativity with
                  technical skill, communicates clearly, and truly cares about
                  making your content stand out — I'm your guy.
                </p>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Availability
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>✅ Available for both short-term and long-term projects</p>
                <p>✅ Flexible with time zones and deadlines</p>
                <p>✅ Quick turnaround times without compromising quality</p>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16"
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">
              Trusted by Amazing Clients
            </h3>

            <Marquee speed={40} pauseOnHover className="pt-4">
              {clientsData.map((client) => (
                <div
                  key={client.id}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-24"
                >
                  <div className="relative w-16 h-16 mb-2">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain rounded-full transition-all duration-300"
                    />
                  </div>
                  <p className="text-xs text-gray-400 text-center">
                    {client.name}
                  </p>
                </div>
              ))}
            </Marquee>
          </GlassmorphismCard>
        </motion.div>

        {/* CTA Section */}
        <CTASection
          title="Ready to Work Together?"
          description="Let's create something amazing together. Whether it's a YouTube video, promotional content, or a full documentary, I'm here to bring your vision to life."
          buttonText="Get In Touch"
          href="/contact"
        />
      </div>
    </div>
  );
}
