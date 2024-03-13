// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <div className="list-item">
      <li className="list">
        <p className="text">{title}</p>
        <div className="btn-container">
          <button className="button" type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </li>
    </div>
  )
}
export default TodoItem
