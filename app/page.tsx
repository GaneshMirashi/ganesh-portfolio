// export default function Home() {
//   return (
//     <div className="bg-gradient-to-b from-white to-gray-100 text-gray-900">

//       <section className="py-20 text-center max-w-4xl mx-auto px-5">
//         <h1 className="text-5xl font-bold tracking-tight">
//           Ganesh Mirashi
//         </h1>

//         <p className="mt-4 text-xl text-gray-700">
//           Full Stack Developer | Next.js | Django REST Framework
//         </p>

//         <p className="mt-3 text-gray-500">
//           Building scalable fintech applications with clean architecture
//         </p>

//         <div className="mt-8 flex justify-center gap-4 flex-wrap">
//           <a
//             href="/Ganesh_Mirashi_Resume.pdf"
//             className="px-6 py-2 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white shadow-md hover:scale-105 transition"
//           >
//             Download Resume
//           </a>

//           <a
//             href="https://github.com/GaneshMirashi"
//             target="_blank"
//             className="px-6 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 hover:scale-105 transition"
//           >
//             GitHub
//           </a>

//           <a
//             href="https://www.linkedin.com/in/ganesh-mirashi-69822322a/"
//             target="_blank"
//             className="px-6 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 hover:scale-105 transition"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section className="py-16 max-w-4xl mx-auto px-5">
//         <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>

//         <p className="text-gray-600 text-center leading-relaxed">
//           I am a Full Stack Developer at GTPL (startup in Bangalore) with 2 years
//           of experience building scalable applications using Next.js and Django REST Framework.
//           I have worked on fintech platforms including lending and KYC systems,
//           focusing on API development, performance optimization, and system design.
//         </p>
//       </section>

//       {/* SKILLS */}
//       <section className="py-16 bg-white">
//         <h2 className="text-3xl font-semibold text-center mb-8">Skills</h2>

//         <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto px-5">
//           {[
//             "Next.js",
//             "React",
//             "Django",
//             "DRF",
//             "PostgreSQL",
//             "Kafka",
//             "TypeScript",
//             "Tailwind",
//           ].map((skill) => (
//             <span
//               key={skill}
//               className="px-4 py-2 bg-gray-100 rounded-xl text-sm hover:bg-gray-200 transition"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* PROJECTS */}
//       <section className="py-16 max-w-5xl mx-auto px-5">
//         <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

//         <div className="grid md:grid-cols-2 gap-6">

//           {/* MvLEND */}
//           <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
//             <h3 className="text-xl font-semibold">
//               MvLEND – Lending Platform
//             </h3>

//             <p className="mt-3 text-gray-600">
//               Built a scalable lending platform handling loan lifecycle and transactions
//               using Django REST APIs and event-driven architecture with Kafka.
//             </p>

//             <div className="mt-4 flex gap-4">
//               <a href="#" className="text-blue-600 hover:underline">
//                 Live
//               </a>
//               <a href="#" className="text-blue-600 hover:underline">
//                 GitHub
//               </a>
//             </div>
//           </div>

//           {/* MvKYC */}
//           <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
//             <h3 className="text-xl font-semibold">
//               MvKYC – KYC Platform
//             </h3>

//             <p className="mt-3 text-gray-600">
//               Developed a KYC verification platform with role-based access,
//               secure document workflows, and blockchain-based identity validation.
//             </p>

//             <div className="mt-4 flex gap-4">
//               <a href="#" className="text-blue-600 hover:underline">
//                 Live
//               </a>
//               <a href="#" className="text-blue-600 hover:underline">
//                 GitHub
//               </a>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* EXPERIENCE */}
//       <section className="py-16 bg-white">
//         <h2 className="text-3xl font-semibold text-center mb-10">Experience</h2>

//         <div className="max-w-3xl mx-auto px-5">
//           <div className="p-6 border rounded-2xl hover:shadow-md transition">
//             <h3 className="text-xl font-semibold">
//               GTPL – Software Developer
//             </h3>

//             <p className="text-gray-500 mt-1">
//               May 2024 – Present
//             </p>

//             <ul className="list-disc ml-5 mt-4 text-gray-600 space-y-2">
//               <li>Developed scalable REST APIs using Django REST Framework</li>
//               <li>Built responsive frontend using Next.js</li>
//               <li>Optimized database queries and improved performance</li>
//               <li>Worked on fintech applications and microservices architecture</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section className="py-16 text-center">
//         <h2 className="text-3xl font-semibold mb-4">Contact</h2>

//         <p className="text-gray-600">ganeshmirashi62@gmail.com</p>
//         <p className="text-gray-600 mt-1">7349419357</p>
//       </section>

//     </div>
//   );
// }




"use client";

import Link from "next/link";
import type { SVGProps } from "react";
import {
  Mail,
  ArrowRight,
  ExternalLink,
  Code2,
  Database,
  Server,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.5 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.98c.85 0 1.71.12 2.51.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V8.98h3.42v1.57h.05a3.75 3.75 0 0 1 3.37-1.85c3.61 0 4.27 2.38 4.27 5.47v6.28ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

const skills = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Django",
  "Django REST Framework",
  "Kafka",
  "PostgreSQL",
  "CockroachDB",
  "Tailwind CSS",
  "Redis",
  "Docker",
  "JWT Auth",
  "Microservices",
  "System Design",
  "Celery",
  "GCP",
];

