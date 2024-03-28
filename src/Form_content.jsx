import React from "react";
import "./index.css";
function Form_content(){
    return(
        <>
        <div className="form-card">
        <form>
            <br></br>
<label>Patient Name</label>
<input type="text" />

<label>Last Name</label>
<input type="text" />
<br></br>
<br></br>
<label>E-mail </label>
<input type="text" />

<label>Phone Number</label>
<input type="text" />
<br></br>
<br></br>
<label>Date of Birth</label>
<input type="text" />
<br></br>
<br></br>
<label>Height</label>
<input type="text" />
<br></br>
<br></br>
<label>Weight</label>
<input type="text" />
<br></br>
<br></br>
<label>Marital Status</label>
<input type="text" />
<br></br>
<br></br>
<label>Address</label>
<input type="text" />
<br></br>
<br></br>
<label>Gender</label>
<input type="text" />

        </form>

        </div>
        
        
        </>
    );
}

export default Form_content;