import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faPeopleGroup,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import "./Nav.css";

export const Nav = () => {
  interface Nav {
    id: number;
    name: string;
    icon?: ReactNode;
  }

  const nav: Nav[] = [
    {
      id: 1,
      name: "Notre boutique",
      icon: <FontAwesomeIcon icon={faCartShopping} />,
    },
    {
      id: 2,
      name: "Qui somme nous ?",
      icon: <FontAwesomeIcon icon={faPeopleGroup} />,
    },
    {
      id: 3,
      name: "Nous contacter",
      icon: <FontAwesomeIcon icon={faPaperPlane} />,
    },
  ];
  return (
    <nav className="header__nav">
      <ul>
        {nav.map((item) => (
          <li key={item.id}>
            <span className="header__nav__icon"> {item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};
