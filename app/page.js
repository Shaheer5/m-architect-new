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

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProjectsSlideshow />
        <OngoingProjects />
        <Process />
        {/* <Portfolio /> */}
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
