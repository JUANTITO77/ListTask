import '../styles/TaskList.css'
const TaskCard = ({task,deleteTask}) => {
  return (
    <div className='NewTask'>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={()=>deleteTask(task.id)}><ion-icon name="close-circle-outline"></ion-icon></button>
    </div>
  )
}

export default TaskCard








