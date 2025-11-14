"use client";

import { motion } from 'motion/react';
import { Badge } from '@/src/components/ui/badge';
import { Sparkles, Github, Code2 } from 'lucide-react';

export function ProjectsHeader() {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge variant="outline" className="mb-6 bg-primary/5 text-primary border-primary/20 text-primary/80 dark:text-cyan-300/80 ">
          <Code2 className="mr-1 h-3 w-3" />
          Projects
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 text-cyan-600">
          My{' '}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-primary/80 dark:text-cyan-300/80 ">
          In this space, I showcase the projects I’ve developed throughout my training and professional experience. These include applications built for family businesses, such as the TECNOCLEAN ordering system, as well as academic projects and work focused on artificial intelligence and web development.        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center gap-4 mt-8"
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground text-primary/80 dark:text-cyan-300/80 ">
          <Github className="h-4 w-4" />
          <span>Obtained from the GitHub API</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground text-primary/80 dark:text-cyan-300/80 ">
          <Sparkles className="h-4 w-4" />
          <span>Updated in real-time</span>
        </div>
      </motion.div>
    </div>
  );
}
