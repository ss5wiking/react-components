import React from 'react'

const Head = ({ title }) => {
  if (!title) {
    return false
  }

  return (
    <div className="rc-modal_hd">
      <strong className="rc-modal_title">{title}</strong>
    </div>
  )
}

export default Head
