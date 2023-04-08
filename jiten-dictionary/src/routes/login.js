import { ReactComponent as JitenIcon } from './img/JITENLOGO.svg';
import { Link } from 'react-router-dom';
import './style/login.css';
import bgLogin from './img/bg1.jpg';

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
        <h2 className='logstyle'>Log In</h2>
        <form onSubmit={onSubmit} className="login">
          <div className='input_container'>
            <input type="text" className='input_field_login' placeholder='Email or Username' />
            <br />
            <input type="password" className='input_field_login' placeholder='Password' />
          </div>
          <br />
          <div className='logbutton'>
            <Link to="/loading"><button className='login_button'>LOG IN</button></Link>
          </div>
        </form>
        <Link to="/register"><button className='regbutton'>Register</button></Link>

        <div className='bglogin_container'>
          <img src={bgLogin} alt="bg_login" className='bg_login' />
        </div>

      </div>

    </main>

  )
};

export default Login;