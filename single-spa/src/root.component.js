import React, { useState } from "react";
import { Button } from "@joor/core-components";

export default function Root(props) {
  const [value, setValue] = useState({ test: "is mounted" });
  return (
    <>
      <section>
        {props.name} {value.test}
      </section>
      <Button
        onClick={() => {
          alert("yay!");
        }}
      >
        Alert me!
      </Button>
      <br />
      <Button
        onClick={() => {
          setValue(undefined);
        }}
      >
        Break stuff
      </Button>
    </>
  );
}
