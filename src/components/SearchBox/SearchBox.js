import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

const youTubeImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png'

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
        <div className="bg-light">
            <div className="container">
                <div className="row align-items-center p-4"> 
                    <div className="col-3">
                        <img width="100%" src={youTubeImg} alt='youTube logo' />
                    </div>
                    <div className="col-9">
                        <form onSubmit={this.onFormSubmit} className="mt-4 clearfix">
                            <div className="form-row align-items-center justify-content-end">
                                <div className="col-sm-9 my-1 d-flex">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="form-control form-control-lg rounded-0"
                                        value={this.state.query}
                                        onChange={this.onInputChange}
                                        />
                                    <Button 
                                        classes="btn btn-danger btn-lg rounded-0"
                                        message="Search"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

SearchBox.propTypes = {
    onQuerySubmit: PropTypes.func.isRequired
}

export default SearchBox