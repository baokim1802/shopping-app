import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: red;
`;

export default function ErrorMessage({ children }) {
  return <Container>{children}</Container>;
}
