import './App.css';
import FuncComp from './components/FuncComp';
import ClassComp from './components/ClassComp';

function App() {
  const name="Devmaster Academy";
  const show = (name)=>{
    return <h2>Welcome to, {name}</h2>
  }
  const obj ={
    name: "Chung Trinh Van",
    age:45,
    address:"25 Vu Ngoc Phan"
  }
  const formatName = (prop)=>{
    return(
      <div className='alert alert-success'>
      <p>Name: {obj.nam}</p>
      <p>age: {obj.age}</p>
      <p>Address: {obj.address}</p>
    </div>
    )
  }
  return (
    <div className="container border mt-5">
      <h1> Demo JSX Expression - Component</h1>
      <hr/>
      <div>
        <h2>JSX Expression</h2>
        <p>{"Devmaster"}</p>
        <p>Su dung bien name: <b>{name}</b></p>
        <hr/>
        <h2>Su dung ham: </h2>
        {show("Chung Trinh")}
        <hr/>
        <h2>Su dung doi tuong</h2>
        <div className='alert alert-success'>
          <p>Name: {obj.nam}</p>
          <p>age: {obj.age}</p>
          <p>Address: {obj.address}</p>
        </div>
        <hr/>
        {formatName(obj)}
      </div>
      <div>
        <h2> FUnction Component Demo</h2>
        {/* props null */}
        <FuncComp/>
        {/* props */}
        <FuncComp name="Devmaster" address="25 Vu Ngoc Phan" company="Devmaster JSC"/>
      </div>
      <div>
        <ClassComp/>
        <hr/>
        <ClassComp name="DEV Group" company="Devmaster "/>
      </div>
    </div>
  );
}

export default App;