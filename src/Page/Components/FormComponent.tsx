import {ChangeEventHandler, FormEventHandler} from "react"
interface Props<T> {
    element: T
    ignore: string[],
    changeHandler: ChangeEventHandler<HTMLInputElement>
    submitHandler: FormEventHandler
}
export default function FormComponent<T extends Object>({element, ignore, changeHandler, submitHandler}: Props<T>) {
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
                    <label key={i}>
                        {k}
                        <input
                            key={k}
                            type={typeof getData().values[i]}
                            name={k}
                            defaultValue={getData().values[i]}
                            onChange={changeHandler}
                        />
                    </label>
                ))
            }
            <div className='btn-options'>
                <button type="submit">Guardar</button>
            </div>
        </form >
    )
}
