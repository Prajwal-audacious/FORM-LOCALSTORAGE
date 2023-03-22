import { React, useState } from "react";
import style from "../component/form.module.css";

const Form = () => {
  const [input, setInput] = useState({});
  const [formdata, setFormData] = useState([]);

  const getValue = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleInput = (events) => {
    events.preventDefault();
    setFormData([...formdata, input]);
    // console.log(input.firstname)
    // console.log(formdata)
    localStorage.setItem("data", JSON.stringify(formdata));
  };

  return (
    <>
      <div className={style.forms}>
        <form onSubmit={handleInput}>
          <label htmlFor="Firstname">Firstname</label>
          <br />
          <input
            type="text"
            className={style.content}
            placeholder="firstname"
            name="firstname"
            onChange={(e) => getValue(e)}
          />
          <br />
          <label htmlFor="">Lastname</label>
          <br />
          <input
            className={style.content}
            type="text"
            placeholder="lastname"
            name="lastname"
            onChange={(e) => getValue(e)}
          />
          <br />
          <label htmlFor="">Number</label>
          <br />
          <input
            type="text"
            className={style.content}
            placeholder="Number"
            name="number"
            onChange={(e) => getValue(e)}
          />
          <br />
          <label htmlFor="Age">Age</label>
          <br />
          <input
            type="text"
            className={style.content}
            placeholder="age"
            name="age"
            onChange={(e) => getValue(e)}
          />
          <br />
          <label htmlFor="Password">Password</label>
          <br />
          <input
            type="password"
            className={style.content}
            placeholder="password"
            name="password "
            onChange={(e) => getValue(e)}
          />
          <br />
          <button className={style.btn} type="submit">
            Submit Form
          </button>
          <br />
        </form>
      </div>
    </>
  );
};

export default Form;
