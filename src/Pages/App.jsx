import { Container } from "./styles";
import GitLogo from "../assets/github.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";
import ButtonBuscar from "../components/ButtonBuscar";
import { api } from "../services/api";

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState("");

  async function handleSearshRepos() {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      if (!repos.some(repo => repo.id === data.id)) setRepos([...repos, data]);
    }
  }

  function handleRemoveRepo(id) {
    const reposFiltrados = repos.filter(repo => repo.id !== id);
    setRepos(reposFiltrados);
  }

  return (
    <Container>
      <img
        src={GitLogo}
        alt="Logo do github"
        width={72}
        height={72}
      />
      <Input
        value={currentRepo}
        onChange={e => setCurrentRepo(e.target.value)}
      />
      <ButtonBuscar onClick={handleSearshRepos} />
      {repos.map(repo => (
        <ItemRepo
          key={repo.id}
          repo={repo}
          handleRemoveRepo={handleRemoveRepo}
        />
      ))}
    </Container>
  );
}

export default App;
