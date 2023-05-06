// import React from "react";
// import { useNavigate } from "react-router-dom";
// // import nophoto from "../../assets/images/No_image_available.svg.jpg";

// const ShowCard = ({ showDetail, idx }) => {
//   const { show } = showDetail;
//   const { name, image, language, genres, schedule, premiered, id } = show;
//   const navigate = useNavigate();
//   const handleNavigate = () => {
//     navigate(`/details/${id}`);
//   };

//   return (
//     <div>
//       <div className="flex overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
//         {/*  <!-- Image --> */}
//         <figure className="flex-1">
//           <img
//             src={
//               image?.medium
//                 ? image.medium
//                 : `https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg`
//             }
//             alt="card"
//             className="object-cover xl:min-h-[295px] min-h-full aspect-auto"
//           />
//         </figure>
//         {/*  <!-- Body--> */}
//         <div className="flex-1 p-6 sm:mx-6 sm:px-0">
//           <header className="flex gap-4 mb-4 h-12">
//             <div>
//               <h3 className="text-xl font-medium text-slate-700">{name}</h3>
//               <p className="text-sm text-slate-400">
//                 {schedule.days && schedule.days}{" "}
//                 {schedule.time && schedule.time}
//               </p>
//             </div>
//           </header>
//           <div>
//             <p>
//               Show language: <span className="text-green-600">{language}</span>
//             </p>
//             <p>
//               Genres:{" "}
//               <span className="text-green-600">
//                 {genres[0]} {genres[1]} {genres[2]}
//               </span>
//             </p>
//             {premiered ? (
//               <p>
//                 Premiered: <span className="text-green-600">{premiered}</span>
//               </p>
//             ) : (
//               <p>
//                 Premiered: <span className="text-green-600">Not Found</span>
//               </p>
//             )}
//           </div>
//           <div className="h-24 flex items-center">
//             <button
//               onClick={handleNavigate}
//               className="inline-flex items-center justify-center h-8 gap-2 px-4 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
//             >
//               <span>Get Details</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShowCard;
