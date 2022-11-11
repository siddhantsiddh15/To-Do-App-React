import React, {useState, useEffect} from 'react';
import Notes from './Notes.jsx';

function CreateArea(){
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [noteDetails, setNoteDetails] = useState(function(){
        let allNotes = [];
        try {
            allNotes = JSON.parse(localStorage.getItem("noteDetails")) || [];
          } catch (error) {
            allNotes = [];
          }
          return allNotes;
    });

    useEffect(() => {
        if(noteDetails.length >0){
            localStorage.setItem("noteDetails", JSON.stringify(noteDetails))
        }
    }, [noteDetails])

    function handleTitleChange(e){
        setTitle(e.target.value);
        
    }


    function handleNoteChange(e){
        setNote(e.target.value);
        
    }

    function handleNoteDelete(id){
        setNoteDetails(noteDetails.filter(note => note.id !== id));
    }

    console.log(noteDetails);
    function handleFormSubmit(e){
        e.preventDefault();
        if(note === '' || title === '')return;
        const id = noteDetails.length+1;
        setNoteDetails([{id:id,title:title, note:note},...noteDetails])
        e.target.reset();
        setNote('');
        setTitle('');
        
    }
    return (<div>
        <form className="createNote" onSubmit ={handleFormSubmit}>
            <label htmlFor='noteTitle'>Enter the Note Title</label>
            <input 
            type='text' 
            name='title' 
            placeholder='Enter the note title'
            onChange = {handleTitleChange}
            />
            <label 
            htmlFor='noteContent'>Enter the note</label>
            <textarea 
            className = "noteTextArea"
             row= '3' 
             name='content' 
             placeholder='Enter the note'
             onChange= {handleNoteChange}/>
             <button >Submit</button>
        </form>
        <div className="displayNotes">{
            noteDetails.length >0 && noteDetails.map(note => {
                return <Notes details ={note} onNoteDelete ={handleNoteDelete}/>
            })
        }</div>
    </div>)
}

export default CreateArea;