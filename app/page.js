import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectsSlideshow from "@/components/ProjectsSlideshow";
import OngoingProjects from "@/components/OngoingProjects";
import Services2 from "@/components/Services2";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        {/* <Services /> */}
        <Services2 />
        <ProjectShowcase />
        <OngoingProjects />
        <Process />
        <ProjectsSlideshow />
        {/* <Portfolio /> */}
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
