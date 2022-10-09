import React from "react";
import { setBackgroundImage } from "../utils/helpers";
import Image from "next/image";

function Testmonial() {
  return (
    <section className="bg-bgMain py-20">
      <div className="container">
        <div className="w-full h-full test-monial">
          <div className="w-full">
            <div className="flex justify-center">
              <img
                src="/icons/quoite-left-black.png"
                // width="100"
                // height="100"
                // objectFit="contain"
                className="-mt-2 w-24 h-24 object-contain"
              />
            </div>
            <h1 className="text-center text-colorWhite text-lg font-medium pt-10 pb-6 leading-7">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
              <br /> laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi
              <br /> architecto beatae vitae dicta sunt explicabo.
            </h1>
            <div className="flex justify-center items-center gap-6 pb-16">
              <Image
                src="/images/testi-foto.jpg"
                width="80"
                height="80"
                objectFit="contain"
                className="rounded-full"
              />
              <div className="">
                <h3 className="text-blackSecondary font-semibold text-base mb-2">
                  Jane Daya
                </h3>
                <p className="text-sm text-colorWhite">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testmonial;
