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

    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>rol</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((u) => (
                        <tr key={u.id_pk}>
                            <td>{u.name}</td>
                            <td>{u.age}</td>
                            <td>{u.rol}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
