import React, {Dispatch, FC} from 'react';
import {useForm} from 'react-hook-form'
import Field from "./components/Field/Field";
import style from './Form.module.scss'
import RadioField from "./components/RadioField/RadioField";

type Inputs = {
    firstName: string,
    lastName: string,
    email: string,
    sex: string,
    gitHub: string,
    political: boolean
}

type Props = {
    setShowModal: Dispatch<boolean>
    setShowPoliticalModal: Dispatch<boolean>
    setName: Dispatch<string>
}
const Form: FC<Props> = ({setShowModal, setShowPoliticalModal, setName}) => {
    const {register, handleSubmit, errors, setValue, watch, reset} = useForm<Inputs>({
        mode: 'onBlur'
    })
    const onSubmit = (data: Inputs) => {
        setName(data.firstName)
        setShowModal(true)
        reset()
    }

    const openPoliticalModal = () => {
        setShowPoliticalModal(true)
        setValue('political', true)
    }

    return (
        <div className={style.container}>
            <h1 className={style.title}>
                Анкета соискателя
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.personalInfo}>
                    <h2 className={style.subtitle}>
                        Личные данные
                    </h2>

                    <Field name={'firstName'}
                           type={'text'}
                           title={'Имя'}
                           placeHolder={'Имя'}
                           register={register}
                           error={errors.firstName}
                           required={true}
                           pattern={/[А-Яа-я]+$/gi}
                    />

                    <Field name={'lastName'}
                           type={'text'}
                           title={'Фамилия'}
                           placeHolder={'Фамилия'}
                           register={register}
                           error={errors.lastName}
                           required={true}
                           pattern={/[А-Яа-я]+$/gi}
                    />

                    <Field name={'email'}
                           type={'text'}
                           title={'Электронная почта'}
                           placeHolder={'Электронная почта'}
                           register={register}
                           error={errors.email}
                           required={true}
                           pattern={/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i}
                    />

                    <div className={style.buttonWrapper}>
                        <button type="button" className={style.button}>
                            <div className={style.icon}>
                                <i className="material-icons md-18 md-dark md-inactive">add</i>
                            </div>
                            Загрузить резюме
                        </button>
                    </div>

                </div>


                <div className={style.sex}>
                    <h2 className={style.subtitle}>
                        Пол *
                    </h2>
                    <RadioField
                        name={'sex'}
                        radioItems={[
                            {text: 'Мужской', value: 'male'},
                            {text: 'Женский', value: 'female'},
                        ]}
                        register={register}
                        required={true}
                        error={errors.sex}
                    />
                </div>

                <div className={style.gitHub}>
                    <h2 className={style.subtitle}>
                        GitHub
                    </h2>

                    <Field name={'gitHub'}
                           type={'text'}
                           title={'Вставьте ссылку на GitHub'}
                           placeHolder={'Вставьте ссылку на GitHub'}
                           register={register}
                           error={errors.gitHub}
                           required={true}
                    />

                </div>

                <div className={style.political}>
                    <input type="checkbox"
                           id={'political'}
                           name={'political'}
                           ref={register}/>
                    <label htmlFor="political"
                           className={style.politicalLabel}>* Я согласен c&nbsp;
                        <span>
              <button type={'button'} onClick={openPoliticalModal}>политикой конфиденциальности</button>
            </span>
                    </label>
                </div>


                <button
                    className={style.submitButton} type={'submit'}
                    disabled={!(Object.values(watch()).every(val => val) &&
                        Object.keys(watch()).length > 0 &&
                        Object.keys(errors).length === 0)}>
                    Отправить
                </button>
            </form>

        </div>
    );
};

export default Form;
