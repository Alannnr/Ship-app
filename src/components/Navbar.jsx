import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    
                    <a class="navbar-brand" href="#">CRUISE TICKET</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/register">Book cruise</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/tourregister">Tour plans</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar