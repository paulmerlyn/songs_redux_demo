import React from 'react';
import '../custom.css';

const onSongSelect = () => {
    // do nothing and never called ... can remove
}

const SongRow = (props) => {
    console.log(props);
    return (
            <tr className="song_row" key={props.song.id} onClick={props.onSongSelect(props.song.id)}>
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