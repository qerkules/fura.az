
export default function ModalOfferPrice({ isToggled5, handleToggle5 }) {
    return (
        <>
            <div className={`modal fade ${isToggled5 ? "show d-block" : ""}`} id="offer-price">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleToggle5} />
                        <h4 className="title-form">Make An Offer Price</h4>
                        <form action="/" method="post" className="offer-price-form" aria-label="Contact form" noValidate="novalidate" data-status="init">
                            <div className="group-form">
                                <input className="test-driver-name" placeholder="Enter Your Name Here" type="text" />
                            </div>
                            <div className="group-form">
                                <input className="test-driver-mail" placeholder="Email" type="email" />
                            </div>
                            <div className="group-form">
                                <input className="test-driver-form" placeholder="Your Phone" type="tel" />
                            </div>
                            <div className="group-form">
                                <input className="trade-price" placeholder="Trade Price" type="text" />
                            </div>
                            <input className="test-driver-submit" type="submit" defaultValue="Send Request" />
                        </form>
                    </div>
                </div>
            </div>
            {isToggled5 && <div className="modal-backdrop fade show" onClick={handleToggle5} />}
        </>
    )
}
