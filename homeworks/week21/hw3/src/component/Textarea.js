import { Title } from '../style/GlobalStyle'
import TextareaStyle from '../style/TextareaStyle'
import { useState } from 'react'

const Textarea = ({ title, type, name, required, formData, setFormData}) => {
  const [value, setValue] = useState(formData[name])

  const handleChange = (e) => {
    const val = e.target.value
    setValue(val)
    setFormData({
      ...formData,
      [name]: val
    })
  }

  return (
    <>
      <label>
        <Title required={required}>{title}</Title>
      </label>
      <TextareaStyle rows={5} cols={20} type={type} onChange={handleChange} placeholder="你的回答">{value}</TextareaStyle>
    </>
  )
}


export default Textarea