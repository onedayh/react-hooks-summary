import {useState, Component} from 'react'
import Button from '../components/Button'

const UseState = () => {
  const initCount2 = val => {
    console.log('init count2')
    return val
  }
  // const initCountValue = useState(0)
  // const count = initCountValue[0]
  // const setCount = initCountValue[1]
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(() => initCount2(0))
  return (
    <div>
      <h2>useState</h2>
      <p>1、useState 函数调用：保存变量。</p>
      <p>2、useState 函数参数：初始值，值或有返回值的函数。</p>
      <p>3、useState 函数返回值：一个数组，[当前值， 更新值的函数]。</p>
      <Button onClick={() => setCount(val => val + 1)} text={'count: ' + count} />
      <Button onClick={() => setCount2(val => val + 1)} text={'count2: ' + count2} />
    </div>
  )
}

class SetState extends Component {
  constructor (props) {
    super (props)
    this.state = {
      count: 0
    }
  }
  render () {
    return (
      <div>
        <h2>setState</h2>
        <Button onClick={() => this.setState({count: this.state.count + 1})} text={'count: ' + this.state.count} />
      </div>
    )
  }
}

const State = () => (
  <>
    <UseState />
    <SetState />
  </>
)

export default State 