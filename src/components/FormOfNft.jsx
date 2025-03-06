import React, { useState } from "react";
import "../App.css";

export default function FormOfNft() {
  const [formData, setFormData] = useState({
    valueOfInput: "",
  });

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      valueOfInput: event.target.value,
    }));
  };

  return (
    <div className="MainOfForm">
      <h1 className="MainOfFormTitle">Ready for Next NFT Drop?</h1>

      <form className="form">
        <div className="formOfContent">
          <input
            className="formOfContentInput"
            type="email"
            placeholder="info@gmail.com"
            value={formData.valueOfInput}
            onChange={handleChange}
            required
          />
          <button className="formOfContentBtn" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
