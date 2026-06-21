"use client";

import Image from "next/image";
import { useState } from "react";

const content = {
  id: {
    nav: ["Profil", "Perjalanan", "Keahlian", "Proyek", "Kontak"],
    available: "Mahasiswa Teknik Elektro — Prodi Mekatronika",
    intro: "Halo, saya",
    name: "Muhammad Zikri",
    role: "Mechatronics Engineering Student",
    description:
      "Saya adalah mahasiswa Teknik Elektro, Program Studi Mekatronika di Politeknik Negeri Batam, dengan minat pada robotika, otomasi, dan teknologi industri. Saya berkomitmen untuk mengembangkan keterampilan teknis, disiplin, serta kemampuan memecahkan masalah untuk berkontribusi di dunia industri.",
    contact: "Hubungi Saya",
    projects: "Lihat Proyek",
    stats: [
      ["2+", "Bidang Keahlian"],
      ["3", "Proyek Teknis"],
      ["3+", "Pengalaman Kerja"],
      ["1", "Penghargaan"],
    ],
    profileTitle: "Profil Singkat",
    profileText:
      "Berangkat dari latar belakang Teknik Komputer Jaringan dan Telekomunikasi, saya terus mengembangkan diri ke bidang mekatronika, otomasi, desain mekanik, jaringan, serta pengembangan aplikasi sederhana. Saya menyukai pekerjaan teknis, problem solving, dan pengalaman lapangan yang menuntut ketelitian serta tanggung jawab.",
    journeyLabel: "Perjalanan",
    journeyTitle: "Pendidikan, Pengalaman, dan Pencapaian",
    journeyDesc:
      "Rangkaian perjalanan pendidikan, magang, pekerjaan, freelance, dan pencapaian yang membentuk kemampuan teknis serta profesional saya.",
    skillLabel: "Keahlian",
    skillTitle: "Keahlian Teknis",
    skillDesc:
      "Beberapa tools dan bidang kemampuan yang sedang saya pelajari dan gunakan dalam proyek maupun aktivitas teknis.",
    projectLabel: "Proyek",
    projectTitle: "Proyek Saat Ini",
    projectDesc:
      "Proyek teknis yang sedang atau pernah saya kerjakan di bidang mekatronika, kontrol, dan robotika.",
    contactLabel: "Kontak",
    contactTitle: "Mari Terhubung",
    contactDesc:
      "Saya terbuka untuk kolaborasi, diskusi proyek, kesempatan magang, pekerjaan, maupun pengembangan kemampuan di bidang teknologi industri.",
    direct: "Hubungi saya melalui",
    footer: "Dibuat dengan Next.js, Tailwind CSS, GitHub, dan Vercel.",
    current: "Saat Ini",
  },

  en: {
    nav: ["Profile", "Journey", "Skills", "Work", "Contact"],
    available: "Electrical Engineering Student — Mechatronics Program",
    intro: "Hi, I am",
    name: "Muhammad Zikri",
    role: "Mechatronics Engineering Student",
    description:
      "I am an Electrical Engineering student majoring in Mechatronics at Batam State Polytechnic, with interests in robotics, automation, and industrial technology. I am committed to developing technical skills, discipline, and problem-solving abilities to contribute to the industrial sector.",
    contact: "Contact Me",
    projects: "View Work",
    stats: [
      ["2+", "Skill Areas"],
      ["3", "Technical Projects"],
      ["3+", "Work Experiences"],
      ["1", "Achievement"],
    ],
    profileTitle: "Short Profile",
    profileText:
      "Starting from a background in Computer and Network Engineering, I continue to grow in mechatronics, automation, mechanical design, networking, and basic application development. I enjoy technical work, problem solving, and field experience that requires precision and responsibility.",
    journeyLabel: "Journey",
    journeyTitle: "Education, Experience, and Achievements",
    journeyDesc:
      "A journey of education, internships, work experience, freelance work, and achievements that shaped my technical and professional growth.",
    skillLabel: "Skills",
    skillTitle: "Technical Skills",
    skillDesc:
      "Several tools and skill areas that I am currently learning and using in technical projects and activities.",
    projectLabel: "Work",
    projectTitle: "Current Work",
    projectDesc:
      "Technical projects that I am currently working on or have developed in mechatronics, control, and robotics.",
    contactLabel: "Contact",
    contactTitle: "Let’s Connect",
    contactDesc:
      "I am open to collaboration, project discussions, internship opportunities, work opportunities, and skill development in industrial technology.",
    direct: "Reach me through",
    footer: "Built with Next.js, Tailwind CSS, GitHub, and Vercel.",
    current: "Current",
  },
};

