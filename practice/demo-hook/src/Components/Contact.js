import React from 'react'

function Contact() {
    return (
        <>
            <section>
                <div className="contact">
                    <div className="contact-background">
                        <img
                            src="./images/lien-he/banner.jpg"
                            alt="contact-background"
                            className="contact-img w-100"
                        />
                    </div>
                    <div className="contact-table">
                        <form action="#" method="">
                            <div className="contact-title">
                                <p>LIÊN HỆ VỚI CHÚNG TÔI</p>
                            </div>
                            <div className="input-form">
                                <input type="text" placeholder="Họ tên" name="name" id="name" />
                                <input type="email" placeholder="Email" name="email" id="email" />
                                <input
                                    type="number"
                                    placeholder="Số điện thoại"
                                    name="numberphone"
                                    id="numberphone"
                                />
                                <input
                                    type="text"
                                    placeholder="Nội dung"
                                    name="noidung"
                                    id="noidung"
                                />
                                <button type="submit">Gửi</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact