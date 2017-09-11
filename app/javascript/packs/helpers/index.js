const getValidationState = (meta) => {
  console.log("hello from getValidationState")
  console.log(meta)
  if (meta.touched) {
    if (meta.error) {
      return 'error'
    } else if (meta.warning) {
      return 'warning'
    } else {
      return 'success'
    }
  } else {
    return null
  }
}

export {getValidationState}