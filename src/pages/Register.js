import React, { Component } from "react";

import Header from "parts/Header";
import AuthPage from "parts/AuthPage";

export default function Register() {

  return (
    <>
      <Header></Header>
      <AuthPage type="register"></AuthPage>
    </>
  );
}
