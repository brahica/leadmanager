import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getMaps, deleteMap } from '../../actions/maps'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export class Maps extends Component {
    static propTypes = {
        maps: PropTypes.array.isRequired,
        getMaps: PropTypes.func.isRequired,
        deleteMap: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getMaps();

    }


    render() {
        return (
            <Fragment>
                <h2>Maps</h2>
                {this.props.maps.map(map => (
                    <div key={map.id} style={{ height: 600, marginTop: 50, marginBottom: 80 }}>
                        <h2>{map.name}</h2>
                        <span><button onClick={this.props.deleteMap.bind(this, map.id)} className="btn btn-danger btn-sm">Delete</button></span>
                        <Map center={[51.505, -0.09]} zoom={13}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                            </Marker>
                        </Map>
                    </div>
                ))}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    maps: state.maps.maps
})



export default connect(mapStateToProps, { getMaps, deleteMap })(Maps);
