import React from "react";
import "../App.css";
import binance from "../images/binance.png";
import bitmex from "../images/bitmex.png";
import blockchain from "../images/blockchain.png";
import coinbase from "../images/coinbase.png";
import { Link } from "react-router-dom";

export default function OurPartners() {
  return (
    <div>
      <ul className="OurPartnersList">
        <li className="OurPartnersListItem">
          <Link className="OurPartnersLink">
            <img
              src={coinbase}
              alt="photo of partners"
              className="OurPartnersImg"
            />
          </Link>
        </li>
        <li className="OurPartnersListItem blockchain">
          <Link className="OurPartnersLink">
            <img
              src={blockchain}
              alt="photo of partners"
              className="OurPartnersImg"
            />
          </Link>
        </li>
        <li className="OurPartnersListItem">
          <Link className="OurPartnersLink">
            <img
              src={binance}
              alt="photo of partners"
              className="OurPartnersImg"
            />
          </Link>
        </li>
        <li className="OurPartnersListItem">
          <Link className="OurPartnersLink">
            <img
              src={bitmex}
              alt="photo of partners"
              className="OurPartnersImg"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
