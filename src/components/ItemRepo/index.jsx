import React from "react";
import { ItemContainer } from "./styles";

export default function ItemRepo({ repo, handleRemoveRepo }) {
  function handleRemove() {
    handleRemoveRepo(repo.id);
  }
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

      <button
        href="#"
        className="remover"
        onClick={handleRemove}
      >
        Remover
      </button>
      <hr />
    </ItemContainer>
  );
}
