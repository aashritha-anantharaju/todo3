import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import styles from "./Items.module.css";


const Items = ({ myItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {myItems.map((item) => (
        <TodoItem
          todoDate={item.date}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
          key={Math.random()}
        ></TodoItem>
      ))}
    </div>
  );
};

Items.propTypes = {
  myItems: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default Items;
