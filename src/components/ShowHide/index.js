import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onClickFirstNameButton = () => {
    this.setState(PrevState => ({isFirstName: !PrevState.isFirstName}))
  }

  onClickLastNameButton = () => {
    this.setState(PrevState => ({isLastName: !PrevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div className="icon-container">
            <button type="button" onClick={this.onClickFirstNameButton}>
              Show/Hide Firstname
            </button>
            {isFirstName ? <p className="names">Joe</p> : null}
          </div>
          <div className="icon-container space">
            <button type="button" onClick={this.onClickLastNameButton}>
              Show/Hide Lastname
            </button>
            {isLastName ? <p className="names">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
