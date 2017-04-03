const assert = (condition, errMsg = 'error') => {
  if (!condition) {
    throw new Error(`[assert] ${errMsg}`)
  }
}

export default assert