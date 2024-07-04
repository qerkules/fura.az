
export default function ModalTestDriver({ handleToggle4, isToggled4 }) {
    return (
        <>
            <div className={`modal fade ${isToggled4 ? "show d-block" : ""}`} id="test-driver">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleToggle4} />
                        <h4 className="title-form">Schedule Test Driver</h4>
                        <form action="/" method="post" className="test-driver-form" aria-label="Contact form" noValidate="novalidate" data-status="init">
                            <div className="group-form">
                                <input className="datetimepicker" type="date" />
                            </div>
                            <div className="group-form">
                                <div className="group-select">
                                    <select className="nice-select">
                                        <option data-value className="option selected">10h00am - 11h00am</option>
                                        <option data-value="11h00am - 12h00am" className="option">11h00am - 12h00am</option>
                                        <option data-value="13h00am - 14h00am" className="option">13h00am - 14h00am</option>
                                        <option data-value="15h00am - 16h00am" className="option">15h00am - 16h00am</option>
                                    </select>
                                </div>
                            </div>
                            <div className="group-form">
                                <input className="test-driver-name" placeholder="Enter Your Name Here" type="text" />
                            </div>
                            <div className="group-form">
                                <input className="test-driver-form" placeholder="Your Phone" type="tel" />
                            </div>
                            <input className="test-driver-submit" type="submit" defaultValue="Send Request" />
                        </form>
                    </div>
                </div>
            </div>
            {isToggled4 && <div className="modal-backdrop fade show" onClick={handleToggle4} />}
        </>
    )
}
