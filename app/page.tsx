import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitHubCalendar from "@/components/GitHubCalendar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="main-container w-1/2 mx-auto mb-20">
      <Intro />
      <Experience />
      <Projects />
      <Skills />
      <GitHubCalendar />
      <Footer />  
    </div>
  );
}
