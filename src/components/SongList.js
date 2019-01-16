import React from 'react';
import {Table} from 'react-bootstrap';

class SongList extends React.Component{
    render = () => {
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Song Title</th>
                    <th>Recording Artist</th>
                    <th>Length (min:sec)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </Table>
        )
    }
};

export default SongList;