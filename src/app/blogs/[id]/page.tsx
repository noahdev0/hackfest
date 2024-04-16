import React from "react";

type Props = {
  params: { id: string };
};

const page = async (props: Props) => {
  const res = await fetch(`/api/blog/${props.params.id}`);
  const data = await res.json();
  console.log(data);


  return <div>page</div>;
};

export default page;
