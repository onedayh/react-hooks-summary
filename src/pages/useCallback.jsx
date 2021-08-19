import { useState, useCallback } from 'react'
import Button from '../components/Button'

const UseCallback = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const handleClickCount2 = useCallback(() => {
    setCount2(val => val + 1)
  }, [])
  return (
    <>
      <h2>useCallback</h2>
      <p>1、把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新；</p>
      <p>2、搭配memo使用。</p>

      <h2>memo</h2>
      <p>1、只适用于函数组件；</p>
      <p>2、如果你的函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。</p>

      <Button onClick={() => setCount1(val => val + 1)} text={'count1: ' + count1} />
      <Button onClick={handleClickCount2} text={'count2: ' +  count2} />
    </>
  )
}

export default UseCallback