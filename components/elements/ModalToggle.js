
export default function ModalToggle({ isToggled1, handleToggle1, isToggled2, handleToggle2, isToggled3, handleToggle3 }) {
    return (
        <>
            <div className={`modal fade ${isToggled1 ? "show d-block" : ""}`}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="content-re-lo">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleToggle1} />
                            <div className="title">Register</div>
                            <div className="register-form">
                                <div className="respond-register-form">
                                    <form method="post" className="comment-form form-submit" action="/" acceptCharset="utf-8" noValidate="novalidate">
                                        <fieldset>
                                            <label>User name</label>
                                            <input type="text" className="tb-my-input" name="text" placeholder="User name" />
                                        </fieldset>
                                        <fieldset>
                                            <label>Email</label>
                                            <input type="email" className="tb-my-input" name="email" placeholder="Email" />
                                        </fieldset>
                                        <fieldset>
                                            <label>Password</label>
                                            <input type="password" className="input-form password-input" placeholder="Your password" />
                                        </fieldset>
                                        <fieldset>
                                            <label>Confirm password</label>
                                            <input type="password" className="input-form password-input" placeholder="Confirm password" />
                                        </fieldset>
                                        <button className="sc-button" name="submit" type="submit">
                                            <span>Sign Up</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="text-box text-center mt-30">Allready have an account? <a className="color-popup " data-bs-target="#exampleModalToggle2"  onClick={() => { handleToggle1(); handleToggle2();}}>Login</a></div>
                        </div>
                    </div>
                </div>
            </div>
            {isToggled1 && <div className="modal-backdrop fade show" onClick={handleToggle1} />}


        </>
    )
}
