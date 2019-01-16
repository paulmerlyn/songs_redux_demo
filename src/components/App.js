import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import SongRow from './SongRow';
import {Grid, Row, Col} from 'react-bootstrap';

const onSongSelect = (id) => {
    // to do 
}

const getSongs = () => {
    return [
        {title: 'She loves you', band: 'The Beatles', duration: 154, id: 1},
        {title: 'Rebel Just for Kicks', band: 'Portugal the Man', duration: 154, id: 2},
        {title: 'Roar', band: 'Katie Perry', duration: 174, id: 3},
        {title: 'Killer Queen', band: 'Queen', duration: 202, id: 4}
    ]
}

const getSongRows = () => {
    const songs = getSongs();
    let rowNum = 0;
    const songRows = songs.map((song, index) => {
        return (
            <SongRow key={index.toString()} song={song} onSongSelect={onSongSelect}/>
        )
    });
    console.log(songRows);
    return songRows;
}

const App = () => {
    return (
        <Grid className="show-grid fluid">
            <Row>
                <Col xs={12} md={6}>
                    <SongList>
                        {getSongRows()}
                    </SongList>    
                </Col>
                <Col xs={12} md={6}><SongDetail /></Col>
            </Row>    
        </Grid>
    );
}

export default App;