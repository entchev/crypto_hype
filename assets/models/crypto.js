class Crypto {
  constructor(
    id,
    name,
    logoUrl,
    latest_price,
    market_cap,
    trending,
    hype_index
  ) {
    this.id = id
    this.name = name
    this.logoUrl = logoUrl
    this.latest_price = latest_price
    this.market_cap = market_cap
    this.trending = trending
    this.hype_index = hype_index
  }
}

export default Crypto
