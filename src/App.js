import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { useState } from 'react';
import shoesData from './data.js';
import Detail from './pages/detail.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function App() {

  let [shoes] = useState(shoesData)
  let navigate = useNavigate(); //페이지 이동을 도와주는 함수

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/detail')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/"  element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
            <div className="row">
              { shoes.map(function(item,i){
                  return <Card shoes={shoes[i]} i={i}></Card>
                  })}
            </div>

          </div>
          
          </>
        }/>
        <Route path="/detail"  element={<Detail/>}/>
        <Route path="/about"  element={<About/>}>
          // /about/member 경로
          <Route path="member"  element={<div>member info</div>}/>
          <Route path="location"  element={<About/>}/>
        </Route>

        

        /* path ="*" 는 위 페이지 제외한 나머지 모두 */
        <Route path="*"  element={<div>page not found</div>}/>
      </Routes>

    </div>
  );
}
function About(){
  return(
    <div>
      <h4>Company Info</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Card(props){
  return(
  <div className="col-md-4">
    <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} alt="" width='80%'/>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content}</p>
    <p>{props.shoes.price}</p>
  </div>
  )
}

export default App;