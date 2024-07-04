

export default function FormBuyCar() {
    return (
        <>
            <div className="widget-form-buy-car mg-2">
                <div className="themesflat-container">
                    <div className="form-buy-car-wrap">
                        <div className="form-buy-car-content">
                            <div className="buy-car">Buy a car today</div>
                            <div className="buy-car-ab">Buy a car today</div>
                        </div>
                        <div className="form-buy-car-form">
                            <div className="title">Contact us Today</div>
                            <p className="description">Your email address will not be published.</p>
                            <form action="/" className="form-buy-car">
                                <input type="text" className="input-buy-car" placeholder="Full Name here" />
                                <input type="email" className="input-buy-car" placeholder="Email Address" />
                                <textarea className="input-buy-car" placeholder="Write Message....." defaultValue={""} />
                                <button type="submit"> Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
