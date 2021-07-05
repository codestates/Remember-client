import React, { useState } from "react";
import SponsorList from "../pages/SponsorList";
import "./Sponsor.css";
import { sponsorList } from "../data/dummyData";

const Sponsor: React.FC = () => {
  const [data, setData] = useState(sponsorList);

  return (
    <section id="sponsor">
      <SponsorList data={data}></SponsorList>
    </section>
  );
};

export default Sponsor;
