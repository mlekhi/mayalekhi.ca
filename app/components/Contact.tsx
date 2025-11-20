import Image from 'next/image';

export default function Contact() {
  return (
    <section className="w-full h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-12 group">
          <div className="space-y-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-4xl font-medium tracking-tight text-white relative">
                let's work
                <br />
                together
                <span className="text-gray-500">.</span>
              </h2>
            </div>
            
            <p className="text-base text-gray-300 tracking-tight max-w-2xl">
              want to collaborate? chat?
              <br />
              i'm always down to meet curious and kind people.
            </p>
          </div>

          <div className="inline-flex flex-col items-start group/email">
            <span className="text-sm text-gray-400 font-mono mb-2 flex items-center gap-2 uppercase">
              → SEND ME A NOTE
            </span>
            <a 
              href="mailto:maya.lekhi1@gmail.com" 
              className="text-base text-white hover:text-purple-300 transition-colors relative group/link"
            >
              maya.lekhi1@gmail.com
              <span className="absolute -bottom-px left-0 w-0 h-px bg-purple-300 transition-all group-hover/link:w-full"></span>
            </a>
          </div>
        </div>
        
        <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
          <Image
            src="/gradients/pink-yellow.png"
            alt="Gradient background"
            fill
            className="object-cover"
            priority={false}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
} 