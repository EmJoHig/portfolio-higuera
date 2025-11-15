// "use client";

// import { motion } from 'motion/react';
// import { Badge } from '@/src/components/ui/badge';
// import { User } from 'lucide-react';

// export function AboutHeader() {
//   return (
//     <div className="text-center mb-16">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <Badge variant="outline" className="mb-6 bg-primary/5 text-primary border-primary/20">
//           <User className="mr-1 h-3 w-3" />
//           About Me
//         </Badge>
//         <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
//           Emanuel{' '}
//           <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
//             Higuera
//           </span>
//         </h1>
//         <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//           Full Stack Developer passionate about creating innovative solutions that bridge the gap between complex technology and user-friendly experiences.
//         </p>
//       </motion.div>
//     </div>
//   );
// }


"use client";

import { motion } from 'motion/react';
import { Badge } from '@/src/components/ui/badge';
import { User } from 'lucide-react';

export function AboutHeader() {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge variant="outline" className="mb-6 border-primary/40 bg-primary/10 text-primary dark:text-cyan-500 dark:border-cyan-700 dark:bg-cyan-900/20">
          <User className="mr-1 h-3 w-3" />
          About Me
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 text-primary dark:text-cyan-600">
          Emanuel{' '}
          <span className="bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent dark:from-white dark:to-cyan-200">
            Higuera
          </span>
        </h1>
        <p className="text-lg text-primary/80 dark:text-cyan-300/80 max-w-3xl mx-auto leading-relaxed">
          Full Stack Developer passionate about creating innovative solutions that connect advanced technology with simple and effective experiences.        </p>
      </motion.div>
    </div>
  );
}
