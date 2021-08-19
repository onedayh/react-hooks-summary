import {useRef, useState} from 'react'
import Button from '../components/Button'
const UseRef = () => {
  const inputRef = useRef(null)
  const value = useRef(0)
  const [count, setCount] = useState(0)
  return (
    <>
      <h2>useRef</h2>
      <p>1、返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数。返回的 ref 对象在组件的整个生命周期内保持不变。</p>
      <p>2、变更 .current 属性不会引发组件重新渲染</p>

      <input ref={inputRef} />
      <Button onClick={() => inputRef.current.focus()} text='focus' />
      <Button onClick={() => value.current ++} text={'value: ' + value.current} />
      <Button onClick={() => setCount(val => val + 1)} text={'count: ' + count} />
    </>
  )
}

export default UseRef