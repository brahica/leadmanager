import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        alert: PropTypes.any,                           // Given by react-alert
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevPros) {
        const { error, alert, message } = this.props;

        // Catch Errors Message from REST API
        if (error !== prevPros.error) {
            if (error.msg.name)
                alert.error(`Name: ${error.msg.name.join()}`);
            if (error.msg.email)
                alert.error(`Email: ${error.msg.email.join()}`);
            if (error.msg.message)
                alert.error(`Message: ${error.msg.message.join()}`);
        }

        // Catch Success Messages 
        if (message !== prevPros.message) {
            if (message.deleteLead)
                alert.success(message.deleteLead)
            if (message.addLead)
                alert.success(message.addLead)
        }
    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));
