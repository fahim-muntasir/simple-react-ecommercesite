import React from "react";

export default function Button({ children, ...res }) {
  return <button {...res}>{children}</button>;
}
