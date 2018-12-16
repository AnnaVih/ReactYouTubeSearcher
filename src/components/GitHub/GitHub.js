import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

const GitHub = ({buttonClickHandler}) => {
    return (
        <div className="mt-5 col-12 bg-secondary p-5 text-center">
            <Button 
                onButtonClick={buttonClickHandler}
                url="https://github.com/AnnaVih/ReactYouTubeSearcher"
                message="=> Click here and check source code on GitHub <="
                classes="btn btn-danger btn-block rounded-0"
            />
            <p className="text-white pt-2">Developed in React by Anna Vihrogonova. It is a result of hard work, passion and learning from failure</p>
        </div>
    )
}

GitHub.propTypes = {
    buttonClickHandler: PropTypes.func.isRequired
}

export default GitHub