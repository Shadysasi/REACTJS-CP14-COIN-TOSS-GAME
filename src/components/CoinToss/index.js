import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    TossImageUrl: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const TossResults = Math.floor(Math.random() * 2)
    let tossImg = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (TossResults === 0) {
      tossImg = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImg = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      TossImageUrl: tossImg,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {TossImageUrl, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    console.log(headsCount, tailsCount)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="head-card">Coin Toss Game</h1>
          <p className="text-card">Heads (or) Tails</p>
          <img src={TossImageUrl} alt="Toss coin" className="toss-image" />
          <button
            type="button"
            className="btn-style"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total:{totalCount}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
