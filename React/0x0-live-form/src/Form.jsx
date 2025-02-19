import { useState } from 'react'
import Input from './Input'

export default function Form() {
 const [formData, setFormData] = useState({
    username: {
        value: ''
    },
    email: {
        value: ''
    },
    password: {
        value: ''
    }
 })

 const [formError, setFormError] = useState(true);

 function handleChange(event){
    const newFormData = {}
   for (const field in formData){
        newFormData[field] = {...formData[field]};
   }
   newFormData[event.target.name].value = event.target.value
   setFormData(newFormData);
 }
  return (
    <form className="form">
        <h2 className="form__title">Sign up for a free account</h2>
        { Object.keys(formData).map(name => (
            <Input name={name} data={formData[name]} handleChange={handleChange} setFormError={setFormError}/>
        ))}
        <button className="button" disabled={formError}>Submit</button>
    </form>
  )
}
