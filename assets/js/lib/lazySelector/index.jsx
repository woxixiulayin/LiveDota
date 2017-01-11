import isEqual from 'lodash/isEqual'

const lazySelctor = function(...funcs) {
    let lastRefers = []
        
    const resultFunc = funcs.pop()
    const isEqualToLast = (value, index) => (
        isEqual(value, funcs[index](...args))
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