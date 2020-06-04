import React from "react";
import { Button } from "@joor/core-components";

export default function Root(props) {
  return (
    <>
      <section>{props.name} is mounted! yaaaaay</section>
      <Button
        onClick={() => {
          alert("yay!");
        }}
      >
          Alert me!
      </Button>
    </>
  );
}
