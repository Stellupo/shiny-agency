import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Footer from './components/Footer'
import GlobalStyle from './utils/style/GlobalStyle'
import { SurveyProvider, ThemeProvider } from './utils/context'
import ProfileContainer from './classComponents/ProfileContainer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <SurveyProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/survey/:questionNumber' element={<Survey />} />
            <Route path='/results' element={<Results />} />
            <Route path='/freelances' element={<Freelances />} />
            <Route
              path="/profile/:id"
              element={<ProfileContainer />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </SurveyProvider>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
