import React from "react";
import star from "/icons/star.png";

function Cart({ title, type, image, beds, superHost, rating }) {
  return (
    <div>
      <img
        className="w-full sm:max-w-md object-cover rounded-xl aspect-[13/9]"
        src={image}
        alt=""
      />
      <section className="my-2">
        <div
          className="text-gray-600/70 text-xs
         flex items-center gap-2 justify-between h-10 "
        >
          <p>
            {superHost && (
              <span className="py-1 px-3 uppercase ring-2 ring-black rounded-full text-black tracking-tighter font-bold mr-2">
                super host
              </span>
            )}{" "}
            <span>
              {type} {beds !== null && <span>. {beds} beds</span>}
            </span>
          </p>

          <span className="w-10 flex justify-self-end -translate-x-1 -z-10">
            <img width={18} src={star} alt="" />
            <span className="pl-1">{rating}</span>
          </span>
        </div>
        <p className="font-semibold text-md">{title}</p>
      </section>
    </div>
  );
}

export default Cart;
