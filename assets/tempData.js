import Crypto from '../assets/models/crypto'

export const CRYPTOS = [
  new Crypto(
    1,
    'BTC',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    35233,
    '656,271,327,722',
    -1.5,
    50
  ),
  new Crypto(
    2,
    'ETH',
    '../assets/logos/ethereum.webp',
    1095,
    '125,821,372,732',
    -3.4,
    10
  ),
  new Crypto(
    3,
    'ADA',
    '../assets/logos/cardano.webp',
    0.85,
    '27,497,328,185',
    3.3,
    33
  ),
  new Crypto(
    4,
    'DOT',
    '../assets/logos/polka_logo.webp',
    24.95,
    '23,995,741,101',
    -6.5,
    40
  ),
  new Crypto(
    5,
    'XRP',
    '../assets/logos/ripple.webp',
    0.33,
    '15,342,904,861',
    1.4,
    5
  ),
]
