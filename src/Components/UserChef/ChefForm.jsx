import './Home.css'
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
 
function RegisterForm() {
  const [avatar, setAvatar] = useState(null);
  const [cuisineType, setCuisineType] = useState('select');
  const handleAvatarUpload = (event) => {
    setAvatar(event.target.files[0]);
  };

const handleCuisineType = (event) => {
    setCuisineType(event.target.value);
    console.log(event.target.value, 'cuisineType');
}

  const {
    register,
    handleSubmit,
    // formState: { errors }
} = useForm();



  return (
	<div className='background'> 
		<hr/>
	<h3 className='userTitle'> Become A Chef</h3>
	<form className="form-container" method='post' id='addAmenuForm' onSubmit={handleSubmit}>
      <div className="avatar-upload-container">
        <input id="avatar-input" className="input-field" type="file" onChange={handleAvatarUpload} accept="image/*" />
        {avatar ? (
          <img src={URL.createObjectURL(avatar)} alt="Avatar" />
        ) : (
          <label htmlFor="avatar-input">
            <div className="upload-text">Upload your avatar</div>
          </label>
        )}
      </div><br/>
      <label>
       Your Chef Name:
       <input type='text' className="input-field"  {...register("chefName")}/>
      </label><br />
      <label>
        First Name:
       <input type='text' className="input-field"  {...register("firstName")}/>
      </label>  <br />  
      <label>
       Second Name:
        <input className="input-field" type="text"  {...register("secondName")}/>
      </label><br />
      
	     <label>
       About you:  
         <textarea className="input-field center-text "   {...register("aboutMe")}/>  
	    </label><br />
      <label>
       Phone:<br />
        <input className="input-field" type="text"   {...register("phone")}/>
      </label><br />
      <label>
       Email:<br />
        <input className="input-field" type="email"   {...register("email")}/>
      </label><br />
      <label htmlFor="cuisineTypes">Select Cuisine Type:</label>
      <select id="cuisine-select" {...register("cuisineType")}>
        <option value=""> Select Cuisine Type </option>
        <option value="1">Italian</option>
        <option value="Indian">Indian</option>
        <option value="American">American</option>
        <option value="Thai">Thai</option>
        <option value="French">Mexican</option>
        <option value="French">Mexican</option>
        <option value="French">Mexican</option>
      </select>
      <br />
      <label>
      Zip Code:
        <input className="input-field" type="text"   {...register("postCode")}/>
      </label><br />
      <label>
       Address:
        <input className="input-field" type="text"   {...register("address")}/>
      </label><br />
      <label>
       Password:
        <input className="input-field" type="password"  {...register("password")}/>
      </label><br />
      <label>
       Confirm Password:
        <input className="input-field" type="password"  {...register("password")}/>
      </label>
      <br />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
	  </div>
<br />
<Link to="/home/chefForm/chefMenu"><button className="submit-button" type="submit">Upload your Menu</button><br/><br/></Link>
<button className="submit-button" type="submit">Submit</button>
</form> 


</div>
);
}

export default RegisterForm;
