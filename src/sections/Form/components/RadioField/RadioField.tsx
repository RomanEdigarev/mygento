import React, {FC} from 'react';
import style from "../../Form.module.scss";

type RadioItem = {
  value: string,
  text: string
}

type Props = {
  radioItems: RadioItem[]
  name: string,
  register: any,
  required: boolean
  error: { type: string } | undefined
}
const RadioField: FC<Props> = ({radioItems, name,register, required, error}) => {

  const displayErrorMessage = (
    <div className={style.errorMessage}>Пожалуйста укажите
      {name==='sex' && ' пол'}
    </div>
  )

  return (
    <div>
      {
        radioItems.map(item => {
          return (
            <span className={style.sexField} key={item.value}>
          <input type="radio"
                 id={item.value}
                 value={item.value}
                 name={name}
                 ref={register({required})}/>
          <label htmlFor={item.value} className={style.sexLabel}>{item.text}</label>
        </span>
          )
        })
      }
      {error?.type==='required' ? displayErrorMessage : null}
    </div>
  );
};

export default RadioField;
