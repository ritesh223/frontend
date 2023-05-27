import React from 'react';
import './Book_guide.css';
import Accordion from './Accordion';
const Guide = ({ name, languages, rating, location, price, status, image }) => {

    return (
        
        <div className="guide-card">
            <div className="guide-img">
                <img src={image} alt={name} />
            </div>
            <div className="guide-details">
                <h2>{name}</h2>
                <p>Location: {location}</p>
                <p>Price: {price}</p>
                <p>Status: {status}</p>
                <button style={{ backgroundColor: '#FF3131', color: 'white', padding: '5px', borderRadius: '5px' , width:'10vh'}}>Call</button>

            </div>
        </div>
    );
};

const guidesData = [
    { id: 1, name: 'John', location: 'New York', price: '$100', status: 'available', image: 'https://picsum.photos/id/1015/200/300' },
    { id: 2, name: 'Emma', location: 'Los Angeles', price: '$120', status: 'available', image: 'https://picsum.photos/id/1016/200/300' },
    { id: 3, name: 'David', location: 'Chicago', price: '$90', status: 'available', image: 'https://picsum.photos/id/1018/200/300' },
    { id: 4, name: 'Sarah', location: 'Miami', price: '$150', status: 'available', image: 'https://picsum.photos/id/1021/200/300' },
    { id: 4, name: 'Sarah', location: 'Miami', price: '$150', status: 'available', image: 'https://picsum.photos/id/1021/200/300' },
    { id: 4, name: 'Sarah', location: 'Miami', price: '$150', status: 'available', image: 'https://picsum.photos/id/1021/200/300' },
];

const Book_guide = () => {
    return (
        <div className='head'>
<h1>GUIDES</h1>
<hr />
<hr />
        <div className="gcon">
           
            
           <div className='filt'>
              <h4>Filters</h4>
           <Accordion /></div>

           <div className='shows'>
            {guidesData.map((guide) => (
                <Guide key={guide.id} {...guide} />
            ))}
           </div>
        </div>
        </div>
    );
};

export default Book_guide;
