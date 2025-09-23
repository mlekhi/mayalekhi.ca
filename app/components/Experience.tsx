interface ExperienceItem {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Microsoft",
    companyUrl: "https://microsoft.com/",
    period: "2025",
    description: "Built Copilot-powered visual creation flow in Power BI using Angular, React, TypeScript, and C#; implemented NL2FOPL for semantic parsing, reducing prompt failure rates by 32% for 5M+ monthly active users."
  },
  {
    title: "ML Infrastructure Engineer",
    company: "Borealis AI",
    companyUrl: "https://borealisai.com",
    period: "2024",
    description: "Built a full Kubeflow-SLURM pipeline and centralized logging stack, cutting model training time by 15% and powering fintech AI tools for 17M+ users."
  },
  {
    title: "Production Engineering Fellow",
    company: "Meta",
    companyUrl: "https://meta.com",
    period: "2024",
    description: "One of 44 selected from 4,000+; automated Docker-based CI/CD and optimized Nginx handling 10k+ req/min, improving deployment speed by 80%."
  },
  {
    title: "Algorithm Engineer",
    company: "COBWEB @ UofT",
    companyUrl: "https://www.cobweb.ca/",
    period: "2024",
    description: "Engineered real-time 3D agent simulations using C++ and OpenCL, accelerating COBWEB's GPU modeling performance and WebGPU rendering."
  }
];

export default function Experience() {
  return (
    <section className="w-full h-full flex flex-col justify-center">
      <h2 className="text-4xl font-medium mb-12 relative text-white">
        experience
        <span className="font-mono text-sm absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">
          {`(｀・ω・´)`}
        </span>
      </h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group/item">
            <div className="flex items-baseline justify-between mb-1">
              <div className="flex items-baseline gap-3">
                <span className="text-base font-normal text-white">{exp.title}</span>
                <span className="text-base text-gray-400">—</span>
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-base text-gray-400 hover:text-white underline">
                  {exp.company}
                </a>
              </div>
              <span className="text-sm text-gray-400">{exp.period}</span>
            </div>
            <p className="text-base text-gray-300 leading-relaxed">
              {exp.description}
              <span className="font-mono text-sm ml-1 opacity-0 group-hover/item:opacity-100 transition-opacity text-gray-500">
                {`(◕‿◕✿)`}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 