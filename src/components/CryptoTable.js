import React from 'react'
import CryptoRows from './CryptoRows'

const titles = [' ', 'Currency','Current Price' , 'Change rate', '24h Volume']

export const CryptoTable = ({Crypto, Search}) => {

    const filteredCurrency = Crypto.filter((Crypto) => 
        Crypto.name.toLowerCase().includes(Search.toLowerCase())  | Crypto.symbol.toLowerCase().includes(Search.toLowerCase()));

    return (
        <table className='table table-dark mt-4 table-hover' >
            <thead>
                <tr>
                    {
                        titles.map((title, index) => (
                            <td key={index} >{title}</td>
                        ))
                    }
                    
                </tr>
            </thead>
            <tbody>
                {filteredCurrency.map((Crypto, index) => (
                    <CryptoRows Crypto={Crypto} key={index} index={index + 1} />
                ) )}
            </tbody>
        </table>
    )
}
