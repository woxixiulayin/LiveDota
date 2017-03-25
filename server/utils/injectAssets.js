const cheerio = require('cheerio')
const path = require('path')
const fs = require('fs')
// const htmlRoot = path.resolve('./pages/')

/**
 * 
 * @param {string} htmlPath
 * @param {object} {
 * replacedAssetsName: path,
 * replacedAssetsName: path,
 * } 
 */

export default function injectAssets(htmlPath, assetsMap) {
    const $ = cheerio.load(fs.readFileSync(htmlPath))

    const selected = $('inject')

    function insert(n) {
        const assetName = $(selected[n]).attr('asset')
        const assetsPath = assetsMap[assetName] || ''
        if(assetsPath) {
            $(`inject[asset=${assetName}]`).remove()
            $('body').append($(`<script src='${assetsPath}'></script>`))
        } else {
            throw new Error(String(assetName + ' dose not exists in assets'))
        }
    }
    for(var i =0; i<selected.length; i++) {
        insert(i)
    }
    return $.html()
}

// injectAssets(path.resolve('./pages/index.html'), {
//     app: '123',
//     jquery: '222',
// })