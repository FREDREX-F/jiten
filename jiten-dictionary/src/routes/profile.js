import { Link } from 'react-router-dom';
import './style/profile.css';
import { ReactComponent as EditArrow } from './img/right_arrow_sm.svg';
import { ReactComponent as Feedback } from './img/feedback.svg';
import { ReactComponent as About } from './img/about.svg';
import { ReactComponent as Speech } from './img/speech.svg';
import { ReactComponent as Darkmode } from './img/about.svg';
import { ReactComponent as Keyboard } from './img/keyboard_profile.svg';
import test from './img/test.png';

function Profile() {
 return (
  <main>
   <div className='profile_container'>
    <div className='profile_img'>
     <img src={test} alt="profiletest" className='profile_picture' />
    </div>
    <div className='profile_text_container'>
     <h4 className='profile_name'>Name</h4>
     <h6 className='profile_occupation'>Occupation</h6>
     <button className='profile_edit_button'>Edit Profile<EditArrow /></button>
    </div>

    <div className='profile_support_table_center'>
     <div className='profile_support_table_container'>
      <h4>SUPPORT</h4>
     </div>
    </div>
    <div className='profile_support'>
     <h6 className='profile_font'><Feedback style={{ marginRight: '1rem' }} />Feedback</h6>
     <h6 className='profile_font'><About style={{ marginRight: '1rem' }} />About</h6>
     <h6 className='profile_font_help'>Help</h6>
    </div>

    <div className='profile_support_table_center'>
     <div className='profile_support_table_container'>
      <h4>VOICE</h4>
     </div>
    </div>
    <div className='profile_support'>
     <h6 className='profile_font'><Speech style={{ marginRight: '1rem' }} />Speech Input</h6>
     <h6 className='profile_font'><About style={{ marginRight: '1rem' }} />Dark Mode</h6>
     <h6 className='profile_font'><Keyboard style={{ marginRight: '1rem' }} />Keyboard</h6>
    </div>

    <div className='profile_support_table_center'>
     <div className='profile_support_table_container'>
      <h4>Manage history</h4>
     </div>
    </div>

   </div>
  </main>
 )
};

export default Profile;