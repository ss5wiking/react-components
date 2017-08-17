import React from 'react'
import classNames from 'classnames'

const Group = ({ children, className, ...others }) => (
  <section
    {...others}
    className={classNames('rc-btn-group', className)}
  >{children}</section>
)

export default Group
