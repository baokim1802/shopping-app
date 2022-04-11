import React from "react";
import Feature from "./Feature";

export default function Features() {
  return (
    <section className="pt-7">
      <div className="container">
        <div className="row pb-7 border-bottom">
          <Feature
            title="Free shipping"
            subtitle="From all orders over $100"
            icon="fe fe-truck"
          />
          <Feature
            title="Free returns"
            subtitle="Return money within 30 days"
            icon="fe fe-repeat"
          />
          <Feature
            title="Secure shopping"
            subtitle="You're in safe hands"
            icon="fe fe-lock"
          />
          <Feature
            title="Over 10,000 Styles"
            subtitle="We have everything you need"
            icon="fe fe-tag"
          />
        </div>
      </div>
    </section>
  );
}
