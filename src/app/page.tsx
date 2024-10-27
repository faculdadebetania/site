import Courses from './_components/course/courses';
import About from './about';
import Features from './features';
import Hero from './hero';

export default function Page() {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <Features />
      <Courses />
      <About />
    </main>
  );
}
