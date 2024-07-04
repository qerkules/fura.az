
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Seller Profile">
                <div className="widget-dealer-single">
                    <div className="themesflat-container">
                        <div className="dealer-single">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="seller-profile">
                                        <div className="profile">
                                            <img src="./assets/images/avatar/avt-review.jpg" alt="" />
                                            <div className="information">
                                                <p className="private-seller">Private seller</p>
                                                <h2 className="title">Rosalina D. Willaim</h2>
                                            </div>
                                        </div>
                                        <div className="dealer-author-content">
                                            <div className="dealer-author-item">
                                                <div className="dealer-author-icon">
                                                    <i className="icon-Group-14" />
                                                </div>
                                                <div className="dealer-content-info-box">
                                                    <p className="label-dealer-content">Sales Phone</p>
                                                    <span className="dealer-title">302 456 9854 </span>
                                                </div>
                                            </div>
                                            <div className="dealer-author-item">
                                                <div className="dealer-author-icon">
                                                    <i className="icon-map-1-1" />
                                                </div>
                                                <div className="dealer-content-info-box">
                                                    <p className="label-dealer-content">location</p>
                                                    <span className="dealer-title">391 Elgin St. Celina, 10299</span>
                                                </div>
                                            </div>
                                            <div className="dealer-author-item">
                                                <div className="dealer-author-icon">
                                                    <i className="icon-Group2" />
                                                </div>
                                                <div className="dealer-content-info-box">
                                                    <p className="label-dealer-content">Dealer Email</p>
                                                    <Link className="dealer-title" href="/mailto:contact@motorx.com">
                                                        contact@motorx.com</Link>
                                                </div>
                                            </div>
                                            <div className="dealer-author-item">
                                                <div className="dealer-author-icon">
                                                    <i className="icon-uniE971" />
                                                </div>
                                                <div className="dealer-content-info-box">
                                                    <p className="label-dealer-content">Sales hour</p>
                                                    <span className="dealer-title">Monday - Friday: 8am - 9am</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-60">
                                <div className="col-xl-9 col-md-12">
                                    <div className="dealer-description mb-60">
                                        <h3 className="dealer-title mb-25">Introduction</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but majority have
                                            suffered teration in some form, by injected humour, or randomised
                                            words which don't look even slight believable. If you are going to use a passa
                                            In publishing and vfx graphic design, Lorem ipsum is a placeholder text commonly
                                            used to demonstrate the visual fo
                                            of a document or a typeface without relying on meaningful content. Lorem ipsum
                                            may be used as a placeholder before final copy is available.
                                        </p>
                                    </div>
                                    <div className="dealer-inventory listing-list-car-wrap">
                                        <form action="/" className="tf-my-listing-search">
                                            <div className="tab-listing-all">
                                                <h3 className="title">Dealer Inventory</h3>
                                                <div className="toolbar-list">
                                                    <div className="group-select-recently">
                                                        <select className="nice-select">
                                                            <option data-value className="option selected">Recently Added</option>
                                                            <option data-value="new" className="option">New</option>
                                                            <option data-value="Recently Added" className="option">Recently
                                                                Added</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <a className="btn-display-listing-grid active">
                                                        <i className="icon-th-list" />
                                                    </a>
                                                </div>
                                                <div className="form-group">
                                                    <a className="btn-display-listing-list">
                                                        <i className="icon-line-height" />
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="listing-list-car-grid">
                                        <div className="listing-grid-item">
                                            <div className="listing-item-image">
                                                <div className="hover-listing-image">
                                                    <div className="wrap-hover-listing">
                                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car5.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                <div className="overlay-limit">
                                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                    <p>2 more photos</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bullet-hover-listing">
                                                            <div className="bl-item active" />
                                                            <div className="bl-item" />
                                                            <div className="bl-item" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href="/#" className="icon-favorite">
                                                    <i className="icon-heart-1-1" />
                                                </Link>
                                                <span className="feature">Featured</span>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="listing-top-content">
                                                    <h6 className="title"><Link href="/#" /><Link href="/#">Mercedez benz - c class</Link></h6>
                                                    <div className="review-wrap">
                                                        <div className="rating">
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                        </div>
                                                        <span className="review">( 2 Reviews )</span>
                                                    </div>
                                                    <div className="description">
                                                        <ul>
                                                            <li className="listing-information fuel">
                                                                <i className="icon-gasoline-pump-1" />
                                                                <div className="inner">
                                                                    <span>Fuel type</span>
                                                                    <p>Petrol</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information size-engine">
                                                                <i className="icon-Group1" />
                                                                <div className="inner">
                                                                    <span>Mileage</span>
                                                                    <p>90 k.m</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information transmission">
                                                                <i className="icon-gearbox-1" />
                                                                <div className="inner">
                                                                    <span>Transmission</span>
                                                                    <p>Auto</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <ul className="list-controller">
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-heart-1-1" />
                                                                <span>Favorite</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-shuffle-2-11" />
                                                                <span>Compare</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-price-wrap">
                                                    <div className="price-wrap">
                                                        <p className="price">$489</p>
                                                        <p className="price-sale">$399</p>
                                                    </div>
                                                    <div className="btn-read-more">
                                                        <Link className="more-link" href="/listing-details">
                                                            <span>View details</span>
                                                            <i className="icon-arrow-right2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-grid-item">
                                            <div className="listing-item-image">
                                                <div className="hover-listing-image">
                                                    <div className="wrap-hover-listing">
                                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car16.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                <div className="overlay-limit">
                                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                    <p>2 more photos</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bullet-hover-listing">
                                                            <div className="bl-item active" />
                                                            <div className="bl-item" />
                                                            <div className="bl-item" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href="/#" className="icon-favorite">
                                                    <i className="icon-heart-1-1" />
                                                </Link>
                                                <span className="feature">Featured</span>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="listing-top-content">
                                                    <h6 className="title"><Link href="/#">Mercedez benz - c class</Link></h6>
                                                    <div className="review-wrap">
                                                        <div className="rating">
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                        </div>
                                                        <span className="review">( 2 Reviews )</span>
                                                    </div>
                                                    <div className="description">
                                                        <ul>
                                                            <li className="listing-information fuel">
                                                                <i className="icon-gasoline-pump-1" />
                                                                <div className="inner">
                                                                    <span>Fuel type</span>
                                                                    <p>Petrol</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information size-engine">
                                                                <i className="icon-Group1" />
                                                                <div className="inner">
                                                                    <span>Mileage</span>
                                                                    <p>90 k.m</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information transmission">
                                                                <i className="icon-gearbox-1" />
                                                                <div className="inner">
                                                                    <span>Transmission</span>
                                                                    <p>Auto</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <ul className="list-controller">
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-heart-1-1" />
                                                                <span>Favorite</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-shuffle-2-11" />
                                                                <span>Compare</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-price-wrap">
                                                    <div className="price-wrap">
                                                        <p className="price">$489</p>
                                                        <p className="price-sale">$399</p>
                                                    </div>
                                                    <div className="btn-read-more">
                                                        <Link className="more-link" href="/listing-details">
                                                            <span>View details</span>
                                                            <i className="icon-arrow-right2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-grid-item">
                                            <div className="listing-item-image">
                                                <div className="hover-listing-image">
                                                    <div className="wrap-hover-listing">
                                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car23.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                <div className="overlay-limit">
                                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                    <p>2 more photos</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bullet-hover-listing">
                                                            <div className="bl-item active" />
                                                            <div className="bl-item" />
                                                            <div className="bl-item" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href="/#" className="icon-favorite">
                                                    <i className="icon-heart-1-1" />
                                                </Link>
                                                <span className="feature">Featured</span>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="listing-top-content">
                                                    <h6 className="title"><Link href="/#">Mercedez benz - c class</Link></h6>
                                                    <div className="review-wrap">
                                                        <div className="rating">
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                        </div>
                                                        <span className="review">( 2 Reviews )</span>
                                                    </div>
                                                    <div className="description">
                                                        <ul>
                                                            <li className="listing-information fuel">
                                                                <i className="icon-gasoline-pump-1" />
                                                                <div className="inner">
                                                                    <span>Fuel type</span>
                                                                    <p>Petrol</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information size-engine">
                                                                <i className="icon-Group1" />
                                                                <div className="inner">
                                                                    <span>Mileage</span>
                                                                    <p>90 k.m</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information transmission">
                                                                <i className="icon-gearbox-1" />
                                                                <div className="inner">
                                                                    <span>Transmission</span>
                                                                    <p>Auto</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <ul className="list-controller">
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-heart-1-1" />
                                                                <span>Favorite</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-shuffle-2-11" />
                                                                <span>Compare</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-price-wrap">
                                                    <div className="price-wrap">
                                                        <p className="price">$489</p>
                                                        <p className="price-sale">$399</p>
                                                    </div>
                                                    <div className="btn-read-more">
                                                        <Link className="more-link" href="/listing-details">
                                                            <span>View details</span>
                                                            <i className="icon-arrow-right2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-grid-item">
                                            <div className="listing-item-image">
                                                <div className="hover-listing-image">
                                                    <div className="wrap-hover-listing">
                                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car8.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                <div className="overlay-limit">
                                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                    <p>2 more photos</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bullet-hover-listing">
                                                            <div className="bl-item active" />
                                                            <div className="bl-item" />
                                                            <div className="bl-item" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href="/#" className="icon-favorite">
                                                    <i className="icon-heart-1-1" />
                                                </Link>
                                                <span className="feature">Featured</span>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="listing-top-content">
                                                    <h6 className="title"><Link href="/#">Mercedez benz - c class</Link></h6>
                                                    <div className="review-wrap">
                                                        <div className="rating">
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                        </div>
                                                        <span className="review">( 2 Reviews )</span>
                                                    </div>
                                                    <div className="description">
                                                        <ul>
                                                            <li className="listing-information fuel">
                                                                <i className="icon-gasoline-pump-1" />
                                                                <div className="inner">
                                                                    <span>Fuel type</span>
                                                                    <p>Petrol</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information size-engine">
                                                                <i className="icon-Group1" />
                                                                <div className="inner">
                                                                    <span>Mileage</span>
                                                                    <p>90 k.m</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information transmission">
                                                                <i className="icon-gearbox-1" />
                                                                <div className="inner">
                                                                    <span>Transmission</span>
                                                                    <p>Auto</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <ul className="list-controller">
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-heart-1-1" />
                                                                <span>Favorite</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-shuffle-2-11" />
                                                                <span>Compare</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-price-wrap">
                                                    <div className="price-wrap">
                                                        <p className="price">$489</p>
                                                        <p className="price-sale">$399</p>
                                                    </div>
                                                    <div className="btn-read-more">
                                                        <Link className="more-link" href="/listing-details">
                                                            <span>View details</span>
                                                            <i className="icon-arrow-right2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-grid-item">
                                            <div className="listing-item-image">
                                                <div className="hover-listing-image">
                                                    <div className="wrap-hover-listing">
                                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car17.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                <div className="overlay-limit">
                                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                    <p>2 more photos</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bullet-hover-listing">
                                                            <div className="bl-item active" />
                                                            <div className="bl-item" />
                                                            <div className="bl-item" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href="/#" className="icon-favorite">
                                                    <i className="icon-heart-1-1" />
                                                </Link>
                                                <span className="feature">Featured</span>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="listing-top-content">
                                                    <h6 className="title"><Link href="/#">Mercedez benz - c class</Link></h6>
                                                    <div className="review-wrap">
                                                        <div className="rating">
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                        </div>
                                                        <span className="review">( 2 Reviews )</span>
                                                    </div>
                                                    <div className="description">
                                                        <ul>
                                                            <li className="listing-information fuel">
                                                                <i className="icon-gasoline-pump-1" />
                                                                <div className="inner">
                                                                    <span>Fuel type</span>
                                                                    <p>Petrol</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information size-engine">
                                                                <i className="icon-Group1" />
                                                                <div className="inner">
                                                                    <span>Mileage</span>
                                                                    <p>90 k.m</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information transmission">
                                                                <i className="icon-gearbox-1" />
                                                                <div className="inner">
                                                                    <span>Transmission</span>
                                                                    <p>Auto</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <ul className="list-controller">
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-heart-1-1" />
                                                                <span>Favorite</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-shuffle-2-11" />
                                                                <span>Compare</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-price-wrap">
                                                    <div className="price-wrap">
                                                        <p className="price">$489</p>
                                                        <p className="price-sale">$399</p>
                                                    </div>
                                                    <div className="btn-read-more">
                                                        <Link className="more-link" href="/listing-details">
                                                            <span>View details</span>
                                                            <i className="icon-arrow-right2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-grid-item">
                                            <div className="listing-item-image">
                                                <div className="hover-listing-image">
                                                    <div className="wrap-hover-listing">
                                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car21.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                <div className="overlay-limit">
                                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                    <p>2 more photos</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bullet-hover-listing">
                                                            <div className="bl-item active" />
                                                            <div className="bl-item" />
                                                            <div className="bl-item" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href="/#" className="icon-favorite">
                                                    <i className="icon-heart-1-1" />
                                                </Link>
                                                <span className="feature">Featured</span>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="listing-top-content">
                                                    <h6 className="title"><Link href="/#">Mercedez benz - c class</Link></h6>
                                                    <div className="review-wrap">
                                                        <div className="rating">
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                        </div>
                                                        <span className="review">( 2 Reviews )</span>
                                                    </div>
                                                    <div className="description">
                                                        <ul>
                                                            <li className="listing-information fuel">
                                                                <i className="icon-gasoline-pump-1" />
                                                                <div className="inner">
                                                                    <span>Fuel type</span>
                                                                    <p>Petrol</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information size-engine">
                                                                <i className="icon-Group1" />
                                                                <div className="inner">
                                                                    <span>Mileage</span>
                                                                    <p>90 k.m</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information transmission">
                                                                <i className="icon-gearbox-1" />
                                                                <div className="inner">
                                                                    <span>Transmission</span>
                                                                    <p>Auto</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <ul className="list-controller">
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-heart-1-1" />
                                                                <span>Favorite</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-shuffle-2-11" />
                                                                <span>Compare</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-price-wrap">
                                                    <div className="price-wrap">
                                                        <p className="price">$489</p>
                                                        <p className="price-sale">$399</p>
                                                    </div>
                                                    <div className="btn-read-more">
                                                        <Link className="more-link" href="/listing-details">
                                                            <span>View details</span>
                                                            <i className="icon-arrow-right2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-grid-item">
                                            <div className="listing-item-image">
                                                <div className="hover-listing-image">
                                                    <div className="wrap-hover-listing">
                                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car9.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                <div className="overlay-limit">
                                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                    <p>2 more photos</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bullet-hover-listing">
                                                            <div className="bl-item active" />
                                                            <div className="bl-item" />
                                                            <div className="bl-item" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href="/#" className="icon-favorite">
                                                    <i className="icon-heart-1-1" />
                                                </Link>
                                                <span className="feature">Featured</span>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="listing-top-content">
                                                    <h6 className="title"><Link href="/#">Mercedez benz - c class</Link></h6>
                                                    <div className="review-wrap">
                                                        <div className="rating">
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                        </div>
                                                        <span className="review">( 2 Reviews )</span>
                                                    </div>
                                                    <div className="description">
                                                        <ul>
                                                            <li className="listing-information fuel">
                                                                <i className="icon-gasoline-pump-1" />
                                                                <div className="inner">
                                                                    <span>Fuel type</span>
                                                                    <p>Petrol</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information size-engine">
                                                                <i className="icon-Group1" />
                                                                <div className="inner">
                                                                    <span>Mileage</span>
                                                                    <p>90 k.m</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information transmission">
                                                                <i className="icon-gearbox-1" />
                                                                <div className="inner">
                                                                    <span>Transmission</span>
                                                                    <p>Auto</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <ul className="list-controller">
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-heart-1-1" />
                                                                <span>Favorite</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-shuffle-2-11" />
                                                                <span>Compare</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-price-wrap">
                                                    <div className="price-wrap">
                                                        <p className="price">$489</p>
                                                        <p className="price-sale">$399</p>
                                                    </div>
                                                    <div className="btn-read-more">
                                                        <Link className="more-link" href="/listing-details">
                                                            <span>View details</span>
                                                            <i className="icon-arrow-right2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-grid-item">
                                            <div className="listing-item-image">
                                                <div className="hover-listing-image">
                                                    <div className="wrap-hover-listing">
                                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car18.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                <div className="overlay-limit">
                                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                    <p>2 more photos</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bullet-hover-listing">
                                                            <div className="bl-item active" />
                                                            <div className="bl-item" />
                                                            <div className="bl-item" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href="/#" className="icon-favorite">
                                                    <i className="icon-heart-1-1" />
                                                </Link>
                                                <span className="feature">Featured</span>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="listing-top-content">
                                                    <h6 className="title"><Link href="/#">Mercedez benz - c class</Link></h6>
                                                    <div className="review-wrap">
                                                        <div className="rating">
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                        </div>
                                                        <span className="review">( 2 Reviews )</span>
                                                    </div>
                                                    <div className="description">
                                                        <ul>
                                                            <li className="listing-information fuel">
                                                                <i className="icon-gasoline-pump-1" />
                                                                <div className="inner">
                                                                    <span>Fuel type</span>
                                                                    <p>Petrol</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information size-engine">
                                                                <i className="icon-Group1" />
                                                                <div className="inner">
                                                                    <span>Mileage</span>
                                                                    <p>90 k.m</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information transmission">
                                                                <i className="icon-gearbox-1" />
                                                                <div className="inner">
                                                                    <span>Transmission</span>
                                                                    <p>Auto</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <ul className="list-controller">
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-heart-1-1" />
                                                                <span>Favorite</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-shuffle-2-11" />
                                                                <span>Compare</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-price-wrap">
                                                    <div className="price-wrap">
                                                        <p className="price">$489</p>
                                                        <p className="price-sale">$399</p>
                                                    </div>
                                                    <div className="btn-read-more">
                                                        <Link className="more-link" href="/listing-details">
                                                            <span>View details</span>
                                                            <i className="icon-arrow-right2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-grid-item">
                                            <div className="listing-item-image">
                                                <div className="hover-listing-image">
                                                    <div className="wrap-hover-listing">
                                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car21.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                            </div>
                                                        </div>
                                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                            <div className="images">
                                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                <div className="overlay-limit">
                                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                    <p>2 more photos</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bullet-hover-listing">
                                                            <div className="bl-item active" />
                                                            <div className="bl-item" />
                                                            <div className="bl-item" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href="/#" className="icon-favorite">
                                                    <i className="icon-heart-1-1" />
                                                </Link>
                                                <span className="feature">Featured</span>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="listing-top-content">
                                                    <h6 className="title"><Link href="/#">Mercedez benz - c class</Link></h6>
                                                    <div className="review-wrap">
                                                        <div className="rating">
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                        </div>
                                                        <span className="review">( 2 Reviews )</span>
                                                    </div>
                                                    <div className="description">
                                                        <ul>
                                                            <li className="listing-information fuel">
                                                                <i className="icon-gasoline-pump-1" />
                                                                <div className="inner">
                                                                    <span>Fuel type</span>
                                                                    <p>Petrol</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information size-engine">
                                                                <i className="icon-Group1" />
                                                                <div className="inner">
                                                                    <span>Mileage</span>
                                                                    <p>90 k.m</p>
                                                                </div>
                                                            </li>
                                                            <li className="listing-information transmission">
                                                                <i className="icon-gearbox-1" />
                                                                <div className="inner">
                                                                    <span>Transmission</span>
                                                                    <p>Auto</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <ul className="list-controller">
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-heart-1-1" />
                                                                <span>Favorite</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/#">
                                                                <i className="icon-shuffle-2-11" />
                                                                <span>Compare</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-price-wrap">
                                                    <div className="price-wrap">
                                                        <p className="price">$489</p>
                                                        <p className="price-sale">$399</p>
                                                    </div>
                                                    <div className="btn-read-more">
                                                        <Link className="more-link" href="/listing-details">
                                                            <span>View details</span>
                                                            <i className="icon-arrow-right2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-12">
                                    <div className="tf-dealer-location mb-60">
                                        <h4 className="title-dealer-details">Dealer Location</h4>
                                        <div className="map3">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={350} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div>
                                    </div>
                                    <div className="tf-dealer-location mb-60">
                                        <h4 className="title-dealer-details">Dealer Location</h4>
                                        <form action="/" method="post" className="form-contact-admin" aria-label="Contact form">
                                            <div className="group-form">
                                                <input className="admin-form" aria-required="true" aria-invalid="false" placeholder="Your Name" type="text" />
                                                <i className="icon-user-1-1" />
                                            </div>
                                            <div className="group-form">
                                                <input className="admin-form" aria-required="true" aria-invalid="false" placeholder="Email" type="email" />
                                                <i className="icon-Group2" />
                                            </div>
                                            <div className="group-form">
                                                <input className="admin-form" aria-invalid="false" placeholder="Enter Phone" type="text" />
                                                <i className="icon-Group-14" />
                                            </div>
                                            <div className="group-form">
                                                <textarea className="admin-form" aria-invalid="false" defaultValue={""} />
                                                <i className="icon-edit-1" />
                                            </div>
                                            <button type="submit"> Send Message </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout >
        </>
    )
}