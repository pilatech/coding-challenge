import React from 'react'

export default function Input({ data, name }) {
  return (
    <div className="input__control">
        <label className="input__label" htmlFor="name">{name[0].toUpperCase() + name.slice(1)}</label>
        { data.error && <p className="input__error">Something is not right</p> }
        <input className="input" type="text" id="name"/>
    </div>
  )
}
