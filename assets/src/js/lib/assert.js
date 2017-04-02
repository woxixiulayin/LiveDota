const assert = (condition, errMsg = 'error') =>{
  if (!condition) {
    throw new Error(`[assert] error`)
  }
}

export default assert
