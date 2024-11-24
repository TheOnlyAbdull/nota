import { useContext, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaPlus,
  FaStar,
  FaStarHalfStroke,
  FaTrash,
} from "react-icons/fa6";
import { TodoContext } from "../pages/AppLayout";

function TaskBar() {
  const {
    categories,
    active,
    modal,
    showModal,
    setCategory,
    mainCat,
    setForTask,
    setCategories,
    setActive,
  } = useContext(TodoContext);

  function handleAddTask() {
    if (modal) {
      return console.log("already on");
    } else if (categories.length < 0) {
      return console.log("Add a category first");
    } else {
      setForTask(true);
      setCategory(mainCat[0]);
      showModal();
    }
  }

  return (
    <div className="task-bar">
      <AddTask handleAddTask={handleAddTask} />
      <div className="task-sec">
        {/* <TaskCategory type={currCat} tasks={categories} /> */}
        <TaskCategory
          type={active}
          tasks={categories}
          setCategories={setCategories}
          setActive={setActive}
        />
      </div>
    </div>
  );
}

function AddTask({ handleAddTask }) {
  return (
    <div className="add-task" onClick={handleAddTask}>
      <FaPlus /> <span> New Task</span>
    </div>
  );
}

function TaskCategory({ type, tasks, setCategories, setActive }) {
  const [showTask, setShowTask] = useState(true);
  function handleShowTask() {
    setShowTask((showTask) => !showTask);
  }

  let name, num, emoji, todos, edit;
  //To show completed task
  if (type === "Home") {
    name = "Home";
    // num = categories.filter((category) => category.completed).length;
    num = tasks.reduce((acc, category) => acc + category.tasks.length, 0);
    emoji = "🏠";
    edit = true;
    todos = tasks.flatMap((category) =>
      category.tasks.map((task, index) => {
        const cat = category.category;
        return {
          tasks: task,
          taskIndex: index,
          categoryIndex: tasks.findIndex((index) => index.category === cat),
        };
      })
    );
    // console.log(todos)
    //To show Completed Task
  } else if (type === "Completed") {
    name = "Completed";
    num = tasks.reduce(
      (acc, category) =>
        acc + category.tasks.filter((task) => task.completed).length,
      0
    );
    emoji = "✅";
    edit = true;
    todos = tasks.flatMap((category) =>
      category.tasks
        .filter((task) => task.completed)
        .map((task, index) => {
          const cat = category.category;
          return {
            tasks: task,
            taskIndex: index,
            categoryIndex: tasks.findIndex((index) => index.category === cat),
          };
        })
    );
    // console.log(todos)
    //To show Important Task
  } else if (type === "Important") {
    name = "Important";
    num = tasks.reduce(
      (acc, category) =>
        acc + category.tasks.filter((task) => task.important).length,
      0
    );
    emoji = "⭐";
    edit = true;
    todos = tasks.flatMap((category) =>
      category.tasks
        .filter((task) => task.important)
        .map((task, index) => {
          const cat = category.category;
          return {
            tasks: task,
            taskIndex: index,
            categoryIndex: tasks.findIndex((index) => index.category === cat),
          };
        })
    );
    // console.log(todos);
  } else {
    // Find a category matching the type
    const matchingCategory = tasks.find(
      (category) => category.category === type
    );

    if (matchingCategory) {
      name = matchingCategory.category;
      num = matchingCategory.tasks.length; // Assuming tasks are within the category
      emoji = "✔";
      edit = false;
      todos = matchingCategory.tasks.map((el, index) => {
        let category = matchingCategory.category;
        return {
          tasks: el,
          taskIndex: index,
          categoryIndex: tasks.findIndex(
            (index) => index.category === category
          ),
        };
      });
    } else {
      // Handle the case where no matching category is found (optional)
      console.error(`No category found for type: ${type}`);
    }
  }
  // console.log(todos);

  function checkTask(todoIndex, categoryIndex) {
    const updatedTask = [...tasks];
    updatedTask[categoryIndex].tasks[todoIndex].completed =
      !updatedTask[categoryIndex].tasks[todoIndex].completed;
    setCategories(updatedTask);
  }
  function toggleImportance(todoIndex, categoryIndex) {
    const updatedTask = [...tasks];
    updatedTask[categoryIndex].tasks[todoIndex].important =
      !updatedTask[categoryIndex].tasks[todoIndex].important;
    setCategories(updatedTask);
  }
  function deleteTask(todoIndex, categoryIndex) {
    const updatedTask = [...tasks];
    updatedTask[categoryIndex].tasks.splice(todoIndex, 1);
    setCategories(updatedTask);
  }
  function deleteCategory(e) {
    const updatedCat = [...tasks].filter((cat) => cat.category !== e);
    setActive("Home");
    setCategories(updatedCat);
    console.log(updatedCat);
    // console.log(e)
  }
  return (
    // num === 0 ? <h1 style={{textAlign:'center'}}>👈Create New Category</h1> :
    <div className="tasks-cat">
      <div className="task-cat">
        <span className="show-task" onClick={handleShowTask}>
          {showTask ? <FaAngleUp /> : <FaAngleDown />}
        </span>
        <span className="task-name">
          {emoji} {name}
        </span>
        <span className="task-num">{num}</span>
        {!edit ? (
          <span className="delete-cat" onClick={() => deleteCategory(name)}>
            <FaTrash />
          </span>
        ) : null}
      </div>
      {showTask && (
        <div className="task-todos">
          {todos.map((todo, i) => (
            <p key={i}>
              <span>
                <input
                  checked={todo.tasks.completed}
                  type="checkbox"
                  onChange={() => checkTask(todo.taskIndex, todo.categoryIndex)}
                />
              </span>
              <span className={todo.tasks.completed ? "checked" : ""}>
                {todo.tasks.task}
              </span>

              {!edit ? (
                <span className="hiddenTaskOpt">
                  <span
                    onClick={() =>
                      deleteTask(todo.taskIndex, todo.categoryIndex)
                    }
                  >
                    <FaTrash />
                  </span>
                  <span
                    onClick={() =>
                      toggleImportance(todo.taskIndex, todo.categoryIndex)
                    }
                  >
                    {todo.tasks.important ? <FaStar /> : <FaStarHalfStroke />}
                  </span>
                </span>
              ) : null}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskBar;
