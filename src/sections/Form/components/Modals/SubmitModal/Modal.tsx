import React, {Dispatch, FC} from 'react';
import style from '../Modal.module.scss'

type Props = {
  showModal: boolean
  setShowModal: Dispatch<boolean>
}
const Modal : FC<Props> = ({showModal, setShowModal}) => {

  const closeModal = () => {
    document.body.style.overflow = 'visible'
    setShowModal(false)
  }

  return (
    <div className={`${style.container} ${showModal ? style.show : null}`}>
      <div className={style.content}>
        <div>
          <h1 className={style.title}>Спасибо Роман!</h1>
          <p className={style.text}>Мы скоро свяжемся с вами</p>
        </div>
        <button className={style.button} onClick={closeModal}>Понятно</button>
      </div>
    </div>
  );
};

export default Modal;
