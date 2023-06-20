import * as Styles from "./style";
import Logo from "../../assets/Logo.svg";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { NavbarMenu } from "../MenuNAvBar";

export const Navbar = () => {
  let navigate = useNavigate();
  // const [value, setValue] = useState("PT");

  return (
    <Styles.Main>
      <img
        src={Logo}
        alt="Logo"
        width="150px"
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
      />
      {/* <div className="Selector">
        <select name="select" defaultValue={value}>
          <option value="PT">PT</option>
          <option value="ES">ES</option>
          <option value="EN">EN</option>
        </select>
      </div> */}
      <div className="MenuBar">
        <NavbarMenu />
      </div>
      <ul>
        <li
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          INÍCIO
        </li>
        <li
          onClick={() => {
            navigate("/Sobre");
            window.scrollTo(0, 0);
          }}
        >
          SOBRE NÓS
        </li>
        <li
          onClick={() => {
            navigate("/Consultoria");
            window.scrollTo(0, 0);
          }}
        >
          CONSULTORIA SAP
        </li>
        <li
          onClick={() => {
            navigate("/Soluções");
            window.scrollTo(0, 0);
          }}
        >
          SOLUÇÕES
        </li>
        <div className="Button">
          <Button
            bg="#0076e2"
            text="CONTATO"
            onClick={() => {
              navigate("/Contato");
              window.scrollTo(0, 0);
            }}
          />
        </div>
      </ul>
    </Styles.Main>
  );
};
