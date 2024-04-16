import Container from "@/components/container";
import React from "react";
import HeroSection from "./heroSection";
import NewsSection from "@/components/newsSection";
import EventSection from "@/components/eventSection";

const LandingPage: React.FC = () => {
  return (
    <Container>
      <HeroSection />
      <NewsSection />
      <EventSection />
    </Container>
  );
};

export default LandingPage;
