import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import SongRow from './SongRow';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends React.Component {
    state = {selectedSong: null};

    onSongSelect = (id) => {
        // Now populate the SongDetail with the selected song
        console.log(`onSongSelect called in App with ${id}`); 
        const songs = this.getSongs();
        const selectedSong = songs[id - 1];
        this.setState({selectedSong: selectedSong});
    }
    
    getSongs = () => {
        return [
            {title: 'She loves you', band: 'The Beatles', duration: 154, id: 1},
            {title: 'Rebel Just for Kicks', band: 'Portugal the Man', duration: 154, id: 2},
            {title: 'Roar', band: 'Katie Perry', duration: 174, id: 3},
            {title: 'Killer Queen', band: 'Queen', duration: 202, id: 4}
        ]
    }
    
     getSongRows = () => {
        const songs = this.getSongs();
        const songRows = songs.map((song, index) => {
            return (
                <SongRow key={index.toString()} song={song} 
                    onSongSelect={this.onSongSelect}
                    buildDurationString={this.buildDurationString}
                    />
            )
        });
        console.log(songRows);
        return songRows;
    }
    
    buildDurationString = (mins) => {
        return `${Math.floor(mins/60)}:${mins % 60}`;
    }
    
    render() {
        return (
            <Grid className="show-grid fluid">
                <Row>
                    <Col xs={12} md={6}>
                        <SongList>
                            {this.getSongRows()}
                        </SongList>    
                    </Col>
                    <Col xs={12} md={6}>
                        <SongDetail selectedSong={this.state.selectedSong} 
                            buildDurationString={this.buildDurationString}/>
                    </Col>
                </Row>    
            </Grid>
        );
    }
}

export default App;