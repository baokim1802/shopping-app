import React from "react";

export default function ListView({
  items,
  render,
  isLoading,
  loadingCount = 10,
  LoadingComponent,
}) {
  console.log(loadingCount);
  return (
    <>
      {isLoading && LoadingComponent
        ? [...Array(loadingCount)].map((_, i) => <LoadingComponent key={i} />)
        : items?.map((e, i) => (
            <React.Fragment key={e.id}>{render(e)}</React.Fragment>
          ))}
    </>
  );
}
