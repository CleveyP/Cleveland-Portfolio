import AboutMe from './components/aboutme/AboutMe';
import NavBar from './components/navbar/NavBar';
import Skills from './components/Skills/skills';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center p-24">
      <div className="left-container">
        <NavBar />
      </div>
      <div className="right-container">
        <h1 className="text-6xl font-bold">Cleveland Plonsey,</h1>
        <h2 className="text-4xl font-bold">Full Stack Developer</h2>
        <AboutMe />
        <Skills />
      </div>
    </main>
  );
}
