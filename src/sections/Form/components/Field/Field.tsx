import React, {FC} from 'react';
import style from "../../Form.module.scss";

type Props = {
    title: string
    id?: string
    name: string,
    type: 'text' | 'checkbox' | 'radio' | 'email'
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
        <div className={style.errorMessage}>Пожалуйста укажите
            {name === 'firstName' && ' имя'}
            {name === 'lastName' && ' фамилию'}
            {name === 'email' && ' электронную почту'}
            {name === 'gitHub' && ' ссылку на ваш GitHub'}
    </div>
    )

    const displayErrorPattern = (name === 'email' ?
            <div className={style.errorMessage}>Некорректный email</div> :
            <div className={style.errorMessage}>Здесь могут быть только русские буквы</div>
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
