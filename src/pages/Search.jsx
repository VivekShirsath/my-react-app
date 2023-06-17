import { useState } from "react";
import { useBooks } from "../DataContext";
import { Card } from "../components'/Card";
import { NavLink } from "react-router-dom";
import './home.css'

export const Search = () => {
    const [search,setSearch] = useState("");
    const {bookData} = useBooks();
    const handleInput = (e) => {
        setSearch(e.target.value)
    }
    
    return(
        <div className="flex">
            <div>
        <input type = "text" placeholder="Search By book Name"
        className="input" onInput={(e) => handleInput(e)} value={search}/>
        <NavLink to ="/"><button className="btn">Home</button></NavLink>
        </div>
        {
            search && bookData?.filter((book) =>  book.title.toLowerCase().includes(search.toLowerCase()))
             .map((book) => <Card {...book} key = {book.id}/>)
        }
        </div>
    )
    }