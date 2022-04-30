import React from "react";
import "./index.css";
import MainContainer from './components/MainContainer';
 
export default function App() {
  const userData=[
   { userName:"Tuyizere Jean de Dieu"},
    { userName:"Cyimana Faisal"},
    { userName:"Uwacu Deny"},
    { userName:"Ganza Bobu"},
    { userName:"Ganza Bobu"},
    { userName:"Ganza Bobu"},
    
  ]
   return (
     <div>
       <h2 className="App"> Welcome to Our Chatting Application</h2>
       <MainContainer items={userData}></MainContainer> 
     </div>
   )
}

