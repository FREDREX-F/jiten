import { ReactComponent as JitenIcon } from './img/JITENLOGO.svg';
import { Link } from 'react-router-dom';
import './style/register.css';
import bgReg from './img/bg1.jpg';

function Login() {
 const onSubmit = (e) => {
  e.preventDefault();
  console.log('sub');
 };

 return (
  <main>
   <div className='container'>
    <div className='logo'>
     <JitenIcon />
    </div>
    <h2 className='logstyle'>Register</h2>
    <form onSubmit={onSubmit} className="reg">
     <div className='input_container'>
      <input type="text" className='input_field_register' placeholder='Email' />
      <br />
      <input type="text" className='input_field_register' placeholder='Age' />
      <br />
      <input type="password" className='input_field_register' placeholder='Password' />
     </div>
     <br />
     <div className='buttonreg'>
      <button className='reg_button'>REGISTER</button>
     </div>
    </form>
    <Link to="/"><button className='regbutton'>Log In</button></Link>

    <div className='bgreg_container'>
     <img src={bgReg} alt="bg_reg" className='bg_reg' />
    </div>

   </div>

  </main>

 )
};

export default Login;