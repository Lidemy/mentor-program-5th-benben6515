import { useState } from 'react'
import styled from 'styled-components'
import Input from './Input'
import Textarea from './Textarea'
import { Title, Warning }from '../style/GlobalStyle'
import InputStyle from '../style/InputStyle'


const Form = ({ className }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    activity_type: "",
    how_known: "",
    else_opinion: ""
  })
  const [isValid, setIsValid] = useState({
    name: false,
    email: false,
    phone: false,
    activity_type: false,
    how_known: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    let isAllValid = false
    let isValidCopy = { ...isValid }

    for (const [key, value] of Object.entries(formData)) {
      if (key === "else_opinion") break
      if (value.trim().length === 0) {
        isValidCopy[key] = true;
        isAllValid = true
      } else {
        isValidCopy[key] = false;
      }
    }
    setIsValid(isValidCopy)

    if (isAllValid) return

    let dataTemplate = `
name:  ${formData.name}
email:  ${formData.email}
phone:  ${formData.phone}
activity_type:  ${formData.activity_type}
how_known:  ${formData.how_known}
else_opinion:  ${formData.else_opinion}
    `
    alert(dataTemplate)
  }

  const handleRadio = (e) => {
    let desc = (e.target.value === "bed" ? "躺在床上用想像力實作" : "趴在地上滑手機找現成的" )
    setFormData({
      ...formData,
      activity_type: desc
    })
  }

  return (
      <form className={className} action="#" onSubmit={handleSubmit} >
        <h1>新拖延運動報名表單</h1>
        <p>活動日期 : 2021/08/30 ~ 2021/08/31</p>
        <p>活動地點 : 台北市大安區新生路二段 1 號</p>
        <WarningTxt>* 必填</WarningTxt>
        <Input title="暱稱" type="text" name="name" formData={formData} setFormData={setFormData} required="true" isValid={isValid} />
        <Input title="電子郵件" type="email" name="email" formData={formData} setFormData={setFormData} required="true" isValid={isValid} />
        <Input title="手機號碼" type="number" name="phone" formData={formData} setFormData={setFormData} required="true" isValid={isValid} />

        <Title required="true">報名類型</Title>
        <label>
          <InputStyle type="radio" name="activity_type" value="bed" onClick={handleRadio} />
          <span>躺在床上用想像力實作</span>
        </label>
        <label>
        <InputStyle type="radio" name="activity_type" value="phone" onClick={handleRadio} />
          <span>趴在地上滑手機找現成的</span>
          {isValid.activity_type && (<WarningRadio>Column "activity_type" is Invalid.</WarningRadio>)}
        </label>

        <Input title="怎麼知道活動的" type="text" name="how_known" formData={formData} setFormData={setFormData} required="true" isValid={isValid} />
        <Textarea title="其他" type="text" name="else_opinion" formData={formData} setFormData={setFormData} />
        <InputStyle type="submit" value="提交" />
        <p>請勿透過表單送出你的密碼。</p>
      </form>
  )
}


const WarningTxt = styled.p`
  margin: .5rem 0;
  color: ${({ theme }) => theme.colors.warning};
  font-size: 1.2rem;
`

const WarningRadio = styled(Warning)`
  bottom: -1rem;
`

const FormWrap = styled(Form)`
  display: flex;
  flex-direction: column;
  & > h1 {
    margin-bottom: 1rem;
  }
  & > p {
    margin-bottom: .5rem;
  }
`

export default FormWrap