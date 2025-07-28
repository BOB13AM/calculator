import './App.css'
import { useState } from 'react';

function App() {

  const [total, setTotal] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);


  const handletxt1Change = (n1:string) => {
    let num1=Number(n1)
    //console.log("Text1 changed to: " + num1);
    setNum1(num1);
  }

  const handletxt2Change = (n2:string) => {
    let num2=Number(n2)
    //console.log("Text2 changed to: " + num2);
    setNum2(num2);
  }

  const handleSubtract = () => {
    //setTotal( total );
    //console.log("Subtract button clicked", total);
    setTotal(num1-num2);
  }
 
  const handleAdd = () => {
    //setTotal(total);
    //console.log("Add button clicked" ,   total);
    setTotal(num1+num2);
  }

  return (
    <>
    <div>
      <input type="text" style={{ marginRight: '10px' }} onChange={(t1)=>handletxt1Change(t1.target.value)}/>
      <input type="text" onChange={(t2)=>handletxt2Change(t2.target.value)}/> 
    <br></br>
      <button onClick={handleSubtract} style={{ marginRight: '100px',marginTop: '10px'}}>Subtract</button> 
      <button onClick={handleAdd} style={{ marginTop: '10px' }}>Add</button> 
    </div>
    <div style={{ marginTop: '60px', marginLeft: '120px',padding: '10px',border: '2px solid #333',borderRadius: '10px',background: '#000000ff',fontWeight: 'bold',fontSize: '2rem',textAlign: 'center',width: '80px',
    boxShadow: '0 2px 8px rgba(255, 255, 255, 1)'}}>{total}</div>
    </>
  )
}

export default App
