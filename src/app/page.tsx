import Container from "@/components/container";
import React from "react";
import HeroSection from "./heroSection";
import NewsSection from "@/components/newsSection";
import EventSection from "@/components/eventSection";
import Blogs from "@/components/blogs";

const LandingPage: React.FC = () => {
  return (
    <Container>
      <HeroSection />
      {/* <NewsSection /> */}
      <EventSection />
      <Blogs />
    </Container>
  );
};

export default LandingPage;
