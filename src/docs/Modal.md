## API
| 参数 | 说明 | 类型 | 默认值 |
| :------| ------: | :------: | :------: |
| visible | 模态框是否可见 | boolean | false |
| title | 标题 | string | '' |
| buttons | 模态框底部按钮 | array | [] |


## Usage
```
class App extends React.Component {
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
          onClick={this.showModal.bind(this)}
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
    );
  }
}
```
