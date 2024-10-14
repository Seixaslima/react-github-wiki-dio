import { Container } from "./styles";
import GitLogo from "../assets/github.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";

function App() {
  return (
    <Container>
      <img
        src={GitLogo}
        alt="Logo do github"
        width={72}
        height={72}
      />
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;
