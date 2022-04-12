import { Counter } from "./pages/Counter";
import { Chico } from "./components/Chico";
import { Card } from "./components/Card";

import Cachorrinho from "./assets/images/cachorrinho.jpg";

function App() {
  return (
    <>
      <h1>Contador</h1>
      <Counter />
      <Chico />
      <Card img={Cachorrinho}>Isso é um cachorrinho</Card>
    </>
  );
}

export default App;
