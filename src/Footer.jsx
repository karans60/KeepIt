import React, { useState } from "react";

function Footer()
{
    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const[list, setList] = useState([]);


    const data = {title, content};
    const setData = (e)=>{
        e.preventDefault();
    
        if(title && content){
            setList((ls)=>[...ls, data])
            setTitle('');
            setContent('');
        }
    }

    function deleteNote(id)
    {
        setList((e)=>{
            return e.filter((item, index) =>
            {   
                return id !== index;
            });
        });
    }


    
   
   

    return(
        <div className="footer">
            <form onSubmit={setData}>
            <input type="text" placeholder="Title" value={title} className="inputTitle" onChange={(e)=>setTitle(e.target.value)}></input>
            <input type="text" placeholder="Content" value={content} className="inputTitle" onChange={(e)=>setContent(e.target.value)}></input>
            <button className="button">Add</button>
            </form>

            {
                list.map((a, id)=>
                <div className="card">
                    <h1 className="title" >{a.title}</h1>
                    <p className="content" >{a.content}</p>
                    <button className="remove" onClick={()=>deleteNote(id)}>❌</button>
                </div>)
            }

        </div>
    );
}

export default Footer;