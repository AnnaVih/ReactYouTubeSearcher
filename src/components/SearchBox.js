import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchBox extends Component {
    state = {
        query: ''
    }

    onInputChange = e => {
        this.setState({query: e.target.value})
    }

    onFormSubmit = e => {
        e.preventDefault()
        this.props.onQuerySubmit(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="mt-4">
                <div className="form-row align-items-center justify-content-center">
                    <div className="col-sm-9 my-1">
                        <input
                            type="text"
                            placeholder="Search"
                            className="form-control form-control-lg"
                            value={this.state.query}
                            onChange={this.onInputChange}
                            />
                    </div>
                    <div className="col-auto my-1"> 
                        <button type="submit" className="btn btn-primary btn-lg mb-2">Search videos</button>
                    </div>
                </div>
            </form>
        )
    }
}

SearchBox.propTypes = {
    onQuerySubmit: PropTypes.func.isRequired
}

export default SearchBox