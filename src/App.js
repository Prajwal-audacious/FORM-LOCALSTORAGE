import { React } from "react";
import Form from "./component/Form";
import Table from "./component/table";

const information = () => {
  const info = JSON.parse(localStorage.getItem("data"));
  const arr = [...info];
  console.log(...arr);
  return arr;
};

const App = () => {
  return (
    <>
      <div className="wrapper">
        <div className="bx1">
          <Form />
        </div>
        <div className="bx1">
          <Table data={information()} />
        </div>
      </div>
    </>
  );
};

export default App;
