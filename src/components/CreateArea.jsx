import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import  Zoom  from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [expand , setExpand] = useState(false);
  
  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
     
      <form className="create-note">
        {expand&&(<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />)}

        <textarea
          onClick={()=>{
            setExpand(true)
          }}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expand?"3" : "1"} 
        />
        {expand?<Zoom in={true}>      
        <Fab onClick={submitNote}>
          <AddIcon/>
        </Fab>
        </Zoom>:null}
      </form>
    </div>
  );
}

export default CreateArea;
