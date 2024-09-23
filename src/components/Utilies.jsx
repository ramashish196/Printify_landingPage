import React from "react";

const Utilies = (props) => {
  return (
    <div className="relative group w-full">
      <li className="cursor-pointer hover:text-green-600">{props.key0}</li>
      {/* Dropdown will show on hover with increased width */}
      <ul className="absolute left-0 hidden group-hover:block mt-2 w-48 bg-white border border-gray-300 shadow-md rounded-md transition-all duration-300 ease-in-out transform scale-100 group-hover:scale-105">
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
          {props.key1}
        </li>
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
          {props.key2}
        </li>
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
          {props.key3}
        </li>
        {props?.key4 && (
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
            {props?.key4}
          </li>
        )}
        {props?.key5 && (
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
            {props?.key5}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Utilies;

// import React from "react";

// const Utilies = (props) => {
//   return (
//     <div className="relative group w-full">
//       <li className="cursor-pointer hover:text-green-600 text-center">
//         {props.key0}
//       </li>
//       {/* Dropdown will show on hover with increased width */}
//       <ul className="absolute left-0 hidden group-hover:block mt-2 w-48 bg-white border border-gray-300 shadow-md rounded-md transition-all duration-300 ease-in-out">
//         <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-center">
//           {props.key1}
//         </li>
//         <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-center">
//           {props.key2}
//         </li>
//         <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-center">
//           {props.key3}
//         </li>
//         {props?.key4 && (
//           <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-center">
//             {props.key4}
//           </li>
//         )}
//         {props?.key5 && (
//           <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-center">
//             {props.key5}
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Utilies;
