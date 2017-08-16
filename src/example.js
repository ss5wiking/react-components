import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style/reset.less'

import { Modal } from './components'

class App extends Component {
  constructor() {
    super()
    this.state = { visible: false }
  }

  showModal() {
    this.setState({ visible: true })
  }

  hideModal() {
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state
    const buttons = [
      { text: '取消', onClick: () => this.hideModal() },
      { text: '确定', primary: true, onClick: () => this.hideModal() },
    ]

    return (
      <div>
        <button
          onClick={() => this.showModal()}
        >显示模态框</button>

        <Modal
          title="标题"
          visible={visible}
          buttons={buttons}
        >
          <p>这里是内容...</p>
          <p>这里是内容...</p>
        </Modal>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('example'),
)
