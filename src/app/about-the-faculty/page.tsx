import Container from "@/components/container";
import React from "react";
import HeroAbout from "./hero";
import Team from "@/components/team";
import Organigram from "./Organigram";

const Page: React.FC = () => {
  return (
    <Container>
      <HeroAbout />
      <Team />
      <Organigram />
    </Container>
  );
};

export default Page;
