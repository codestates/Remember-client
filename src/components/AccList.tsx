import React, { useEffect, useState } from "react";
import SearchBar from "../pages/SearchBar";
import "./AccList.css";
import { dummyData } from "../data/dummyData";
import AccidentList from "../pages/AccidentList";

const AccList: React.FC = () => {
  // const [data, setdata] = useState(dummyData);

  // const { accident, error, loading } = useSelector(
  //   (state: Root) => state.accident
  // );
  // const dispatch = useDispatch();
  // const { fetchAccident } = bindActionCreators(accidentCreators, dispatch);
  // console.log(accident, "아무것도없다고??");

  // useEffect(() => {
  //   fetchAccident();
  // }, []);

  return (
    <section className="accList__container">
      <SearchBar></SearchBar>
      <AccidentList></AccidentList>
      {/* <AccidentList data={data}></AccidentList> */}
    </section>
  );
};

export default AccList;
