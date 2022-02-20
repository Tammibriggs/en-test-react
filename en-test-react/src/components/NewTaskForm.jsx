import { useState } from "react";

const NewTaskForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(inputValue, () => setInputValue(""));
  };

  return (
    // Can be better: The fragment used as a wrapper is unnecessary.
    // I advise you to refer to the documentation for examples of using fragments: https://reactjs.org/docs/fragments.html
    <>
      <form className="todolist-form" onSubmit={handleSubmit}>
        {/* 
          Needs correcting: To update the input value like making it empty from the state,
          it needs to be a controlled input. To do that, set the value attribute of the
          input element to be equal to the state value. This way when the state value is set
          to empty, the input value will also be empty.
          You can learn more about this here: https://www.youtube.com/watch?v=IkMND33x0qQhttps://www.youtube.com/watch?v=IkMND33x0qQ
        */}
        <input
          type="text"
          className="todolist-form_input"
          placeholder="Enter task text"
          onChange={handleInputChange}
        />
        <button type="submit" className="todolist-form_submit">
          Add
        </button>
      </form>
    </>
  );
};

export default NewTaskForm;