const projects = [
  {
    title: "MvLEND",
    subtitle: "Composable Core Banking & Lending Platform",
    description:
      "Engineered scalable fintech workflows for onboarding, loan lifecycle management, repayment tracking, and fund disbursement using Django REST Framework, Kafka, and Next.js.",
    stack: ["Django", "Kafka", "CockroachDB", "Next.js"],
    metrics: [
      "20+ REST APIs",
      "Event-driven architecture",
      "Real-time transaction workflows",
    ],
  },
  {
    title: "MvKYC",
    subtitle: "Blockchain-Based KYC Verification Platform",
    description:
      "Developed secure identity verification workflows with role-based access, blockchain NFT verification, and scalable backend APIs for document validation systems.",
    stack: ["Django", "REST APIs", "Sui Blockchain", "Next.js"],
    metrics: [
      "Role-based authentication",
      "Secure document workflows",
      "Blockchain identity validation",
    ],
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10">
        
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Glow */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-blue-400" />
              Software Developer • Fintech Applications
            </div>

            <h1 className="mt-8 text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Ganesh
              <span className="block bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Mirashi
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-400 leading-relaxed max-w-2xl">
              Building scalable fintech platforms with{" "}
              <span className="text-white">Django</span>,{" "}
              <span className="text-white">Kafka</span>, and{" "}
              <span className="text-white">Next.js</span>.
              Specialized in REST APIs, microservices, event-driven systems,
              and high-performance backend architecture.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              
              <Link
                href="/Ganesh_Full_stack_developer_cv.pdf"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-black font-medium transition hover:scale-105"
              >
                Download Resume
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="https://github.com/GaneshMirashi"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
              >
                <GithubIcon className="h-5 w-5" />
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/ganesh-mirashi-69822322a/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
              >
                <LinkedinIcon className="h-5 w-5" />
                LinkedIn
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

              <div className="relative z-10">
                
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <div className="mt-8 space-y-6">
                  
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <div className="flex items-center gap-3">
                      <Server className="text-blue-400" />
                      <div>
                        <h3 className="font-semibold">
                          Backend Architecture
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Django • DRF • Kafka • Redis • Celery
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <div className="flex items-center gap-3">
                      <Database className="text-purple-400" />
                      <div>
                        <h3 className="font-semibold">
                          Database Optimization
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          PostgreSQL • CockroachDB • Query Performance
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <div className="flex items-center gap-3">
                      <Code2 className="text-cyan-400" />
                      <div>
                        <h3 className="font-semibold">
                          Frontend Engineering
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Next.js • TypeScript • Tailwind CSS
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              About Me
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Building production-ready systems for fintech platforms.
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-4xl">
              Python Full Stack Developer with 2+ years of experience
              architecting scalable fintech and enterprise applications.
              Experienced in developing REST APIs, event-driven workflows,
              authentication systems, and responsive frontend applications using
              Django, Django REST Framework, Kafka, PostgreSQL, and Next.js.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-4xl font-bold text-center">
            Technical Stack
          </h2>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-xl transition hover:scale-105 hover:border-white/30 hover:bg-white/10"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Projects
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Production-grade fintech systems
            </h2>
          </div>

          <div className="mt-20 grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition hover:-translate-y-2 hover:border-white/20"
              >
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10">
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-gray-400">
                        {project.subtitle}
                      </p>
                    </div>

                    <ExternalLink className="text-gray-500 transition group-hover:text-white" />
                  </div>

                  <p className="mt-8 text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 space-y-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="flex items-center gap-3 text-gray-400"
                      >
                        <div className="h-2 w-2 rounded-full bg-blue-400" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="border-t border-white/10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Experience
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Professional Journey
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-20 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              
              <div>
                <h3 className="text-3xl font-bold">
                  Gowdanar Technosoft Pvt Ltd
                </h3>

                <p className="mt-2 text-blue-400">
                  Software Developer • Django • Next.js
                </p>
              </div>

              <div className="text-gray-400">
                Nov 2023 — Present
              </div>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              
              {[
                "Built and maintained 20+ REST APIs",
                "Implemented scalable fintech workflows",
                "Optimized PostgreSQL query performance",
                "Developed event-driven architectures using Kafka",
                "Implemented JWT authentication systems",
                "Built responsive enterprise dashboards",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold">
              Let’s build something impactful.
            </h2>

            <p className="mt-6 text-xl text-gray-400">
              Open to software engineering opportunities and fintech product development roles.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              
              <Link
                href="mailto:ganeshmirashi62@gmail.com"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-black font-medium transition hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Link>

              <Link
                href="https://github.com/GaneshMirashi"
                target="_blank"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
              >
                <GithubIcon className="h-5 w-5" />
                GitHub
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
