interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "maya is a builder with heart. sharp, thoughtful, and always two steps ahead.",
    author: "mentor",
    role: "borealis ai"
  },
  {
    quote: "working with maya felt like a good cup of coffee — warm, energizing, and grounding.",
    author: "community member",
    role: "momentum"
  }
];

export default function Testimonials() {
  return (
    <section className="group">
      <div className="flex items-baseline justify-between mb-16">
        <h2 className="text-5xl font-medium tracking-tight text-white">
          testimonials
          <span className="text-gray-500">.</span>
        </h2>
        <span className="font-mono text-[8px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 text-gray-500">
          {`(｡♥‿♥｡)`}
        </span>
      </div>

      <div className="grid gap-16">
        {testimonials.map((testimonial, index) => (
          <blockquote 
            key={index} 
            className="group/quote relative"
          >
            <div className="absolute -left-6 top-0 text-4xl text-gray-400 font-serif">"</div>
            <p className="text-xl leading-relaxed tracking-tight text-gray-200 pl-4 group-hover/quote:pl-6 transition-all duration-300">
              {testimonial.quote}
            </p>
            <footer className="mt-4 pl-4 group-hover/quote:pl-6 transition-all duration-300">
              <div className="font-mono text-sm text-gray-400 flex items-center gap-2">
                <span className="w-12 h-[1px] bg-gray-700"></span>
                {testimonial.author}
                <span className="text-gray-500">//</span>
                {testimonial.role}
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
} 