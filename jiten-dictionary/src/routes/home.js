import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './style/home.css';
import List from './img/list.svg';
import HomeSvg from './img/home.svg';
import Translate from './img/translate.svg';
import Game from './img/game.svg';
import Profile from './img/profile.svg';
import Search from './img/search.svg';
import Keyboard from './img/keyboard.svg';
import Mic from './img/mic.svg';
import Camera from './img/camera.svg';

function Home() {
  // make enter button as submit
  const [keyWord, setKeyword] = useState('')
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fetched = await handleSearch()
    setData(fetched.data)
    console.log(fetched.data)
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setKeyword(event.target.value);
  }
  const BASE_URL = 'http://localhost:8000/api';

  const api = "https://jisho.org/api/v1/search/words?keyword=";

  async function handleSearch() {
    try {
      const response = await axios.get(`${BASE_URL}/jisho/search/${keyWord}`);
      return response.data;
    } catch (e) {
      console.log({ e })
    }
  }

  return (
    <main>
      <section className="layout">
        <div className="sidebar">
          <ul className='container_sidebar'>
            <li>
              <img src={List} alt="list_home" />
            </li>
            <li>
              <img src={HomeSvg} alt="home_home" />
            </li>
            <li>
              <img src={Translate} alt="translate_home" />
            </li>
            <li>
              <img src={Game} alt="game_home" />
            </li>
            <Link to="/profile">
              <li>
                <img src={Profile} alt="profile_home" />
              </li >
            </Link>
          </ul >
        </div >
        <div className="body">
          <form onSubmit={handleSubmit}>
            <div className="searching">
              <img src={Search} alt="search" className='search_img' />
              <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Enter Text' className='search_input' />
            </div>
            <div className='home_list'>
              <div className='home_list_detail'>
                {data.map((item) => (
                  <section className='border_line_home' key={item.slug} style={{ marginBottom: '1rem' }}>
                    <h3>{item.japanese[0]?.word}</h3>
                    <p>{item.japanese[0]?.reading}</p>

                    <p>{item.senses[0]?.english_definitions?.join(', ')}</p>
                  </section>
                ))}
              </div>
            </div>
          </form>
          <div className='bottombar'>
            <ul>
              <li>
                <img src={Keyboard} alt="keyboard_home" />
              </li>
              <li>
                <img src={Mic} alt="mic" />
              </li>
              <li>
                <img src={Camera} alt="camera" />
              </li>
            </ul>
          </div>
        </div>
      </section >
    </main >
  )
};

export default Home;