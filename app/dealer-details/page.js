
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function DealerDetails() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}  breadcrumbTitle="Dealer Profile">
                <div className="widget-dealer-single">
                    <div className="themesflat-container">
                        <div className="dealer-single">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="wrap-property-car flex dealer-single-info-top">
                                        <div className="info-top-left">
                                            <span className="sub-title">Mini Cooper 3 Similar</span>
                                            <h2 className="dealer-heading">West Covins Motors</h2>
                                            <div className="dealer-address">
                                                <i className="icon-map-1-1" />
                                                <span>Ben 'N Nick's Bar Grill, 5612 College Ave, Oakland, California </span>
                                            </div>
                                        </div>
                                        <div className="info-top-right">
                                            <img src="./assets/images/page/logo-vina.png" alt="logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-60">
                                <div className="col-xl-9 col-md-12">
                                    <div className="dealer-author">
                                        <div className="dealer-author-avatar">
                                            <img src="./assets/images/page/dealer-detail.jpg" alt="Image" title="Image" />
                                        </div>
                                        <div className="dealer-author-content">
                                            <div className="dealer-author-item">
                                                <div className="dealer-author-icon">
                                                    <i className="icon-Group2" />
                                                </div>
                                                <div className="dealer-content-info-box">
                                                    <p className="label-dealer-content">Email Address</p>
                                                    <Link className="dealer-title" href="/mailto:contact@motorx.com">
                                                        contact@motorx.com </Link>
                                                </div>
                                            </div>
                                            <div className="dealer-author-item">
                                                <div className="dealer-author-icon">
                                                    <i className="icon-Group-14" />
                                                </div>
                                                <div className="dealer-content-info-box">
                                                    <p className="label-dealer-content">Phone number</p>
                                                    <span className="dealer-title">302 456 9854 </span>
                                                </div>
                                            </div>
                                            <div className="dealer-author-item">
                                                <div className="dealer-author-icon">
                                                    <i className="icon-map-1-1" />
                                                </div>
                                                <div className="dealer-content-info-box">
                                                    <p className="label-dealer-content">Website</p>
                                                    <Link className="dealer-title" href="/#" target="_blank">www.motorx.com </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <div className="listing-list-car-grid ">
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
                                                    <h6 className="title"><Link href="/#" /><Link href="/#">Mercedez benz - c
                                                        class</Link></h6>
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
                            </div>
                            <div className="col-xl-3 col-md-12">
                                <div className="tf-user-dealer mb-60">
                                    <img src="./assets/images/avatar/avt-review.jpg" alt="" />
                                    <div className="name">Rosalina D. Willaim</div>
                                    <p className="job">Webcost car Dealer</p>
                                    <div className="review d-flex">
                                        <div className="start">
                                            <i className="icon-Vector3" />
                                            <i className="icon-Vector3" />
                                            <i className="icon-Vector3" />
                                            <i className="icon-Vector3" />
                                            <i className="icon-Vector3" />
                                        </div>
                                        <p>(1 Review)</p>
                                    </div>
                                    <p className="des">he whimsically named Egg Canvas is the design director and
                                        photographer New York. Why the nam</p>
                                    <div className="social-blog-dt">
                                        <ul>
                                            <li>
                                                <Link href="/#">
                                                    <i className="icon-6" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <i className="icon-4" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <i className="icon-5" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <i className="icon-7" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-main">
                                        <Link href="/#" className="button_main_inner">
                                            <span>Contact With Delear</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="tf-dealer-location mb-60">
                                    <h4 className="title-dealer-details">Dealer Location</h4>
                                    <div className="map3">
                                        <div id="map3" />
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
                        <div className="row mb-60">
                            <div className="col-md-12 dealer-customer-review">
                                <div className="wrap-car-review wrap-style">
                                    <h4 className="title-dealer-details">Customer Review</h4>
                                    <div className="listing-customer-review">
                                        <div id="overall-rating-progress" className="progress">
                                            <svg className="progress-circle" width={187} height={186} viewBox="0 0 187 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M186 93C186 144.362 144.362 186 93 186C41.6375 186 0 144.362 0 93C0 41.6375 41.6375 0 93 0C144.362 0 186 41.6375 186 93ZM7.84935 93C7.84935 140.027 45.9726 178.151 93 178.151C140.027 178.151 178.151 140.027 178.151 93C178.151 45.9726 140.027 7.84935 93 7.84935C45.9726 7.84935 7.84935 45.9726 7.84935 93Z" fill="#F6F6F6" />
                                                <path d="M182.747 65.2706C189.087 85.458 188.32 107.192 180.572 126.887C172.824 146.582 158.559 163.063 140.128 173.61C121.698 184.157 100.204 188.141 79.1915 184.905C58.1789 181.668 38.903 171.404 24.5432 155.807C10.1834 140.209 1.59749 120.209 0.201677 99.105C-1.19414 78.0013 4.68351 57.0547 16.8651 39.7202C29.0468 22.3857 46.8047 9.69872 67.2099 3.75201C87.6151 -2.1947 109.449 -1.04598 129.109 7.0087L126.104 14.2665C108.103 6.89165 88.1118 5.83988 69.4288 11.2847C50.7459 16.7295 34.4867 28.3456 23.3332 44.2171C12.1798 60.0885 6.7982 79.2672 8.0762 98.5897C9.35421 117.912 17.2155 136.224 30.3633 150.506C43.5111 164.787 61.1601 174.184 80.3992 177.148C99.6382 180.111 119.318 176.463 136.193 166.806C153.068 157.149 166.129 142.06 173.223 124.027C180.317 105.994 181.019 86.0945 175.214 67.611L182.747 65.2706Z" fill="#D01818" />
                                            </svg>
                                            <div className="progress-text" data-progress={0}>
                                                <p>Overall Ratings</p>
                                                <h3 className="overall-rating-number">4.4</h3>
                                                <p>Out Of 5</p>
                                            </div>
                                        </div>
                                        <div className="overall-rating-detail">
                                            <div className="overall-rating-detail-item">
                                                <label className="overall-rating-detail-label">Comfort</label>
                                                <div className="content">
                                                    <div className="rating-info">
                                                        <span>Rating 4.8 </span>
                                                        <div className="overall-rating-detail-star">
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <span>5.0</span>
                                                        </div>
                                                    </div>
                                                    <div className=" bg-primary overall-rating-detail-progress" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="overall-rating-detail-item">
                                                <label className="overall-rating-detail-label">Interior Design</label>
                                                <div className="content">
                                                    <div className="rating-info">
                                                        <span>Rating 4.8 </span>
                                                        <div className="overall-rating-detail-star">
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <span>5.0</span>
                                                        </div>
                                                    </div>
                                                    <div className=" bg-primary overall-rating-detail-progress" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="overall-rating-detail-item">
                                                <label className="overall-rating-detail-label">Performance</label>
                                                <div className="content">
                                                    <div className="rating-info">
                                                        <span>Rating 4.8 </span>
                                                        <div className="overall-rating-detail-star">
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <span>5.0</span>
                                                        </div>
                                                    </div>
                                                    <div className=" bg-primary overall-rating-detail-progress" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="overall-rating-detail-item">
                                                <label className="overall-rating-detail-label">Speed</label>
                                                <div className="content">
                                                    <div className="rating-info">
                                                        <span>Rating 4.8 </span>
                                                        <div className="overall-rating-detail-star">
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <i className="icon-Vector3" />
                                                            <span>5.0</span>
                                                        </div>
                                                    </div>
                                                    <div className=" bg-primary overall-rating-detail-progress" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="wrap-car-leave-a-reply">
                                    <h4 className="title-dealer-details">Write Review</h4>
                                    <form action="/" id="leave-a-reply">
                                        <div className="rating-wrap">
                                            <div className="rating-box">
                                                <label> Comfort </label>
                                                <div id="rating_comfort_service" className="star-rating-review">
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                </div>
                                            </div>
                                            <div className="rating-box">
                                                <label> Performance </label>
                                                <div id="rating_performance" className="star-rating-review">
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                </div>
                                            </div>
                                            <div className="rating-box">
                                                <label>
                                                    Interior Design </label>
                                                <div id="rating_interior_design" className="star-rating-review">
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                </div>
                                            </div>
                                            <div className="rating-box">
                                                <label> Speed </label>
                                                <div id="rating_speed" className="star-rating-review">
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                    <i className="icon-Vector3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-comment">
                                            <div className="d-flex">
                                                <fieldset className="input-post-comment">
                                                    <input type="text" placeholder="First name" />
                                                    <i className="icon-user-1-1" />
                                                </fieldset>
                                                <fieldset className="input-post-comment">
                                                    <input type="email" placeholder="Email Address" />
                                                    <i className="icon-Group2" />
                                                </fieldset>
                                            </div>
                                            <fieldset className="input-post-comment">
                                                <textarea className="write-post-comment" defaultValue={"Write Review"} />
                                                <i className="icon-edit-1" />
                                            </fieldset>
                                            <fieldset className="input-post-comment">
                                                <div className="radio">
                                                    <input id="check-comment" type="checkbox" name="check" defaultValue="check" />
                                                    <label htmlFor="check-comment">I agree to Terms &amp; Conditions, Refund
                                                        Policy and Privacy Policy of Fabrilife.</label>
                                                </div>
                                            </fieldset>
                                            <fieldset>
                                                <button type="submit" className="button-post-comment">Post Comment</button>
                                            </fieldset>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout >
        </>
    )
}