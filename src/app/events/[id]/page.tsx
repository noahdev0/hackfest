import Container from "@/components/container";
import React from "react";

type Props = {
  params: { id: string };
};

const Events: React.FC<Props> = (props) => {
  return <Container>Events {props.params.id} </Container>;
};

export default Events;
