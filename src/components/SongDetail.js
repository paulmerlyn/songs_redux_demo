import React from 'react';

const SongDetail = (props) => {
    return (
        <div>
            {
                props.selectedSong && 
                <div>
                    <div>{props.selectedSong.title}</div>
                    <div>{props.selectedSong.band}</div>
                    <div>{props.buildDurationString(props.selectedSong.duration)}</div>
                </div>
            }
        </div>
    )
}

export default SongDetail;