const journey = {
  id: [
    {
      icon: "🎓",
      period: "Jul 2022 – Mei 2025",
      title: "SMK Negeri 1 Lhokseumawe",
      subtitle: "Teknik Komputer Jaringan dan Telekomunikasi",
      desc: "Menempuh pendidikan vokasi dengan fokus pada jaringan komputer, telekomunikasi, troubleshooting, dan dasar infrastruktur teknologi.",
      tags: ["TKJ", "Jaringan Komputer"],
      current: false,
    },
    {
      icon: "📜",
      period: "2025",
      title: "Certificate of Competence — KKNI Level II",
      subtitle: "Computer and Network Engineering",
      desc: "Memperoleh sertifikasi kompetensi bidang Teknik Komputer dan Jaringan sebagai bukti penguasaan kompetensi vokasi.",
      tags: ["Sertifikasi", "Computer Network"],
      current: false,
    },
    {
      icon: "🏢",
      period: "Jan 2024 – Apr 2024",
      title: "Magang — Disperindagkop dan UKM Kota Lhokseumawe",
      subtitle: "Internship Experience",
      desc: "Mendapat pengalaman kerja administrasi dan teknis di lingkungan pemerintahan, termasuk kedisiplinan kerja dan tanggung jawab lapangan.",
      tags: ["Magang", "Pemerintahan"],
      current: false,
    },
    {
      icon: "🏛️",
      period: "Agu 2024 – Nov 2024",
      title: "Magang — Pemerintah Kota Lhokseumawe",
      subtitle: "Internship Experience",
      desc: "Melanjutkan pengalaman magang di lingkungan pemerintahan dengan fokus pada profesionalitas, adaptasi kerja, dan penyelesaian tugas.",
      tags: ["Magang", "Administrasi"],
      current: false,
    },
    {
      icon: "🛵",
      period: "Feb 2025 – Apr 2025",
      title: "SPX Express",
      subtitle: "Courier Rider",
      desc: "Bekerja sebagai kurir rider dengan tanggung jawab pengantaran, ketepatan waktu, komunikasi, dan manajemen rute.",
      tags: ["Courier", "Lapangan"],
      current: false,
    },
    {
      icon: "🚗",
      period: "Mei 2025 – Jul 2025",
      title: "Kooda Easy",
      subtitle: "Local Ride-hailing / Delivery Worker",
      desc: "Bekerja di layanan lokal seperti Gojek dengan tugas operasional lapangan dan pelayanan pelanggan.",
      tags: ["Delivery", "Customer Service"],
      current: false,
    },
    {
      icon: "🏆",
      period: "2025",
      title: "Juara 2 VOREKA 2025",
      subtitle: "KREATIF: Kreasi Edukatif Anti Sampah dan Inovatif",
      desc: "Meraih juara 2 dalam kompetisi edukatif kreatif yang diselenggarakan oleh Badan Eksekutif Mahasiswa Politeknik Negeri Batam.",
      tags: ["Achievement", "VOREKA 2025"],
      current: false,
    },
    {
      icon: "💻",
      period: "Jul 2025 – Sekarang",
      title: "Remote Worker — Clickworker",
      subtitle: "Freelance Remote Work",
      desc: "Bekerja freelance secara remote dengan fokus pada ketelitian, konsistensi, dan penyelesaian task berbasis digital.",
      tags: ["Freelance", "Remote Work"],
      current: true,
    },
    {
      icon: "☕",
      period: "Agu 2025 – Sekarang",
      title: "Progresi Kopi",
      subtitle: "Supervisor & Helper",
      desc: "Membantu operasional coffee shop, termasuk kebersihan toko, perbaikan kabel ringan, membantu orderan, dan pekerjaan pendukung operasional lainnya.",
      tags: ["Supervisor", "Operational"],
      current: true,
    },
    {
      icon: "⚙️",
      period: "Sep 2025 – Sekarang",
      title: "Politeknik Negeri Batam",
      subtitle: "Teknik Elektro — Program Studi Mekatronika",
      desc: "Menempuh pendidikan tinggi di bidang mekatronika dengan minat pada robotika, otomasi, teknologi industri, dan sistem kendali.",
      tags: ["Mekatronika", "Batam"],
      current: true,
    },
  ],

  en: [
    {
      icon: "🎓",
      period: "Jul 2022 – May 2025",
      title: "SMK Negeri 1 Lhokseumawe",
      subtitle: "Computer Network and Telecommunication Engineering",
      desc: "Completed vocational education focused on computer networks, telecommunications, troubleshooting, and basic technology infrastructure.",
      tags: ["Networking", "Vocational School"],
      current: false,
    },
    {
      icon: "📜",
      period: "2025",
      title: "Certificate of Competence — KKNI Level II",
      subtitle: "Computer and Network Engineering",
      desc: "Earned a competency certificate in Computer and Network Engineering as proof of vocational technical competence.",
      tags: ["Certificate", "Computer Network"],
      current: false,
    },
    {
      icon: "🏢",
      period: "Jan 2024 – Apr 2024",
      title: "Internship — Disperindagkop and UKM Lhokseumawe",
      subtitle: "Internship Experience",
      desc: "Gained administrative and technical work experience in a government environment, including work discipline and field responsibility.",
      tags: ["Internship", "Government"],
      current: false,
    },
    {
      icon: "🏛️",
      period: "Aug 2024 – Nov 2024",
      title: "Internship — Lhokseumawe City Government",
      subtitle: "Internship Experience",
      desc: "Continued internship experience in a government environment with a focus on professionalism, adaptability, and task completion.",
      tags: ["Internship", "Administration"],
      current: false,
    },
    {
      icon: "🛵",
      period: "Feb 2025 – Apr 2025",
      title: "SPX Express",
      subtitle: "Courier Rider",
      desc: "Worked as a courier rider with responsibility for delivery, punctuality, communication, and route management.",
      tags: ["Courier", "Field Work"],
      current: false,
    },
    {
      icon: "🚗",
      period: "May 2025 – Jul 2025",
      title: "Kooda Easy",
      subtitle: "Local Ride-hailing / Delivery Worker",
      desc: "Worked in a local ride-hailing and delivery service with field operations and customer service responsibilities.",
      tags: ["Delivery", "Customer Service"],
      current: false,
    },
    {
      icon: "🏆",
      period: "2025",
      title: "2nd Place — VOREKA 2025",
      subtitle: "KREATIF: Educational Anti-Waste and Innovative Creation",
      desc: "Awarded 2nd place in a creative educational competition organized by the Student Executive Board of Batam State Polytechnic.",
      tags: ["Achievement", "VOREKA 2025"],
      current: false,
    },
    {
      icon: "💻",
      period: "Jul 2025 – Present",
      title: "Remote Worker — Clickworker",
      subtitle: "Freelance Remote Work",
      desc: "Working remotely as a freelancer with a focus on accuracy, consistency, and completing digital-based tasks.",
      tags: ["Freelance", "Remote Work"],
      current: true,
    },
    {
      icon: "☕",
      period: "Aug 2025 – Present",
      title: "Progresi Kopi",
      subtitle: "Supervisor & Helper",
      desc: "Supporting coffee shop operations, including store cleaning, light cable repair, assisting orders, and other operational tasks.",
      tags: ["Supervisor", "Operational"],
      current: true,
    },
    {
      icon: "⚙️",
      period: "Sep 2025 – Present",
      title: "Batam State Polytechnic",
      subtitle: "Electrical Engineering — Mechatronics Program",
      desc: "Currently studying mechatronics with interests in robotics, automation, industrial technology, and control systems.",
      tags: ["Mechatronics", "Batam"],
      current: true,
    },
  ],
};

