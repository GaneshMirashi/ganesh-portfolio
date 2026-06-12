
"use client";

import Link from "next/link";
import type { SVGProps } from "react";
import {
  ArrowRight,
  Mail,
  ExternalLink,
  Sparkles,
  Code2,
  Database,
  Server,
  Cpu,
  Layers3,
  ChevronDown,
} from "lucide-react";

import { motion } from "framer-motion";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.5 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.98c.85 0 1.71.12 2.51.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
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
  "Redis",
  "Docker",
  "Celery",
  "JWT Auth",
  "Microservices",
  "Tailwind CSS",
  "System Design",
  "GCP",
];

const projects = [
  {
    title: "MvLEND",
    category: "Fintech Lending Platform",
    description:
      "Engineered scalable loan lifecycle workflows with Kafka-driven asynchronous processing, REST APIs, and production-grade architecture for digital lending systems.",
    metrics: [
      "30+ production REST APIs",
      "Kafka event-driven workflows",
      "Loan lifecycle automation",
    ],
    stack: ["Django", "Kafka", "CockroachDB", "Next.js"],
  },
  {
    title: "MvKYC",
    category: "Blockchain KYC Verification",
    description:
      "Built secure identity verification workflows with role-based authentication, NFT verification, document validation, and scalable API architecture.",
    metrics: [
      "Blockchain verification",
      "Role-based authentication",
      "Secure KYC workflows",
    ],
    stack: ["Django", "REST APIs", "Sui Blockchain", "Next.js"],
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        
        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* GLOW */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
          }}
          className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
          }}
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[140px]"
        />
      </div>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-300">
                Full Stack Engineer • Fintech Systems
              </span>
            </div>

            <h1 className="flex mt-8 gap-6 text-6xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
              Ganesh
              <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
                Mirashi
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-2xl">
              Building scalable fintech infrastructure using{" "}
              <span className="text-white">Django</span>,{" "}
              <span className="text-white">Kafka</span>, and{" "}
              <span className="text-white">Next.js</span>.
              Focused on event-driven systems, REST APIs, authentication,
              microservices, and production-grade backend architecture.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/Ganesh_Software_Developer_Resume.pdf"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-black font-medium transition-all hover:scale-105"
              >
                Download Resume
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="https://github.com/GaneshMirashi"
                target="_blank"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 backdrop-blur-xl transition-all hover:border-white/30 hover:bg-white/10"
              >
                <GithubIcon className="h-5 w-5" />
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/ganesh-mirashi-69822322a/"
                target="_blank"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 backdrop-blur-xl transition-all hover:border-white/30 hover:bg-white/10"
              >
                <LinkedinIcon className="h-5 w-5" />
                LinkedIn
              </Link>
            </div>

            {/* METRICS */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              
              {[
                ["3+", "Years Experience"],
                ["30+", "REST APIs"],
                ["Fintech", "Production Systems"],
              ].map(([num, label]) => (
                <div key={label}>
                  <h3 className="text-3xl font-bold">{num}</h3>
                  <p className="mt-2 text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

              {/* TOP BAR */}
              <div className="relative z-10 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              {/* DASHBOARD */}
              <div className="relative z-10 mt-8 space-y-6">

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-3xl border border-white/10 bg-black/40 p-6"
                >
                  <div className="flex items-start gap-4">
                    <Server className="text-blue-400 mt-1" />

                    <div>
                      <h3 className="text-lg font-semibold">
                        Backend Architecture
                      </h3>

                      <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                        Designed scalable REST APIs, authentication workflows,
                        microservices, and event-driven systems using Django,
                        Kafka, Redis, and Celery.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-3xl border border-white/10 bg-black/40 p-6"
                >
                  <div className="flex items-start gap-4">
                    <Database className="text-purple-400 mt-1" />

                    <div>
                      <h3 className="text-lg font-semibold">
                        Database Optimization
                      </h3>

                      <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                        Optimized PostgreSQL and CockroachDB queries,
                        indexing strategies, and backend performance for
                        production fintech applications.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-3xl border border-white/10 bg-black/40 p-6"
                >
                  <div className="flex items-start gap-4">
                    <Code2 className="text-cyan-400 mt-1" />

                    <div>
                      <h3 className="text-lg font-semibold">
                        Frontend Engineering
                      </h3>

                      <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                        Built responsive dashboards and enterprise workflows
                        using Next.js, TypeScript, Tailwind CSS, and modern
                        frontend architecture.
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* SCROLL */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-gray-500" />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-white/10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              About
            </p>

            <h2 className="mt-4 text-5xl font-bold leading-tight">
              Production-focused software engineer building scalable fintech systems.
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed">
              Python Full Stack Developer with 3+ years of experience building
              fintech and enterprise applications using Django, Django REST
              Framework, Kafka, PostgreSQL, and Next.js. Experienced in scalable
              API development, event-driven systems, authentication workflows,
              backend optimization, and responsive frontend applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-t border-white/10 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Technical Stack
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Technologies I work with
            </h2>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-xl transition-all hover:border-white/30 hover:bg-white/10"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="border-t border-white/10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Featured Projects
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Fintech & enterprise systems
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
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
              >
                
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

                <div className="relative z-10">
                  
                  {/* HEADER */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-blue-400">
                        {project.category}
                      </p>

                      <h3 className="mt-3 text-4xl font-bold">
                        {project.title}
                      </h3>
                    </div>

                    <ExternalLink className="text-gray-500 transition group-hover:text-white" />
                  </div>

                  {/* DESC */}
                  <p className="mt-8 text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* METRICS */}
                  <div className="mt-10 space-y-4">
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

                  {/* STACK */}
                  <div className="mt-10 flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
                      >
                        {tech}
                      </span>
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
        <div className="max-w-6xl mx-auto">

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
            className="mt-20 rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
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

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[
                {
                  icon: <Server className="text-blue-400" />,
                  text: "Built and maintained 30+ production REST APIs",
                },
                {
                  icon: <Database className="text-purple-400" />,
                  text: "Optimized PostgreSQL query performance",
                },
                {
                  icon: <Cpu className="text-cyan-400" />,
                  text: "Developed Kafka event-driven workflows",
                },
                {
                  icon: <Layers3 className="text-green-400" />,
                  text: "Implemented scalable microservices architecture",
                },
                {
                  icon: <Code2 className="text-pink-400" />,
                  text: "Built responsive fintech dashboards",
                },
                {
                  icon: <Sparkles className="text-yellow-400" />,
                  text: "Implemented JWT authentication systems",
                },
              ].map((item) => (
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  key={item.text}
                  className="rounded-3xl border border-white/10 bg-black/20 p-6"
                >
                  <div className="flex items-start gap-4">
                    {item.icon}

                    <p className="text-gray-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-white/10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold leading-tight">
              Let’s build scalable products together.
            </h2>

            <p className="mt-6 text-xl text-gray-400">
              Open to full stack engineering opportunities, fintech platforms,
              and backend-focused software development roles.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              <Link
                href="mailto:ganeshmirashi62@gmail.com"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-black font-medium transition-all hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Link>

              <Link
                href="https://github.com/GaneshMirashi"
                target="_blank"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 backdrop-blur-xl transition-all hover:border-white/30 hover:bg-white/10"
              >
                <GithubIcon className="h-5 w-5" />
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/ganesh-mirashi-69822322a/"
                target="_blank"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 backdrop-blur-xl transition-all hover:border-white/30 hover:bg-white/10"
              >
                <LinkedinIcon className="h-5 w-5" />
                LinkedIn
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
