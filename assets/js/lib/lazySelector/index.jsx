import _ from 'lodash'

const lazySelctor = function(...funcs) {
    let lastRefers = []
    
    funcs.map( func => {
        if(typeof func !== 'function') {
            throw new Error('input selector should be a function')
        }
    })

    const resultFunc = funcs.pop()
    const isEqualToLast = (value, index) => (
        _.isEqual(value, funcs[index](...args))
    )

    return (...args) => {
        let state = {}
        if(
            lastRefers.length === 0 ||
            lastRefers.length !== funcs ||
            !lastRefers.every(isEqualToLast)
        ) {
            state = resultFunc(...args)
            lastRefers = funcs.map( func => func(...args))
        }
        return state
    }
}

export default lazySelctor