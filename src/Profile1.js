import { useState } from "react";

const Profileimg = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [arr, setArr] = useState([]);

  const NameChange = (event) => {
    setName(event.target.value);
  };
  const ImageChange = (event) => {
    setImage(event.target.value);
  };
  const PhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const SelectChange = (event) => {
    setStatus(event.target.value);
  };

  const FormSubmit = (event) => {
    event.preventDefault();
    const obj = {
      name: name,
      image: image,
      phone: phone,
      status: status,
    };
    if(name===""){
      alert("name is khaali plz fill this up")
    }else if(image===""){
      alert("image is khaali plz fill this up")
    }
    else if(phone===""){
      alert("phone is khaali plz fill this up")
    }
    else if(status===""){
      alert("status is khaali plz fill this up")
    }else{
      
      setArr([...arr, obj]);
    }
  };
  return (
    <>
        <div>
        <form onSubmit={FormSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={NameChange} value={name} />
          <label htmlFor="image">Image Link:</label>
          <input type="text" id="image" onChange={ImageChange} value={image} />
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" onChange={PhoneChange} value={phone} />
          <label htmlFor="status">Status:</label>
          <select id="status" onChange={SelectChange} value={status}>
            <option>....</option>
            <option>Single</option>
            <option>Married</option>
            <option>Kuch bhi nhi h tere bhai ka..</option>
          </select>
          <button type="submit" className="btn">
            Click on
          </button>
        </form>
      </div>

      {
      arr.map((obj) => {
      return(
        <div className="profile" key={obj.name}>
            <div>
          <img src={obj.image} alt={obj.name} />
          </div>
          <p>Name:{obj.name}</p>
          <p>Status:{obj.status}</p>
          <p>Phone Number:{obj.phone}</p>
        </div>
      )})}
    </>
  );
};

export default Profileimg;
