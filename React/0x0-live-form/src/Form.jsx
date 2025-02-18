import { useState } from 'react'
import Input from './Input'

export default function Form() {
 const [formData, setFormData] = useState({
    username: {
        value: '',
        error: false
    },
    email: {
        value: '',
        error: false
    },
    password: {
        value: '',
        error: false
    }
 })
  return (
    <form className="form">
        <h2 className="form__title">Sign up for a free account</h2>
        { Object.keys(formData).map(name => (
            <Input name={name} data={formData[name]}/>
        ))}
        <button className="button">Submit</button>
    </form>
  )
}
