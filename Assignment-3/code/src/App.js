import React from 'react';
import logo from './logo.svg';
import './App.css';
var status = {
  1: 'In Progress',
  2: 'Completed',
  3: 'Suspended'
}
var Appointments = {
  name: 'Alan Ford',
  employeeid: 1234567890,
  customerinfo: {
    appointmenton: new Date().toLocaleDateString(),
    Email: 'rajarai@gmail.nl',
    phone: 1234567890,
  },
  orderinfo: {
    status: status[1],
    Door: 'Mark',
    Time: new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds() ,
  },
  productlist: {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    title: 'Hello this is title text',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
}

var arrow = "<"
var arrow_last=">"
function App() {
  return (
    <div className="site-container">
      {/* Start Your code here */}
      <div className='page-header'>
        <div className='unit_one'>
        <a href='https://en.wikipedia.org/wiki/Doctor_Strange_(2016_film)'>{arrow}</a>
        </div>
        <div className='unit_two'>
          <h1>{Appointments.name}</h1>
          <p>{Appointments.employeeid}</p>
        </div>
        <div className='unit_three'>
        <button className="headbtn">Print</button>
        </div>
      </div>
      <div className='customer-info'>
        <p><strong>Appointment On </strong>{Appointments.customerinfo.appointmenton}</p>
        <p><strong>Email: </strong>{Appointments.customerinfo.Email}</p>
        <p><strong>Phone </strong>{Appointments.customerinfo.phone}</p>
      </div>
      <div className='order-info'>
        <div className="block_one">
          <strong>Status </strong>
          <ul><li>{Appointments.orderinfo.status}</li></ul>
        </div>
        <div className="block_two">
          <strong>Door </strong>
          <p>{Appointments.orderinfo.Door}</p>
        </div>
        <div className="block_three">
          <strong>Time </strong>
          <p>{Appointments.orderinfo.Time}</p>
        </div>
      </div>
      <div className='product-list'>
        <div className='first'>
          <input type="checkbox" className='checkbox' value='checkbox'/>
        </div>
        <div className='second'>
          <img src={Appointments.productlist.avatar} alt="sample image" width="100px" height="100px" />
        </div>
        <div className="third">
          <h2>{Appointments.productlist.title}</h2>
          <p>{Appointments.productlist.description}</p>
        </div>
        <div className="fourth">
        <a href='https://en.wikipedia.org/wiki/Doctor_Strange_(2016_film)'>{arrow_last}</a>
        </div>
      </div>
    </div>
  );
}

export default App;
