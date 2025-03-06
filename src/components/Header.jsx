import React from "react";
import "../App.css";
import logo from "../images/logo-nft.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <ul className="headerList">
        <li className="headerListItem">
          <img className="HeaderImg" src={logo} alt="logo of header" />
        </li>
        <li className="headerListItem headerListItemLink">
          <Link to="/">Explore</Link>
        </li>
        <li className="headerListItem">
          <Link to="/creators">Creators</Link>
        </li>
        <li className="headerListItem">
          <Link to="/community">Community</Link>
        </li>
        <li className="headerListItemBtn">
          <button className="HeaderBtn" type="button">
            Connect Wallet
          </button>
        </li>
      </ul>
    </header>
  );
}
