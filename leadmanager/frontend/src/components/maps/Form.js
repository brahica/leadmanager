import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addMap } from '../../actions/maps'

class Form extends Component {
    state = {
        name: '',
        owner: '',
        create_at: '',
        upadte_at: ''
    }

    static propsTypes = {
        addMap: PropTypes.func.isRequired
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        const { name } = this.state;
        const map = { name };
        this.props.addMap(map);
        this.setState({
            name: '',
        })
    }

    render() {
        const { name } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Map</h2>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}



export default connect(null, { addMap })(Form);
