
export default function ModalToggle2({ isToggled1, handleToggle1, isToggled2, handleToggle2, isToggled3, handleToggle3 }) {
    return (
        <>
            <div className={`modal fade ${isToggled2 ? "show d-block" : ""}`}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="content-re-lo">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleToggle2} />
                            <div className="title">Login</div>
                            <div className="register-form">
                                <div className="respond-register-form">
                                    <form method="post" className="comment-form form-submit" action="#" acceptCharset="utf-8">
                                        <fieldset>
                                            <label>Account</label>
                                            <input type="email" id="email" className="tb-my-input" name="email" placeholder="Email or user name" />
                                        </fieldset>
                                        <fieldset>
                                            <label>Password</label>
                                            <input type="password" className="input-form password-input" placeholder="Your password" />
                                        </fieldset>
                                        <div className="title-forgot t-al-right mb-20"><a className="t-al-right" data-bs-target="#exampleModalToggle3"  onClick={() => { handleToggle2(); handleToggle3();}}>Forgot password</a>
                                        </div>
                                        <button className="sc-button" name="submit" type="submit">
                                            <span>Login</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="text-box text-center mt-30">Don’t you have an account? <a className="color-popup" data-bs-target="#exampleModalToggle" onClick={() => { handleToggle1(); handleToggle2();}}>Register</a></div>
                        </div>
                    </div>
                </div>
            </div>
            {isToggled2 && <div className="modal-backdrop fade show" onClick={handleToggle2} />}
        </>
    )
}
