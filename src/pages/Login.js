import React, { Component } from "react";

import Header from "parts/Header";
import AuthPage from "parts/AuthPage";

export default function Login() {

  return (
    <>
      <Header></Header>
      <AuthPage type="login"></AuthPage>
    </>
  );
}
