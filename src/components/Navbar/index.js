import * as Styles from "./style";
import Logo from "../../assets/Logo.svg";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavbarMenu } from "../MenuNAvBar";

export const Navbar = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState("PT");

  return (
    <Styles.Main>
      <img src={Logo} alt="Logo" width="150px" />
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
          }}
        >
          INÍCIO
        </li>
        <li
          onClick={() => {
            navigate("/Blue");
          }}
        >
          BLUE
        </li>
        <li
          onClick={() => {
            navigate("/Consultoria");
          }}
        >
          CONSULTORIA SAP
        </li>
        <li
          onClick={() => {
            navigate("/Soluções");
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
            }}
          />
        </div>
      </ul>
    </Styles.Main>
  );
};
