import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const AuthorForm = (props) => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/authors" , { name })  
        
    .then((res) => {
      console.log(res);
      setName("");
      navigate("/");
    })
    .catch((err) => {console.log(err.response.data.errors);
    setErrors(err.response.data.errors); //this has to match line above
    });
  };

  return ( 
    <div className="container">
      <div className="row">
        <div className="col-4">
      <Link className="text-center" to="/">Home</Link>

          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" 
              className="form-control" 
              name="name" id="name" 
              onChange={(e) => setName(e.target.value)}
              value={name}
              />
              {errors.name ? <p>{errors.name.message}</p> : null} {/* //this is what display error message */}

            </div>
            <button type="submit" className="btn btn-primary" onClick={onSubmitHandler}>Submit</button>
          </form>

        </div> 
      </div>
    </div> 
    
    );
}

export default AuthorForm;