import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hasHideCss } from '../../utils'
import './modal.less'

import Mask from '../Mask'
import Head from './Head'
import Foot from './Foot'

class Modal extends Component {
  render() {
    const { title, visible, buttons, className, children, ...others } = this.props
    return (
      <div
        className={className}
        style={hasHideCss(visible)}
      >
        <Mask />
        <div className="rc-modal" {...others}>
          <Head title={title} />

          <div className="rc-modal_bd">
            {children}
          </div>

          <Foot buttons={buttons} />
        </div>
      </div>
    )
  }
}

Modal.defaultProps = {
  title: '',
  visible: false,
  buttons: [],
}
Modal.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  buttons: PropTypes.array,
}

export default Modal
