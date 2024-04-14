import PropTypes from "prop-types";
import styles from "./TodoItem.module.css";

function TodoItem({ todoName,todoDate,onDeleteClick }) {
    return (
        <div className="container">
        <div className={styles.row}>
            <div className="col-6">{todoName}</div>
            <div className="col-4">{todoDate}</div>
            <div className="col-2">
            <button type="button" className="btn btn-danger" onClick={()=>onDeleteClick(todoName)}>
                Delete
            </button>
            </div>
        </div>
        </div>
    );
}

TodoItem.propTypes = {
  todoName: PropTypes.string.isRequired,
  todoDate: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
    
export default TodoItem;
