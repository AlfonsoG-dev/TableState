import useUserState from './Hooks/UserHook'
import TableComponent from './Page/Components/TableComponent'
import './Styles/App.css'

function App() {
    const {
        getUsers,
        limit, offset,
        handleNext, handlePrev, addUser
    } = useUserState()
    const l = getUsers(offset, limit)
    return(
        <>
            <h1>Users</h1>
            <TableComponent users={l}/>
            <div className=''>
                <button onClick={handlePrev} disabled={offset === 0}>prev</button>
                <button onClick={handleNext} disabled={l.length === 0}>next</button>
            </div>
        </>
    )
}

export default App
