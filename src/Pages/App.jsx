import { Container } from "./styles";
import GitLogo from "../assets/github.png";

function App() {
  return (
    <Container>
      <img
        src={GitLogo}
        alt="Logo do github"
        width={72}
        height={72}
      />
    </Container>
  );
}

export default App;
