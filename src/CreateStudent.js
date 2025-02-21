import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateStudent() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  // For validation, will check validation logic after
  //setValidation will be used only when the mouse is on focus, so will be using on mouseover
  const [validation, setValidation] = useState(false);

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ id, name, place, phone });
    const studentData = { id, name, place, phone };
    console.log(studentData);

    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Convert data into JSON Format, use JSON.stringify
      body: JSON.stringify(studentData), //it will be saved in db.json
    })
      .then((res) => {
        alert("Student Data Saved successfully");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="container">
      <h2>Create Student Records</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
          onMouseDown={() => setValidation(true)}
        />
        {id.length === 0 && validation && (
          <span className="errorMsg">Please enter the id</span>
        )}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          onMouseDown={() => setValidation(true)}
        />
        {name.length === 0 && validation && (
          <span className="errorMsg">Please enter the name</span>
        )}

        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          name="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
          onMouseDown={() => setValidation(true)}
        />
        {place.length === 0 && validation && (
          <span className="errorMsg">Please enter the place</span>
        )}
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          onMouseDown={() => setValidation(true)}
        />
        {phone.length === 0 && validation && (
          <span className="errorMsg">Please enter the phone</span>
        )}

        <div>
          <button type="submit" className="btn btn-save">
            Save
          </button>
          <Link to="/" className="btn btn-back">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
