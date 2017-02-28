export const setNodeStyle = (node, styleObj) => {
    if(!node || node.nodeType != 1) {
        console.log('must use in a dom element node')
        return
    }

    let oldCssText = node.style.cssText,
        cssText
    
    cssText = Object.keys(styleObj).reduce((cssTemp, item) => {
        return cssTemp + `${item}: ${styleObj};`
    }, oldCssText)

    node.style.cssText = cssText
    
    return cssText
}