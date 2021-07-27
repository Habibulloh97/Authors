import React from 'react';
import { Link } from '@reach/router';

const Form = props =>{
    const {handleSubmit, onChangeHandler, myForm, errors} = props;
    return(
        <form onSubmit={handleSubmit}>
        <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control" onChange={onChangeHandler} value={myForm.name}/>
                {
                    errors.name ? <span className="text-danger">{errors.name.message}</span> : ""
                }
        </div>
        <div className="mt-2">
        <Link to="/" className="btn btn-dark">Cancel</Link> <input type="submit" value="Submit" className="btn btn-primary"/> 
        </div>
        </form>
    )
}

export default Form