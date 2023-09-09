// Write your code here

/*

The code you provided generates a random floating-point number between 0 (inclusive) 
and 1 (exclusive) using the Math.random() method and then logs that random number to 
the console.

const result1 = Math.random()
console.log(result1)

<--------------------------------------------****--------------------------------->

The code you provided generates a random floating-point number between 0 (inclusive) 
and 2 (exclusive) using the Math.random() method and then logs that random number to 
the console.

const result2 = Math.random()*2
console.log(result2)

<-------------------------------------------****---------------------------------->

The code you provided generates a random integer either 0 or 1 by using the 
Math.random() method and then rounding down the result using Math.floor(). 
It then logs this random integer to the console.

const result3 = Math.floor(Math.random()*2)
console.log(result3)

<----------------------------------------****-------------------------------------->

The code you provided generates a random integer either 1 or 2 by using the 
Math.random() method, multiplying the result by 2, and then rounding up the 
result using Math.ceil(). It then logs this random integer to the console.

const result4 = Math.ceil(Math.random()*2)
console.log(result4)

*/
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {tossResult: 0, headCount: 0, tailCount: 0}

  btnClicked = () => {
    const tossResultRandomly = Math.floor(Math.random() * 2)
    if (tossResultRandomly === 0) {
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    } else {
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
    }
    this.setState({tossResult: tossResultRandomly})
  }

  render() {
    const {tossResult, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount

    const renderAuth = () => {
      if (tossResult === 0) {
        return (
          <img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            alt="toss result"
            className="Image"
          />
        )
      }
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
          className="Image"
        />
      )
    }

    return (
      <div className="bg">
        <div className="innerCard">
          <h1 className="innerCardHead">Coin Toss Game</h1>
          <p className="innerCardPara">Heads (or) Tails</p>
          {renderAuth()}
          <button type="button" className="btnEl" onClick={this.btnClicked}>
            Toss Coin
          </button>
          <div className="resultsContainer">
            <p className="resultPara">Total: {totalCount}</p>
            <p className="resultPara">Heads: {headCount}</p>
            <p className="resultPara">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
