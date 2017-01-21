import React, {PropTypes,Component} from 'react'

class FreeContent extends Component {

    constructor() {
        super()
    }

    render() {
        let {children, left=0, top=0} = this.props

        return (
            <div style={{
                position: 'absolute',
                animationDuration: '1s',
                left,
                top,
            }}
                >
                {children}
            </div> 
        )
    }
}

FreeContent.propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
}

export default FreeContent