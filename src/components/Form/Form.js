import React from "react";

export default function LoginForm({ children, ...res }) {
  return <form {...res}>{children}</form>;
}
