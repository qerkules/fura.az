

export default function CalculatorForm() {
    return (
        <>
            <div className="widget-calculator-form mg-2">
                <div className="themesflat-container full">
                    <div className="calculator-form-wrap">
                        <div className="calculator-form">
                            <h2 className="title-section-main wow fadeInUp">Auto loan calculator</h2>
                            <form action="/" id="calculator" className="mt-60">
                                <div className="input-wrap">
                                    <fieldset>
                                        <label>Vehicle Price</label>
                                        <input type="tel" placeholder="$250000" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Interest Rate</label>
                                        <input type="tel" placeholder="$250000" />
                                    </fieldset>
                                </div>
                                <div className="input-wrap">
                                    <fieldset>
                                        <label>Down Payment</label>
                                        <input type="tel" placeholder="$250000" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Loan Duration</label>
                                        <input type="tel" placeholder="$250000" />
                                    </fieldset>
                                </div>
                                <div className="btn-wrap-form mt-45">
                                    <button type="submit" className="payment">Calculate Payment</button>
                                    <button type="reset" className="btn-reset"><i className="icon-rotate-left-circular-arrow-interface-symbol-1" />
                                        Reset All
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="calculator-image">
                            <img src="./assets/images/page/image-form.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
