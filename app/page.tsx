export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="p-10 text-center">
        <h1 className="text-4xl font-bold">Ganesh Mirashi</h1>
        <p className="mt-3 text-lg">
          Full Stack Developer | Next.js | Django REST Framework
        </p>
        <p className="mt-2 text-gray-600">
          Building scalable fintech applications
        </p>

        <div className="mt-5 flex justify-center gap-4">
          <a
            href="/Ganesh_Mirashi_Resume.pdf"
            className="px-5 py-2 bg-black text-white rounded-lg"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="px-5 py-2 border rounded-lg"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="px-5 py-2 border rounded-lg"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="p-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p>
          I am a Full Stack Developer at GTPL (startup in Bangalore) with 2 years
          of experience in building scalable applications using Next.js and Django REST Framework.
          I have worked on fintech platforms including lending and KYC systems,
          focusing on API development, performance optimization, and system design.
        </p>
      </section>

      {/* SKILLS */}
      <section className="p-10 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-5">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
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
            <span key={skill} className="px-4 py-2 bg-gray-200 rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-5">Projects</h2>

        <div className="space-y-6">

          {/* MvLEND */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold">MvLEND – Lending Platform</h3>
            <p className="mt-2">
              Built a lending system handling onboarding, loan processing, and transactions.
              Developed scalable APIs using Django and used Kafka for async processing.
            </p>

            <div className="mt-3 flex gap-3">
              <a href="#" className="text-blue-600">Live</a>
              <a href="#" className="text-blue-600">GitHub</a>
            </div>
          </div>

          {/* MvKYC */}
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold">MvKYC – KYC Platform</h3>
            <p className="mt-2">
              Developed KYC system with role-based access and secure document verification.
              Integrated blockchain for identity validation.
            </p>

            <div className="mt-3 flex gap-3">
              <a href="#" className="text-blue-600">Live</a>
              <a href="#" className="text-blue-600">GitHub</a>
            </div>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="p-10 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-5">Experience</h2>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold">GTPL – Software Developer</h3>
          <p className="text-gray-600">May 2024 – Present</p>

          <ul className="list-disc ml-5 mt-3">
            <li>Built REST APIs using Django REST Framework</li>
            <li>Developed frontend using Next.js</li>
            <li>Optimized database queries and improved performance</li>
            <li>Worked on fintech applications and scalable systems</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <p>Email: ganeshmirashi62@gmail.com</p>
        <p>Phone: 7349419357</p>
      </section>
    </div>
  );
}