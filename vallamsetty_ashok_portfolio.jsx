// Portfolio - React + Tailwind (single-file App) + Node/Express backend example
// File: App.jsx (default export React component)
// Usage: This is a full single-file React component you can drop into a Create React App / Vite project.
// Tailwind must be configured in the project. Replace placeholders (GITHUB_USERNAME, etc.) with your real values.

import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ name: 'Vallamsetty Ashok', email: 'ashok.vallamsetty4@gmail.com', message: '' });
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ ...form, message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-pink-600 text-gray-100 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Vallamsetty <span className="text-yellow-300">Ashok</span></h1>
            <p className="mt-1 text-lg">QA Engineer • Automation & Manual Testing • Banking Fraud Detection</p>
          </div>
          <nav className="space-x-4">
            <a href="#projects" className="px-4 py-2 bg-white/20 rounded backdrop-blur hover:bg-white/30">Projects</a>
            <a href="#experience" className="px-4 py-2 bg-white/20 rounded hover:bg-white/30">Experience</a>
            <a href="#contact" className="px-4 py-2 bg-yellow-300 text-indigo-900 rounded font-semibold">Contact</a>
          </nav>
        </header>

        <main className="grid md:grid-cols-3 gap-8">
          {/* Left column: About & Skills */}
          <section className="md:col-span-1 bg-white/5 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-3">About</h2>
            <p className="text-sm leading-relaxed">I’m a QA Engineer with 3 years of experience in manual & automation testing, specializing in banking fraud detection (NICE Actimize) and web applications. I combine domain knowledge, automation skills (Selenium + Java), and GenAI tools to drive test efficiency and reliability.</p>

            <div className="mt-6">
              <h3 className="font-semibold">Contact</h3>
              <p className="text-sm">📍 Dharmavaram, Andhra Pradesh, India</p>
              <p className="text-sm">📧 ashok.vallamsetty4@gmail.com</p>
              <p className="text-sm">📞 +91 79893 63553</p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Tech & Tools</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>• Selenium WebDriver (Java), TestNG</li>
                <li>• Jira, Q-Test, Postman (API basics)</li>
                <li>• MySQL, Git, GitHub</li>
                <li>• GitHub Copilot, ChatGPT (GenAI)</li>
                <li>• Agile / Scrum</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Achievements</h3>
              <ul className="text-sm mt-2">
                <li>• Boosted automation efficiency by 80% using Copilot-generated scripts</li>
                <li>• Best Team Player award for on-time delivery</li>
              </ul>
            </div>
          </section>

          {/* Right column: Experience, Projects, Contact form */}
          <section className="md:col-span-2 space-y-8">
            <div className="bg-white/5 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-3">Experience</h2>
              <div>
                <h3 className="font-semibold">Software Engineer (QA) • HCL Technologies</h3>
                <p className="text-sm text-white/80">Aug 2022 – Present • Hyderabad, India</p>
                <ul className="mt-3 list-disc pl-5 text-sm space-y-2">
                  <li>Performed manual and automation testing for web & banking fraud systems (NICE Actimize).</li>
                  <li>Authored Selenium + Java + TestNG automation suites and maintained test traceability.</li>
                  <li>Conducted UAT, regression, and functional testing; managed defects in Jira.</li>
                  <li>Used GitHub Copilot to generate test scenarios—reduced regression time by 80%.</li>
                </ul>
              </div>
            </div>

            <div id="projects" className="bg-white/5 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-3">Selected Projects</h2>

              <article className="mb-4">
                <h3 className="font-semibold">USAA — Banking Fraud Detection (NICE Actimize)</h3>
                <p className="text-sm text-white/80">Role: QA Engineer • Domain: Banking • Focus: UAT & Fraud Prevention</p>
                <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
                  <li>Validated fraud rule logic and alert triggers across payment channels.</li>
                  <li>Executed UAT and designed automation tests for Fraud Referral submission portal.</li>
                  <li>Performed SQL validations to ensure backend data accuracy for fraud events.</li>
                </ul>
              </article>

              <article>
                <h3 className="font-semibold">Automation Framework — Selenium + Java + TestNG</h3>
                <p className="text-sm text-white/80">Designed reusable page objects and TestNG-driven suites for faster regression runs.</p>
                <ul className="mt-2 text-sm list-disc pl-5">
                  <li>Modular Page Object Model and data-driven test support.</li>
                  <li>CI-ready test runner (can be connected to GitHub Actions / Jenkins).</li>
                </ul>
              </article>
            </div>

            <div id="experience" className="bg-white/5 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-3">Education & Certifications</h2>
              <p className="text-sm">B.Tech - Electrical & Electronics Engineering, JNTU Anantapur (2018–2022) • CGPA: 6.8</p>
              <div className="mt-3 text-sm">
                <p>• Selenium With Java Automation Testing and Manual Testing Course (2022)</p>
                <p>• Google Cloud Data Engineer (Foundational)</p>
              </div>
            </div>

            <div id="contact" className="bg-white/5 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-3">Contact</h2>
              <p className="text-sm mb-4">Interested recruiters can reach out via email or use the contact form below.</p>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="p-3 rounded bg-white/10 focus:outline-none" />
                <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Your email" className="p-3 rounded bg-white/10 focus:outline-none" />
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Message" className="md:col-span-2 p-3 rounded bg-white/10 focus:outline-none" />

                <button type="submit" className="md:col-span-2 py-3 rounded bg-yellow-300 text-indigo-900 font-semibold">{status === 'sending' ? 'Sending...' : 'Send Message'}</button>

                {status === 'sent' && <p className="md:col-span-2 text-green-200">Message sent — I will respond shortly.</p>}
                {status === 'error' && <p className="md:col-span-2 text-red-200">There was an error. Try again later or email: ashok.vallamsetty4@gmail.com</p>}
              </form>

              <div className="mt-6 text-sm">
                <p>Quick links:</p>
                <div className="flex gap-3 mt-2">
                  <a href="https://github.com/GITHUB_USERNAME" target="_blank" rel="noreferrer" className="underline">GitHub</a>
                  <a href="https://www.linkedin.com/in/VallamsettyAshok" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
                  <a href="/resume.pdf" className="underline">Resume (PDF)</a>
                </div>
              </div>
            </div>

          </section>
        </main>

        <footer className="mt-12 text-center text-sm text-white/80">© {new Date().getFullYear()} Vallamsetty Ashok — QA Engineer</footer>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* --------------------------- Backend example ------------------------------ */
/* Save this as server.js in a Node project (simple Express + Nodemailer) */
/* Requires: express, nodemailer, cors, body-parser, dotenv */
/* Configure environment variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, PORT */

/*
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!email || !message) return res.status(400).json({ ok: false, error: 'Missing fields' });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Portfolio <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
      subject: `Portfolio contact from ${name} <${email}>`,
      text: message,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'Failed to send' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
*/

/* -------------------------------------------------------------------------- */
/* --------------------------- package.json snippets ------------------------ */
/*
{
  "name": "ashok-portfolio",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "server": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "nodemailer": "^6.9.4",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3"
  }
}
*/

/* -------------------------------------------------------------------------- */
/* --------------------------- Deployment hints ----------------------------- */
/*
1) Frontend: Deploy on Vercel / Netlify / GitHub Pages. For Vercel, connect repo and set build: `vite build`, output: `dist`.
2) Backend: Deploy server.js on Render / Heroku / Railway / Vercel Serverless Functions. Set environment variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, RECEIVER_EMAIL.
3) For simple contact handling without SMTP, you can use Formspree or Netlify Forms.
4) Replace 'GITHUB_USERNAME' and LinkedIn URL with your actual usernames and add a resume.pdf at /public/resume.pdf.

*/
