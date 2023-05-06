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
    </section>
  );
};

export default Details;
