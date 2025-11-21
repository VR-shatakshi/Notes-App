import React from 'react'
import { useState,useEffect } from 'react'
import api from "../../../api";
import Note from "../Note.jsx";



function Home(){
  const[notes,setNotes] = useState([]);
  const[content,setContent] = useState('')
  const [title,seTitle] = useState('')

  useEffect (()=>{
    getNote();
  },[])

  const getNote =() =>{
    api.get('/api/notes/').then((res)=> res.data).then((data)=> {setNotes(data);console.log(data)}).catch((err)=> alert(err));
  };

  const deleteNote =(id) =>{
    api.delete(`/api/notes/delete/${id}/`).then((res)=>{
      if(res.status === 204)alert("Note deleted !")
      else  alert ("Flaied to delete note ")
    }).catch((error)=> alert(error))
     getNote();
  };

  const createnote =(e) =>{
    e.preventDefault()
    api.post('/api/notes/',{content,title}).then((res)=>{
      if(res.status === 201)alert("Note created ")
        else alert ("Failed to make note")
    }).catch ((err)=> alert(err))
    getNote();
  }
  return <div>
    <div className="div">
      <div>
        <h2 className='text-center'>Notes</h2>
        {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
      </div>
      
      <h2 className='text-center'>Create a Note</h2>
      <form  onSubmit={createnote}>
         <label htmlFor ="title"></label>
        <br/>
        <input type ="text" id ="title" required onChange ={(e)=> seTitle(e.target.value)} value ={title} placeholder='WRITE YOUR TITLE'/>
        <textarea id = "content" name ="content" required value ={content} onChange={(e)=>setContent(e.target.value)  } placeholder='CONTENT'>
        </textarea>
        <br/>
        <input type = 'submit' value ='submit'></input>
      </form>
      </div>
    </div>
}

export default Home