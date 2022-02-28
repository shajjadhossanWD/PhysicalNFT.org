import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import './Token.css';

const Tokens = () => {
    const [tokens, setTokens] = useState([]);

    useEffect(()=>{
      fetch("../tokens.json")
      .then(res => res.json())
      .then(data => setTokens(data))
    },[])
    return (
    <div>
    <h5 className='text-start text-white mb-4'>Tokens</h5>
    <div className='tokenTable'>
      <Table className='text-white hover adminDataTable'>
         <thead>
              <tr>
                <th>ICON</th>
                <th>SHORT CODE</th>
                <th>COIN NAME</th>
                <th>PRICE IN USD</th>
              </tr>
            </thead>
            <tbody>


           {
             tokens.map(item =>(
              <tr className='tableRow'>
                <td> <img className='tokenImg' src={item.icon} alt="" /></td>
                <td className='tokenDescription'>{item.short_code}</td>
                <td className='tokenDescription'>{item.coin_name}</td>
                <td className='tokenDescription'>{item.price_in_usd}</td>
              </tr>
             ))
           }
               
            </tbody>     
        </Table>
        </div>
        <div className="copyrightAdmin ">
      <p>Copyright © 2022 - DS Legends Pte. Ltd.</p>
    </div>
        </div>
    );
};

export default Tokens;