import React from "react";
import { setBackgroundImage } from "../utils/helpers";

function Testmonial() {
  return (
    <section className="bg-bgMain py-20">
      <div className="container">
        <div
          className="w-full h-full"
          style={setBackgroundImage("images/testi-bg.png")}
        >
          <h1>Hello</h1>
        </div>
      </div>
    </section>
  );
}

export default Testmonial;
