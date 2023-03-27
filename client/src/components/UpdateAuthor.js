import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams , Link, useNavigate} from 'react-router-dom'


const UpdateAuthor = ()=> {
  const { id } = useParams(); //this is the id from the url
  const [authorName, setAuthorName] = useState({})
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  console.log(id)
  
 

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
    .then((res) => {
      console.log(res.data)
      setAuthorName(res.data.name) //this has to have the .name after it
    })
    .catch((err) => {console.log(err);
      
    });


  }, [])

 const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/authors/${id}`, { name: authorName }) //this has to match the parameter in the model file
    .then((res) => {
      console.log(res);
      navigate("/");
     
      
    })
    .catch((err) => {console.log(err.response.data.errors);
      setErrors(err.response.data.errors);
    });
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">

        <Link classname="text-center" to="/">Home</Link>
          <form>
            
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text"
                className="form-control"
                name="name" id="name"
                onChange={(e) => setAuthorName(e.target.value)}
                value={authorName}

              />
              {errors.name ? <p>{errors.name.message}</p> : null} 
              {/* //this is what display error message */}
            
            </div>
            <button type="submit" className="btn btn-primary" onClick={onSubmitHandler}>Submit</button>


          </form>
      </div>
    </div>
  </div>
  )
  

  
}

export default UpdateAuthor