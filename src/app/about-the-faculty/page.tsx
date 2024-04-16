import Container from "@/components/container";
import React from "react";
import HeroAbout from "./hero";
import Team from "@/components/team";

const Page: React.FC = () => {
  return (
    <Container>
      <HeroAbout />
      <Team />
    </Container>
  );
};

export default Page;
