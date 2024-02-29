import React from "react";

type Props = {};

const Button = (props: Props) => {
  return (
    <button onClick={() => console.log("Clicked")}>Btn From remoteApp2</button>
  );
};

export default Button;
