"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Cloud, Database, Zap, CheckCircle2, ChevronRight, ChevronDown, BarChart, GraduationCap, Users, Monitor, BookOpen, Clock, LayoutDashboard, Settings, Video, Target, Award, Search, BookMarked, PenTool } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const CHALLENGES = [
  {
    title: "Student Management",
    desc: "Managing admissions, attendance, academic records, and communication across multiple systems creates unnecessary administrative work.",
    icon: Users
  },
  {
    title: "Online Learning",
    desc: "Educational institutions need engaging and reliable digital learning environments that support students from anywhere.",
    icon: Monitor
  },
  {
    title: "Teacher Productivity",
    desc: "Manual grading, scheduling, and repetitive administrative tasks reduce valuable teaching time.",
    icon: Clock
  },
  {
    title: "Student Engagement",
    desc: "Keeping students motivated requires interactive learning experiences, personalized feedback, and continuous communication.",
    icon: Target
  },
  {
    title: "Assessments",
    desc: "Conducting secure online exams, grading, and performance analysis can be complex without the right technology.",
    icon: PenTool
  },
  {
    title: "Parent Communication",
    desc: "Parents expect real-time updates about attendance, grades, assignments, and school announcements.",
    icon: MessageSquare
  },
  {
    title: "Learning Analytics",
    desc: "Institutions need data-driven insights to improve academic performance and operational efficiency.",
    icon: BarChart
  },
  {
    title: "Legacy Systems",
    desc: "Outdated software makes scaling and digital transformation difficult.",
    icon: Database
  }
];

const SOLUTIONS = [
  {
    title: "Learning Management System (LMS)",
    desc: "Create online courses, assignments, quizzes, certifications, discussion forums, and progress tracking.",
    icon: BookOpen
  },
  {
    title: "School Management System",
    desc: "Admissions, attendance, fee management, timetable scheduling, transport, examinations, and communication.",
    icon: GraduationCap
  },
  {
    title: "Student Information System (SIS)",
    desc: "Centralized student records, academic history, attendance, grades, and performance management.",
    icon: Users
  },
  {
    title: "College & University ERP",
    desc: "Manage admissions, academics, finance, HR, hostel management, library, and administration.",
    icon: Settings
  },
  {
    title: "Online Examination Platform",
    desc: "Secure assessments, automated grading, result publishing, analytics, and certification.",
    icon: Award
  },
  {
    title: "Virtual Classroom",
    desc: "Live classes, recorded lectures, interactive whiteboards, attendance tracking, and student collaboration.",
    icon: Video
  },
  {
    title: "Student Portal",
    desc: "Course access, assignments, schedules, announcements, fee payments, and academic progress.",
    icon: Monitor
  },
  {
    title: "Teacher Portal",
    desc: "Class management, lesson planning, grading, communication, and performance tracking.",
    icon: PenTool
  },
  {
    title: "Coaching Institute Platform",
    desc: "Batch management, online classes, test series, fee management, and student communication.",
    icon: Target
  },
  {
    title: "Education Analytics Dashboard",
    desc: "Track student performance, course completion, attendance, revenue, and institutional KPIs.",
    icon: LayoutDashboard
  }
];

const AI_SOLUTIONS = [
  {
    title: "AI Learning Assistant",
    desc: "Help students answer questions, explain concepts, and provide personalized learning support."
  },
  {
    title: "AI Course Recommendation Engine",
    desc: "Recommend courses based on student interests and learning progress."
  },
  {
    title: "AI Assignment Evaluation",
    desc: "Assist educators with grading, feedback generation, and plagiarism detection."
  },
  {
    title: "AI Student Performance Analytics",
    desc: "Identify learning gaps and provide personalized recommendations."
  },
  {
    title: "AI Content Generator",
    desc: "Generate quizzes, study materials, lesson plans, and assessments."
  },
  {
    title: "AI Academic Chatbot",
    desc: "Automate admissions inquiries, FAQs, student support, and campus information."
  },
  {
    title: "AI Attendance Automation",
    desc: "Face recognition and smart attendance systems for classrooms."
  },
  {
    title: "AI Administrative Assistant",
    desc: "Automate repetitive administrative tasks and document management."
  }
];

const INDUSTRIES = [
  "Schools",
  "Colleges",
  "Universities",
  "Coaching Institutes",
  "Training Centers",
  "EdTech Startups",
  "Online Learning Platforms",
  "Corporate Learning Platforms",
  "Skill Development Organizations",
  "Government Education Programs"
];

const SERVICES = [
  "AI & Machine Learning",
  "Custom Software Development",
  "Web Engineering",
  "Mobile App Development",
  "Cloud & DevOps",
  "UI/UX Design",
  "API Integration",
  "Data & Analytics"
];

