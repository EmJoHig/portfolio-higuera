"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import Image from 'next/image';
import { siteConfig } from '@/src/config/site.config'


export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <Card className="
  group relative 
  bg-gradient-to-br from-background/80 to-background/40 
  backdrop-blur-2xl 
  border border-primary/30 
  shadow-[0_8px_30px_rgb(0,0,0,0.25)] 
  rounded-3xl 
  overflow-hidden
  transition-all duration-500 ease-out
  hover:shadow-[0_15px_45px_rgba(0,0,0,0.45)]
  hover:-translate-y-1 hover:scale-[1.01]
">

  {/* Fondo animado suave */}
  <div className="
    absolute inset-0 opacity-40 blur-3xl 
    bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent
    transition-opacity duration-700
    group-hover:opacity-60
  " />

  <CardHeader className="relative z-10 flex flex-col items-center gap-6 pt-12 pb-4">

    <div className="
      relative w-48 h-48 
      rounded-3xl overflow-hidden 
      border-2 border-primary/40 
      shadow-xl 
      transition-all duration-500
      group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]
      group-hover:border-primary/60
      hover:scale-[1.03]
    ">
      <Image
        src="/img/perfil-portfolio.jpg"
        alt="Emanuel Higuera profile"
        width={192}
        height={192}
        className="object-cover w-full h-full rounded-3xl"
        priority
      />

      {/* Luces suaves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="
          absolute -top-12 left-1/2 -translate-x-1/2 
          w-[360px] h-[360px] 
          bg-gradient-radial from-primary/30 to-transparent 
          blur-3xl opacity-50
          transition-all duration-500
          group-hover:opacity-70
        " />
        <div className="
          absolute bottom-0 right-0 
          w-[220px] h-[220px] 
          bg-gradient-to-br from-secondary/40 to-transparent 
          blur-2xl opacity-50
          transition-all duration-500
          group-hover:opacity-70
        " />
      </div>
    </div>

    <div className="
      text-center text-4xl font-extrabold 
      bg-clip-text text-transparent 
      bg-gradient-to-r from-primary to-secondary
      drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]
      transition-all duration-500
      group-hover:drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]
    ">
      Emanuel Higuera
    </div>
  </CardHeader>

  <CardContent className="
    space-y-4 relative z-10 px-8 pb-10 
    text-lg leading-relaxed text-muted-foreground
    transition-all duration-500 group-hover:text-foreground
  ">
    <p>
      I am a software developer specializing in ASP.NET, with strong experience in Blazor and Node.js. I am passionate about solving complex challenges and designing innovative solutions that generate real impact.
    </p>
    <p>
      I maintain a continuous learning mindset and stay up-to-date with the latest technological trends, especially in the field of artificial intelligence. My goal is to integrate AI-powered solutions into modern applications to help businesses optimize processes, improve productivity, and uncover new growth opportunities.
    </p>
    <p>
      I am especially focused on creating scalable systems, intelligent automations, and platforms that allow businesses to transform and enhance their digital operations.
    </p>
  </CardContent>

</Card>


    </motion.div>
  );
}
