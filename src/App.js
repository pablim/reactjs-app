import React, { useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import moment from 'moment';
import {
  Routes,
  Route,
} from "react-router-dom";

import ContentApp from "./components/Content";
import NavBarApp from "./components/NavBar";
import Footer from "./components/Footer"
import SideBar from './components/SideBar';
import Home from "./views/Home"
import About from "./views/About"

import { useTranslation } from 'react-i18next'
import "./locales/i18n"

import './App.css';
import Login from './views/Login';

function App() {
  const { t } = useTranslation()
  const [visibleSidebar, setVisibleSidebar] = useState(undefined)
  
  return (
    <div className="App">
      <Container 
        className='p-0'
        style={{backgroundColor: 'blueviolet', minHeight: '100vh'}}
        fluid  
      >
        {/* NavBar */}
        <Row style={{backgroundColor: 'black'}}>
          <Col>
            <NavBarApp visibleSidebar={setVisibleSidebar} />
          </Col>
        </Row>
        <div 
          className='d-flex'
          style={{minHeight: 'calc(100vh - 64px - 128px)'}}
          
        >
          {/* SideBar */}
          <SideBar visible={visibleSidebar}/>

          {/* Content */}
          <div>
            {moment().format('yyyy-mm-DD')}{' '}
            {t("welcome")}{' '}
            {t("date_format_one", { date: "10/10/2022" })}
            <ContentApp />

            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </div>
        </div>
        {/* Footer */}
        <Row style={{backgroundColor: 'black'}}>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
