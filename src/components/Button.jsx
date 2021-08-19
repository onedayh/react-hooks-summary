import {useContext, memo} from 'react'
import { AppContext } from '../App'

const Button = ({onClick, text}) => {
  console.log(text)
  const {theme} = useContext(AppContext)
  return (
    <button style={{backgroundColor: theme}} onClick={onClick}>{text}</button>
  )
}

export default memo(Button)