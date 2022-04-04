import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section>
      <div
        className="row no-gutters d-block d-lg-flex flickity flickity-lg-none"
        data-flickity='{"watchCSS": true}'
      >
        <CategoryCard
          type="Women"
          backgroundImage="url(/img/covers/cover-1.jpg)"
        />
        <CategoryCard
          type="Men"
          backgroundImage="url(/img/covers/cover-2.jpg)"
        />
        <CategoryCard
          type="Kids"
          backgroundImage="url(/img/covers/cover-3.jpg)"
        />
      </div>
    </section>
  );
}
