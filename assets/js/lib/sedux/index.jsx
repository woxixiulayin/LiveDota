const store = {}

let currentState = {},
    currentListeners = [],
    nextListeners = [],
    isDispatching,
    currentReducer

/**
 * 分发动作，触发state状态改变
 * 获取nextlisteners作为dispatch运行的函数组，不受到运行期间其他listener插入的影响
 * 
 * @param {Object} 可以放一个或多个action
 */
store.dispatch = function (action) {
    if (!currentReducer) {
        throw new Error('store should add a reducer first')
    }
    if (isDispatching) {
        throw new Error('can not dispatch when in a dispatching progress')
    }

    isDispatching = true
    currentState = currentReducer(currentState, action)
    isDispatching = false

    let listeners = nextListeners = currentListeners

    for(let i = 0; i < listeners.length; i++) {
        //操作UI，耗时操作
        listeners[i](currentState)
    }
    return action
}

/**
 * 添加store的reducer,reducer根据输入的action返回新的state
 */
store.addReducer = function(reducer) {
    if (typeof reducer !== 'function') {
        throw new Error('reducer must be a function')
    }
    currentReducer = reducer
}

/**
 * 注册监听函数，state发生变化时回调,并把当前state作为参数返回
 * 复制新的listeners，不影响正在进行的dispatch
 */
store.subscribe = function (listener) {
    let isSubscribed = true

    if(typeof listener !== 'function') {
        throw new Error('expected listener to be a function')
    }

    nextListeners = currentListeners.slice()
    nextListeners.push(listener)

    return function() {
        if(!isSubscribed) {
            return
        }

        nextListeners = currentListeners.slice()
        let index = nextListeners.indexOf(listener)
        nextListeners.splice(index, 1)
    }
}

/**
 * 返回当前的state
 */
store.getState = function () {
    return currentState
}

store.setState = function (state) {
    currentState = state
    return currentState
}


export default store