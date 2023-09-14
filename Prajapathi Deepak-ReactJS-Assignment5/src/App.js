import React, { useState, useEffect } from 'react';
import './App.css';
import img from './images/Snapchat-2144702402.jpg';
function AddCard(props) {
  return (
    <div className='card'>
      <div className='cardimg'>
        <img id='imgframe' src={props.img} alt={props.name} />
      </div>
      <div className='info1'>
        <h3>{props.position}</h3>
        <p className='t1'>{props.perhr}</p>
      </div>
      <div className='info2'>
        <div className='slot'></div>
        <p className='t2'>
          {props.name}, {props.age}
        </p>
        <p className='t3'>{props.mark}</p>
        <p className='t4'>{props.address}</p>
        <br />
        <a target='_blank' href='./cv.html'>
          <button className='button'>VIEW CV</button>
        </a>

        <br />
        <button className='button'>MAKE OFFER</button>
        <p className='status'>{props.status}</p>
      </div>
    </div>
  );
}

function App() {
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./json/user.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setUserCards(jsonData);
      } catch (error) {
        console.error('Error fetching or parsing JSON data:', error);
      }
    };
    fetchData();
  }, []);

  function add() {
    const newUserCard = {
      img: img,
      name: 'Deepak',
      position: 'Doctor',
      age: 22,
      perhr: '$100/hr',
      address: 'Khammam',
      mark: 'Hyderabad',
      created: new Date(),
    };
    setUserCards([...userCards, newUserCard]);
  }

  return (
    <div className='mainlayout'>
      {userCards.map((user, index) => {
        const timeDifference = new Date() - new Date(user.created);
        const status =
          timeDifference < 1000 ? `ONLINE` : 'Last seen ' + lastseen(timeDifference / 1000);

        return (
          <AddCard
            key={index}
            img={user.img}
            name={user.name}
            mark={user.mark}
            position={user.position}
            age={user.age}
            perhr={user.perhr}
            address={user.address}
            status={status}
          />
        );
      })}

      <div className='newcard'>
        <div className='cardimg' onClick={add}>
          <p className='add'>+</p>
        </div>
      </div>
    </div>
  );
}

function lastseen(n) {
  if (n < 60) {
    return 'few Seconds ago';
  } else if (n < 60 * 60) {
    const min = Math.floor(n / 60);
    return `${min} minutes ago`;
  } else if (n < 60 * 60 * 24) {
    const hours = Math.floor(n / 3600);
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (n < 60 * 60 * 24 * 7) {
    const days = Math.floor(n / (3600 * 24));
    return `${days} day${days === 1 ? '' : 's'} ago`;
  } else {
    return 'several days ago';
  }
}

export default App;
