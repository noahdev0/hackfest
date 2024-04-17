import Container from "@/components/container";
import React from "react";
import HeroSection from "./heroSection";
import EventSection from "@/components/eventSection";
import Blogs from "@/components/blogs";

const LandingPage: React.FC = () => {
  return (
    <Container>
      <HeroSection />
      <EventSection blogsNumber={4} />
      <Blogs blogsNumber={6} />
    </Container>
  );
};

export default LandingPage;
