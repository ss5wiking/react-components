import React from 'react'
import classNames from 'classnames'

const getCls = (primary) => {
  let theme = 'default'

  if (primary) {
    theme = 'primary'
  }

  return classNames({
    'rc-modal_btn': true,
    [`rc-modal_btn_${theme}`]: true,
  })
}

const Foot = ({ buttons }) => {
  if (!Array.isArray(buttons) || !buttons.length) {
    return false
  }

  return (
    <div className="rc-modal_ft">
      {buttons.map(({ text, primary, onClick }, index) => (
        <a
          key={index}
          onClick={onClick}
          className={getCls(primary)}
        >{text}</a>
      ))}
    </div>
  )
}

export default Foot
