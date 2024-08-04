"use client";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";

const LanguageSwitcher = () => {
  return (
    <div className="nav-wrapper">
      <div className="sl-nav">
        <ul>
          <li>
            <ReactCountryFlag countryCode="US" svg />
            <span className="language-shower">Eng</span>{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            <ul className="languages-list">
              <li>
                <Link href="/en">
                  <ReactCountryFlag countryCode="US" svg />
                  <span className="active">Eng</span>
                </Link>
              </li>
              <li>
                <Link href="/ru">
                  <ReactCountryFlag countryCode="RU" svg />
                  <span>Ru</span>
                </Link>
              </li>
              <li>
                <Link href="/az">
                  <ReactCountryFlag countryCode="AZ" svg />
                  <span>Az</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
