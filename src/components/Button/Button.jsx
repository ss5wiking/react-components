import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './button.less'

import Group from './Group'

const Button = ({ children, className, disabled, block, plain, size, type, ...props }) => (
  <button
    {...props}
    disabled={disabled}
    className={classNames('rc-btn', {
      [`rc-btn_${size}`]: size,
      [`rc-btn_${type}`]: type,
      'rc-btn_plain': plain,
      'rc-btn_block': block,
      'rc-btn_disabled': disabled,
    }, className)}
  >{children}</button>
)

Button.Group = Group

Button.defaultProps = {
  size: '',
  type: '',
  block: true,
  plain: false,
  disabled: false,
}
Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  block: PropTypes.bool,
  plain: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default Button
