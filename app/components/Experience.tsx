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
      <div className="grid grid-cols-[auto_auto_auto] gap-x-3 gap-y-1 items-baseline">
        {experiences.map((exp, index) => (
          <>
            <span key={`${index}-period`} className="text-sm text-gray-400 font-mono uppercase">{exp.period}</span>
            <a key={`${index}-company`} href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-base text-white hover:text-gray-300 transition-colors">
              {exp.company}
            </a>
            <span key={`${index}-title`} className="text-base font-normal text-gray-400">{exp.title}</span>
          </>
        ))}
      </div>
    </section>
  );
} 