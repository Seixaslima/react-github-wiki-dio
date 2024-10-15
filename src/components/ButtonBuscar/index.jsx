import React from "react";
import { ButtonBuscarContainer } from "./styles";

export default function ButtonBuscar({ onClick }) {
  return (
    <ButtonBuscarContainer onClick={onClick}>Buscar</ButtonBuscarContainer>
  );
}
