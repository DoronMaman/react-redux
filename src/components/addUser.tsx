import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
// import { RootState } from "../state/reducer";
import "../styles/form.css"
function AddUser() {
  const dispatch = useDispatch();
  const [inputValueName, setInputValueName] = React.useState("");
  const [inputValueEmail, setInputValueEmail] = React.useState("");
  const [errorEmail,setErrorEmail]=React.useState('');
  const [errorAge,setErrorAge]=React.useState('');
  const [inputValueAge, setInputValueAge] = React.useState(0);




  const { addUser } = bindActionCreators(actionCreators, dispatch);

  function addUserHandle(){
const user=setUser();
setInputValueName("");
setInputValueEmail("");
setInputValueAge(0);
addUser(user);

  }  
  const handleChangeEmail = (event:any) => {
    const email = event.target.value;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
     (!emailRegex.test(email)) ? setErrorEmail('Please enter a valid email address'):setErrorEmail('');

    setInputValueEmail(email);
  };
  const handleChangeAge = (event:any) => {
    const age = event.target.value;
    const emailRegex = /^[0-9]+$/;
     (!emailRegex.test(age)) ? setErrorAge('Please enter a valid age number'):setErrorAge('');

    setInputValueAge(age);
  };

  function setUser(){
    let id =JSON.stringify(Math.random()*100);
    const user={
      id:id,
      name:inputValueName,
      email:inputValueEmail,
      age:inputValueAge,
    }
    return user;
  }
    return(

      <div>
        
        <div className="add-user-form">
          <label>ADD USER</label>
  <label htmlFor="name">Name:
  <input type="text" id="name"
   onChange={e=>setInputValueName(e.target.value)}
   value={inputValueName}
   placeholder="Enter Name" />

  </label>
  <label htmlFor="email">Email:
  <input type="text" id="email"
     value={inputValueEmail}
   onChange={handleChangeEmail}
  placeholder="Enter email" />
        {errorEmail && <p>{errorEmail}</p>}

  </label>
  <label htmlFor="age">Age:
  <input type="text" id="password"
     value={inputValueAge}
   onChange={handleChangeAge}
  placeholder="Enter password" />
        {errorAge && <p>{errorAge}</p>}

  </label>
  <button onClick={()=>addUserHandle()} >Add User</button>
</div>
      </div>

        
    )
}

export default AddUser;

