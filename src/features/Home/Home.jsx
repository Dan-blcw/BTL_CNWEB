import React from "react";
import Banner from "./components/Banner";
import NewArrivals from "./components/NewArrivals";
import Collections from "./components/Collections";
import Contact from "./components/Contact";

function Home() {
  return (
    <div className="pt-[var(--height-header)]">
      <Banner />
      <NewArrivals />
      <Collections />
      <Contact />
    </div>
  );
}

export default Home;
