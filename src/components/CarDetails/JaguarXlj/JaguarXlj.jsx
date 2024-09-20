import React from 'react'
import './JaguarXlj.css'

const JaguarXlj = () => {
    return(
        <>
        <section className="hero-section position-relative">
        <div className="container-fluid p-0">
            <div className="banner-image">
                <img src="/images/carDetails/ja_xjl.png" className="img-fluid" alt="Banner Image"/>
            </div>
            <div className="black-overlay"></div>

            <div className="image-text position-absolute top-50 start-50 translate-middle text-center">
                <h1 className="bus-model-text">Jaguar <span style={{color: "#18B2D3"}}>XLJ</span></h1>
            </div>
        </div>
    </section>

     <section className="take-a-look">
    <div className="row">
        <div className="take-a-look-container">
            <h2 className="text-left" style={{marginLeft: "40px", marginTop: "50px"}}>Take a Look</h2>
            <div className="row">

                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="/images/carDetails/Rectangle 51.png" className="card-img-top" alt="Car Image 1"/>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="/images/carDetails/Rectangle 52.png" className="card-img-top" alt="Car Image 2"/>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="/images/carDetails/Rectangle 53.png" className="card-img-top" alt="Car Image 3"/>
                    </div>
                </div>
            </div>

            <div className="learn-more text-left">
                <a href="/tariff" className="btn btn-primary adventure-btn" style={{marginLeft: "40px", marginTop: "40px"}}>Rent Now</a>
            </div>
        </div>
    </div>
</section>

     <section className="vehicle-overview">
        <div className="vehicle-overview-container text-left">
            <h2 className="text-left" style={{marginLeft: "40px", marginTop: "20px", fontSize: "40px"}}>Vehicle Overview</h2>
            <br/>
            <p style={{marginLeft: "40px", fontSize: "20px"}}>The Ultimate Luxury car from the Tata Owned Marque JAGUAR. The redefined luxury car with Power and beauty is truly dynamic with its divine look. Increased Legroom,an exquisite interior and a sporting agility gives a commanding presence in and out. APJ CABS Provides Jaguar XJL car rental in Chennai with Experienced Muli-lingual chauffeurs .
                Best Recommended for Special Occasion car rental and Jaguar wedding car rental In Chennai.</p>
        </div>
     </section>

<section className="terms-conditions">
    <div className="terms-conditions-container text-left">
        <h2 className="text-left" style={{marginLeft: "40px", marginTop: "50px", color: "#00afcc"}}>Terms & Conditions</h2>
        <br/>
        <ul className="list" style={{marginLeft: "40px", listStyleType: "none", padding: "0"}}>
            <li style={{marginBottom: "10px"}}><i className="far fa-circle" style={{color: "#00afcc", marginRight: "10px"}}></i>No advance booking for 4 Hours.</li>
            <li style={{marginBottom: "10px"}}><i className="far fa-circle" style={{color: "#00afcc", marginRight: "10px"}}></i>For local trips crossing 4 Hours will be calculated as 8 Hours package.</li>
            <li style={{marginBottom: "10px"}}><i className="far fa-circle" style={{color: "#00afcc", marginRight: "10px"}}></i>Time and distance calculated from our garage to garage.</li>
            <li style={{marginBottom: "10px"}}><i className="far fa-circle" style={{color: "#00afcc", marginRight: "10px"}}></i>For Outstation minimum of 250 kms will be calculated on average basis even if not used.</li>
            <li style={{marginBottom: "10px"}}><i className="far fa-circle" style={{color: "#00afcc", marginRight: "10px"}}></i>Charges include car hire with driver and fuel.</li>
            <li style={{marginBottom: "10px"}}><i className="far fa-circle" style={{color: "#00afcc", marginRight: "10px"}}></i>Charges Excludes toll, airport parking, parking, interstate permit-Tax.</li>
            <li style={{marginBottom: "10px"}}><i className="far fa-circle" style={{color: "#00afcc", marginRight: "10px"}}></i>GST Additional.</li>
        </ul>
    </div>
</section>

<section className="pricing-details" style={{marginLeft: "20px"}}>
    <h2 className="px-4 text-left" style={{color: "#00afcc"}}>Pricing Details</h2>
    <br/>
    <div className="container">
        <div className="row gy-4" style={{marginBottom: "35px"}}>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="pricing-box text-center p-4 rounded"
                    style={{height: "100%", background: "linear-gradient(135deg, #18B2D3, #0C4CE9)", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease"}}>
                    <p style={{color: "white", fontSize: "18px"}}>4 Hours & 40kms</p>
                    <p style={{color: "#fff", fontSize: "28px"}}>-/2000</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="pricing-box text-center p-4 rounded"
                    style={{height: "100%", background: "linear-gradient(135deg, #FF6F61, #FF4A4A)", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease"}}>
                    <p style={{color: "white", fontSize: "18px"}}>8 Hours & 80kms</p>
                    <p style={{color: "#fff", fontSize: "28px"}}>-/4000</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="pricing-box text-center p-4 rounded"
                    style={{height: "100%", background: "linear-gradient(135deg, #FFB74D, #FFA726)", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease"}}>
                    <p style={{color: "white", fontSize: "18px"}}>Extra Hour (10 Kms above 8 Hours)</p>
                    <p style={{color: "#fff", fontSize: "28px"}}>-/500</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="pricing-box text-center p-4 rounded"
                    style={{height: "100%", background: "linear-gradient(135deg, #66BB6A, #43A047)", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease"}}>
                    <p style={{color: "white", fontSize: "18px"}}>Extra Km above Coverage</p>
                    <p style={{color: "#fff", fontSize: "28px"}}>-/30</p>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    )
}

export default JaguarXlj