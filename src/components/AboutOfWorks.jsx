import React from "react";
import "../App.css";
import image1 from "../images/w1.png";
import image2 from "../images/w2.png";
import image3 from "../images/w3.png";
import image4 from "../images/w4.png";

export default function AboutOfWorks() {
  return (
    <div className="MainOfWorks">
      <h1 className="MainOfWorksTitle">How it works</h1>
      <ul className="MainOfWorksList">
        <li className="MainOfWorksListItem">
          <img
            src={image1}
            alt="photo of works"
            className="MainOfWorksListItemImg"
          />
          <p className="MainOfWorksListItemText">Set up your wallet</p>
        </li>
        <li className="MainOfWorksListItem">
          <img
            src={image2}
            alt="photo of works"
            className="MainOfWorksListItemImg"
          />
          <p className="MainOfWorksListItemText">Create your collection</p>
        </li>
        <li className="MainOfWorksListItem">
          <img
            src={image3}
            alt="photo of works"
            className="MainOfWorksListItemImg"
          />
          <p className="MainOfWorksListItemText">Add your NFTs</p>
        </li>
        <li className="MainOfWorksListItem">
          <img
            src={image4}
            alt="photo of works"
            className="MainOfWorksListItemImg"
          />
          <p className="MainOfWorksListItemText">List them for sale</p>
        </li>
      </ul>
    </div>
  );
}
