function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-10 py-16">
      <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition">
        <h2 className="text-2xl font-bold text-blue-400 mb-8">
          GET IN TOUCH
        </h2>

        <p className="text-slate-300 text-lg leading-8 mb-10 max-w-3xl">
          I'm currently open to new opportunities. Whether you have
          a question, collaboration idea, or internship opportunity,
          feel free to reach out.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700 hover:border-blue-500 transition">
            <p className="text-slate-400 text-sm mb-2">Phone</p>
            <h3 className="text-lg font-medium">
              +91 9566129412
            </h3>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700 hover:border-blue-500 transition">
            <p className="text-slate-400 text-sm mb-2">Email</p>
            <h3 className="text-lg font-medium break-all">
              krishnanmaha086@gmail.com
            </h3>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700 hover:border-blue-500 transition">
            <p className="text-slate-400 text-sm mb-2">Location</p>
            <h3 className="text-lg font-medium">
              Chennai, Tamil Nadu
            </h3>
          </div>
        </div>

        <div className="flex gap-5 mt-10 flex-wrap">
          <a
            href="https://github.com/krishnanmaha086-eng"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mayakrishnan-g-7442a7324/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;