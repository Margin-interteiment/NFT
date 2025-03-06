import React from "react";
import "../App.css";
import arrow from "../images/Arrow.svg";
import { Link } from "react-router-dom";

export default function HeaderOfContent() {
  return (
    <div className="MainHeaderOfContent">
      <div className="ContentOfSell">
        <p className="ContentOfSellText">
          Explore, Buy and Sell the
          <span className="ContentOfSellTextSpan"> Best NFTs !</span>
        </p>
        <div className="ContentOfSellBtn">
          <button className="ContentOfSellExplore">Explore</button>
          <button className="ContentOfSellCreate">Create</button>
        </div>

        <ul className="ContentOfSellList">
          <li className="ContentOfSellListItem">
            32k+
            <span className="ContentOfSellListItemSpan">Artworks</span>
          </li>
          <li className="ContentOfSellListItem">
            20k+
            <span className="ContentOfSellListItemSpan">Auctions</span>
          </li>
          <li className="ContentOfSellListItem">
            12k+
            <span className="ContentOfSellListItemSpan">Creators</span>
          </li>
        </ul>
      </div>
      <div className="MainContentOfBid">
        <div className="ContentOfBid"></div>
        <div className="Card">
          <div className="CardOfCurrent">
            <div className="CardOfCurrentContent">
              <p className="CardOfCurrentContentText CardOfCurrentContentTextOne">
                Current bid
                <span className="CardOfCurrentContentSpan">0.99 ETH</span>
              </p>
              <p className="CardOfCurrentContentText CardOfCurrentContentTextTwo">
                Ends in
                <span className="CardOfCurrentContentSpan">25 hrs</span>
              </p>
            </div>
          </div>
          <div className="CardOfArtist">
            <p className="CardOfArtistOfText">
              Artist
              <span className="CardOfArtistOfSpan">@wzard</span>
            </p>

            <button className="CardOfArtistOfBtn">Start Bid</button>
          </div>
        </div>
      </div>

      <div className="ArrowOfHeader">
        <Link to="">
          <img src={arrow} alt="arrow" className="arrow" />
        </Link>
      </div>
    </div>
  );
}
