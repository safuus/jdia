export type FAQItem = {
  question: string;
  answer: string;
};

export const allFaqs: FAQItem[] = [
  {
    question: "Will students work on my project? What if they break something?",
    answer:
      "Professional developers lead every project and handle the critical path. Students participate in supervised tasks \u2014 QA, documentation, UI components \u2014 but all work goes through mandatory code review. Your project is never at risk from student involvement.",
  },
  {
    question: "How is this different from hiring a traditional agency?",
    answer:
      "Our developers use AI tools (GitHub Copilot, Cursor, Claude) from the first line of code, so we ship faster and iterate in hours instead of days. That efficiency means roughly 50% lower rates \u2014 without compromising quality. You get senior developer judgment with AI-accelerated throughput.",
  },
  {
    question: "What does tuition cost for students?",
    answer:
      "Tuition is $3,000 for the initial 3-month training phase. After that, students either transition to a paid internship (minimum wage, real employment) or continue in the supervised learning track at a reduced rate. Contact us for current pricing details.",
  },
  {
    question: "Is this a real school? What credentials do students get?",
    answer:
      "We\u2019re a professional development studio with an integrated training program \u2014 not a traditional school. Students graduate with something better than a certificate: a deployed product in their portfolio, professional references, and real-world experience with modern AI development tools.",
  },
  {
    question: "Who\u2019s behind Just Code It Academy?",
    answer:
      "Just Code It Academy is founded by Colin Li, a serial entrepreneur (6 startups, building #7) with a Math + CS background and 15+ years of development experience. JCIA is built on the infrastructure of CodingMind Academy, an established K-12 programming school in Redmond, WA.",
  },
  {
    question: "What\u2019s the connection to CodingMind Academy?",
    answer:
      "CodingMind Academy is Colin\u2019s K-12 AI and programming school \u2014 it provides trained teaching staff, proven curriculum, and a pipeline of advanced students. Just Code It Academy builds on that foundation to offer a more intensive, project-based experience for older students ready to do real work.",
  },
  {
    question: "Can I hire graduates directly?",
    answer:
      "Yes \u2014 that\u2019s one of the advantages of the model. Clients who work with student interns on their projects can hire them directly after the program. You\u2019ve already seen their work quality, communication style, and technical skills firsthand.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "React, Next.js, TypeScript, Python, and modern AI tools are our core stack. We also work with Node.js, databases (PostgreSQL, MongoDB), cloud platforms (AWS, Vercel), and integrate LLMs and AI workflows into existing products. We choose the right tool for each project.",
  },
];

// Client-relevant: students on project, agency difference, hire graduates, tech stack
export const clientFaqs = [allFaqs[0], allFaqs[1], allFaqs[6], allFaqs[7]];

// Student/parent-relevant: tuition, credentials, founder, CodingMind
export const studentFaqs = [allFaqs[2], allFaqs[3], allFaqs[4], allFaqs[5]];

// Partner-relevant: agency difference, hire graduates, tech stack
export const partnerFaqs = [allFaqs[1], allFaqs[6], allFaqs[7]];
