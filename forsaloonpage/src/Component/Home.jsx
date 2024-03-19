import React, { useEffect } from 'react';
import '../Component/home.css';

function Home() {
    useEffect(() => {
        const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

        allSideMenu.forEach(item => {
            const li = item.parentElement;

            item.addEventListener('click', function () {
                allSideMenu.forEach(i => {
                    i.parentElement.classList.remove('active');
                });
                li.classList.add('active');
            });
        });

        const menuBar = document.querySelector('#content nav .bx.bx-menu');
        const sidebar = document.getElementById('sidebar');

        menuBar.addEventListener('click', function () {
            sidebar.classList.toggle('hide');
        });

        const searchButton = document.querySelector('#content nav form .form-input button');
        const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
        const searchForm = document.querySelector('#content nav form');

        searchButton.addEventListener('click', function (e) {
            if (window.innerWidth < 576) {
                e.preventDefault();
                searchForm.classList.toggle('show');
                if (searchForm.classList.contains('show')) {
                    searchButtonIcon.classList.replace('bx-search', 'bx-x');
                } else {
                    searchButtonIcon.classList.replace('bx-x', 'bx-search');
                }
            }
        });

        if (window.innerWidth < 768) {
            sidebar.classList.add('hide');
        } else if (window.innerWidth > 576) {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
            searchForm.classList.remove('show');
        }

        window.addEventListener('resize', function () {
            if (this.innerWidth > 576) {
                searchButtonIcon.classList.replace('bx-x', 'bx-search');
                searchForm.classList.remove('show');
            }
        });

        const switchMode = document.getElementById('switch-mode');

        switchMode.addEventListener('change', function () {
            if (this.checked) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        });
    }, []);

    return (
        <>
            <section id="sidebar">
                <a href="#" className="brand">
                    <i className="bx bxs-smile" />
                    <span className="text">MalOOn</span>
                </a>
                <ul className="side-menu top">
                    <li className="active">
                        <a href="#">
                            <i className="bx bxs-dashboard" />
                            <span className="text">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-message-dots" />
                            <span className="text">Message</span>
                        </a>
                    </li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <a href="#" className="logout">
                            <i className="bx bxs-log-out-circle" />
                            <span className="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </section>
            <section id="content">
                <nav>
                    <i className="bx bx-menu" />
                    <a href="#" className="nav-link">
                        Categories
                    </a>
                    <form action="#">
                        <div className="form-input">
                            <input type="search" placeholder="Search..." />
                            <button type="submit" className="search-btn">
                                <i className="bx bx-search" />
                            </button>
                        </div>
                    </form>
                    <input type="checkbox" id="switch-mode" hidden="" />
                    <label htmlFor="switch-mode" className="switch-mode" />
                    <a href="#" className="notification">
                        <i className="bx bxs-bell" />
                        <span className="num">3
                        </span>
                    </a>
                    <a href="#" className="profile">
                        <img src="img/people.png" alt="Profile" />
                    </a>
                </nav>
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                </li>
                                <li>
                                    <a className="active" href="#">
                                        Home
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="btn-download">
                            <i className="bx bxs-cloud-download" />
                            <span className="text">Download PDF</span>
                        </a>
                    </div>
                    <ul className="box-info">
                        <li>
                            <i className="bx bxs-calendar-check" />
                            <span className="text">
                                <h3>1020</h3>
                                <p>New Order</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-group" />
                            <span className="text">
                                <h3>2834</h3>
                                <p>Total services</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-rupee-circle" />
                            <span className="text">
                                <h3>Rs.2543</h3>
                                <p>Total earning</p>
                            </span>
                        </li>
                    </ul>
                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>Recent Orders</h3>
                                <i className="bx bx-search" />
                                <i className="bx bx-filter" />
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>booking date</th>
                                        <th>Time</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Confirm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>Virat</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td>10:30am</td>
                                        <td>Rs.500</td>
                                        <td>
                                            <span className="status completed">Completed</span>
                                        </td>
                                        <td>
                                            <input type="radio" name="confirm_order" id="confirm_order_yes" checked />
                                            <label htmlFor="confirm_order_yes">Yes</label>
                                            <input type="radio" name="confirm_order" id="confirm_order_no" />
                                            <label htmlFor="confirm_order_no">No</label>
                                        </td>
                                    </tr>
                                    {/* Other rows */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}

export default Home;
