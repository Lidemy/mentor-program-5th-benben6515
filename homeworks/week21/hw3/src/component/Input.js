import { Title, Warning } from '../style/GlobalStyle'
import InputStyle from '../style/InputStyle'
import { useState } from 'react'

const Input = ({ title, type, name, formData, setFormData, required, isValid }) => {
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
        {isValid[name] && <Warning>Column "{name}" is Invalid.</Warning>}
      </label>
      <InputStyle
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={(title.length > 5 ? "你":"你的") + title}
      />
    </>
  )
}

export default Input