import React from "react";
import PropTypes from "prop-types";

const SeriveDetails = ({ title, description, frontEnd, backendEnd,sql }) => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-20">
      <h1 className="text-2xl my-6 font-semibold">{title}</h1>
      
      <div className="container  py-6 text-left mx-auto px-2 sm:px-4 md:px-6 my-8">
        <div className="flex flex-col sm:flex-row border-gray-200 border-b mt-4">
          <p className="font-semibold sm:w-1/3">Description</p>
          <p className="font-normal sm:w-2/3 ">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row border-gray-200 border-b mt-4">
          <p className="font-semibold sm:w-1/3">Front End:</p>
          <p className="font-normal sm:w-2/3 ">{frontEnd.join(" / ")}</p>
        </div>
        <div className="flex flex-col sm:flex-row border-gray-200 border-b mt-4">
          <p className="font-semibold sm:w-1/3">Backend End (API):</p>
          <p className="font-normal sm:w-2/3 ">{backendEnd.join(" / ")}</p>
        </div>
        <div className="flex flex-col sm:flex-row border-gray-200 border-b mt-4">
          <p className="font-semibold sm:w-1/3">Databases</p>
          <p className="font-normal sm:w-2/3 ">{sql.join(" / ")}</p>
        </div>
      </div>
    </div>
  );
};

SeriveDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  frontEnd: PropTypes.array.isRequired,
  backendEnd: PropTypes.array.isRequired,
  sql: PropTypes.array.isRequired,
};

export default SeriveDetails;
