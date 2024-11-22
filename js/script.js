const main = document.querySelector('main')
const header = document.querySelector('header')
console.log(header);

function headerF() {
    header.innerHTML = `
        <div>#</div>
        <div>Name</div>
        <div>Price</div>
        <div>24h %</div>
        <div>High 24h</div>
        <div>Market Cap</div>
        <div>Last 7 Days</div>
    `
    const nemodar = {
        'bitcoin': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
        'ethereum': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg',
        'tether': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
        'solana': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
        'binancecoin': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1839.svg',
        'ripple': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
        'dogecoin': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/74.svg',
        'usd-coin': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
        'cardano': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2010.svg',
        'staked-ether': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3890.svg',
        'tron': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1958.svg',
        'avalanche-2': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5805.svg',
        'shiba-inu': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5994.svg',
        'wrapped-bitcoin': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/9104.svg',
        'wrapped-steth': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/18876.svg',
        'the-open-network': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11419.svg',
        'sui': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20947.svg',
        'bitcoin-cash': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1831.svg',
        'chainlink': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1975.svg',
        'weth': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/30126.svg',
        'stellar': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/512.svg',
        'polkadot': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6636.svg',
        'pepe': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/24478.svg',
        'leo-token': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6892.svg',
        'near': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6535.svg',
        'litecoin': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2.svg',
        'aptos': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/21794.svg',
        'wrapped-eeth': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29270.svg',
        'uniswap': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7083.svg',
        'hedera-hashgraph': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4642.svg',
        'usds': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/33440.svg',
        'crypto-com-chain': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3635.svg',
        'internet-computer': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8916.svg',
        'ethereum-classic': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1321.svg',
        'ethena-usde': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29470.svg',
        'kaspa': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20396.svg',
        'polygon-ecosystem-token': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28321.svg',
        'render-token': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5690.svg',
        'bonk': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/23095.svg',
        'bittensor': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/22974.svg',
        'whitebit': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7431.svg',
        'dai': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4943.svg',
        'mantra-dao': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6536.svg',
        'fetch-ai': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3773.svg',
        'arbitrum': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11841.svg',
        'dogwifcoin': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28752.svg',
        'monero': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
        'blockstack': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4847.svg',
        'mantle': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/27075.svg',
        'cosmos': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3794.svg',
        "filecoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2280.svg',
    }

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            Promise.reject(err)
        })

        .then(data => {
            data.map((val) => {
                const chart = nemodar[val.id]
                // console.log(chart);

                const ul = document.createElement('ul')
                ul.innerHTML = `
                    <li><i class="bi bi-star"></i>${val.market_cap_rank}</li>
                    <li>
                        <img src=${val.image} alt="">
                        <div>
                            <div><p>${val.name}</p></div>
                            <div><p>${val.symbol}</p></div>
                        </div>
                    </li>
                    <li>${'$' + val.current_price}</li>                   
                    <li class='priceChange24'>${(val.price_change_percentage_24h) + '%'}</li>     
                    <li>${'$' + val.high_24h}</li>            
                    <li>${'$' + val.market_cap}</li> 
                    <li><img class='img' src=${chart} alt=""></li>
                `

                const priceChange = ul.querySelector('.priceChange24')
                const img = ul.querySelector('.img')
                const num = val.price_change_percentage_24h;
                if (num < 0) {
                    priceChange.style.color = 'red'
                    img.style.filter = 'hue-rotate(300deg) saturate(210%) brightness(0.7) contrast(170%)';
                } else if (num > 0) {
                    priceChange.style.color = 'green'
                    img.style.filter = 'hue-rotate(400deg) saturate(300%);'
                } else {
                    priceChange.style.color = 'black'
                }
                main.appendChild(ul)
            })

        })
}

headerF()