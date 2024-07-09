import { useState } from "react";

export default function ModalToggle2({
  isToggled1,
  handleToggle1,
  isToggled2,
  handleToggle2,
  isToggled3,
  handleToggle3,
}) {
  const [currentLogin, setCurrentLogin] = useState("email");

  return (
    <>
      <div className={`modal fade ${isToggled2 ? "show d-block" : ""}`}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="content-re-lo">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleToggle2}
              />
              <div className="title">Login</div>
              <div className="modal-title-container">
                <div
                  className={`title ${
                    currentLogin === "email" ? "active" : ""
                  }`}
                  onClick={() => setCurrentLogin("email")}
                >
                  With Email
                </div>
                <div
                  className={`title ${
                    currentLogin === "number" ? "active" : ""
                  }`}
                  onClick={() => setCurrentLogin("number")}
                >
                  With Number
                </div>
              </div>
              <div className="register-form">
                <div className="respond-register-form">
                  {currentLogin === "email" ? (
                    <form
                      method="post"
                      className="comment-form form-submit"
                      action="#"
                      acceptCharset="utf-8"
                    >
                      <fieldset>
                        <label>Account</label>
                        <input
                          type="email"
                          id="email"
                          className="tb-my-input"
                          name="email"
                          placeholder="Email or user name"
                        />
                      </fieldset>
                      <fieldset>
                        <label>Password</label>
                        <input
                          type="password"
                          className="input-form password-input"
                          placeholder="Your password"
                        />
                      </fieldset>
                      <div className="title-forgot t-al-right mb-20">
                        <a
                          className="t-al-right"
                          data-bs-target="#exampleModalToggle3"
                          onClick={() => {
                            handleToggle2();
                            handleToggle3();
                          }}
                        >
                          Forgot password
                        </a>
                      </div>
                      <button className="sc-button" name="submit" type="submit">
                        <span>Login</span>
                      </button>
                    </form>
                  ) : (
                    <form
                      method="post"
                      className="comment-form form-submit"
                      action="#"
                      acceptCharset="utf-8"
                    >
                      <fieldset>
                        <label>Phone Number</label>
                        <input
                          type="email"
                          id="email"
                          className="tb-my-input"
                          name="email"
                          placeholder="+ (_._._)  _._._  _._  _._"
                        />
                      </fieldset>
                      <div className="title-privacy">
                        <p>
                          I have read and accept the
                          <a> privacy policy, user agreement and rules</a>.
                        </p>
                      </div>
                      <button className="sc-button" name="submit" type="submit">
                        <span>Login</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
              <div className="text-box text-center mt-30">
                Don’t you have an account?{" "}
                <a
                  className="color-popup"
                  data-bs-target="#exampleModalToggle"
                  onClick={() => {
                    handleToggle1();
                    handleToggle2();
                  }}
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isToggled2 && (
        <div className="modal-backdrop fade show" onClick={handleToggle2} />
      )}
    </>
  );
}
