import TodoItem from "./TodoItem";
import styles from "./Items.module.css";

// eslint-disable-next-line react/prop-types
const Items = ({ myItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {myItems.map((item) => (
        <TodoItem
          todoDate={item.date}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
          key={Math.random()}
        >
        </TodoItem>
      ))}
    </div>
  );
};

export default Items;
