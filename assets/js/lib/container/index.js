const container = function (mapStatToProps, mapDispatchTopros) {
    return function (SourceComponent) {
        return class extends SourceComponent {

            _onChange(state) {
                let props = mapStatToProps(state),
                    _props = {},
                    shouldSetState = false

                //过滤掉空的属性
                Object.keys(props).map(item => {
                    if (typeof props[item] !== 'undefined') {
                        if (!shouldSetState) {
                            shouldSetState = true
                        }
                        _props[item] = state[item]
                    }
                })

                //只有一个属性发生变化就setState
                if (shouldSetState) {
                    this.setState(_props)
                }
            }

            componentDidMount() {
                let {store, mapStatToProps, mapDispatchTopros} = this.props.store

                if (!store) {
                    throw new Error('container component should be given a store prop')
                }

                //不映射state和dispatch的组件不需要当做container
                if (!mapStatToProps || !mapDispatchTopros) {
                    throw new Error('container component should set mapStatToProps or mapDispatchTopros')
                }

                //将dispatch方法加到组件上
                if (mapDispatchTopros) {
                    Object.assign(this, mapDispatchTopros)
                }


                store.subScribe(this._onChange.bind(this))
            }
        }
    }
}

export default container