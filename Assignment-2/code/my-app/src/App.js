import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container App">
  {/* Start your React code here */}
  <div className='App-logo'>
    <img className='profile-img' src={employee.profileImg} height="200px" width="200px" alt="profile"/>
  </div>
  <div className='App-link'>
    <h1> {employee.name} </h1>
  </div>
  <div className='App-header'>
    <label>Location</label>
    <strong> {employee.location} </strong>
  </div>
  <div className='App-header'>
    <label>Blood group</label>
    <strong> {employee.bloodGroup} </strong>
  </div>
  <div className='App-header'>
    <label>Age</label>
    <strong> {employee.age} </strong>
  </div>
</div>
)
}



export default App;
