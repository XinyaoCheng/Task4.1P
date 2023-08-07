import React from 'react'
import "./styles.css";
import cus1Image from './images/apple-logo.png';
import cus2Image from './images/coca-cola-logo.png';
import cus3Image from './images/google-logo.png';
import starImage from './images/star.png';

const customers = [
    {
      id: 1,
      imageSrc: cus1Image,
      name: 'Apple',
      description: 'Apple Inc. is a renowned tech company recognized globally for its innovation in computer hardware, software, and Internet services.',
      star: 5
    },
    {
      id: 2,
      imageSrc: cus2Image,
      name: 'Coca-Cola',
      description: 'Coca-Cola is a globally acclaimed beverage brand known for producing and distributing carbonated soft drinks and other beverages.',
      star: 5
    },
    {
      id: 3,
      imageSrc: cus3Image,
      name: 'Google',
      description: 'Google is a leading tech giant offering diverse products like search engine, cloud computing, and ads services.',
      star: 4.9
    }
  ];

function Customers(){
    return(
        <div>
          <h3 className="title">Featured Customers</h3>
             <div className="introduction_container">
        {customers.map(item => (
          <div key={item.id} className="item">
            <img src={item.imageSrc} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="grade_container">
              <img src={starImage}></img>
              <p>{item.star}</p>
            </div>

          </div>
        ))}
      </div>
      <button type="button" class="btn btn-outline-secondary btn-custom">See All Customers </button>
        </div>
    )
}
export default Customers;