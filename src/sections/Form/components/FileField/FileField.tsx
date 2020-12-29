import React, {Dispatch, FC} from 'react';
import style from './FileField.module.scss'

type Props = {
    fileName: string,
    setFileName: Dispatch<string>,
    deletePortfolioFile: () => void
}
const FileField: FC<Props> = ({setFileName, deletePortfolioFile, fileName}) => {

    const displayFileInput = fileName ?
        (
            <div className={style.downloadedFileName}>
                <div>
                    <i className="material-icons">attach_file</i>
                    <span>{fileName}</span>
                </div>
                <i className="material-icons" onClick={deletePortfolioFile}>clear</i>
            </div>
        ) : (
            <div className={style.buttonWrapper}>
                <input type="file" className={style.buttonInput} id={'download'} name={'download'}
                       onChange={(e) => {
                           setFileName(e.target.files![0].name)
                       }}/>
                <label htmlFor={'download'} className={style.button}>
                    <div className={style.icon}>
                        <i className="material-icons md-18 md-dark md-inactive">add</i>
                    </div>
                    <span>Загрузить резюме</span>
                </label>
            </div>
        )

    return (
        <>
            {
                displayFileInput
            }
        </>
    );
};

export default FileField;