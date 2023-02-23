import React from 'react';

function LabelForm ({handleInput, loginInput}) {
    return (
        <>
        <div className='form-box'>
            <div className='form-input'>
                <input
                type='password'
                className='label-up'  
                placeholder='Password' 
                value={loginInput.password}
                onChange={handleInput}
                name="password"
                /> 
            <label>Password</label>
            </div>
        </div>
        </>
      )
    }

export default LabelForm