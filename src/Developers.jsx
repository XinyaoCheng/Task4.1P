import React from 'react'
import "./styles.css";
import dev1Image from './images/dev1.png';
import dev2Image from './images/dev2.png';
import dev3Image from './images/dev3.png';
import starImage from './images/star.png';

const developers = [
    {
      id: 1,
      imageSrc: dev1Image,
      name: 'Jane Smith',
      description: 'Experienced UI/UX designer crafting intuitive user experiences.',
      star: 5
    },
    {
      id: 2,
      imageSrc: dev2Image,
      name: 'Micheal Mike',
      description: 'Skilled back-end developer building robust and efficient systems.',
      star: 5
    },
    {
      id: 3,
      imageSrc: dev3Image,
      name: 'John Doe',
      description: 'Seasoned product manager driving successful product strategies.',
      star: 5
    }
  ];
  
  
function Developers(){
    return (
        <div>
            <h3 className="title">Featured Freelancers</h3>
      <div className="introduction_container">
        {developers.map(item => (
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
      <button type="button" class="btn btn-outline-secondary btn-custom">See More</button>
        </div>
    )
}

export default Developers;