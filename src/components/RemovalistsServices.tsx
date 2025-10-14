"use client";

import React from "react";
import Image from "next/image";

export default function RemovalistsServices() {
  const states = ["NSW", "VIC", "QLD", "WA", "SA", "ACT", "NT", "TAS"];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6 sm:mb-8">
              Removalists and moving services
            </h2>

            {/* Home removals */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Home removals</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We've been in the moving space since 2014. That's almost a decade of moving! Whether you need house removals locally or interstate, let us start you off on the right foot. Our expert house removalists can help you with every aspect of your home removal from packing and furniture disassembly through to moving your belongings to your new home or office, allowing you to focus on settling in sooner.
              </p>
            </div>

            {/* Furniture removals */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Furniture removals</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We understand your furniture is some of the most valuable assets you'll be moving into your new home or office. That's why it's important to find furniture removalists that specialise in furniture removals and are experienced in handling valuable furniture and fragile items this includes using highly specialised equipment when moving pianos and disassembling pool tables. This is why our furniture removalists can also offer furniture disassembly and reassembly services to make moving furniture more convenient to you.
              </p>
            </div>

            {/* Mini moves */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Mini moves</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                If you only have a small removal, booking small removalists may be more suitable for your mini move. Mini movers can often tailor your relocation needs offer services with packing, unpacking, disassembling and reassembling furniture. When finding small removalists to handle your mini moves, look no further than Find a Mover.
              </p>
            </div>

            {/* Interstate removals */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Interstate removals</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Find a Mover's network extends right across Australia to every major capital city so you can count on us for all your interstate moves, whether it's{" "}
                <a href="#" className="underline hover:text-blue-600">Sydney removalists</a>,{" "}
                <a href="#" className="underline hover:text-blue-600">removalists in Melbourne</a>,{" "}
                <a href="#" className="underline hover:text-blue-600">movers in Brisbane</a>,{" "}
                <a href="#" className="underline hover:text-blue-600">Perth removalists</a> or any other city. We've got interstate removalists to help get you there.
              </p>
            </div>

            {/* Removalists near me */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Removalists near me</h3>
              <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                We have vetted local removalists nationwide. Choose your state to get started.
              </p>
              <div className="flex flex-wrap gap-2">
                {states.map((state, index) => (
                  <React.Fragment key={state}>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm sm:text-base"
                    >
                      {state}
                    </a>
                    {index < states.length - 1 && <span className="text-gray-400">|</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="lg:col-span-1">
            <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12 lg:mt-16">
              {/* Home Removal Image */}
              <div className="relative">
                <Image
                  src="/images/HomeRemoval.png"
                  alt="Home removal services"
                  width={400}
                  height={200}
                  className="rounded-lg sm:rounded-xl object-cover w-full"
                />
              </div>

              {/* Interstate Removal Image */}
              <div className="relative">
                <Image
                  src="/images/interstateremoval.png"
                  alt="Interstate removal services"
                  width={400}
                  height={200}
                  className="rounded-lg sm:rounded-xl object-cover w-full"
                />
              </div>

              {/* Furniture Removal Image */}
              <div className="relative">
                <Image
                  src="/images/furnitureremoal.png"
                  alt="Furniture removal services"
                  width={400}
                  height={200}
                  className="rounded-lg sm:rounded-xl object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
