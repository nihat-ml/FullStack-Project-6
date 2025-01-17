import React, { useEffect, useState } from 'react'
import { MdFavorite } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import axios from "axios"


function Customers() {
    const [customers, setCustomers] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [filteredCustomers, setFilteredCustomers] = useState([])
    const [originalCustomers, setOriginalCustomers] = useState([])
    
    
    const handleInputChange = (e) => { 
        const searchTerm = e.target.value;
        

        if(e.target.value == ""){
            setFilteredCustomers([...originalCustomers])
        }else{
            const filteredItems = customers.filter((customer) =>
                customer.title.toLowerCase().includes(e.target.value.toLowerCase())
                );
            
                setFilteredCustomers(filteredItems);
        }
          
      }
      

    function getCustomers(){
        axios.get("http://localhost:3000/customers")
        .then((res)=>{
            setCustomers(res.data)
            setFilteredCustomers(res.data)
            setOriginalCustomers(res.data)
        })
    }
    useEffect(()=>{
        getCustomers()
    },[])

  return (
    <>
        <div className="customers">
            <h1>Customers</h1>
            <div>      
      <input
        type="text"
        
        onChange={handleInputChange}
        placeholder='Type to search'
      />
    </div>

            <div className="cards">
            {filteredCustomers.map((customer)=>(
                <div className="card" key={customer._id}>
                <p>{customer.description}</p>
                <div className='cardInfo'>
                <div>
                    <img src={customer.image} alt="" />
                </div>
                <div className='btns'>
                    <h3>Name: {customer.title}</h3>
                    <span>Salary: ${customer.salary}</span>
                    <div className="reactBtns">
                    <FaInfoCircle className='infoBtn' />
                    <MdFavorite className='favoritesBtn'/>
                    </div>
                </div>
                </div>
            </div>
            ))}
            </div>
        </div> 
    </>
  )
}

export default Customers
