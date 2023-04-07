import React from "react";

const Form = () => {
  return (
    <div className="text-center">      
      <form className="p-5 my-10 border border-original rounded-lg mx-48" id="form">
        <div className="grid grid-cols-2">
        <input type="text" id="name" placeholder="Name" className="bg-gray-200 text-black rounded-lg py-2 px-5 m-5 border-2 border-original " />
        <input type="email" id="email" placeholder="Email" className="bg-gray-200 text-black rounded-lg py-2 px-5 m-5 border-2 border-original " />
        <input type="number" id="contact" placeholder="Phone Number" className="bg-gray-200 text-black rounded-lg py-2 px-5 m-5 border-2 border-original " />
        <input type="text" id="location" placeholder="Location" className="bg-gray-200 text-black rounded-lg py-2 px-5 m-5 border-2 border-original " />
        </div>
        <textarea id="message" placeholder="What would you like to tell us?" className="bg-gray-200 text-black rounded-lg p-2 m-5 border-2 border-original items-center" rows="5" cols="50" />
        <br />
        <button className="my-5 bg-original text-complement hover:bg-complement hover:text-original rounded-lg px-5 py-2">Submit</button>
      </form>
    </div>
  );
};

export default Form;

/*

 className="border border-original rounded-lg p-5 mx-32 my-10 justify-center text-left" 
<ul>
<li>
  <label for="name">Name:</label>
  <br /> 
  <input
    type="text"
    id="name"
    name="user_name"
    className="px-10 border border-original rounded-lg my-2 py-1"
  />
</li>
<li>
  <label for="mail">Email:</label>
  <input
    type="email"
    id="mail"
    name="user_email"
    className="px-10 border border-original rounded-lg my-2 py-1"
  />
</li>
<li>
  <label for="password">Password:</label>
  <input
    type="password"
    id="password"
    name="user_password"
    className="px-10 border border-original rounded-lg my-2 py-1"
  />
</li>
<li>
  <label for="contact">Contact:</label>
  <input
    type="number"
    id="contact"
    name="user_contact"
    className="px-10 border border-original rounded-lg my-2 py-1"
  />
</li>
<li>
  <label for="location">Location:</label>
  <br />
  <input
    type="text"
    id="location"
    name="user_location"
    className="px-10 border border-original rounded-lg my-2 py-1"
  />
</li>

*/
