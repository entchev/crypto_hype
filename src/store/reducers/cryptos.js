import { CRYPTOS } from '../../../assets/tempData'

const initialState = {
  cryptos: CRYPTOS,
}

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default cryptoReducer
