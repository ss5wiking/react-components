import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './mask.less'

const Mask = ({ className, transparent, ...others }) => {
  const cls = classNames({
    'rc-mask': !transparent,
    'rc-mask_transparent': transparent,
  }, className)

  return (
    <div className={cls} {...others} />
  )
}

Mask.defaultProps = {
  transparent: false,
}
Mask.propTypes = {
  transparent: PropTypes.bool,
}

export default Mask
