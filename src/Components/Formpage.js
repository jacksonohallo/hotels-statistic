import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const FormPage = ({ addHotels }) => {
  let history = useHistory();
  const [newHotel, setNewHotel] = useState({
    
    name: "",
    description: "",
    likes: 0,
    
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewHotel({ ...newHotel, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    const addNewHotel = {
      name: newHotel.name,
      description: newHotel.description,
      likes: 0,
    };


    
    fetch(`http://localhost:9292/hotels`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewHotel),
    })
      .then((response) => response.json())
      .then(addHotels);
    setNewHotel({
      name: "",
      description: "",
      likes: 0,
    });
    history.push("/hotels");
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        
        <h4>Add new hotel here: </h4>

        <input
          type="text"
          placeholder="Hotel name"
          name="name"
          value={newHotel.name}
          onChange={handleChange}
        
        ></input>
        <br />
        <input
          type="text"
          placeholder="description"
          name="description"
          value={newHotel.author}
          onChange={handleChange}
        ></input>
        <br />

        <input className="button" type="submit" />
      </form>
      <img
        alt="hotel"
        src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      ></img>
    </div>
  );
};
export default FormPage;