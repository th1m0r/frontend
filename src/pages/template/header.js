import React from 'react';

export default function Header() {

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">



            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="fake_url">
                        <i className="fas fa-bars" />
                    </a>
                </li>
            </ul>

            {/* SEARCH FORM */}
            <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
                    <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search" />
                        </button>
                    </div>
                </div>
            </form>

        </nav>
    )
}