const skills = [
  {
    icon: "🧩",
    title: "Design & Engineering",
    items: ["SolidWorks", "Mechanical Design", "Adobe Illustrator", "Poster Design"],
  },
  {
    icon: "💻",
    title: "Programming & Application",
    items: ["Visual Studio WinForms", "Code::Blocks", "C/C++ Basic", "Problem Solving"],
  },
  {
    icon: "🌐",
    title: "Networking & Tools",
    items: ["Winbox MikroTik", "Computer Network", "GitHub", "VS Code"],
  },
  {
    icon: "🛠️",
    title: "Field & Soft Skills",
    items: ["Discipline", "Teamwork", "Technical Support", "Operational Work"],
  },
];

const projects = {
  id: [
    {
      no: "01",
      icon: "⚙️",
      title: "Mesin Cartesian Kendali Konvensional",
      tech: "Mekatronika · Sistem Kendali · Mekanik",
      desc: "Proyek mesin Cartesian dengan kendali konvensional yang berfokus pada pergerakan sumbu X dan Z, mekanisme kontrol dasar, serta penerapan konsep mekatronika pada sistem gerak mesin.",
    },
    {
      no: "02",
      icon: "🔌",
      title: "Mesin Cartesian Kendali Konvensional Lanjutan",
      tech: "Relay · Limit Switch · Selector · Push Button · Motor",
      desc: "Pengembangan lanjutan dari mesin Cartesian sebelumnya. Pada tahap ini, sistem ditingkatkan menjadi lebih otomatis dengan penggunaan 6 relay, 4 limit switch, 1 selector, 4 push button detent, dan 2 motor untuk mendukung kontrol gerak mesin secara lebih terstruktur.",
    },
    {
      no: "03",
      icon: "🤖",
      title: "Mobil Obstacle Avoidance",
      tech: "Robotika · Sensor · Servo · Buzzer",
      desc: "Mobil robot yang dapat membaca halangan menggunakan sensor. Ketika kendaraan bergerak dan mendeteksi tantangan, sistem menggerakkan servo untuk berbelok serta mengaktifkan buzzer sebagai indikator.",
    },
  ],

  en: [
    {
      no: "01",
      icon: "⚙️",
      title: "Conventional Control Cartesian Machine",
      tech: "Mechatronics · Control System · Mechanical",
      desc: "A Cartesian machine project with conventional control, focused on X and Z axis movement, basic control mechanisms, and mechatronics implementation in machine motion systems.",
    },
    {
      no: "02",
      icon: "🔌",
      title: "Advanced Conventional Control Cartesian Machine",
      tech: "Relay · Limit Switch · Selector · Push Button · Motor",
      desc: "An advanced development of the previous Cartesian machine. In this stage, the system is improved to become more automated by using 6 relays, 4 limit switches, 1 selector, 4 detent push buttons, and 2 motors to support more structured machine motion control.",
    },
    {
      no: "03",
      icon: "🤖",
      title: "Obstacle Avoidance Car",
      tech: "Robotics · Sensor · Servo · Buzzer",
      desc: "A robot car that detects obstacles using sensors. When the vehicle moves and detects an obstacle, the system turns the servo and activates the buzzer as an indicator.",
    },
  ],
};

