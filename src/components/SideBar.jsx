import {useContext} from 'react'
import { AppContext } from '../App'
import {useHistory, useLocation} from 'react-router-dom'
import {routers} from '../App'

const SideBar = () => {
  const {theme} = useContext(AppContext)
  const location = useLocation()
  const history = useHistory()

  const handleClick = (name, path) => {
    const link = path || '/' + name
    if (location.pathname === link) return
    history.push(link)
  }
  
  return (
    <ul className='side-wrap'>
      {
        routers.filter(v => !v.redirect).map(v => 
          <li 
            style={{color: location.pathname === '/' + v.name ? theme : 'initial'}}
            className={`side-item${location.pathname === '/' + v.name ? ' ac-side' : ''}`}
            key={v.name}
            onClick={() => handleClick(v.name, v.path)}
          >
            {v.name}
          </li>)
      }
    </ul>
  )
}

export default SideBar