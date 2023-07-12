import React from "react";
import { review1,review2 } from "../asserts";
const TimeLine = () => {
  return (
    <div className="py-5">
     <h1 className="font-semibold text-2xl my-2">Client FeedBacks</h1>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <img src={review1} className="rounded-3xl"/>
        </li>
        <li class="ml-3.5 mt-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <img src={review2} className="rounded-3xl"/>
        </li>
      </ol>
    </div>
  );
};

export default TimeLine;
