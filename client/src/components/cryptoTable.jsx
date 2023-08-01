import React, { useEffect, useState } from 'react'
import Chart from './chart';

function CryptoTable() {
    const [currencies, setCurrencies] = useState([])
    useEffect(() => {
        console.log('called');
        const fetchData = async () => {
            try {
                //url for fetching fata from api
                const priceUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2c24h%2c7d&locale=en`

                //fetching data
                const response = await fetch(priceUrl)
                //convert response to an array
                const data = await response.json()
                function reduceArraySize(arr, newSize) {
                    if (newSize >= arr.length) {
                        return arr.slice(); // Return a shallow copy of the original array
                    } else {
                        return arr.slice(0, newSize);
                    }
                }
                const newArray = reduceArraySize(data, 7)
                //update the state
                setCurrencies(newArray)
            } catch (err) {
                console.log("failed to retrieve data " + err);
            }
        }
        fetchData()
    }, [])
    function priceColor (price){
        if(price>=0){
            return 'text-green-500'
        }else{
            return 'text-red-500'
        }
    }
    return (
        <div className='relative group mx-3 md:mx-16 md:mt-24 mt-20'>
            <div className="absolute inset-0.5 bg-gradient-to-r from-pink-600  to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className='relative border flex  bg-[#060b46] p-2 m-2 border-gray-600 rounded-lg overflow-x-auto'>

                <table className='w-full m-1 rounded-lg order'>
                    <thead className='font-zen md:font-base text-white border-b border-gray-600'>
                        <tr>
                            <th className='p-2'></th>
                            <th className='p-2'>Name</th>
                            <th className='p-2'>Price - 2015/17</th>
                            <th className='p-2'>Price - 2023</th>
                            <th className='p-2'>Growth Chart</th>
                        </tr>
                    </thead>
                    <tbody className='font-space'>
                        {currencies.map((elem) => (
                            <tr key={elem.name} className='text-white text-center'>
                                <td className='p-2'>{elem.market_cap_rank}</td>
                                <td className='p-2 flex items-center'><img src={elem.image} alt="" className='w-8 mr-5' />{elem.name}</td>
                                <td className='p-2'>2015-price</td>
                                <td className={`p-2 ${priceColor(elem.price_change_percentage_7d_in_currency)}`}>₹ {elem.current_price}</td>
                                <td className='p-2 w-10'><Chart sparkline={elem.sparkline_in_7d} priceChange={elem.price_change_percentage_7d_in_currency} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default CryptoTable