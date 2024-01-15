import React from 'react'
import { BrowserRouter, Link, Routes } from 'react-router-dom'

function NavHeader() {
    return (
        <>
            <header>
                <nav>
                    <div className="logo-nav">
                        <Link to={'/'}><img
                            src="./images/trang-chu/logophongtra.png"
                            alt=""
                            className="logo"
                        /></Link>

                    </div>
                    <div className="nav-header">
                        <ul className="nav-menu">
                            <li className="nav-menu-list">
                                <Link to={'/Home'}>Trang chủ</Link>
                            </li>
                            <li className="nav-menu-list">
                                <Link to={'/Gioithieu'}>Giới thiệu</Link>
                            </li>
                            <li className="nav-menu-list">
                                <a href="#">Sản phẩm</a>
                            </li>
                            <li className="nav-menu-list">
                                <Link to={'/Contact'}>Liên hệ</Link>
                            </li>
                            <li className="nav-menu-list">
                                <a href="lienhe.html">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavHeader