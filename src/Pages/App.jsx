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

  async function findRepos() {
    api
      .get(`repos/${currentRepo}`)
      .then(result => result.data)
      .then(newRepo => {
        if (!repos.some(repo => repo.id === newRepo.id))
          setRepos([...repos, newRepo]);
      })
      .catch(err => console.log("repositorio não encontrado"));
  }

  async function findUser() {
    api
      .get(`users/${currentRepo}/repos`)
      .then(result => result.data)
      .then(userRepos => {
        return userRepos.filter(
          userRepo => !repos.find(repo => repo.id === userRepo.id)
        );
      })
      .then(newRepos => setRepos([...repos, ...newRepos]))
      .catch(err => console.log("usuario não encontrado"));

    // repos.forEach(repo => {
    //   userRepos = userRepos.filter(rep => rep.id !== repo.id);
    // });
    // setRepos({ ...repos, ...userRepos });
  }

  async function handleSearshRepos(tipoDeBusca) {
    if (currentRepo === "") return;

    if (tipoDeBusca === "repos") {
      findRepos();
    } else {
      findUser();
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
