import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Fleet from "@/components/Fleet";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Fleet />
        <Clients />
        <Testimonials />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
