export default function Contact() {
  return (
    <section className="w-full h-full flex flex-col justify-center">
      <div className="space-y-12 group">
        <div className="space-y-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-4xl font-medium tracking-tight text-white relative">
              let's work
              <br />
              together
              <span className="text-gray-500">.</span>
            </h2>
            <span className="font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">
              {`૮ ˶ᵔ ᵕ ᵔ˶ ა`}
            </span>
          </div>
          
          <p className="text-base text-gray-300 tracking-tight max-w-md">
            want to collaborate? chat?
            <br />
            i'm always down to meet curious and kind people.
          </p>
        </div>

        <div className="inline-flex flex-col items-start group/email">
          <span className="text-sm text-gray-400 font-mono mb-2 flex items-center gap-2">
            → send me a note
            <span className="opacity-0 group-hover/email:opacity-100 transition-all duration-300">
              {`(✉️)`}
            </span>
          </span>
          <a 
            href="mailto:maya.lekhi1@gmail.com" 
            className="text-base font-mono text-white hover:text-blue-400 transition-colors relative group/link"
          >
            maya.lekhi1@gmail.com
            <span className="absolute -bottom-px left-0 w-0 h-px bg-blue-400 transition-all group-hover/link:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
} 