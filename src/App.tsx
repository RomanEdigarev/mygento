import React, {useState} from 'react';
import './App.module.css';
import Form from "./sections/Form/Form";
import Modal from "./sections/Form/components/Modals/SubmitModal/Modal";
import style from './App.module.css'
import PoliticalModal from "./sections/Form/components/Modals/PoliticalModal/PoliticalModal";

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showPoliticalModal, setShowPoliticalModal] = useState(false)

  return (
    <div className={style.app}>
      <Form setShowModal={setShowModal} setShowPoliticalModal={setShowPoliticalModal}/>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <PoliticalModal showPoliticalModal={showPoliticalModal} setShowPoliticalModal={setShowPoliticalModal}/>
    </div>
  );
}

export default App;
