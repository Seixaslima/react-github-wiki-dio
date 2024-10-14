import React from "react";
import { ItemContainer } from "./styles";

export default function ItemRepo() {
  return (
    <ItemContainer>
      <h3>teste</h3>
      <p>/seixaslima/teste</p>
      <a href="/seixaslima/teste">Ver repositorio</a>
      <a
        href="#"
        className="remover"
      >
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}
