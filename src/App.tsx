import './App.css';
import {   useSelector } from 'react-redux';
import { RootState } from './state/reducer';
import Table from './components/table';
import AddUser from './components/addUser';


function App() {
  const state = useSelector((state: RootState) => state.user)
  return (
   
    <div className="App">
      <Table prop={state}/>
    <AddUser />
    </div>
  );
}

export default App;
