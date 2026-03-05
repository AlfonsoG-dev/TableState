import {ChangeEventHandler, FormEventHandler} from "react"
import getTitle from "../../Utils/Title"
interface Props<T> {
    element: T
    ignore: string[],
    changeHandler: ChangeEventHandler<HTMLInputElement>
    submitHandler: FormEventHandler
}

interface FormProps {
    title: string,
    index: number,
    value: any,
    changeHandler: ChangeEventHandler<HTMLInputElement>
}
export default function FormComponent<T extends Object>({element, ignore, changeHandler, submitHandler}: Readonly<Props<T>>) {
    function getData() {
        const data = Object.entries(element)
        let keys = []
        let values = []
        for(let d of data) {
            if(!ignore.includes(d[0])) {
                keys.push(d[0])
                values.push(d[1])
            }
        }
        return {
            keys,
            values
        }
    }
    return(
        <form className='form-container' onSubmit={submitHandler}>
            {
                getData().keys.map((k, i) => (
                    <FormField
                        key={k}
                        title={k}
                        index={i}
                        value={getData().values[i]}
                        changeHandler={changeHandler}
                    />
                ))
            }
            <div className='btn-options'>
                <button type="submit">Guardar</button>
            </div>
        </form >
    )
}
function FormField({title, value, changeHandler}: Readonly<FormProps>) {
    return(
        <label>
            {getTitle(title)}
            <input
                type={typeof value}
                name={title}
                defaultValue={value}
                onChange={changeHandler}
                required={true}
            />
        </label>
    )
}
