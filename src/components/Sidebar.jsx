import { useContext } from "react";
import { TodoContext } from "../pages/AppLayout";
import { FaArrowRightArrowLeft, FaGripVertical, FaPlus } from "react-icons/fa6";
import { NotaContext } from "../context/NotaContexts";

function Sidebar() {
  const {
    categories,
    active,
    onActive,
    setForTask,
    showModal,
    showSideBar,
    setShowSideBar,
  } = useContext(TodoContext);
  const { firstName, lastName } = useContext(NotaContext);
  function handleAddCategory() {
    setForTask(false);
    showModal();
  }

  return (
    // <div className='side-bar'>
    <div className={`side-bar ${showSideBar ? "active-bar" : ""}`}>
      <div className="nota-intro">
        <div className="user-logo">
          <div className="layout-logo">N!</div>
          <div className="nota-user">
            <p className="nota-user-logo">Nota.</p>
            <p className="nota-user-name">
              {firstName} {lastName}
            </p>
          </div>
        </div>
        <div className="nota-arrow" onClick={() => setShowSideBar(false)}>
          <FaArrowRightArrowLeft />
        </div>
      </div>

      {/* TODO- CATEGORY */}
      <div className="todo-category">
        <p className="todo-cat-title">Private</p>

        {/* Private categories */}
        <div>
          {categories.map((data, i) => {
            const category = data.category;
            const num = data.tasks.length;
            return (
              <AddedCategory
                active={active}
                onActive={onActive}
                category={category}
                setShowSideBar={setShowSideBar}
                num={num}
                key={i}
              />
            );
          })}
        </div>
        {/* Add categoty */}
        <div className="add-cat" onClick={handleAddCategory}>
          <FaPlus /> <span>Create new list</span>
        </div>
        <div className="all-categories">
          <p className="todo-cat-title">Default</p>

          <div className="default-categories">
            <DefaultCategory
              active={active}
              onActive={onActive}
              type="home"
              categories={categories}
            />
            <DefaultCategory
              active={active}
              onActive={onActive}
              type="completed"
              categories={categories}
            />
            <DefaultCategory
              active={active}
              onActive={onActive}
              type="important"
              categories={categories}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AddedCategory({ category, num, onActive, active, setShowSideBar }) {
  const activeCat = active === category ? "cat-active" : "";
  // console.log(active);
  return (
    <div
      className={`default-category ${activeCat}`}
      // className={`default-category`}
      onClick={() => {
        onActive(category);
        setShowSideBar(false);
      }}
    >
      {/* // <div className="default-category"> */}
      <p>
        <span className="cat-movable">
          <FaGripVertical />
        </span>
        <span className="cat-emoji">✔ </span>
        {category}
      </p>
      <p className="cat-num">{num}</p>
    </div>
  );
}

function DefaultCategory({ type, categories, onActive, active }) {
  const { setShowSideBar } = useContext(TodoContext);
  let name, num, emoji, activeCat;
  // const category = type === 'completed' ? categories

  if (type === "completed") {
    name = "Completed";
    num = categories.reduce(
      (acc, category) =>
        acc + category.tasks.filter((task) => task.completed).length,
      0
    );
    emoji = "✅";
    activeCat = active === name ? "cat-active" : "";
  } else if (type === "home") {
    name = "Home";
    num = categories.reduce((acc, category) => acc + category.tasks.length, 0);
    emoji = "🏠";
    activeCat = active === name ? "cat-active" : "";
  } else if (type === "important") {
    name = "Important";
    num = categories.reduce(
      (acc, category) =>
        acc + category.tasks.filter((task) => task.important).length,
      0
    );
    emoji = "⭐";
    activeCat = active === name ? "cat-active" : "";
  }
  return (
    <div
      className={`default-category ${activeCat}`}
      onClick={() => {
        onActive(name);
        setShowSideBar(false);
      }}
    >
      {/* // <div className="default-category"> */}
      <p>
        <span className="cat-movable">{/* <FaGripVertical /> */}</span>
        <span className="cat-emoji">{emoji} </span>
        {name}
      </p>
      <p className="cat-num">{num}</p>
    </div>
  );
}

export default Sidebar;
