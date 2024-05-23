import TaskCard from './TaskCard';
const TaskList = ({task,deleteTask}) => {
  return (
    <div>
      {task.map((e)=>(
        <TaskCard task={e} key={e.id} deleteTask={deleteTask}/>
        ))}
    </div>
  )
}


export default TaskList





















