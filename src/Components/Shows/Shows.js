import React, { useEffect, useState } from "react";
import ShowCard from "../ShowCard/ShowCard";

const Shows = () => {
  const [show, setShow] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-medium font-mono text-green-600 underline underline-offset-8 text-center mt-8">
        Show List
      </h2>
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-6 container mx-auto my-8">
        {show.map((showDetail, idx) => (
          <ShowCard key={idx} showDetail={showDetail} idx={idx}></ShowCard>
        ))}
      </div>
    </div>
  );
};

export default Shows;
