import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const loaderData = useLoaderData();
  const { id } = useParams();
  console.log(id);

  const mainData = loaderData.find((x) => x.show.id === parseInt(id));
  // console.log(mainData);
  const { show } = mainData;
  const { name, image, summary } = show;
  return (
    <section className="container mx-auto">
      <p className="text-xl text-center my-8">
        <span className="text-green-600">Show Name:</span>{" "}
        <span className="text-gray-500 ">{name}</span>
      </p>
      <img src={image.medium} className="mx-auto my-4" alt="" />

      <p className="text-lg text-center max-w-2xl mx-auto">
        <span className="underline underline-offset-8 text-green-600">
          Plot Summary
        </span>{" "}
        <span className="block text-gray-500 mt-4">{summary.slice(3, -4)}</span>
      </p>

      <div className="text-center my-8">
        <label
          htmlFor="my-modal-3"
          className="cursor-pointer inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-emerald-500 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:border-emerald-600 hover:text-emerald-600 focus:border-emerald-700 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none"
        >
          <span>Book a Ticket</span>
        </label>
      </div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
