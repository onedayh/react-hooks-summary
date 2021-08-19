import { useState, useEffect } from 'react'
import Button from '../components/Button'

const UseEffect = () => {
  // const isFirstRender = useRef(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('mounted')
    return () => {
      console.log('destoryed')
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 65) {
        console.log(count)
      }
    }
    console.log(1)
    window.addEventListener('keydown', handleKeyDown, false)
    return () => {
      console.log(2)
      window.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [count])

  useEffect(() => {
    console.log('watch: ' + count)
    document.title = `count=${count}`
  }, [count])

  return (
    <>
      <h2>useEffect：可以让你在函数组件中执行副作用操作</h2>
      <p>1、第一个参数为执行副作用的回调函数；</p>
      <p>2、第二个参数为依赖数组，当依赖变化时才执行副作用；</p>
      <p>3、第一个参数可以返回一个回调函数，在下一次渲染前执行。</p>
      <Button onClick={() => setCount(val => val + 1)} text={'count: ' + count} />
    </>
  )
}

export default UseEffect