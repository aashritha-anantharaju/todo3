import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({todo, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todo.map((item) => (
        <TodoItem
          todoDate={item.date}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;