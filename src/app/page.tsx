import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Projects />
        <Technologies />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
