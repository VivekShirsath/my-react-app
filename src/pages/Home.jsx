import { NavLink } from "react-router-dom";
import "./home.css";
import { useBooks } from "../DataContext";
import { Main } from "../components'/Main";

export const Home = () => {
    const {bookData} = useBooks();
   
    return(
        <div>
            <div className="header">
            <NavLink to ="/"><h3>Home</h3></NavLink>
            <NavLink to ="/search"><h3>Search</h3></NavLink>
            </div>
            <Main/>
        </div>
    )
}