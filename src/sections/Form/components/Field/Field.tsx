import React, {FC} from 'react';
import style from "../../Form.module.scss";

type Props = {
  title: string
  id?: string
  name: string,
  type: 'text' | 'checkbox' | 'radio'
  placeHolder?: string,
  register: any
  required?: boolean,
  pattern?: RegExp
  error: { type: string } | undefined
}

const Field: FC<Props> = (
  {
    title,
    type,
    name,
    placeHolder,
    register,
    error,
    id,
    required,
    pattern,
  }
) => {

  const displayErrorMessage = (
    <span className={style.errorMessage}>Пожалуйста укажите
      {name === 'firstName' && ' имя'}
      {name === 'lastName' && ' фамилию'}
      {name === 'email' && ' электронную почту'}
      {name === 'gitHub' && ' ссылку на ваш GitHub'}
    </span>
  )

  const displayErrorPattern = (name === 'email' ?
      <span className={style.errorMessage}>Некорректный email</span> :
      <span className={style.errorMessage}>Здесь могут быть только буквы</span>
  )

  return (
    <div className={style.field}>
      <label htmlFor={name} className={style.fieldTitle}>{`${title} *`}</label><br/>
      <input className={error ? style.fieldInputError : style.fieldInput}
             type={type}
             id={id}
             placeholder={placeHolder}
             name={name}
             ref={register({required, pattern})}/>
      {error?.type === 'required' ? displayErrorMessage : null}
      {error?.type === 'pattern' ? displayErrorPattern : null}
    </div>

  );
};

export default Field;
