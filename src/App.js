import logo from './logo.svg';
import './App.css';
import { CustomMap } from './components/CustomMap';
import { CustomModal } from './components/CustomModal';
import { HelloGuys } from './components/testing';
import {
  CustomInput,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  
} from 'reactstrap';

function App() {
  return (
    <div className="App">
     <CustomMap/>
     {/* <HelloGuys/> */}
     <CustomModal/>
    </div>
  );
}

export default App;
