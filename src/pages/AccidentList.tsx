import React, { useEffect, useState } from "react";
import "./AccidentList.css";
import { dummyList } from "../data/types";
import AccidentListItem from "./AccidentListItem";
import Spinner from "./Spinner";

interface AccidentListProps {
  data: dummyList[];
}
const AccidentList: React.FC<AccidentListProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return isLoading ? (
    <Spinner></Spinner>
  ) : (
    <div className="accident__row">
      {data.map((datas) => (
        <AccidentListItem data={datas} key={datas.id}></AccidentListItem>
      ))}
    </div>
  );
};

export default AccidentList;
