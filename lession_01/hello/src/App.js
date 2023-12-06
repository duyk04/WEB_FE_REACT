import logo from './logo.svg';
import './App.css';
import Info from'./component/PersonalInfo.js'

function App() {
  const info = {
    name: 'Khuong Duy',
    age: 20,
    add: 'Yen Bai',
    img: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/368362743_1984560611910255_3067637346226050805_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGGyNBRRibHqJQgP1VRz5PVUoxDznnTS8hSjEPOedNLyNWljOS82nN29e3ZisVx075pXdS7L9YCiRXn-S55kTlz&_nc_ohc=2fm3K-0K8Q4AX-cTMYb&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCjipfNeOYV7stp_tBtzscibqRg0pROdl9bPx9QOKkIHA&oe=6575D1FF'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Info name={info.name} age={info.age} add={info.add} img={info.img}/>
    </div>
  );
}

export default App;
