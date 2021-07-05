import React from "react";
import "./SponsorListItem.css";
import { sponsor } from "../data/types";

interface SponsorListItemProps {
  data: sponsor;
}

const SponsorListItem: React.FC<SponsorListItemProps> = ({ data }) => {
  return (
    <>
      <tr className="sponsor__tr">
        <td className="sponsor__text">{data.number}</td>
        <td className="sponsor__text">
          <img className="avatar" src={data.avatar} alt="" />
        </td>
        <td className="sponsor__text">{data.name}</td>
        <td className="sponsor__text">{data.money}</td>
        <td className="sponsor__text">{data.donation}</td>
      </tr>
    </>
  );
};

export default SponsorListItem;
