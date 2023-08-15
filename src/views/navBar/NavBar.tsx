import React, { useEffect, useState } from "react";
import cl from "./navBar.module.css";
import { HashLink as Link } from "react-router-hash-link";
import subMenuIcon from "../../assets/icons/subMenuIcon.svg";
import { Input } from "../search/Input";
import BackgroundLines from "../../components/backgroundLines/BackgroundLines";

interface Props {
  SubmenuRef: React.MutableRefObject<null | HTMLAnchorElement>;
  isOpen: boolean;
}

const menuLinks = {
  subMenu: [
    {
      name: "Лимфопоэз",
      path: `hematopoiesis/lymphopoiesis`,
    },
    {
      name: "Гранулопоэз",
      path: `hematopoiesis/granulopoiesis`,
    },
    {
      name: "Эритропоэз",
      path: `hematopoiesis/erythropoiesis`,
    },
    {
      name: "Тромбопоэз",
      path: `hematopoiesis/thrombopoiesis`,
    },
    {
      name: "Монопоэз",
      path: `hematopoiesis/monopoesis`,
    },
    {
      name: "Аномалии",
      path: `hematopoiesis/anomalies`,
    },
    {
      name: "Лейкоциты в периферии",
      path: `hematopoiesis/leukocytesInPeripheralBlood`,
    },
  ],
  mainMenu: [
    {
      name: "Главная",
      path: "/#root",
    },
    {
      name: "О проекте",
      path: "/#aboutProject",
    },
    {
      name: "Полезная информация",
      path: "/#aboutBloodCells",
    },
  ],
};

const NavBar: React.FC<Props> = ({ isOpen, SubmenuRef }) => {
  const [isBrgMenuOpen, setBrgMenuState] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const toggleMenuStates = () => {
    if (windowWidth <= 840) {
      console.log(`windowWidth <= 840`, windowWidth <= 840);
      setBrgMenuState(!isBrgMenuOpen);
    } else {
      console.log("windowWidth <= 840", windowWidth <= 840);
    }
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth);
  }, [window.innerWidth]);

  return (
    <header className="container" id="main">
      <div onClick={() => setBrgMenuState(!isBrgMenuOpen)} className={`${cl.brgMenu} ${isBrgMenuOpen ? cl.open : ""}`}>
        <span />
      </div>

      <nav className={`${isBrgMenuOpen ? `${cl.menuActive} ${cl.menu}` : cl.menu}`}>
        {isBrgMenuOpen && <BackgroundLines />}

        <ul>
          {menuLinks.mainMenu.map(({ path, name }) => {
            return (
              <li onClick={() => toggleMenuStates()} key={path}>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}

          <li className={cl.submenuBtn}>
            <a href="#" ref={SubmenuRef}>
              Кроветворение
              <img className={`${isOpen ? cl.imgClose : cl.imgOpen}`} src={subMenuIcon} alt="open/close icon" />
            </a>
            <ul onClick={() => toggleMenuStates()} className={`${cl.submenu} ${isOpen ? cl.open : ""}`}>
              {menuLinks.subMenu.map(({ path, name }) => {
                return (
                  <li key={path}>
                    <Link to={path}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </li>

          <Input toggleMenuStates={toggleMenuStates} />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
