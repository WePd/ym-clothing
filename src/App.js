import { Routes, Route } from "react-router-dom"

import Home from "./routes/Home/Home"
import Navigation from "./routes/Navigate/Navigate"
import SignIn from "./routes/Login/Login"

const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* 当配置/时，头部导航显示，Home组件作为主页面 */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
