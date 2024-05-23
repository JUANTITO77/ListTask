import { useState } from "react"

const TaskForm = ({RegistroTask}) => { 
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        RegistroTask({
            title,
            description
        })
        setTitle('')
        setDescription('')
    }
  return (
    <form className="MyForm" onSubmit={handleSubmit}>
        <input type="text"
        placeholder="Registre su tarea"
        onChange={e=>setTitle(e.target.value)}
        value={title}
        autoFocus
         />
         <textarea
         placeholder="Registre su descripcion"
        onChange={e=>setDescription(e.target.value)}
        value={description}
         ></textarea>
         <button>Registrar</button>
    </form>
  )
}

export default TaskForm











