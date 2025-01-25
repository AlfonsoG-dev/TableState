import '../../Styles/table.css'
import { User } from '../../Types/UserType'

interface Props {
    users: User[]
}
export default function TableComponent({users}: Props) {
    if(users.length === 0) {
        return (
            <h1>No more results</h1>
        )
    }
    const keys: string[] = Object.keys(users[0])
    function rows(user: User) {
        const values = Object.values(user)
        return(
            <>
                {
                    values.splice(1)
                    .map((u, i) => (
                        <td key={i}>{u}</td>
                    ))
                }
            </>
        )
    }

    return (
        <table>
            <thead>
                <tr> 
                    {
                        keys.splice(1)
                        .map((k, i) => (
                                <th key={i}>{k}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                <tr>
                    {
                        users.map((u) => (
                            rows(u)
                        ))
                    }
                </tr>
            </tbody>
        </table>
    )
}
