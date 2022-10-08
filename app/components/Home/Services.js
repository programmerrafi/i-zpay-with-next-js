import React from "react";
import { setBackgroundImage } from "../utils/helpers";
import ButtonC from "../shared/ButtonC";

function Services() {
  return (
    <section className="bg-bgMain py-20">
      <div className="container">
        <div className="text-center">
          <h1 className="text-[45px] font-semibold text-colorWhite mb-8 leading-tight">
            Our Service
          </h1>
          <p className="text-sm text-whiteGray mb-10 leading-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            <br /> aut fugit, sed quia consequuntur magni dolores eos qui
            ratione.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
