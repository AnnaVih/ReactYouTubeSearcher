import React from 'react'
import PropTypes from 'prop-types'

const Button = ({onButtonClick, message, classes, url}) => {
    const handlePageChange = () => {
        if(onButtonClick){
            onButtonClick(url)
        }else {
            return
        }
    }

    return (
        <button 
            className={classes}
            onClick={handlePageChange}>
            {message}
        </button>
    )
}

Button.propTypes = {
    message: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func,
    url: PropTypes.string,
    classes: PropTypes.string.isRequired

}

export default Button
