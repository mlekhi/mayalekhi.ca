import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Microsoft",
    companyUrl: "https://microsoft.com/",
    period: "2025"
  },
  {
    title: "Senior Research Fellow",
    company: "Contrary",
    companyUrl: "https://contrary.com/",
    period: "2025"
  },
  {
    title: "ML Infrastructure Engineer",
    company: "Borealis AI",
    companyUrl: "https://borealisai.com",
    period: "2024"
  },
  {
    title: "Production Engineering Fellow",
    company: "Meta",
    companyUrl: "https://meta.com",
    period: "2024"
  },
  {
    title: "Algorithm Engineer",
    company: "COBWEB @ UofT",
    companyUrl: "https://www.cobweb.ca/",
    period: "2024"
  }
];

export default function Experience() {
  return (
    <section className="w-full flex flex-col justify-center">
      {/* Mobile: Year on left, company/title stacked on right */}
      <div className="flex flex-col space-y-4 md:hidden">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-6">
            <span className="text-sm text-gray-400 font-mono uppercase">{exp.period}</span>
            <div className="flex flex-col">
              <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-base text-white hover:text-purple-300 transition-colors">
                {exp.company}
              </a>
              <span className="text-base font-normal text-gray-400">{exp.title}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Desktop: Grid layout */}
      <div className="hidden md:grid grid-cols-[auto_auto_auto] gap-x-3 gap-y-1 items-baseline">
        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <span className="text-sm text-gray-400 font-mono uppercase">{exp.period}</span>
            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-base text-white hover:text-purple-300 transition-colors">
              {exp.company}
            </a>
            <span className="text-base font-normal text-gray-400">{exp.title}</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
} 