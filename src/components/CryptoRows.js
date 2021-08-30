import React from 'react'

const CryptoRows = ({Crypto, index}) => {
    return (
            <tr>
                <td>
                    <span className='ms-3'>{index}</span>
                </td>
                <td>
                    <img src={Crypto.image} alt={Crypto.name} style={{width: '4%'}} className='img-fluid me-4' />
                    <span>{Crypto.name}</span>
                    <span className='ms-4 text-muted text-uppercase' >{Crypto.symbol}</span>
                </td>
                <td>{Crypto.current_price} €</td>
                <td className={Crypto.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                    {Crypto.price_change_percentage_24h}
                </td>
                <td>{Crypto.total_volume}</td>
            </tr>
    )
}

export default CryptoRows
