

import { Button } from '../common/Button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden bg-bg px-6 pt-12 md:pt-20 pb-12 md:pb-20">
      {/* Subtle Background Elements */}
      <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-primary rounded-full mix-blend-multiply opacity-[0.03] blur-3xl"></div>
      <div className="absolute bottom-[20%] left-[5%] w-72 h-72 bg-primary-soft rounded-full mix-blend-multiply opacity-[0.03] blur-3xl"></div>

      <div className="z-10 max-w-6xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border/50 rounded-full text-primary font-medium text-sm mb-8 animate-fade-in-up">
          Simon Stolz
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-text animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Full-Stack Engineer
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-text-secondary animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Building reliable systems at scale.
        </h2>

        <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          I'm an engineering-first product developer with end-to-end expertise across frontend, backend, and cloud architectures. Currently shipping interfaces and APIs to millions of users daily.
        </p>

        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <Button href="#experience" as="a">
            View Experience
          </Button>
          <Button href="#contact" variant="outline" as="a">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
