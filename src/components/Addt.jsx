import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Addt({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const handleName = (event) => {
    setTodoName(event.target.value);
  };
  const handleDate = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAdd = () => {
    console.log("sending to parent0", todoName, todoDate);
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleName}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addt;
