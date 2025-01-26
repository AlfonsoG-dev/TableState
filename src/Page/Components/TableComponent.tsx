import '../../Styles/table.css'

interface Props<T> {
    elements: T[],
    ignore: string[]
}
export default function TableComponent<T extends Object>({elements, ignore}: Props<T>) {
    if(elements.length === 0) {
        return (
            <h1>No more results</h1>
        )
    }
    function columns() {
        const e: T = elements[0]
        const keys = Object.keys(e).filter(k => !ignore.includes(k))
        return(
            <tr key={"cols"}>
                {
                    keys
                    .map((k, i) => (
                        <th key={i}>{k}</th>
                    ))
                }
            </tr>
        )
    }
    function rows(element: any, index: number) {
        const keys = Object.keys(element).filter(k => !ignore.includes(k))
        return(
            <tr key={index}>
                {
                    keys
                    .map((k, i) => (
                        <td key={i}>{element[k]}</td>
                    ))
                }
            </tr>
        )
    }

    return (
        <table>
            <thead>
                {
                    columns()
                }
            </thead>
            <tbody>
                {
                    elements.map((u, i) => (
                        rows(u, i)
                    ))
                }
            </tbody>
        </table>
    )
}

