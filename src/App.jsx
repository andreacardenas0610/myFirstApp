import { useState } from 'react'
// import reactLogo from '/img/react.svg'
// import viteLogo from '/img/vite.svg'
import './shared/styles/App.css'
import { Header } from "./features/layout/components/Header"
import { Content } from "./features/layout/components/Content"
import { Footer } from "./features/layout/components/Footer"
import { Props } from "./features/layout/components/Props"
import { Article } from "./features/layout/components/Article"
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Content />}></Route>
          <Route path='/article' element={<Article />}></Route>
          <Route path='/props' element={<Props />}></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
