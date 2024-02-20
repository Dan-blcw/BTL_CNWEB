import React from "react";

function Collections() {
  return (
    <div className="mt-14 flex flex-col items-center">
      <h2 className="uppercase text-3xl font-bold mb-8">Our Collections</h2>
      <div className="relative">
        <img
          className="w-full"
          src="https://blog.crownandcaliber.com/wp-content/uploads/2015/03/CC-x-GQ-6355.jpg"
          alt=""
        />
        <iframe
          width="560"
          height="315"
          className="absolute top-1/4 left-1/4 w-[800px] h-[500px]"
          src="https://www.youtube.com/embed/nyaBARDPqGQ?si=95nBoJKRc1f-DNvf"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Collections;
