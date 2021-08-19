import { Suspense, lazy, createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import SideBar from './components/SideBar'
import './App.css'

export const routers = [
  { name: 'home', path: '/', redirect: '/ReactHook'},
  { name: 'ReactHook', component: lazy(() => import('./pages/reactHook')) },
  { name: 'useState', component: lazy(() => import('./pages/useState')) },
  { name: 'useEffect', component: lazy(() => import('./pages/useEffect')) },
  { name: 'useContext', component: lazy(() => import('./pages/useContext')) },
  { name: 'useRef', component: lazy(() => import('./pages/useRef')) },
  { name: 'useCallback', component: lazy(() => import('./pages/useCallback')) },
  { name: 'useMemo', component: lazy(() => import('./pages/useMemo')) },
  { name: 'Recoil', component: lazy(() => import('./pages/recoil')) },
]

export const AppContext = createContext()

const App = () => {
  const [theme, setTheme] = useState('red')
  return (
    <AppContext.Provider value={{
      theme,
      setTheme
    }}>
      <Router>
        <SideBar />
        <div className='main-wrap'>
          <div className='main'>
            <Suspense fallback={<div className='loading'>loading...</div>}>
              <Switch>
                {
                  routers.map(v => 
                    <Route
                      key={v.name}
                      path={v.path || '/' + v.name}
                      exact
                      render={props => {
                        if (v.redirect) return <Redirect to={v.redirect} />
                        return <v.component {...props} />
                      }}
                    />
                  )
                }
              </Switch>
            </Suspense>
          </div>
        </div>
      </Router>
    </AppContext.Provider>
  )
}

export default App