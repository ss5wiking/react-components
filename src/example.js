import React from 'react'
import ReactDOM from 'react-dom'
import './style/reset.less'

import { Button } from './components'

const ButtonGroup = Button.Group

const App = () => {
  return (
    <div>
      <section>
        <Button>默认</Button>
        <br />
        <Button type="primary">重要</Button>
        <br />
        <Button type="warning">提醒</Button>
      </section>
      <br />

      <ButtonGroup>
        <Button>默认</Button>
        <Button type="primary">重要</Button>
        <Button type="warning">提醒</Button>
      </ButtonGroup>
      <br />

      <ButtonGroup>
        <Button disabled>默认</Button>
        <Button disabled type="primary">重要</Button>
        <Button disabled type="warning">提醒</Button>
      </ButtonGroup>
      <br />

      <ButtonGroup>
        <Button plain>默认</Button>
        <Button plain type="primary">重要</Button>
        <Button plain type="warning">提醒</Button>
      </ButtonGroup>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('example'),
)
