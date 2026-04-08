export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-900">

      <section className="py-20 text-center max-w-4xl mx-auto px-5">
        <h1 className="text-5xl font-bold tracking-tight">
          Ganesh Mirashi
        </h1>

        <p className="mt-4 text-xl text-gray-700">
          Full Stack Developer | Next.js | Django REST Framework
        </p>

        <p className="mt-3 text-gray-500">
          Building scalable fintech applications with clean architecture
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="/Ganesh_Mirashi_Resume.pdf"
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white shadow-md hover:scale-105 transition"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/GaneshMirashi"
            target="_blank"
            className="px-6 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ganesh-mirashi-69822322a/"
            target="_blank"
            className="px-6 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 hover:scale-105 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 max-w-4xl mx-auto px-5">
        <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>

        <p className="text-gray-600 text-center leading-relaxed">
          I am a Full Stack Developer at GTPL (startup in Bangalore) with 2 years
          of experience building scalable applications using Next.js and Django REST Framework.
          I have worked on fintech platforms including lending and KYC systems,
          focusing on API development, performance optimization, and system design.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Skills</h2>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto px-5">
          {[
            "Next.js",
            "React",
            "Django",
            "DRF",
            "PostgreSQL",
            "Kafka",
            "TypeScript",
            "Tailwind",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-100 rounded-xl text-sm hover:bg-gray-200 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 max-w-5xl mx-auto px-5">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* MvLEND */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold">
              MvLEND – Lending Platform
            </h3>

            <p className="mt-3 text-gray-600">
              Built a scalable lending platform handling loan lifecycle and transactions
              using Django REST APIs and event-driven architecture with Kafka.
            </p>

            <div className="mt-4 flex gap-4">
              <a href="#" className="text-blue-600 hover:underline">
                Live
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* MvKYC */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold">
              MvKYC – KYC Platform
            </h3>

            <p className="mt-3 text-gray-600">
              Developed a KYC verification platform with role-based access,
              secure document workflows, and blockchain-based identity validation.
            </p>

            <div className="mt-4 flex gap-4">
              <a href="#" className="text-blue-600 hover:underline">
                Live
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Experience</h2>

        <div className="max-w-3xl mx-auto px-5">
          <div className="p-6 border rounded-2xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold">
              GTPL – Software Developer
            </h3>

            <p className="text-gray-500 mt-1">
              May 2024 – Present
            </p>

            <ul className="list-disc ml-5 mt-4 text-gray-600 space-y-2">
              <li>Developed scalable REST APIs using Django REST Framework</li>
              <li>Built responsive frontend using Next.js</li>
              <li>Optimized database queries and improved performance</li>
              <li>Worked on fintech applications and microservices architecture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>

        <p className="text-gray-600">ganeshmirashi62@gmail.com</p>
        <p className="text-gray-600 mt-1">7349419357</p>
      </section>

    </div>
  );
}