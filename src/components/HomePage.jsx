import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://media.istockphoto.com/id/183884485/photo/cruise-ship-on-blue-sky-with-clouds.jpg?s=612x612&w=0&k=20&c=acDhkFVBNY5wrlTOT-f6jns-SIyy4hVC3X4MSIa0hSo=" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://wallpapers.com/images/featured/cruise-ship-48fv0tg5inbcobk9.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://wallpaper.forfun.com/fetch/50/50998f76a07cde1256d702afa1c475b3.jpeg" class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card">
                                    <div class="card-header">
                                        GRAB YOUR TICKETS NOW!!!!
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title"></h5>
                                        <p class="card-text">We provide the best ticket prices in the segment. Make sure you grab the tickets by the end of the day</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="alert alert-info" role="alert">
                                    CHECK OUT 12%OFF ON SHIP TO SINGAPORE
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card text-center">
                                    <div class="card-header">
                                        GRAB BEFORE YOU GET LATE!!!!!
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Special OFF on domestic ships within india</h5>
                                        <p class="card-text">As we are celebrating 25 years of expertise in this field we plan on giving an amazing offer this time around make sure you grab it</p>
                                        <a href="/register" class="btn btn-primary">BOOK NOW!!!</a>
                                    </div>
                                    <div class="card-footer text-body-secondary">
                                        12HRS LEFT
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <img src="https://wallpapers.com/images/hd/cruise-ship-luxurious-deck-ekar3wl9f5g26a8x.jpg" class="img-fluid" alt="..." />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">FOR SHIP TICKETS</h5>
                                                <p class="card-text">Discover unbeatable deals on air tickets with our platform! We specialize in finding the cheapest ships to destinations worldwide, ensuring you save money while enjoying top-notch travel.</p>
                                                <a href="/register" class="btn btn-primary">BOOK NOW!!!</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">TOUR PACKAGES</h5>
                                                <p class="card-text">Embark on unforgettable adventures without straining your budget with our affordable tour packages! We offer a wide range of curated experiences to popular destinations around the globe.</p>
                                                <a href="/tourregister" class="btn btn-primary">FOR MORE DETAILS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card">
                                    <div class="card-header">
                                        FOR FURTHER ENQUIRIES
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">CONTACT US NOW</h5>
                                        <p class="card-text">TOLL FREE 1800-xxxx-xxxx</p>
                                        <a href="/contact" class="btn btn-primary">For More Contact Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage