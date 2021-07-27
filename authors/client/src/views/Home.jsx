import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';

const Home = props =>{
    const [reset, setReset] = useState(true)
    const [allAuthors, setAllauthors] = useState(null)
    const deleteAuthor = _id  =>{
        axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
            .then(setReset(!reset))
            .catch(err=> console.log(err))
    }
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(res=> setAllauthors(res.data))
            .catch(err=> console.log(err))
    }, [reset])

    return(
        <>
        <h1 className="text-info">Favourite authors</h1>
        <Link to="/add">Add an author</Link>
        <table className="table container">
            <tr>
                <th style={{border: "solid"}}>Author</th>
                <th style={{border: "solid"}}>Action available</th>
            </tr>
                {
                    allAuthors? allAuthors.map((author, i)=>{
                        return<tr>
                            <td style={{border: "solid"}}>{author.name}</td>
                            <td style={{border: "solid"}}><Link to={`/authors/update/${author._id}`} >Edit</Link> |<button onClick={()=>deleteAuthor(author._id)}>Delete</button></td>
                            </tr>
                    }
                    ) :""
                }
        </table>
        </>
    )
}
export default Home