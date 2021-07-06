import React, { useEffect, useState } from "react";
import "./SponsorList.css";
import { sponsor } from "../data/types";
import SponsorListItem from "./SponsorListItem";
import Spinner from "./Spinner";

interface SponsorListProps {
  data: sponsor[];
}

const SponsorList: React.FC<SponsorListProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return isLoading ? (
    <Spinner></Spinner>
  ) : (
    <div className="sponsor__table">
      <table className="sponsor__container">
        <thead className="sponsor__thead">
          <tr className="sponsor__tr">
            <th className="sponsor__top__text">Id</th>
            <th className="sponsor__top__text">Avatar</th>
            <th className="sponsor__top__text">Name</th>
            <th className="sponsor__top__text">Sponsorship money</th>
            <th className="sponsor__top__text">Number of donations</th>
          </tr>
        </thead>
        <tbody className="sponsor__tbody">
          {data.map((datas) => (
            <SponsorListItem data={datas} key={datas.id}></SponsorListItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SponsorList;
