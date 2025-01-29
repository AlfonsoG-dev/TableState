export type User = {
    id_pk: number,
    name: string,
    age: number,
    rol: string,
    create_at: string,
    update_at: string | null
}

const USER_LIST: User[] = [
    {
        id_pk: 1,
        name: "Pablo",
        age: 30,
        rol: "admin",
        create_at: "21/10/1980",
        update_at: null
    },
    {
        id_pk: 2,
        name: "Luca",
        age: 27,
        rol: "personal",
        create_at: "03/05/1998",
        update_at: null
    },
    {
        id_pk: 3,
        name: "Patricio",
        age: 30,
        rol: "personal",
        create_at: "21/05/1998",
        update_at: null
    }
]
export default USER_LIST;
