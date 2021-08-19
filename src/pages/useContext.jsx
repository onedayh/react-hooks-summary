import {useContext} from 'react'
import { AppContext } from '../App'
import Button from '../components/Button'

const UseContext = () => {
  const {setTheme} = useContext(AppContext)
  return (
    <>
      <h2>useContext</h2>
      <p>接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。</p>
      <Button onClick={() => setTheme('blue')} text='修改主题' />
    </>
  )
}

export default UseContext