import { useBooks } from "../DataContext";
import { Card } from "./Card";
import "./main.css"

export const Main = () => {
    const {bookData} = useBooks();
    return(
        <div>
            <div className="section">
                <h2 className="title">Currently Reading</h2>
                <div className="books">
                {
                    bookData?.filter((book) =>  book.category === "Currently Reading")
                    .map((book) => <Card {...book} key = {book.id}/>)
                }
                </div>
                <h2 className="title">Want to Read</h2>
                <div className="books">
                {
                    bookData?.filter((book) =>  book.category === "Want To Read")
                    .map((book) => <Card {...book} key = {book.id}/>)
                }
                </div>
                <h2 className="title">Read</h2>
                <div className="books">
                {
                    bookData?.filter((book) =>  book.category === "Read")
                    .map((book) => <Card {...book} key = {book.id}/>)
                }
                </div>
            </div>
        </div>
    )
}