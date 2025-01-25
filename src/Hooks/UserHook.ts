import { useState } from "react"
import USER_LIST, { User } from "../Types/UserType"

const DEFAULT_LIMIT: number = 1
export default function useUserState() {
    const [users, setUsers] = useState<Array<User>>(USER_LIST)
    const [limit, setLimit] = useState(DEFAULT_LIMIT)
    const [offset, setOffset] = useState(0)

    function getUsers(offset: number, limit: number) {
        let pagination: Array<User> = []
        if(limit >= users.length) {
            limit = users.length
        }
        for(let i=offset; i<limit; ++i) {
            pagination.push(users[i])
        }
        return pagination
    }

    function handleNext() {
        if(getUsers(offset, limit).length > 0 && limit <= users.length) {
            setLimit(limit + DEFAULT_LIMIT)
            setOffset(offset + DEFAULT_LIMIT)
        }
    }
    function handlePrev() {
        if(limit > 0 && offset > 0) {
            setLimit(limit - DEFAULT_LIMIT)
            setOffset(offset - DEFAULT_LIMIT)
        }
    }
    function addUser(user: User) {
        setUsers((prev) => [
            ...prev,
            user
        ])
    }
    return  {
        users, getUsers, limit, offset, handleNext, handlePrev, addUser
    }
}
