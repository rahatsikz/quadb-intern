import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import FormModal from "../../Components/FormModal/FormModal";

const Details = () => {
  const loaderData = useLoaderData();
  const { id } = useParams();
  // console.log(id);

  const mainData = loaderData.find((x) => x.show.id === parseInt(id));
  // console.log(mainData);
  const { show } = mainData;
  const { name, image, summary } = show;

  const [data, setData] = useState(mainData);

  const modalClose = () => {
    setData(null);
  };

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
          htmlFor={id}
          className="cursor-pointer inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-emerald-500 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:border-emerald-600 hover:text-emerald-600 focus:border-emerald-700 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none"
        >
          <span>Book a Ticket</span>
        </label>
      </div>

      {data && (
        <FormModal
          data={data}
          setData={setData}
          modalClose={modalClose}
        ></FormModal>
      )}
    </section>
  );
};

export default Details;
