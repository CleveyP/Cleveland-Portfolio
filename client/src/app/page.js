import AboutMe from './components/aboutme/AboutMe';
import NavBar from './components/navbar/NavBar';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects.jsx';

export default function Home() {
  return (
    <main className=" min-h-screen items-center p-24">
        <NavBar />
        <hr></hr>
        <h1 className="text-6xl font-bold">Cleveland Plonsey,</h1>
        <h2 className="text-4xl font-bold">Full Stack Developer</h2>
        <AboutMe />
        <Skills />
        <Projects />
    </main>
  );
}