export default function Home() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = content[lang];

  const navLinks = [
    { href: "#profile", label: t.nav[0] },
    { href: "#journey", label: t.nav[1] },
    { href: "#skills", label: t.nav[2] },
    { href: "#projects", label: t.nav[3] },
    { href: "#contact", label: t.nav[4] },
  ];

  return (
    <main className="min-h-screen bg-[#fbfbfa] text-slate-950">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6">
          <a href="#" className="text-2xl font-black tracking-tight text-slate-950">
            MZ<span className="text-red-500">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-bold text-slate-600 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-red-500">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex rounded-full bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => setLang("id")}
                className={`rounded-full px-3 py-1 text-sm font-black ${
                  lang === "id"
                    ? "bg-white text-slate-950 shadow"
                    : "text-slate-400"
                }`}
              >
                ID
              </button>

              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 text-sm font-black ${
                  lang === "en"
                    ? "bg-white text-slate-950 shadow"
                    : "text-slate-400"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className="hidden rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg md:block"
            >
              {lang === "en" ? "Let's Talk" : t.contact}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-2xl font-black md:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden">
            <div className="min-h-screen bg-[#fbfbfa] px-6 pt-24">
              <div className="flex flex-col items-center gap-12 text-center">
                {navLinks.slice(1).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-5xl font-black tracking-tight text-slate-950"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-slate-950 px-8 py-4 text-lg font-black text-white"
                >
                  {lang === "en" ? "Let's Talk" : "Hubungi Saya"}
                </a>

                <div className="mt-6 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setLang("id")}
                    className={`rounded-full px-4 py-2 text-lg font-black ${
                      lang === "id"
                        ? "bg-white text-slate-950 shadow"
                        : "text-slate-400"
                    }`}
                  >
                    ID
                  </button>

                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    className={`rounded-full px-4 py-2 text-lg font-black ${
                      lang === "en"
                        ? "bg-white text-slate-950 shadow"
                        : "text-slate-400"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden px-6 pt-28 md:pt-32">
        <div className="absolute inset-0 -z-10 bg-[#fbfbfa]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:42px_42px] opacity-70" />
        <div className="absolute left-10 top-28 -z-10 h-40 w-40 rotate-[-18deg] rounded-[2rem] border border-red-200 bg-red-100/40 shadow-2xl shadow-red-100" />
        <div className="absolute right-16 top-32 -z-10 h-48 w-48 rotate-[25deg] rounded-[2rem] border border-blue-200 bg-blue-100/50 shadow-2xl shadow-blue-100" />
        <div className="absolute bottom-20 left-20 -z-10 h-44 w-44 rotate-[12deg] rounded-[2rem] border border-sky-200 bg-sky-100/50 shadow-2xl shadow-sky-100" />
        <div className="absolute bottom-16 right-20 -z-10 h-56 w-56 rounded-full border border-red-200 bg-red-100/40 shadow-2xl shadow-red-100" />
        <div className="absolute left-1/2 top-32 -z-10 h-24 w-24 rotate-45 rounded-3xl border border-slate-200 bg-white/70 shadow-xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 py-10 md:min-h-[calc(100vh-8rem)] md:grid-cols-[1.05fr_0.95fr] md:py-0">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-red-100 bg-white px-4 py-2 text-sm font-black text-red-500 shadow-sm">
              {t.available}
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-7xl">
              {t.intro} <br />
              <span className="text-red-500">{t.name}</span>
            </h1>

            <p className="mt-5 text-xl font-black text-slate-800 md:text-2xl">
              {t.role}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              {t.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-red-500 px-7 py-3 font-black text-white shadow-xl shadow-red-100 transition hover:bg-red-600"
              >
                {t.contact}
              </a>

              <a
                href="#projects"
                className="rounded-full border border-slate-200 bg-white px-7 py-3 font-black text-slate-900 shadow-sm transition hover:border-red-200 hover:text-red-500"
              >
                {t.projects}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] md:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-red-400 to-blue-300 opacity-20 blur-2xl" />

            <div className="relative rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-[0_30px_100px_rgba(15,23,42,0.14)]">
              <div className="overflow-hidden rounded-[2rem] bg-blue-700">
                <Image
                  src="/profile.JPG"
                  alt="Muhammad Zikri"
                  width={900}
                  height={1200}
                  priority
                  className="h-[320px] w-full object-cover object-top sm:h-[400px] md:h-[520px]"
                />
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-950">
                    Muhammad Zikri
                  </h2>
                  <p className="font-bold text-slate-500">Mechatronics Student</p>
                </div>

                <div className="rounded-2xl bg-red-50 px-4 py-3 text-right">
                  <p className="text-sm font-black text-red-500">MZ</p>
                  <p className="text-xs font-bold text-slate-500">Portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
          {t.stats.map((stat) => (
            <div
              key={stat[1]}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-4xl font-black text-red-500">{stat[0]}</h3>
              <p className="mt-2 font-bold text-slate-500">{stat[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="profile" className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-white" />
        <div className="absolute right-10 top-10 -z-10 h-44 w-44 rotate-12 rounded-[2rem] border border-blue-100 bg-blue-50/60 shadow-2xl shadow-blue-100" />

        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:p-12">
          <p className="font-black text-red-500">{t.profileTitle}</p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Muhammad Zikri
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            {t.profileText}
          </p>
        </div>
      </section>

      <section id="journey" className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[#fbfbfa]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e9eef7_1px,transparent_1px),linear-gradient(to_bottom,#e9eef7_1px,transparent_1px)] bg-[size:48px_48px] opacity-70" />

        <div className="absolute left-16 top-24 -z-10 h-36 w-36 rotate-[-15deg] rounded-[2rem] border border-red-100 bg-red-50/50 shadow-2xl shadow-red-100" />
        <div className="absolute right-20 top-40 -z-10 h-44 w-44 rotate-[30deg] rounded-[2rem] border border-blue-100 bg-blue-50/60 shadow-2xl shadow-blue-100" />
        <div className="absolute bottom-32 left-10 -z-10 h-40 w-40 rotate-[-12deg] rounded-[2rem] border border-blue-100 bg-blue-50/60 shadow-2xl shadow-blue-100" />
        <div className="absolute bottom-20 right-16 -z-10 h-48 w-48 rounded-full border border-red-100 bg-red-50/50 shadow-2xl shadow-red-100" />

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-black text-red-500">{t.journeyLabel}</p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              {t.journeyTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {t.journeyDesc}
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-slate-200 md:left-[92px] md:block" />

            <div className="space-y-10">
              {journey[lang].map((item, index) => (
                <div
                  key={`${item.period}-${item.title}`}
                  className="relative grid gap-6 md:grid-cols-[185px_1fr]"
                >
                  <div className="relative hidden md:flex md:justify-center">
                    <div
                      className={`sticky top-28 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-lg ${
                        item.current
                          ? "bg-red-500 text-white shadow-red-200"
                          : "bg-white text-red-500 shadow-slate-200"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl md:hidden ${
                            item.current
                              ? "bg-red-500 text-white"
                              : "bg-red-50 text-red-500"
                          }`}
                        >
                          {item.icon}
                        </div>

                        {item.current && (
                          <span className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                            <span className="h-2 w-2 rounded-full bg-white" />
                            {t.current}
                          </span>
                        )}
                      </div>

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-black ${
                          item.current
                            ? "bg-red-50 text-red-500"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-black text-slate-500">
                      {item.subtitle}
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">{item.desc}</p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-lg px-4 py-2 text-sm font-black ${
                            item.current
                              ? "bg-red-50 text-red-500"
                              : index % 2 === 0
                                ? "bg-slate-100 text-slate-600"
                                : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-white" />
        <div className="absolute right-16 top-20 -z-10 h-52 w-52 rotate-12 rounded-[2rem] border border-red-100 bg-red-50/60 shadow-2xl shadow-red-100" />
        <div className="absolute left-10 bottom-20 -z-10 h-44 w-44 rotate-[-18deg] rounded-[2rem] border border-blue-100 bg-blue-50/60 shadow-2xl shadow-blue-100" />

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-black text-red-500">{t.skillLabel}</p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              {t.skillTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {t.skillDesc}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl">
                  {group.icon}
                </div>

                <h3 className="mt-5 text-2xl font-black text-slate-950">
                  {group.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[#fbfbfa]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e9eef7_1px,transparent_1px),linear-gradient(to_bottom,#e9eef7_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />

        <div className="absolute left-10 top-28 -z-10 h-44 w-44 rotate-[-15deg] rounded-[2rem] border border-blue-100 bg-blue-50/60 shadow-2xl shadow-blue-100" />
        <div className="absolute right-10 bottom-20 -z-10 h-44 w-44 rounded-full border border-red-100 bg-red-50/60 shadow-2xl shadow-red-100" />
        <div className="absolute right-24 top-24 -z-10 h-28 w-28 rotate-45 rounded-3xl border border-slate-200 bg-white/70 shadow-xl" />

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-black text-red-500">{t.projectLabel}</p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              {t.projectTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {t.projectDesc}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects[lang].map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl">
                    {project.icon}
                  </div>

                  <p className="text-5xl font-black text-slate-100">
                    {project.no}
                  </p>
                </div>

                <p className="mt-6 font-black text-red-500">{project.tech}</p>

                <h3 className="mt-3 text-2xl font-black text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-white" />
        <div className="absolute left-10 top-20 -z-10 h-44 w-44 rotate-[-15deg] rounded-[2rem] border border-red-100 bg-red-50/60 shadow-2xl shadow-red-100" />
        <div className="absolute right-10 bottom-20 -z-10 h-44 w-44 rotate-12 rounded-[2rem] border border-blue-100 bg-blue-50/60 shadow-2xl shadow-blue-100" />

        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-[0_30px_100px_rgba(15,23,42,0.25)]">
          <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <div>
              <p className="font-black text-red-400">{t.contactLabel}</p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                {t.contactTitle}
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                {t.contactDesc}
              </p>

              <div className="mt-8">
                <p className="text-slate-400">{t.direct}</p>

                <a
                  href="mailto:zikri.2006jry@gmail.com"
                  className="mt-2 block text-2xl font-black"
                >
                  zikri.2006jry@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3">
              <a
                href="mailto:zikri.2006jry@gmail.com"
                className="rounded-full bg-white px-6 py-3 text-center font-black text-slate-950"
              >
                Email
              </a>

              <a
                href="https://github.com/zikri2006jry-source"
                target="_blank"
                className="rounded-full border border-white/20 px-6 py-3 text-center font-black transition hover:bg-white hover:text-slate-950"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-zikri-2b7a883a2/"
                target="_blank"
                className="rounded-full border border-white/20 px-6 py-3 text-center font-black transition hover:bg-white hover:text-slate-950"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/mohzik.ri/"
                target="_blank"
                className="rounded-full border border-white/20 px-6 py-3 text-center font-black transition hover:bg-white hover:text-slate-950"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm font-bold text-slate-500 md:flex-row">
          <p className="text-xl font-black text-slate-950">
            MZ<span className="text-red-500">.</span>
          </p>

          <p>{t.footer}</p>

          <p>© 2026 Muhammad Zikri</p>
        </div>
      </footer>
    </main>
  );
}