import { Container } from "./styles";
import GitLogo from "../assets/github.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";
import ButtonBuscar from "../components/ButtonBuscar";

function App() {
  const [repos, setRepos] = useState([]);

  return (
    <Container>
      <img
        src={GitLogo}
        alt="Logo do github"
        width={72}
        height={72}
      />
      <Input />
      <ButtonBuscar />
      <ItemRepo />
    </Container>
  );
}

export default App;
