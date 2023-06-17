import './card.css';
import { useBooks } from '../DataContext';

export const Card = ({id,imageId,title,author,category}) => {
    const {bookData,setbookData} = useBooks();

    const changeCategory = (e) => {
        const unique = (bookData.map(book => book.id === id ? {...book,
        category : e.target.value} : book))
        setbookData(unique);
    }
    return(
        <div key = {id} className="card">
        <img src={imageId} className="img"/>
        <h3 className='center'>Name : {title}</h3>
        <h3 className='center'>Author :{author}</h3>
        <label htmlFor="category">Move to:</label>
        <select name="category" id="category" onChange={(e) => changeCategory(e)} className='optn'>
        <option value="Currently Reading" selected = {category === "Currently Reading"}
         className='optn'>Currently Reading
        </option>
        <option value="Want To Read" selected = {category === "Want To Read"} className='optn'>Want To Read</option>
        <option value="Read" selected = {category === "Read"} className='optn'>Read</option>
        <option value="None" selected = {category === "None"} className='optn'>None</option>
        </select>
        </div>
    )
}