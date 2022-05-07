import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodos, ADD_TODo } from "../redux/thodos/action"
import { store } from "../redux/store"

export const Todo = () =>{

    const todos = useSelector( store => store.todos.todos)

    const dispatch = useDispatch()
    const [text , setText ] = useState("")
    console.log("Rendering todo")
    const handleADD = () =>
    {
        const payload = {
            title : text,
            status : false
        }
        fetch("http://localhost:8080/todos",{
            body : JSON.stringify(payload),
            headers : {
                "content-type" : "application/json"
            },
            method : "POST"
        }).then(getData())
    }

    useEffect( () => {
        getData()
    }, [])

    async function getData()
    {
        var res = await fetch("http://localhost:8080/todos")
        var data = await res.json()
        dispatch(addTodos(data))

    }


    return(
        <div>
            <input type="text" onChange={(e) => setText(e.target.value) }></input>
            <button onClick={handleADD} >ADD TODO</button>
            { todos.map( (t) =>(
                <div key={t.title}>{t.title}</div>
            ) )}
        </div>
    )

}