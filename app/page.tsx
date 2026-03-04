import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatWeAre from "@/components/WhatWeAre";
import HowItWorks from "@/components/HowItWorks";
import ForWho from "@/components/ForWho";
import ProofOfConcept from "@/components/ProofOfConcept";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Nav />
      <Hero />
      <WhatWeAre />
      <HowItWorks />
      <ForWho />
      <ProofOfConcept />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}
