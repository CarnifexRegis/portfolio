
import Hero from './components/sections/Hero';
import { ImpactStrip } from './components/sections/ImpactStrip';
import { TimelineExperience } from './components/sections/timeline';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';

function App() {
  return (
    <div className="bg-bg text-text min-h-screen selection:bg-primary/30 selection:text-primary transition-colors duration-300">
      <Hero />
      <ImpactStrip />
      <TimelineExperience />
      <Projects />
      <Skills />
      <Education />

      {/* Footer */}
      <footer className="py-8 bg-surface text-center border-t border-border mt-24">
        <p className="text-text-secondary text-sm font-medium">
          &copy; {new Date().getFullYear()} Simon Stolz
        </p>
      </footer>
    </div>
  );
}

export default App;