const WHY_SPACIVA = [
  "Modern Digital Learning Experiences",
  "AI-Powered Education Solutions",
  "Scalable Cloud Infrastructure",
  "Student-Centric Design",
  "Secure Academic Data Management",
  "Mobile-First Learning Platforms",
  "100% Code Ownership",
  "Long-Term Technology Partnership"
];

const KPIS = [
  "Student Enrollment",
  "Course Completion Rate",
  "Student Engagement",
  "Attendance Rate",
  "Assessment Performance",
  "Teacher Productivity",
  "Parent Satisfaction",
  "Revenue Growth"
];

const FAQS = [
  {
    q: "Can you develop a custom Learning Management System (LMS)?",
    a: "Yes, we develop scalable and interactive LMS platforms featuring video lectures, quizzes, grading, discussions, and progress tracking, tailored to your institution's needs."
  },
  {
    q: "Do you build School ERP software?",
    a: "Absolutely. We build comprehensive School and University ERP systems to centralize admissions, fee management, HR, library, attendance, and academics."
  },
  {
    q: "Can AI personalize learning experiences?",
    a: "Yes, our AI solutions analyze student performance to provide personalized course recommendations, dynamic study materials, and targeted learning support."
  },
  {
    q: "Do you create online examination platforms?",
    a: "Yes, we create highly secure online examination platforms equipped with anti-cheat mechanisms, automated grading for MCQs, and detailed analytics."
  },
  {
    q: "Can you integrate Zoom or Google Meet into learning platforms?",
    a: "Definitely. We seamlessly integrate leading virtual classroom tools like Zoom, Google Meet, and Microsoft Teams directly into your LMS or student portal."
  },
  {
    q: "Do you develop education mobile applications?",
    a: "Yes, we build intuitive and engaging mobile applications for students and parents to access courses, submit assignments, and view attendance on the go."
  },
  {
    q: "Can existing education software be modernized?",
    a: "Yes, we help institutions upgrade legacy academic systems, migrate to secure cloud environments, and integrate modern UI/UX and AI capabilities."
  },
  {
    q: "Do you provide long-term maintenance and feature updates?",
    a: "Yes, we offer ongoing technical support, server scaling during peak admission or exam seasons, and continuous feature development to keep your platform relevant."
  }
];

// Helper icon since MessageSquare isn't imported from lucide-react in this exact scope to match others
function MessageSquare(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
}

