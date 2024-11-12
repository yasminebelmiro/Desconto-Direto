import React from 'react'
import { Input } from './style'

const InputLogin = ({name, placeholder, onChange, type}) => {
  return <Input name={name} placeholder={placeholder} onChange={onChange} type={type} />
}

export default InputLogin