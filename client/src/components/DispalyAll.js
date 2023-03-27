import { useEffect, useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css"

const DisplayAll = () => {
  const [authors, setAuthors] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
    .then((res) => { 
      console.log(res.data);
      setAuthors(res.data);
    
    })
    .catch((err) => console.log(err));
  }, []);

  const deleteAuthor = (deleteId) => {
    axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
    .then((res) => {
      console.log(res); 
      const filerteredAuthors = authors.filter((author) =>  author._id !== deleteId); 
      setAuthors(filerteredAuthors);
    })
   
    

    .catch((err) => {
      console.log("error deleting author", err.response);
    });

    
  
  };



return (
  <div className="container -flex justify-content-between ">
    <div className="row">
      <div className="col-8">
        <Link to="new">Add an Author</Link>
        <p className="purple-text">We have quotes by:</p> 
        {/* //Purple text is done in the css */}
  <table className="table table-dark table-bordered ">
    <thead>
      <tr>
        <th scope="col">Author</th>
        <th scope="col">Actions Available</th>
      </tr>
    </thead>
    <tbody>
      {authors.map((author, index) => (
        
          <tr key={index}>
            <td>{author.name}</td>

            <td>  <Link to={`/update/${author._id}`}><button>Edit</button></Link> 

            <button className="btn btn-danger" onClick={() => deleteAuthor(author._id)}>Delete</button>  </td>
            
         
          </tr>
        ))
      }
    </tbody>
    

              
  </table>
      </div>
    </div>
  </div>


  )
};
export default DisplayAll;


      