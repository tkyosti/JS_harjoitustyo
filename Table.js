import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Laskuttava yritys</th>
                <th>Maksupvm</th>
                <th>Laskun loppusumma</th>
                <th>Maksaja</th>
            </tr>
        </thead>
    )
}
const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.laskuttava_yritys}</td>
                <td>{row.maksupvm}</td>
                <td>{row.laskun_loppusumma}</td>
                <td>{row.maksaja}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return  <tbody>{rows}</tbody>
}

class Table  extends Component {
    
    render() {
        const { characterData, removeCharacter } = this.props

        return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={this.removeCharacter} />
        </table>
        )
    }
}

export default Table