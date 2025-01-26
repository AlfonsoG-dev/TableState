import useTableState from './Hooks/TableDataHook'
import TableComponent from './Page/Components/TableComponent'
import USER_LIST, {User} from "./Types/UserType"
import './Styles/App.css'

function App() {
    const {
        getElements,
        limit, offset,
        handleNext, handlePrev, addElement
    } = useTableState<User>(USER_LIST)
    const elements = getElements(offset, limit)
    return(
        <div className='container'>
            <h1>Users</h1>
            <button className='btn-add'>Add</button>
            <TableComponent<User> elements={elements} ignore={['id_pk']}/>
            <div className='options'>
                <button onClick={handlePrev} disabled={offset === 0}>prev</button>
                <button onClick={handleNext} disabled={elements.length === 0}>next</button>
            </div>
        </div>
    )
}

export default App
