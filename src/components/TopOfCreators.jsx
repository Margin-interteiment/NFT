import React from "react";
import "../App.css";
import ProfileOfImage from "../images/ProfileOfImage.svg";
import ProfileOfImage2 from "../images/ProfileOfImage2.png";
import ProfileOfImage4 from "../images/ProfileOfImage4.png";
import imageOfProfile from "../images/imageOfProfile3.png";

export default function TopOfCreators() {
  return (
    <div className="MainOfTopOfCreators">
      <h1 className="TopOfCreatorsOfTitle">Top Creators</h1>
      <ul className="TopOfCreatorsOfList">
        <li className="TopOfCreatorsOfListItem">
          <div className="TopOfCreatorsOfListItemDiv">
            <img
              src={ProfileOfImage}
              alt="photo of profile"
              className="TopOfCreatorsOfListItemImg"
            />
            <div className="TopOfCreatorsOfDiv">
              <div>
                <p className="TopOfCreatorsOfListItemTextOne">
                  Wzard Dee
                  <span className="TopOfCreatorsOfListItemTextOneSpan">
                    4.89 ETH
                  </span>
                </p>
              </div>

              <div>
                <p className="TopOfCreatorsOfListItemTextTwo">
                  33
                  <span className="TopOfCreatorsOfListItemTextOneSpantwo">
                    Items
                  </span>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="TopOfCreatorsOfListItem">
          <div className="TopOfCreatorsOfListItemDiv">
            <img
              src={ProfileOfImage2}
              alt="photo of profile"
              className="TopOfCreatorsOfListItemImg"
            />
            <div className="TopOfCreatorsOfDiv">
              <p className="TopOfCreatorsOfListItemTextOne">
                Wzard Dee
                <span className="TopOfCreatorsOfListItemTextOneSpan">
                  4.89 ETH
                </span>
              </p>
              <p className="TopOfCreatorsOfListItemTextTwo">
                33
                <span className="TopOfCreatorsOfListItemTextOneSpantwo">
                  Items
                </span>
              </p>
            </div>
          </div>
        </li>
        <li className="TopOfCreatorsOfListItem">
          <div className="TopOfCreatorsOfListItemDiv">
            <img
              src={imageOfProfile}
              alt="photo of profile"
              className="TopOfCreatorsOfListItemImg"
            />
            <div className="TopOfCreatorsOfDiv">
              <p className="TopOfCreatorsOfListItemTextOne">
                Wzard Dee
                <span className="TopOfCreatorsOfListItemTextOneSpan">
                  4.89 ETH
                </span>
              </p>
              <p className="TopOfCreatorsOfListItemTextTwo">
                33
                <span className="TopOfCreatorsOfListItemTextOneSpantwo">
                  Items
                </span>
              </p>
            </div>
          </div>
        </li>
        <li className="TopOfCreatorsOfListItem">
          <div className="TopOfCreatorsOfListItemDiv">
            <img
              src={ProfileOfImage4}
              alt="photo of profile"
              className="TopOfCreatorsOfListItemImg TopOfCreatorsOfListItemImgOfFour"
            />
            <div className="TopOfCreatorsOfDiv">
              <p className="TopOfCreatorsOfListItemTextOne">
                Wzard Dee
                <span className="TopOfCreatorsOfListItemTextOneSpan">
                  4.89 ETH
                </span>
              </p>
              <p className="TopOfCreatorsOfListItemTextTwo">
                33
                <span className="TopOfCreatorsOfListItemTextOneSpantwo">
                  Items
                </span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
