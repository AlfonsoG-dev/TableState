import { useState } from "react"
const DEFAULT_LIMIT: number = 2
export default function useTableState<T>(listT: Array<T>) {
    const [elements, setElements] = useState<Array<T>>(listT)
    const [limit, setLimit] = useState(DEFAULT_LIMIT)
    const [offset, setOffset] = useState(0)

    function getElements(offset: number, limit: number): T[] {
        let pagination: Array<T> = []
        if(limit >= elements.length) {
            limit = elements.length
        }
        for(let i=offset; i<limit; ++i) {
            pagination.push(elements[i])
        }
        return pagination
    }

    function handleNext() {
        if(getElements(offset, limit).length > 0 && limit <= elements.length) {
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
    function addElement(user: T) {
        const c = [...elements]
        c.push(user)
        setElements(c)
        return elements.length
    }
    return  {
        elements, getElements, limit, offset, handleNext, handlePrev, addElement
    }
}
