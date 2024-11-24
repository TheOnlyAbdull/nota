import { FaX } from "react-icons/fa6";
import { useContext } from "react";
import { TodoContext } from "./pages/AppLayout";

function AddModal() {
  const {
    setCategory,
    setTask,
    task,
    category,
    handleRemoveModal,
    handleSubmitCat,
    handleSubmitTask,
    mainCat,
    forTask
  } = useContext(TodoContext);

 
  return (
    <div className="add-modal">
      <div>
        <div className="modal-title">
          <span>Add Category</span>
          <span onClick={handleRemoveModal}>
            <FaX />
          </span>
        </div>
        <div className="modal-input">
          <p>Category:</p>{
          forTask ? (
            <select
              placeholder="select Category"
              name="categories"
              onChange={(e) => setCategory(e.target.value)}
            >
              {mainCat.map((el, i) => {
                return (
                  <option key={i} value={el}>
                    {el}
                  </option>
                );
              })}
            </select>
          ) : (
            <input
              placeholder="Input Category"
              value={category}
              type="text"
              onChange={(e) => setCategory(e.target.value)}
            />
          )}
          <p>Task:</p>
          <textarea
            placeholder="input Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="modal-button">
          <div>
            <button onClick={handleRemoveModal}>Cancel</button>
            <button onClick={forTask ? handleSubmitTask : handleSubmitCat}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
