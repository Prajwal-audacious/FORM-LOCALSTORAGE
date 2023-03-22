import { React, useEffect, useState } from "react";
import style from "../component/form.module.css";

const Table = ({ data }) => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    setMyData(data);
  }, [data]);
  return (
    <div className={style.tbl}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Contact</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {myData?.map((el, i) => {
            return (
              <>
                <tr>
                  <td>{i + 1}</td>
                  <td>{el.firstname}</td>
                  <td>{el.lastname}</td>
                  <td>{el.number}</td>
                  <td>{el.age}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
