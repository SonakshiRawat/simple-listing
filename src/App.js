
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";
import { useEffect, useState } from "react";
import { action } from "./store/index";
import Employee from "./component/Employee";

function App() {
  const list = useSelector((state) => state.arr.data);
  const nums = useSelector((state) => state.arr.num);

  const dispatch = useDispatch();
  const [num, setnum] = useState(0);

  async function componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    const response = await fetch(
      `https://hirebus-backend.herokuapp.com/getData `,
      requestOptions
    );
    const data = await response.json();
    dispatch(
      action({
        type: "list",
        val: { data },
      })
    );

    if (nums % 2 === 0) {
      setnum(nums);
    }
  }
  useEffect(() => {
    setnum(nums)
    componentDidMount();
  }, []);
// console.log(nums);
  return (
    <div className="App">
      <div className="layer">
        <div className="box">
          <div className="num">
            Number {nums % 2 === 0 ? nums : num||nums}
          </div>
          <div className="list">
            {list.map((n) => (
              <Employee key={uuid()} info={n} />
            ))}
          </div>
          <button className="refresh" onClick={componentDidMount}>
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
