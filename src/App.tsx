// Dependencies
import { useState, ChangeEvent, FormEvent } from 'react'

// Components
import TableComponent from './Page/Components/TableComponent'
import FormComponent from './Page/Components/FormComponent'

// Hooks
import useTableState from './Hooks/TableDataHook'

// Data
import USER_LIST, {User} from "./Types/UserType"

// Styles
import './Styles/App.css'

function App() {
    const {
        getElements,
        limit, offset,
        handleNext, handlePrev, addElement
    } = useTableState<User>(USER_LIST)
    const elements = getElements(offset, limit)
    const [searched, setSearched] = useState<User>({
        id_pk: USER_LIST.length+1,
        name: '',
        age: 0,
        rol: '',
        create_at: new Date(Date.now()).toLocaleDateString(),
        update_at: null
    })
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        const {name, value} = e.target
        setSearched((prev: User): User => ({
            ...prev,
            [name]: value
        }))
    }
    function handleAddUser(e: FormEvent) {
        e.preventDefault()
        alert("Success operation")
        addElement(searched)
    }
    return(
        <div className='container'>
            <FormComponent 
                element={searched} 
                ignore={['id_pk', 'create_at', 'update_at']} 
                changeHandler={handleChange}
                submitHandler={handleAddUser}
            />
            <h1>Users</h1>
            <TableComponent<User> elements={elements} ignore={['id_pk']}/>
            <div className='options'>
                <button onClick={handlePrev} disabled={offset === 0}>prev</button>
                <button onClick={handleNext} disabled={elements.length === 0}>next</button>
            </div>
        </div>
    )
}

export default App
