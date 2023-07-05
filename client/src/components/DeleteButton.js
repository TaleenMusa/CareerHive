import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const {id,afterDelete}=props
    const deleteHandler = (e) => {
        e.preventDefault();
        axios
        .delete(`http://localhost:8000/api/jobs/${id}`)
        .then((res) => {
            console.log(res);
            console.log(id);
            afterDelete(id);
        })
        .catch((err) => console.log(err));
    };
  return (
    <button onClick={deleteHandler} className="btn btn-danger">Delete</button>
  )
}

export default DeleteButton