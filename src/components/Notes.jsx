import React from 'react';

export default function Notes(props){
    console.log(props)
    const {details, onNoteDelete} = props;
    return (<div className ="notes">
        <h2>{details.title}</h2>
        <h6>{details.note}</h6>
        <button onClick= {() => onNoteDelete(details.id)}>Delete</button>
    </div>)
}