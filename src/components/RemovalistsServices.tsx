"use client";

import React from "react";
import Image from "next/image";

export default function RemovalistsServices() {
  const services = [
    {
      title: "Home removals",
      description:
        "We’ve been in the moving space since 2014. That’s almost a decade of moving! Whether you need house removals locally or interstate, let us start you off on the right foot. Our expert house removalists can help you with every aspect of your home removal from packing and furniture disassembly through to moving your belongings to your new home or office, allowing you to focus on settling in sooner.",
    },
    {
      title: "Furniture removals",
      description:
        "We understand your furniture is some of the most valuable assets you'll be moving into your new home or office. That's why it's important to find furniture removalists that specialise in furniture removals and are experienced in handling valuable furniture and fragile items. This includes using highly specialised equipment when moving pianos and disassembling pool tables. Our furniture removalists can also offer furniture disassembly and reassembly services to make moving furniture more convenient to you.",
    },
    {
      title: "Mini moves",
      description:
        "If you only have a small removal, booking small removalists may be more suitable for your mini move. Mini movers can often tailor your relocation needs, offering packing, unpacking, disassembling and reassembling furniture. When finding small removalists to handle your mini moves, look no further than Find a Mover.",
    },
    {
      title: "Interstate removals",
      description: (
        <>
          Find a Mover's network extends right across Australia to every major
          capital city so you can count on us for all your interstate moves,
          whether it's{" "}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            Sydney removalists
          </a>
          ,{" "}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            removalists in Melbourne
          </a>
          ,{" "}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            movers in Brisbane
          </a>
          ,{" "}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            Perth removalists
          </a>{" "}
          or any other city. We've got interstate removalists to help get you
          there.
        </>
      ),
    },
  ];

  const states = ["NSW", "VIC", "QLD", "WA", "SA", "ACT", "NT", "TAS"];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT COLUMN — Image Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 mt-14 lg:mt-20">
          {/* Left column of images */}
          <div className="flex flex-col gap-3 md:gap-4">
            <Image
              src="/images/HomeRemoval.png"
              alt="Home removal services"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full h-[230px] md:h-[260px]"
            />
            <Image
              src="/images/interstateremoval.png"
              alt="Interstate removal services"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full h-[230px] md:h-[260px]"
            />
            <Image
              src="/images/furnitureremoal.png"
              alt="Furniture removal services"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full h-[230px] md:h-[260px]"
            />
          </div>

          {/* Right column of images */}
          <div className="flex flex-col gap-3 md:gap-4">
            <Image
              src="/images/removajob.png"
              alt="Professional moving team"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full h-[230px] md:h-[260px]"
            />
            <Image
              src="/images/lady.png"
              alt="Customer service representative"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full h-[230px] md:h-[260px]"
            />
            <Image
              src="/images/oldmanwithlaptop.png.jpg"
              alt="Moving consultation service"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full h-[230px] md:h-[260px]"
            />
          </div>
        </div>

        {/* RIGHT COLUMN — Text Content */}
        <div className="lg:pt-0">
          <div className="mb-8">
            <span className="text-sm font-semibold text-orange-500 tracking-wide uppercase mb-2 block">
              Moving Services
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight font-['DM_Sans']">
              Removalists and moving services
            </h2>
          </div>

          {services.map((service, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-['DM_Sans']">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-['DM_Sans']">
              Removalists near me
            </h3>
            <p className="text-gray-700 mb-4">
              We have vetted local removalists nationwide. Choose your state to
              get started.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {states.map((state, index) => (
                <React.Fragment key={state}>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                  >
                    {state}
                  </a>
                  {index < states.length - 1 && (
                    <span className="text-gray-400">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
