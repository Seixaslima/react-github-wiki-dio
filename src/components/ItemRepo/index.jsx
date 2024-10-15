import React from "react";
import { ItemContainer } from "./styles";

export default function ItemRepo({ repo }) {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p> {repo.full_name} </p>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Ver repositorio
      </a>
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
