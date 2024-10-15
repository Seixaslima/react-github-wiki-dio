import React, { useState } from "react";
import { ButtonBuscarContainer } from "./styles";

export default function ButtonBuscar({ onClick }) {
  const [tipoBusca, setTipoBusca] = useState(true);
  return (
    <ButtonBuscarContainer>
      <div className="radioGroup">
        <label htmlFor="repos">
          <input
            type="radio"
            name="busca"
            id="repos"
            checked={tipoBusca}
            onChange={() => setTipoBusca(true)}
          />
          Repositorio
        </label>

        <label htmlFor="users">
          <input
            type="radio"
            name="busca"
            id="users"
            checked={!tipoBusca}
            onChange={() => setTipoBusca(false)}
          />
          Usuario
        </label>
      </div>

      <button type="submit">Buscar</button>
    </ButtonBuscarContainer>
  );
}
