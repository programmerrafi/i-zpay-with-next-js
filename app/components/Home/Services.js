import React from "react";
import ButtonC from "../shared/ButtonC";
import { SiManageiq } from "react-icons/si";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { IoMdBusiness } from "react-icons/io";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import ServiceCart from "../cart/ServiceCart";

function Services() {
  return (
    <section className="bg-bgMain py-20 relative">
      <div className="service-bg absolute w-full h-full top-0 left-0"></div>
      <div className="container relative z-50">
        {/* title */}
        <div className="text-center mb-20">
          <h1 className="md:text-[45px] text-[30px] font-semibold text-colorWhite mb-8 leading-tight">
            Our Service
          </h1>
          <p className="text-sm text-whiteGray mb-10 leading-6 md:font-normal font-thin">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            <br /> aut fugit, sed quia consequuntur magni dolores eos qui
            ratione.
          </p>
        </div>
        {/* Cards */}
        <div className="flex flex-wrap justify-center items-start gap-8">
          {/* card */}
          <ServiceCart
            title="Payment Management"
            icon={<SiManageiq size={50} />}
          />
          <ServiceCart
            title="Personal Dashboard"
            icon={<MdOutlineDashboardCustomize size={50} />}
          />
          <ServiceCart
            title="Integrated Payments"
            icon={<TbDeviceMobileMessage size={50} />}
          />
          <ServiceCart
            title="Business Tracking"
            icon={<IoMdBusiness size={50} />}
          />
          <ServiceCart
            title="Credit & Debit Card"
            icon={<BsFillCreditCard2FrontFill size={50} />}
          />
          {/* button and info */}
          <div className="w-full md:w-[410px] md:h-[290px] p-8 flex justify-center items-center flex-col">
            <p className="text-sm text-whiteGray mb-4 leading-6 text-center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <ButtonC title="VIEW MORE" text="14px" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
