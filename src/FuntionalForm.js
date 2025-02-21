import React, {useState} from 'react';

function FunctionalForm()
{
    const[inputField, setInputField] = useState({name:"", email:"", phone:"", country:""});
    
    const updateForm = (e) =>{
        setInputField({[e.target.name] : e.target.value});
    }

    const submitForm = (e) => {
        e.preventDefault();
        alert(" Success ");
    }

    return(<div>
        <h1>SIGN UP FORM</h1>
        <form onSubmit={submitForm}>
            <label>

                Name: <input type ="text" name='name' value={inputField.name} onChange={updateForm}/><br/>
                Email: <input type ="text" name='email' value={inputField.email} onChange={updateForm}/><br/>
                Phone: <input type ="number" name='phone' value={inputField.phone} onChange={updateForm}/><br/>
                Country: <input type ="text" name='country' value={inputField.country} onChange={updateForm}/><br/>
                <button value= "submit">Register</button>
        </label>

        </form>
    </div>)
}

export default FunctionalForm;