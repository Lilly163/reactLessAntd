import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import NavLeft from './component/NavLeft'
import Header from './component/Header'
import Footer from './component/Footer'
function App() {
  return (
    <div className="App">
        <Row>
            <Col span={3}>
               <NavLeft />
            </Col>
            <Col span={21}>
               <Header />
               <Row>
                 content
               </Row>
               <Footer />
            </Col>
        </Row>
    </div>
  );
}

export default App;
