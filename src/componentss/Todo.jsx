import React, { useState } from "react";

function todo() {
const [todo,setTodo] = useState()
const [list,setlist] = useState([])

const remove =(i)=>{
      const updatelist = list.filter((Element,id)=>{
          return i!=id
      })
      setlist( updatelist)
}
 
  const addTodo = ()=>{
    
    setlist((list)=>{
      const updatelist = [...list,todo]
      console.log(updatelist);
      setTodo("")
      return updatelist
    })

  }
  return (
    <>
      <div className="main">
        <h1 className="h1">todo app</h1>

        <div className="input_btn">
          <input
            type="text"
            placeholder="ADD Your TODO"
            className="input"
            value={todo}
            onChange={ (e)=>setTodo(e.target.value)}
          />
          <button className="btn" onClick={addTodo}>ADD</button>
        </div>
            <p className="p" >
                          list :{')'}
            </p>
            {list!=[] && list.map((data,i)=>{
              return(
                <>
                <p key={i}>
                  <div className="list-data p1">
                    {data}
                 
                  </div>
                  <button  className='btn1' onClick={()=>remove(i)}>remove</button>
                  <br />
                </p>
                </>
              )
            })}
      </div>
    </>
  );
}

export default todo;
