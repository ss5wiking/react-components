const hasHideCss = (visible) => {
  if (!visible) {
    return { display: 'none' }
  }
  return {}
}

export default hasHideCss
