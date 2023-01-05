import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "../Component/styl"
const Edit = () => {
  const { id } = useParams();

  console.log(id);

  const [user, setUser] = useState("");
  const [DOB, setDOB] = useState("");
  const [fullname, setFullname] = useState("");
  const [mothername, setMothername] = useState("");
  const [IP, setIP] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [product, setProduct] = useState("");
  const [state1, setState1] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalcode] = useState(0);
  const [data, setData] = useState([]);

  console.log(data);

  const navigate = useNavigate();
  const EditData = () => {
    let payload = {
      user: user,
      DOB: DOB,
      mothername: mothername,
      IP: IP,
      fullname: fullname,
      hobbies: hobbies,
      product: product,
      state: state1,
      city: city,
      postalcode: postalcode,
    };
    axios
      .put(`https://pleasant-stole-hen.cyclic.app/updateuser/${id}`, payload)
      .then((res) => {
        console.log(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {" "}
      <h1>Data Update</h1>
      <div className="main">
   

        <div>
          <input
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="User"
          />
          <br></br>
          <br></br>

          <input
            onChange={(e) => setDOB(e.target.value)}
            type="text"
            placeholder=" Enter your DOB"
          />
          <br></br>
          <br></br>

          <input
            onChange={(e) => setIP(e.target.value)}
            type="text"
            placeholder=" Enter your lastacessIP"
          />
          <br></br>
          <br></br>

          <input
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            placeholder="Enter your fullname"
          />
          <br></br>
          <br></br>

          <select onChange={(e) => setHobbies(e.target.value)}>
            <option>Hobbies</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
            <option value="e">E</option>
          </select>
          <br></br>
          <br></br>
        </div>

        <div>
          <input
            onChange={(e) => setMothername(e.target.value)}
            type="text"
            placeholder="Enter your mothername"
          />

          <br></br>
          <br></br>

          <input
            onChange={(e) => setState1(e.target.value)}
            type="text"
            placeholder="Enter your state"
          />
          <br></br>
          <br></br>

          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter your city"
          />
          <br></br>
          <br></br>

          <input
            onChange={(e) => setPostalcode(e.target.value)}
            type="number"
            placeholder="Enter your code"
          />
          <br></br>
          <br></br>

          <select onChange={(e) => setProduct(e.target.value)}>
            <option>Products</option>
            <option value="macbook">MacBook</option>
            <option vlaue="iwatch">iWatch</option>
            <option vlaue="iphone">iphone</option>
            <option value="ipad">iPAD</option>
            <option value="headphone">Headphone</option>
          </select>
          <br></br>
          <br></br>
        </div>
      </div>
      <button onClick={EditData} className="submit" type="submit">
        Update
      </button>
    </div>
  );
};

export default Edit;
