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
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="group/item">
            <div className="flex items-baseline gap-3">
              <span className="text-sm text-gray-400">{exp.period}</span>
              <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-base text-white hover:text-gray-300 transition-colors">
                {exp.company}
              </a>
              <span className="text-base font-normal text-gray-400">{exp.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 