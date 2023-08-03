import React, { useEffect, useState } from 'react';
import Chart from './Chart';

function CryptoTable() {
  const [currencies, setCurrencies] = useState([]);
  const price2015 = [
    { id: "bitcoin", price_2015: 21598 },
    { id: "ethereum", price_2015: 106.65 },
    { id: "litecoin", price_2015: 353.42 },
    { id: "bitcoin-cash", price_2015: 85345.35 },
    { id: "cardano", price_2015: 0.192 },
    { id: "stellar", price_2015: 0.112 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const priceUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=bitcoin,ethereum,litecoin,bitcoin-cash,cardano,stellar&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h,24h,7d&locale=en`;
        const response = await fetch(priceUrl);
        const data = await response.json();

        // Match fetched data with the data from price2015 array
        const updatedData = data.map((item) => {
          const matchedItem = price2015.find((crypto) => crypto.id === item.id);
          return {
            ...item,
            price_2015_17: matchedItem ? matchedItem.price_2015 : null,
          };
        });

        setCurrencies(updatedData);
      } catch (err) {
        console.log("Failed to retrieve data " + err);
      }
    };

    fetchData();
  }, []);

  function priceColor(price) {
    if (price >= 0) {
      return 'text-green-500';
    } else {
      return 'text-red-500';
    }
  }

  return (
    <div className='relative group mx-3 md:mx-16 md:mt-24 mt-20'>
      <div className="absolute -inset-0.5 bg-gradient-to-b from-[#080B2A] via-[#15bffd] to-purple-500 rounded-lg  opacity-75 group-hover:blur-xl transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className='relative flex bg-[#080B2A] p-2 rounded-lg overflow-x-auto'>
        <div className='relative border flex bg-[#080B2A] p-2 border-gray-600 rounded-lg w-full'>
          <table className='w-full rounded-lg order'>
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
              {currencies.map((elem, index) => (
                <tr key={elem.name} className='text-white text-center'>
                  <td className='p-2'>{index + 1}</td>
                  <td className='p-2 flex items-center'>
                    <img src={elem.image} alt="" className='w-8 mr-5' />
                    {elem.name}
                  </td>
                  <td className='p-2'>₹ {elem.price_2015_17}</td> {/* Display "Price - 2015/17" */}
                  <td className={`p-2 ${priceColor(elem.price_change_percentage_7d_in_currency)}`}>
                    ₹ {elem.current_price}
                  </td>
                  <td className='p-2 w-10'>
                    <Chart sparkline={elem.sparkline_in_7d} priceChange={elem.price_change_percentage_7d_in_currency} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CryptoTable;


















// import React, { useEffect, useState } from 'react'
// import Chart from './Chart';

// function CryptoTable() {
//     const [currencies, setCurrencies] = useState([])
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 //url for fetching fata from api
//                 const priceUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2c24h%2c7d&locale=en`
//                 //fetching data
//                 const response = await fetch(priceUrl)
//                 //convert response to an array
//                 const data = await response.json()
//                 function reduceArraySize(arr, newSize) {
//                     if (newSize >= arr.length) {
//                         return arr.slice(); // Return a shallow copy of the original array
//                     } else {
//                         return arr.slice(0, newSize);
//                     }
//                 }
//                 const newArray = reduceArraySize(data, 7)
//                 //update the state
//                 setCurrencies(newArray)
//             } catch (err) {
//                 console.log("failed to retrieve data " + err);
//             }
//         }
//         fetchData()
//     }, [])
//     function priceColor(price) {
//         if (price >= 0) {
//             return 'text-green-500'
//         } else {
//             return 'text-red-500'
//         }
//     }
//     return (
//         <div className='relative group mx-3 md:mx-16 md:mt-24 mt-20'>
//             <div className="absolute -inset-0.5 bg-gradient-to-b from-[#080B2A]  via-[#15bffd] to-purple-500 rounded-lg  opacity-75 group-hover:blur-xl transition duration-1000 group-hover:duration-200 animate-tilt"></div>
//             <div className='relative flex  bg-[#080B2A] p-2 rounded-lg overflow-x-auto'>
//                 <div className='relative border flex  bg-[#080B2A] p-2 border-gray-600 rounded-lg w-full'>
//                     <table className='w-full rounded-lg order'>
//                         <thead className='font-zen md:font-base text-white border-b border-gray-600'>
//                             <tr>
//                                 <th className='p-2'></th>
//                                 <th className='p-2'>Name</th>
//                                 <th className='p-2'>Price - 2015/17</th>
//                                 <th className='p-2'>Price - 2023</th>
//                                 <th className='p-2'>Growth Chart</th>
//                             </tr>
//                         </thead>
//                         <tbody className='font-space'>
//                             {currencies.map((elem) => (
//                                 <tr key={elem.name} className='text-white text-center'>
//                                     <td className='p-2'>{elem.market_cap_rank}</td>
//                                     <td className='p-2 flex items-center'><img src={elem.image} alt="" className='w-8 mr-5' />{elem.name}</td>
//                                     <td className='p-2'>2015-price</td>
//                                     <td className={`p-2 ${priceColor(elem.price_change_percentage_7d_in_currency)}`}>₹ {elem.current_price}</td>
//                                     <td className='p-2 w-10'><Chart sparkline={elem.sparkline_in_7d} priceChange={elem.price_change_percentage_7d_in_currency} /></td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CryptoTable