export default function EducationClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 -z-10" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-sm font-semibold mb-6">
              <GraduationCap className="w-4 h-4" />
              Education & EdTech Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Build Smarter Learning Platforms for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#7C3AED]">Future of Education</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
              Spaciva develops secure, scalable, and AI-powered education software that helps schools, universities, coaching institutes, and EdTech startups deliver engaging learning experiences, streamline administration, and improve student outcomes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <AnimatedCtaButton
                href="/contact"
                label="Book an Education Consultation"
                hoverLabel="Let's Talk Business"
              />
              <a href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Explore EdTech Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Digital Challenges in Education</h2>
            <p className="text-lg text-slate-600">Educational institutions need modern solutions to overcome administrative friction and adapt to new models of learning.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHALLENGES.map((challenge, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <challenge.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-16 md:py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#7C3AED]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Education & EdTech Platforms We Build</h2>
            <p className="text-lg text-slate-300">We develop end-to-end digital learning ecosystems and administrative platforms for institutions of all sizes.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-[#7C3AED]/40 transition-colors"
              >
                <div className="w-12 h-12 bg-[#7C3AED]/15 rounded-xl flex items-center justify-center mb-6">
                  <sol.icon className="w-6 h-6 text-[#C4B5FD]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[500px] md:h-[500px] bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6">
                <Brain className="w-4 h-4" />
                Artificial Intelligence
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">AI-Powered Learning Experiences</h2>
              <p className="text-lg text-slate-600 mb-8">
                Harness AI to provide 24/7 learning assistance, automate grading, and generate personalized learning paths for every student.
              </p>
              <div className="flex items-center gap-3 text-slate-900 font-bold">
                <CheckCircle2 className="text-[#7C3AED]" /> Intelligent Content Generation
              </div>
              <div className="flex items-center gap-3 text-slate-900 font-bold mt-4">
                <CheckCircle2 className="text-[#7C3AED]" /> Automated Administrative Tasks
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="grid sm:grid-cols-2 gap-6">
                {AI_SOLUTIONS.map((ai, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-purple-100 transition-all"
                  >
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{ai.title}</h3>
                    <p className="text-sm text-slate-600">{ai.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Services */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            
            <div>
              <h2 className="text-3xl font-extrabold mb-8 text-slate-900">Institutions We Serve</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {INDUSTRIES.map((ind, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 font-medium bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-sm">
                    <ChevronRight className="w-4 h-4 text-blue-500 shrink-0" /> {ind}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold mb-8 text-slate-900">Our Services</h2>
              <div className="flex flex-wrap gap-3">
                {SERVICES.map((srv, idx) => (
                  <div key={idx} className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm font-bold text-slate-800 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default">
                    {srv}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-slate-900">Development Process</h2>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4 relative">
            {["Educational Needs Analysis", "Platform Strategy", "UX Research", "UI Design", "Development", "Testing", "Deployment", "Training", "Continuous Support"].map((step, idx, arr) => (
              <div key={idx} className="flex items-center w-full sm:w-auto">
                <div className="bg-[#0F172A] text-white font-bold px-5 sm:px-6 py-3 rounded-full shadow-lg text-sm w-full sm:w-auto text-center sm:whitespace-nowrap">
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="hidden sm:block w-5 h-5 mx-2 text-slate-300 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Spaciva & Tech Stack */}
      <section className="py-16 md:py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Why Educational Institutions Choose Spaciva</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {WHY_SPACIVA.map((why, idx) => (
                  <div key={idx} className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#7C3AED]/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#7C3AED]/15 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#C4B5FD]" />
                    </div>
                    <span className="font-bold text-white/90 text-sm leading-snug">{why}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Technology Stack</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Frontend</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Next.js", "React", "Flutter"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Backend & Database</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">AI & Integration</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["OpenAI", "Claude", "Gemini", "Zoom", "Google Meet", "Microsoft Teams", "Stripe"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Cloud</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["AWS", "Azure", "Docker", "Kubernetes"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-16 md:py-24 bg-[#0F172A] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[300px] bg-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#C4B5FD] text-xs font-bold uppercase tracking-widest mb-5">
            What We Optimize
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white">Key Business Metrics We Optimize</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {KPIS.map((kpi, idx) => (
              <span key={idx} className="px-5 py-2.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 font-bold text-white text-sm hover:bg-[#7C3AED]/20 hover:border-[#7C3AED]/50 transition-colors">
                {kpi}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  openFaq === idx ? "border-blue-500 bg-blue-50/50" : "border-slate-200 bg-white hover:border-blue-200"
                )}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 font-bold text-slate-900"><span className="min-w-0 text-sm sm:text-base leading-snug">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0", openFaq === idx && "rotate-180 text-[#7C3AED]")} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed text-sm">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7C3AED]/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Ready to Build the Future of Learning?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you're launching an EdTech startup, modernizing a school management system, or creating an AI-powered learning platform, Spaciva helps you build secure, scalable, and engaging education technology.
          </p>
          <AnimatedCtaButton
            href="/contact"
            label="Start Your EdTech Project"
            hoverLabel="Let's Talk Business"
            size="lg"
            className="mx-auto"
          />
        </div>
      </section>

      {/* Related Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Solutions</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Learning Management System (LMS)</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">School ERP</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Student Information System</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Online Examination Platform</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">AI Learning Assistant</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Education Analytics Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">AI & Machine Learning</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Web Engineering</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Mobile Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Custom Software</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Cloud & DevOps</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Industries</h4>
              <ul className="space-y-4">
                <li><a href="/industries/government" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Government & Public Sector</a></li>
                <li><a href="/industries/healthcare" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Healthcare</a></li>
                <li><a href="/industries/hr" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">HR & Recruitment</a></li>
                <li><a href="/industries/corporate-training" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Corporate Training</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Long Form Content */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 prose prose-lg prose-slate text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Education Software Development & EdTech Solutions</h2>
          <p className="mb-6 leading-relaxed">
            Technology has transformed education by making learning more accessible, interactive, and personalized. Educational institutions now require digital platforms that simplify administration, improve communication, and create engaging learning experiences for students, educators, and parents.
          </p>
          <p className="mb-6 leading-relaxed">
            Spaciva develops custom <strong>education software</strong> tailored to the needs of schools, universities, coaching institutes, corporate training providers, and EdTech startups. Our solutions include <strong>learning management systems (LMS)</strong>, <strong>school ERP platforms</strong>, <strong>student information systems</strong>, <strong>online examination software</strong>, <strong>virtual classrooms</strong>, <strong>education mobile applications</strong>, and <strong>AI-powered learning assistants</strong>.
          </p>
          <p className="mb-6 leading-relaxed">
            Our platforms help institutions manage admissions, attendance, assessments, course delivery, fee collection, academic records, and communication through a single integrated system. By combining cloud infrastructure, AI, analytics, and intuitive user experiences, we enable educational organizations to improve operational efficiency while enhancing student engagement and learning outcomes.
          </p>
          <p className="leading-relaxed">
            Whether you're building a digital-first education platform or modernizing an existing institution with intelligent automation, Spaciva delivers scalable, secure, and future-ready education technology that supports continuous innovation.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
