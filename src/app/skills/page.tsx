// import React from 'react';
// import { buildMetadata, siteConfig } from '@/src/config/site.config';

// export const metadata = buildMetadata({
//   title: `Skills | ${siteConfig.siteName}`,
//   description: 'Explore my skills and expertise in web development.',
// });

// export default function SkillsPage() {
//   return (
//     <main className="min-h-screen flex items-center justify-center pt-8 pb-12 px-4 sm:px-6 lg:px-8">

//     </main>
//   );
// }



"use client";


import React from 'react';
import { motion } from "motion/react";
import {
    Nodejs, Javascript, MicrosoftNET, Java, MongoDB, MySQL, MicrosoftSQLServer, Expressjs, TypeScript,
    ReactJS, ReactRouter, HTML5item, Css3item, JQueryJSitem, TailwindCSS, MaterialUI, Angular, GitItem,
    GitHub, GitLab, ViteItem, GitHubCopilot, NPM, Postman, Firebase, Nextjs
} from "@/src/app/icons";


// Solo las dos herramientas solicitadas
const tools = [
    { name: "Node.js", icon: <Nodejs className="w-16 h-16" /> },
    { name: "Javascript", icon: <Javascript className="w-16 h-16" /> },
    { name: "Microsoft .NET", icon: <MicrosoftNET className="w-16 h-16" /> },
    { name: "Java", icon: <Java className="w-16 h-16" /> },
    { name: "MongoDB", icon: <MongoDB className="w-16 h-16" /> },
    { name: "MySQL", icon: <MySQL className="w-16 h-16" /> },
    { name: "Microsoft SQL Server", icon: <MicrosoftSQLServer className="w-16 h-16" /> },
    { name: "Express.js", icon: <Expressjs className="w-16 h-16" /> },
    { name: "TypeScript", icon: <TypeScript className="w-16 h-16" /> },
    { name: "React.js", icon: <ReactJS className="w-16 h-16" /> },
    { name: "React Router", icon: <ReactRouter className="w-16 h-16" /> },
    { name: "Angular", icon: <Angular className="w-16 h-16" /> },
    { name: "HTML5", icon: <HTML5item className="w-16 h-16" /> },
    { name: "CSS3", icon: <Css3item className="w-16 h-16" /> },
    { name: "jQuery", icon: <JQueryJSitem className="w-16 h-16" /> },
    { name: "Tailwind CSS", icon: <TailwindCSS className="w-16 h-16" /> },
    { name: "Material UI", icon: <MaterialUI className="w-16 h-16" /> },
    { name: "Git", icon: <GitItem className="w-16 h-16" /> },
    { name: "GitHub", icon: <GitHub className="w-16 h-16" /> },
    { name: "GitLab", icon: <GitLab className="w-16 h-16" /> },
    { name: "Vite", icon: <ViteItem className="w-16 h-16" /> },
    { name: "GitHub Copilot", icon: <GitHubCopilot className="w-16 h-16" /> },
    { name: "NPM", icon: <NPM className="w-16 h-16" /> },
    { name: "Postman", icon: <Postman className="w-16 h-16" /> },
    { name: "Firebase", icon: <Firebase className="w-16 h-16" /> },
    { name: "Next.js", icon: <Nextjs className="w-16 h-16" /> },

];

export default function SkillsPage() {
    return (
        <main className="min-h-screen dark:bg-gray-900 text-white flex flex-col items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-center mb-10 text-gray-500">
                    Tools I Use Daily
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{
                                scale: 1.1,
                                y: -5,
                                boxShadow:
                                    "0 15px 20px -5px rgba(0,0,0,0.3), 0 8px 8px -5px rgba(0,0,0,0.2)",
                            }}
                            className="flex flex-col items-center justify-center w-24 h-24 p-4 backdrop-blur-sm rounded-full shadow-lg transition-all duration-200 border
                 bg-white/20 dark:bg-gray-800/40
                 text-gray-500 dark:text-gray-100
                 filter brightness-90 dark:brightness-110"
                        >
                            <div className="w-10 h-10">
                                {/* Ajustamos el icono para que tome el color del modo */}
                                {React.cloneElement(tool.icon, {
                                    className:
                                        "w-full h-full text-gray-900 dark:text-white transition-colors duration-300",
                                })}
                            </div>
                            <span className="mt-2 text-sm font-medium text-center text-gray-600 dark:text-gray-100">
                                {tool.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>

        </main>
    );
}