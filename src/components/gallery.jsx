import React from "react";
import Cart from "./Cart";
import datas from "./data/stays.json";
function Gallery() {
  return (
    <div className="mt-16">
      <section className="topbar flex justify-between items-center w-full my-5">
        <p className="font-bold text-2xl">Stays in Finland</p>
        <p className="text-sm text-gray1">12+ stays</p>
      </section>
      <section className="boxs grid sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 my-2 sm:justify-between">
        {datas.map((data, id) => {
          return (
            <Cart
              key={id}
              title={data.title}
              type={data.type}
              image={data.photo}
              city={data.city}
              country={data.country}
              maxGuests={data.maxGuests}
              beds={data.beds}
              superHost={data.superHost}
              rating={data.rating}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Gallery;
