import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Component/style.css";
import { Link } from "react-router-dom";
const Register = () => {
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

  useEffect(() => {
    GetData();
  }, []);
  const GetData = () => {
    axios
      .get("https://pleasant-stole-hen.cyclic.app/getdata")
      .then((res) => {
        setData(res.data.userdata);
        // console.log(res.data.userdata)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const PostData = () => {
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

    console.log(payload);
    axios
      .post("https://pleasant-stole-hen.cyclic.app/register", payload)
      .then((res) => {
        alert(res.data.message);

        GetData();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const Delete = (id) => {
    axios
      .delete(`https://pleasant-stole-hen.cyclic.app/deleteuser/${id}`)
      .then((res) => {
        alert(res.data.message);
        GetData();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <div>
        <h1>CRUD Assignment</h1>
        <div className="main">
          <div>
            {" "}
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
              placeholder="Enter Your DOB"
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
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <br></br>
            <br></br>
          </div>

          <div>
            {" "}
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

        <button className="submit" onClick={PostData} type="submit">
          Add
        </button>

        <div>
          <table>
            <tr>
              <th>user</th>
              <th>DOB</th>
              <th>Mother Name</th>
              <th>IP</th>
              <th>Full name</th>
              <th>Hobbies</th>
              <th>Products</th>
              <th>States</th>
              <th>City</th>
              <th>Post Code</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tbody>
              {data.map((elem) => {
                return (
                  <tr>
                    <td>{elem.user}</td>
                    <td>{elem.DOB}</td>
                    <td>{elem.mothername}</td>
                    <td>{elem.IP}</td>
                    <td>{elem.fullname}</td>
                    <td>{elem.hobbies}</td>
                    <td>{elem.product}</td>
                    <td>{elem.state}</td>
                    <td>{elem.city}</td>
                    <td>{elem.postalcode}</td>
                    <td>
                      {" "}
                      <Link to={`edit/${elem._id}`}>
                        {" "}
                        <button className="edit">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button className="del" onClick={() => Delete(elem._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Register;
