import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-background">
                    <img src="./images/trang-chu/fotter.png" alt="img" className="img w-100" />
                </div>
                <div className="footer-content">
                    <ul>
                        <li>
                            <div>
                                <img src="./images/trang-chu/logophongtra.png" alt="" />
                            </div>
                        </li>
                        <li>
                            <p>0853.885.203</p>
                        </li>
                        <li>
                            <p>trasenbachdiep@gmail.com</p>
                        </li>
                        <li>
                            <p>Số 12, Quảng An, Tây Hồ, Hà Nội.</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>VỀ CHÚNG TÔI</p>
                        </li>
                        <li>
                            <a href="#">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="#">Sản phẩm</a>
                        </li>
                        <li>
                            <a href="#">Tin tức</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>LIÊN HỆ</p>
                        </li>
                        <li>
                            <p>CopyRight 2010-2023</p>
                        </li>
                        <li>
                            <p>Tra Sen Bach Diep. All rights reserved</p>
                        </li>
                    </ul>
                    {/* <table>
          <tr>
              <th><div><img src="./images/trang-chu/logophongtra.png" alt=""></div></th>
              <th><p>VỀ CHÚNG TÔI</p></th>
              <th><p>LIÊN HỆ</p></th>
          </tr>
      </table> */}
                </div>
            </div>
        </>
    )
}

export default Footer