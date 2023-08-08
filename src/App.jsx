import React from "react";
import './in.css'

const Slot = (props) =>{
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if((x===y)&&(y===z))
  {
    return (
      <>
      <div className="b">
          <div className="box">
            <h1 >{x}{y}{z}</h1>
            <h1>  This is✔Matching</h1>
          </div>
      </div>
      </>
    );
  }
  else{
    return (
      <>
      <div className="b">
          <div className="box">
            <h1>{x}{y}{z}</h1>
            <h1>This is❌Matching</h1>
          </div>
      </div>
      </>
    );
  }
}


const App = () =>{
  return(
    <>
        <h1 className="heading">  🎰Welcome To Slot Machine!!  </h1>
        <Slot x='🤒'  y= '🙂' z= '😀'/>
        <Slot x='😊'  y= '😊'  z='😊'/>
        <Slot x='🌚'  y= '🌚'  z='🌚'  />
    </>
  );
}
export default App