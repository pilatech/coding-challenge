import React from 'react'

export default function Input({ data, name, handleChange, setFormError }) {
  const inputType = name == 'password' ? 'password' : 'text';
  const validEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  let errorMsg = null;
  if (!data.value && name !== 'email') {
    errorMsg = <p className="input__error">Field cannot be empty</p>;
    setFormError(true);
  } else if (name === 'email' && !validEmail(data.value)) {
    errorMsg = <p className="input__error">Invalid Email Address</p>
  } else if((name === 'email' && validEmail(data.value)) || (data.value && name !== 'email')){
    setFormError(false);
  }

  return (
    <div className="input__control">
        <label className="input__label" htmlFor="name">{name[0].toUpperCase() + name.slice(1)}</label>
        { errorMsg }
        <input 
        className="input" 
        onChange={handleChange} 
        type={inputType} 
        id="name"
        name={name}
        value={data.value}
        />
    </div>
  )
}
