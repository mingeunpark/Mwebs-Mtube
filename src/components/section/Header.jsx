import React from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillIdcard } from "react-icons/ai";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className="header_logo">
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>webs<br />youtube</span>
                </a>
            </h1>

            <nav className='header_menu'>
                <ul className='menu'>
                    <li className='active'> <a href='/'><AiFillIdcard/>MinGeun Study</a></li>
                    <li> <a href='/today'><AiFillCaretRight/>추천영상</a></li>
                    <li> <a href='/developer'><AiFillCaretRight/>추천개발자</a></li>
                    <li> <a href='/webd'><AiFillCaretRight/>웹디자인 기능사</a></li>
                    <li> <a href='/website'><AiFillCaretRight/>웹표준 사이트</a></li>
                    <li> <a href='/gsap'><AiFillCaretRight/>GSAP Parallax</a></li>
                    <li> <a href='/port'><AiFillCaretRight/>포트폴리오 사이트</a></li>
                    <li> <a href='/youtube'><AiFillCaretRight/>유튜브 클론 사이트</a></li>
                </ul>
                <ul className='keyword'>
                    <li> <a href='/search/webstoryboy'>webstoryboy</a></li>
                    <li> <a href='/search/html'>HTML</a></li>
                    <li> <a href='/search/css'>CSS</a></li>
                    <li> <a href='/search/javascript'>JavaScript</a></li>
                    <li> <a href='/search/react.js'>React.js</a></li>
                    <li> <a href='/search/vue.js'>Vue.js</a></li>
                    <li> <a href='/search/next.js'>Next.js</a></li>
                    <li> <a href='/search/node.js'>Node.js</a></li>
                    <li> <a href='/search/sql'>SQL</a></li>
                    <li> <a href='/search/React Portfolio'>portfolio</a></li>
                    <li> <a href='/search/NewJeans'>music</a></li>
                </ul>
            </nav>

            <div className='header_sns'>
                <ul>
                    <li><a href="https://github.com/webstoryboy"rel="noopener noreferrer"> <AiFillCaretRight/> G</a></li>
                    <li><a href="https://youtube.com/webstoryboy"rel="noopener noreferrer"> <AiFillCaretRight/> Y </a></li>
                    <li><a href="https://codepen.io/webstoryboy"rel="noopener noreferrer"> <AiFillCaretRight/> C </a></li>
                    <li><a href="https://instagram.com/webstoryboy"rel="noopener noreferrer"> <AiFillCaretRight/> I </a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header