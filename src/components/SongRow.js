import React from 'react';
import '../custom.css';

const onSongSelect = () => {
    // do nothing and never called ... can remove
}

const onClickHander = (props) => {
    console.log('song id captured on onClickHandler is:', props.song.id);
    props.onSongSelect(props.song.id);
}

const SongRow = (props) => {
    console.log(props);
    return (
            /* Note use of arrow function to wrap onClickHander below in order to be able to pass that parameter (i.e. props) to it.
              * See 'How do I pass a parameter to an event handler or callback?' in https://reactjs.org/docs/faq-functions.html*/
            <tr className="song_row" key={props.song.id} onClick={() => onClickHander(props)}>
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
                    {props.buildDurationString(props.song.duration)}
                </td>
            </tr>
    )
}

export default SongRow;