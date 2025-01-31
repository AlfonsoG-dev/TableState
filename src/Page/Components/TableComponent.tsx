import {ReactNode} from 'react';
import '../../Styles/table.css'

type TableProps = {
    id_pk: number | string

}
type Column<T> = {
    key: keyof T;
    header: string;
    renderer?: (value: T[keyof T]) => ReactNode;
}

interface Props<T> {
    elements: Array<T>
    columns: Array<Column<T>>
}
export default function TableComponent<T extends TableProps>({elements, columns}: Props<T>) {
    if(elements.length === 0) {
        return (
            <h1>No more results</h1>
        )
    }
    return (
        <table>
            <thead>
                <tr>
                    {
                        columns.map((c) => (
                            <th key={String(c.key)}>{c.header}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    elements.map((e) => (
                        <tr key={e.id_pk}>
                            {
                                columns.map((c) => (
                                    <td key={String(c.key)}>
                                        {
                                            c.renderer
                                            ? c.renderer(e[c.key])
                                            : String(e[c.key])
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

