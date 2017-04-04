import {DEBUG} from '../config.js'
import path from 'path'
var log = function (str) {
    if (DEBUG === true) {
        let date = new Date();
        console.log('------------------------------------');
        if (typeof str === "string") {
            console.log(date.toLocaleString() + ": " +  str)
        } else {
            console.log(date.toLocaleString());
        console.log(str);
        }
    }
}

function getRootPath() {
    return path.resolve('.');
}
export {log, getRootPath};