import React from "react";

function Note(props)
{
    return(
            <div className="card">
            <h1 className="title">{props.title}</h1>
            <p className="content">{props.content}</p>
    </div>
    );
}

export default Note;
