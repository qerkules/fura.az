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
            <ul>
              <Link href="/en">
                <ReactCountryFlag countryCode="US" svg />
                <span className="active">Eng</span>
              </Link>
              <Link href="/ru">
                <ReactCountryFlag countryCode="RU" svg />
                <span>Ru</span>
              </Link>
              <Link href="/az">
                <ReactCountryFlag countryCode="AZ" svg />
                <span>Az</span>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
