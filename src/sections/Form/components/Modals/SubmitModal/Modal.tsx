import React, {Dispatch, FC} from 'react';
import style from '../Modal.module.scss'

type Props = {
    showModal: boolean
    setShowModal: Dispatch<boolean>
    name: string
}
const Modal: FC<Props> = ({showModal, setShowModal, name}) => {

    const closeModal = () => {
        document.body.style.overflow = 'visible'
        setShowModal(false)
    }

    return (
        <div className={`${style.container} ${showModal ? style.show : ''}`}>
            <div className={`${style.content} ${showModal ? style.show : ''}`}>
                <div>
                    <h1 className={style.title}>Спасибо {name} !</h1>
                    <p className={style.text}>Мы скоро свяжемся с вами</p>
                </div>
                <button className={style.button} onClick={closeModal}>Понятно</button>
            </div>
        </div>
    );
};

export default Modal;
