import "./Header.css";
import { Nav } from "./Nav/Nav";
export const Header = () => (
  <header className="header">
    <div className="header__logo">
      <h1 className="header__logo__title">Plants'</h1>
      <p className="header__logo__tagline">
        Achetez vos plantes en toute sérénité.
      </p>
    </div>
    <Nav />
  </header>
);
