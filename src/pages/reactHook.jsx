const ReactHook = () => (
  <>
    <h2>React Hook</h2>
    <p>Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。</p>

    <h2>动机</h2>
    <p>1、在组件之间复用状态逻辑很难；</p>
    <p>2、复杂组件变得难以理解；</p>
    <p>3、难以理解的 class。</p>

    <h2>规则</h2>
    <p>1、只在最顶层使用 Hook，不要在循环，条件或嵌套函数中调用 Hook；</p>
    <p>2、只在 React 函数中调用 Hook。</p>

    <h2>渲染机制</h2>
    <p>1、函数组件的渲染其实是当前函数的执行；</p>
    <p>2、函数组件的每一次渲染中，内部的 state、函数以及 props 都是独立的；</p>
    <p>3、state、 props变化会使函数组件重新渲染；</p>
    <p>4、父组件重新渲染会导致子组件重新渲染。</p>
  </>
)

export default ReactHook