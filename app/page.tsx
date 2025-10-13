import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Stack from "@/components/stack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHubHeatmap from "@/components/GitHubHeatmap";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="main-container w-1/2 mx-auto mb-20">
      <Header />
      <Intro /> 
      <Stack />
      <hr className="mt-12 border-gray-700" />
      <Experience />
      <hr className="mt-12 border-gray-700" />
      <Projects />
      <hr className="my-8 border-gray-700" />
      <GitHubHeatmap />
      <Technologies />
      <Footer />
    </div>
  );
}
