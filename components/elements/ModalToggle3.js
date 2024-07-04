
export default function ModalToggle3({ isToggled1, handleToggle1, isToggled2, handleToggle2, isToggled3, handleToggle3 }) {
    return (
        <>
            <div className={`modal fade ${isToggled3 ? "show d-block" : ""}`}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="content-re-lo">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleToggle3} />
                            <div className="title">Forgot your password?</div>
                            <div className="register-form">
                                <div className="respond-register-form">
                                    <form method="post" className="comment-form form-submit" action="#" acceptCharset="utf-8">
                                        <fieldset>
                                            <label>Password</label>
                                            <input type="password" className="input-form password-input" placeholder="Your password" />
                                        </fieldset>
                                        <button className="sc-button" name="submit" type="submit">
                                            <span>Get new password</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="text-box text-center mt-30"><a className="color-popup" data-bs-target="#exampleModalToggle2" onClick={() => { handleToggle2(); handleToggle3() }}>Back to Login</a></div>
                        </div>
                    </div>
                </div>
            </div>
            {isToggled3 && <div className="modal-backdrop fade show" onClick={handleToggle3} />}
        </>
    )
}
