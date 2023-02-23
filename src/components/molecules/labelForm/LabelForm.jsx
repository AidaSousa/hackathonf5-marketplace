import React from 'react';
import "./LabelForm.css";

function LabelForm () {
    return (
        <>
        <div className='form-box'>
            <div className='form-input'>
                <input
                type='password'
                className='label-up'  
                placeholder='Password' 
                // value={loginInput.password}
                // onChange={handleInput}
                name="password"
                /> 
            <label>Password</label>
            </div>
        </div>
        </>
      )
    }

export default LabelForm