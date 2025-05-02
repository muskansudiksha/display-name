import React,{useState,useEffect} from 'react';


const App=()=> {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [flag,setFlag]=useState(false);


  const handleSubmit=(e)=>{
    e.preventDefault();
    setFlag(true);
  }

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Firstname">First Name: </label>
        <input type="text" name="Firstname" required value={firstName} 
              onChange={(e)=>{
                                setFirstName(e.target.value);
                                setFlag(false);
                              }} />
                              <br/>
        <label htmlFor="Lastname">Last Name: </label>
        <input type="text" name="Lastname" required value={lastName} 
        onChange={(e)=>{
                          setLastName(e.target.value);
                          setFlag(false);
                        }} />
                      <br/>
        <button type='submit'>Submit</button>
      </form>
      {flag && <p>Full Name : {firstName} {lastName}</p>}
    </div>
  );
}

export default App;
