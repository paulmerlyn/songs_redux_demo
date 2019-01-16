import React from 'react';

const SongRow = (props) => {
    console.log(props);
    return (
        <tr key={props.song.id}>
            <td>
                {props.song.id}
            </td>
            <td>
                {props.song.title}
            </td>
            <td>
                {props.song.band}
            </td>
            <td>
                {props.song.duration}
            </td>
        </tr>    
    )
}

export default SongRow;