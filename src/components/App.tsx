import "./App.css";
import { Header } from "./Header/Header";
import { Plants } from "./Plants/Plants";
export const App = () => {
  return (
    <main className="App">
      <Header />
      <Plants />
    </main>
  );
};
