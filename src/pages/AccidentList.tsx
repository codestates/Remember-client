import React, { useEffect, useState } from "react";
import "./AccidentList.css";
import AccidentListItem from "./AccidentListItem";
import Spinner from "./Spinner";
import { useTypedSelector } from "../hook/useTypedSelector";
import { useActionDispatch } from "../hook/useActionDispatch";
import { useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";

const AccidentList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const accidentState = useTypedSelector((state) => state.accident);
  const { fetchAccident } = useActionDispatch();

  useEffect(() => {
    fetchAccident();
  }, [searchTerm]);

  return accidentState.loading ? (
    <Spinner></Spinner>
  ) : (
    <>
      <SearchBar searchTerm={(text: string) => setSearchTerm(text)}></SearchBar>
      <div className="accident__row">
        {accidentState.accident?.data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (val.title.includes(searchTerm)) {
              return val;
            }
          })
          .map((accident) => (
            <AccidentListItem
              onClick={(accident) => history.push(`/postdetail/${accident.id}`)}
              payClick={(accident) => history.push(`/service/${accident.id}`)}
              data={accident}
              key={accident.id}
            ></AccidentListItem>
          ))}
      </div>
    </>
  );
};

export default AccidentList;
