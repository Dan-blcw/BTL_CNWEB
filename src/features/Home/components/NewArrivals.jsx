import React from "react";

const ArrivalList = [
  {
    id: 1,
    name: "Nautilus",
    version: "5712/1A-001",
    material: "Stainless steel",
    src: "https://frodos.com.vn/wp-content/uploads/2021/04/Rolex-Platinum-Lady-Datejust-28-Watch-3.jpg",
  },
  {
    id: 2,
    name: "Aqua Terra 150M",
    version: "MASTER CHRONOMETER",
    material: "Steel on Rubber strap",
    src: "https://frodos.com.vn/wp-content/uploads/2021/04/Rolex-Steel-and-White-Gold-Datejust-31-Watch-10.jpg",
  },
  {
    id: 3,
    name: "Nautilus",
    version: "FB-01",
    material: "Stainless steel",
    src: "https://frodos.com.vn/wp-content/uploads/2021/04/Rolex-Datejust-31mm-Yellow-Gold-Ladies-Watch-1.jpg",
  },
];

function NewArrivals() {
  return (
    <div className="pt-14 pb-16 flex flex-col items-center">
      <div>
        <h2 className="uppercase text-center mb-8 text-3xl font-bold">
          New Arrivals
        </h2>
        <div className="flex flex-row gap-6">
          {ArrivalList.map((watch) => {
            return (
              <div className="flex flex-col items-center" key={watch.id}>
                <img className="w-[300px] rounded" src={watch.src} alt="" />
                <h4 className="text-lg font-medium mt-2">{watch.name}</h4>
                <span className="text-sm">{watch.version}</span>
                <span className="text-sm font-thin italic">
                  {watch.material}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
