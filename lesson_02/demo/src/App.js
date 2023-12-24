import logo from './logo.svg';
import './App.css';
import Form from './component/formInput.js'
import Button from './component/button.js';
import InputText from './component/inputBox.js';
import Table from './component/table.js'

function App() {
  return (  
    <div>
      <form className="row g-3">
        <Button name='Thêm mới sinh viên' color='btn-primary' />
        <InputText placeholder='Search Here' />
        <Button name='Tìm Kiếm' color='btn-primary' />
        <InputText placeholder='Sắp xếp' />
      </form>
      <div>
        <h1>Danh sách sinh viên</h1>
      </div>
      <Table/>
    </div>
  );
}

export default App;