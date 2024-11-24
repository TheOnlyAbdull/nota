import Sidebar from "../components/Sidebar";
import User from "../components/User";
import TaskBar from "../components/TaskBar";
import { createContext, useState } from "react";
import AddModal from "../AddModal";


const defaultCategories = [
  {
    category: "Work",
    tasks: [
      {
        task: "Attend team meeting",
        completed: false,
        important: false,
      },
      {
        task: "Schedule client call",
        completed: false,
        important: true,
      },
      {
        task: "Schedule family call",
        completed: false,
        important: true,
      },
    ],
  },
  {
    category: "Personal",
    tasks: [
      {
        task: "Go for a run",
        completed: true,
        important: false,
      },
      {
        task: "Read a book",
        completed: false,
        important: true,
      },
      {
        task: "Spend time with family",
        completed: false,
        important: true,
      },
    ],
  },
];

export const TodoContext = createContext();

function AppLayout() {
  const [categories, setCategories] = useState([...defaultCategories]);
  const [active, setActive] = useState("Home");
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState("");
  const [task, setTask] = useState("");
  const [forTask, setForTask] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);


  const mainCat = categories.map((el) => el.category);

  function onActive(e) {
    setActive(e);
  }
  function showModal() {
    setModal(true);
  }
  function handleRemoveModal() {
    setModal(false);
    setCategory("");
    setTask("");
  }
  function handleSubmitCat() {
    handleRemoveModal();
    if (!category && !task) {
      return;
    }
    let newCategories = {
      category: category,
      tasks: [
        {
          task: task,
          completed: false,
          important: false,
        },
      ],
    };
    setCategories((el) => [...el, newCategories]);
  }
  function handleSubmitTask() {
    handleRemoveModal();
    if (!task && task.length >= 3) {
      return;
    }
    const newTask = {
      task,
      completed: false,
      important: false,
    };
    const existingCategoryIndex = categories.findIndex(
      (currCategory) => currCategory.category === category
    );
    console.log(existingCategoryIndex);

    if (existingCategoryIndex !== -1) {
      const updatedCategories = [...categories];
      updatedCategories[existingCategoryIndex].tasks = [
        ...updatedCategories[existingCategoryIndex].tasks,
        newTask,
      ];
      setCategories(updatedCategories);
    } else {
      // Handle the case where the category doesn't exist (optional)
      // console.error(`Category "${newCategory.category}" not found.`);
    }
  }

  return (
    <TodoContext.Provider
      value={{
        categories,
        setCategories,
        active,
        onActive,
        setModal,
        modal,
        showModal,
        handleSubmitCat,
        handleSubmitTask,
        task,
        setTask,
        category,
        setCategory,
        handleRemoveModal,
        mainCat,
        setForTask,
        forTask,
        setActive,
        setShowSideBar,
        showSideBar,
      }}
    >
      <div className="app-layout">
        <Sidebar/>
        <div className="todo-sec">
          {modal && <AddModal />}
          <User setShowSideBar={setShowSideBar}/>
          <TaskBar />
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default AppLayout;
