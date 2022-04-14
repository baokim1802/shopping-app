import React from "react";
import Input from "../../components/Input";
import Login from "./Login";
import Register from "./Register";
import "./styles.scss";

export default function Auth() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="row">
          <Login />
          <Register />
        </div>
      </div>
    </section>
  );
}
