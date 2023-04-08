import { Link } from 'react-router-dom';
import './style/loading.css';
import loading from './img/loading.jpg';

function Loading() {
 return (
  <main>
   <div className='imgload'>
    <img src={loading} alt="loading" className='loading' />
   </div>
   <div className='loading_container'>
    <div className='title_loading'>GET STARTED</div>
    <div className='desc_loading'>Let Jiten help you to learn, explore, and understand of idioms and phrases.</div>
   </div>
   <Link to='/home'>
    <div className='loading_button_container'>
     <button className='loadingbutton'>GET STARTED</button>
    </div>
   </Link>
  </main>
 )
};

export default Loading;