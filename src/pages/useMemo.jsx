import { useState, useMemo } from 'react'
import Button from '../components/Button'

const UseMemo = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  const handleClickCount2 = useMemo(() => {
    return () => setCount2(val => val + 1)
  }, [])

  const computedTotal = useMemo(() => {
    console.log('computed')
    return count2 ** 10
  }, [count2])

  return (
    <>
      <h2>UseMemo</h2>
      <p>1、把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值;</p>
      <p>2、返回值是一个值，可以是属性，可以是函数（包括组件）</p>
      <p>3、替换useCallback。</p>
      <p>4、缓存复杂的计算结果。</p>

      <Button onClick={() => setCount1(val => val + 1)} text={'count1: ' + count1} />
      <Button onClick={handleClickCount2} text={'count2: ' +  count2} />
      {
        useMemo(() => <Button onClick={() => setCount3(val => val + 1)} text={'count3: ' +  count3} />, [count3])
      }
      <h2>{computedTotal}</h2>
    </>
  )
}

export default UseMemo