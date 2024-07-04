
import LayoutAdmin from "@/components/layout/LayoutAdmin"
export default function MyInventory() {

    return (
        <>

            <LayoutAdmin headerStyle={1} footerStyle={1}>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="title-dashboard">My Inventory</h4>
                    </div>
                    <div className="col-md-6 sellec-list-db">
                        <div className="group-select">
                            <select className="nice-select">
                                <option data-value className="option selected">Recently Added</option>
                                <option data-value="Public" className="option">Public</option>
                                <option data-value="Pending" className="option">Pending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="show-dashboard">
                    <span className="btn-show-dashboard">
                        <i className="icon-th-list" />
                        Show Dashboard
                    </span>
                </div>
                <div className="table-listing-inventory">
                    <table className="listing-inventory">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="tfcl-listing-listing">
                                        <div className="features-images">
                                            <ul className="controller2">
                                                <li>
                                                    <a href="#" className="btn-action">
                                                        <i className="icon-heart-1-1" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-action">
                                                        <i className="icon-shuffle-2-11" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a className="thumb" title href="#">
                                                <img src="./assets/images/car-list/list1.jpg" alt title />
                                            </a>
                                            <ul className="controller">
                                                <li>
                                                    <a href="#" className="btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 9.49971V11.9997H2.5L9.87333 4.62638L7.37333 2.12638L0 9.49971ZM11.8067 2.69305C12.0667 2.43305 12.0667 2.01305 11.8067 1.75305L10.2467 0.193047C9.98667 -0.0669531 9.56667 -0.0669531 9.30667 0.193047L8.08667 1.41305L10.5867 3.91305L11.8067 2.69305Z" fill="white" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                        <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.9987 0.75C5.83203 0.75 2.2737 3.34167 0.832031 7C2.2737 10.6583 5.83203 13.25 9.9987 13.25C14.1654 13.25 17.7237 10.6583 19.1654 7C17.7237 3.34167 14.1654 0.75 9.9987 0.75ZM9.9987 11.1667C7.6987 11.1667 5.83203 9.3 5.83203 7C5.83203 4.7 7.6987 2.83333 9.9987 2.83333C12.2987 2.83333 14.1654 4.7 14.1654 7C14.1654 9.3 12.2987 11.1667 9.9987 11.1667ZM9.9987 4.5C8.61537 4.5 7.4987 5.61667 7.4987 7C7.4987 8.38333 8.61537 9.5 9.9987 9.5C11.382 9.5 12.4987 8.38333 12.4987 7C12.4987 5.61667 11.382 4.5 9.9987 4.5Z" fill="white" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                        <svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.5013 10.334H14.8346V12.0007H11.5013V10.334ZM11.5013 3.66732H17.3346V5.33398H11.5013V3.66732ZM11.5013 7.00065H16.5013V8.66732H11.5013V7.00065ZM1.5013 12.0007C1.5013 12.9173 2.2513 13.6673 3.16797 13.6673H8.16797C9.08463 13.6673 9.83463 12.9173 9.83463 12.0007V3.66732H1.5013V12.0007ZM10.668 1.16732H8.16797L7.33464 0.333984H4.0013L3.16797 1.16732H0.667969V2.83398H10.668V1.16732Z" fill="white" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="listing-summary">
                                            <div className="mypt-brand">Brand: Volvo</div>
                                            <h6 className="listing-title">
                                                <a title href="#">Chevrolet Suburban 2023</a>
                                            </h6>
                                            <p className="mypt-address">
                                                <i className="icon-map-1-1" />
                                                Boston, MA, United States north america
                                            </p>
                                            <div className="price">$27,000</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p className="status-publish"> Approved </p>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>Petrol</p>
                                        <b>Fuel Type</b>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>2017</p>
                                        <b>Reg Year</b>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>5000mi</p>
                                        <b>Mileage</b>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>Manual</p>
                                        <b>Transmission</b>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="tfcl-listing-listing">
                                        <div className="features-images">
                                            <ul className="controller2">
                                                <li>
                                                    <a href="#" className="btn-action">
                                                        <i className="icon-heart-1-1" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-action">
                                                        <i className="icon-shuffle-2-11" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a className="thumb" title href="#">
                                                <img src="./assets/images/car-list/list2.jpg" alt title />
                                            </a>
                                            <ul className="controller">
                                                <li>
                                                    <a href="#" className="btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 9.49971V11.9997H2.5L9.87333 4.62638L7.37333 2.12638L0 9.49971ZM11.8067 2.69305C12.0667 2.43305 12.0667 2.01305 11.8067 1.75305L10.2467 0.193047C9.98667 -0.0669531 9.56667 -0.0669531 9.30667 0.193047L8.08667 1.41305L10.5867 3.91305L11.8067 2.69305Z" fill="white" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                        <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.9987 0.75C5.83203 0.75 2.2737 3.34167 0.832031 7C2.2737 10.6583 5.83203 13.25 9.9987 13.25C14.1654 13.25 17.7237 10.6583 19.1654 7C17.7237 3.34167 14.1654 0.75 9.9987 0.75ZM9.9987 11.1667C7.6987 11.1667 5.83203 9.3 5.83203 7C5.83203 4.7 7.6987 2.83333 9.9987 2.83333C12.2987 2.83333 14.1654 4.7 14.1654 7C14.1654 9.3 12.2987 11.1667 9.9987 11.1667ZM9.9987 4.5C8.61537 4.5 7.4987 5.61667 7.4987 7C7.4987 8.38333 8.61537 9.5 9.9987 9.5C11.382 9.5 12.4987 8.38333 12.4987 7C12.4987 5.61667 11.382 4.5 9.9987 4.5Z" fill="white" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                        <svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.5013 10.334H14.8346V12.0007H11.5013V10.334ZM11.5013 3.66732H17.3346V5.33398H11.5013V3.66732ZM11.5013 7.00065H16.5013V8.66732H11.5013V7.00065ZM1.5013 12.0007C1.5013 12.9173 2.2513 13.6673 3.16797 13.6673H8.16797C9.08463 13.6673 9.83463 12.9173 9.83463 12.0007V3.66732H1.5013V12.0007ZM10.668 1.16732H8.16797L7.33464 0.333984H4.0013L3.16797 1.16732H0.667969V2.83398H10.668V1.16732Z" fill="white" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="listing-summary">
                                            <div className="mypt-brand">Brand: Volvo</div>
                                            <h6 className="listing-title">
                                                <a title href="#">Chevrolet Suburban 2023</a>
                                            </h6>
                                            <p className="mypt-address">
                                                <i className="icon-map-1-1" />
                                                Boston, MA, United States north america
                                            </p>
                                            <div className="price">$27,000</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p className="status-publish"> Approved </p>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>Petrol</p>
                                        <b>Fuel Type</b>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>2017</p>
                                        <b>Reg Year</b>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>5000mi</p>
                                        <b>Mileage</b>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>Manual</p>
                                        <b>Transmission</b>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="tfcl-listing-listing">
                                        <div className="features-images">
                                            <ul className="controller2">
                                                <li>
                                                    <a href="#" className="btn-action">
                                                        <i className="icon-heart-1-1" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-action">
                                                        <i className="icon-shuffle-2-11" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a className="thumb" title href="#">
                                                <img src="./assets/images/car-list/list3.jpg" alt title />
                                            </a>
                                            <ul className="controller">
                                                <li>
                                                    <a href="#" className="btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 9.49971V11.9997H2.5L9.87333 4.62638L7.37333 2.12638L0 9.49971ZM11.8067 2.69305C12.0667 2.43305 12.0667 2.01305 11.8067 1.75305L10.2467 0.193047C9.98667 -0.0669531 9.56667 -0.0669531 9.30667 0.193047L8.08667 1.41305L10.5867 3.91305L11.8067 2.69305Z" fill="white" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                        <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.9987 0.75C5.83203 0.75 2.2737 3.34167 0.832031 7C2.2737 10.6583 5.83203 13.25 9.9987 13.25C14.1654 13.25 17.7237 10.6583 19.1654 7C17.7237 3.34167 14.1654 0.75 9.9987 0.75ZM9.9987 11.1667C7.6987 11.1667 5.83203 9.3 5.83203 7C5.83203 4.7 7.6987 2.83333 9.9987 2.83333C12.2987 2.83333 14.1654 4.7 14.1654 7C14.1654 9.3 12.2987 11.1667 9.9987 11.1667ZM9.9987 4.5C8.61537 4.5 7.4987 5.61667 7.4987 7C7.4987 8.38333 8.61537 9.5 9.9987 9.5C11.382 9.5 12.4987 8.38333 12.4987 7C12.4987 5.61667 11.382 4.5 9.9987 4.5Z" fill="white" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                        <svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.5013 10.334H14.8346V12.0007H11.5013V10.334ZM11.5013 3.66732H17.3346V5.33398H11.5013V3.66732ZM11.5013 7.00065H16.5013V8.66732H11.5013V7.00065ZM1.5013 12.0007C1.5013 12.9173 2.2513 13.6673 3.16797 13.6673H8.16797C9.08463 13.6673 9.83463 12.9173 9.83463 12.0007V3.66732H1.5013V12.0007ZM10.668 1.16732H8.16797L7.33464 0.333984H4.0013L3.16797 1.16732H0.667969V2.83398H10.668V1.16732Z" fill="white" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="listing-summary">
                                            <div className="mypt-brand">Brand: Volvo</div>
                                            <h6 className="listing-title">
                                                <a title href="#">Chevrolet Suburban 2023</a>
                                            </h6>
                                            <p className="mypt-address">
                                                <i className="icon-map-1-1" />
                                                Boston, MA, United States north america
                                            </p>
                                            <div className="price">$27,000</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p className="status-publish"> Approved </p>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>Petrol</p>
                                        <b>Fuel Type</b>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>2017</p>
                                        <b>Reg Year</b>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>5000mi</p>
                                        <b>Mileage</b>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>Manual</p>
                                        <b>Transmission</b>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="tfcl-listing-listing">
                                        <div className="features-images">
                                            <ul className="controller2">
                                                <li>
                                                    <a href="#" className="btn-action">
                                                        <i className="icon-heart-1-1" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-action">
                                                        <i className="icon-shuffle-2-11" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a className="thumb" title href="#">
                                                <img src="./assets/images/car-list/list4.jpg" alt title />
                                            </a>
                                            <ul className="controller">
                                                <li>
                                                    <a href="#" className="btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 9.49971V11.9997H2.5L9.87333 4.62638L7.37333 2.12638L0 9.49971ZM11.8067 2.69305C12.0667 2.43305 12.0667 2.01305 11.8067 1.75305L10.2467 0.193047C9.98667 -0.0669531 9.56667 -0.0669531 9.30667 0.193047L8.08667 1.41305L10.5867 3.91305L11.8067 2.69305Z" fill="white" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                        <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.9987 0.75C5.83203 0.75 2.2737 3.34167 0.832031 7C2.2737 10.6583 5.83203 13.25 9.9987 13.25C14.1654 13.25 17.7237 10.6583 19.1654 7C17.7237 3.34167 14.1654 0.75 9.9987 0.75ZM9.9987 11.1667C7.6987 11.1667 5.83203 9.3 5.83203 7C5.83203 4.7 7.6987 2.83333 9.9987 2.83333C12.2987 2.83333 14.1654 4.7 14.1654 7C14.1654 9.3 12.2987 11.1667 9.9987 11.1667ZM9.9987 4.5C8.61537 4.5 7.4987 5.61667 7.4987 7C7.4987 8.38333 8.61537 9.5 9.9987 9.5C11.382 9.5 12.4987 8.38333 12.4987 7C12.4987 5.61667 11.382 4.5 9.9987 4.5Z" fill="white" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                        <svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.5013 10.334H14.8346V12.0007H11.5013V10.334ZM11.5013 3.66732H17.3346V5.33398H11.5013V3.66732ZM11.5013 7.00065H16.5013V8.66732H11.5013V7.00065ZM1.5013 12.0007C1.5013 12.9173 2.2513 13.6673 3.16797 13.6673H8.16797C9.08463 13.6673 9.83463 12.9173 9.83463 12.0007V3.66732H1.5013V12.0007ZM10.668 1.16732H8.16797L7.33464 0.333984H4.0013L3.16797 1.16732H0.667969V2.83398H10.668V1.16732Z" fill="white" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="listing-summary">
                                            <div className="mypt-brand">Brand: Volvo</div>
                                            <h6 className="listing-title">
                                                <a title href="#">Chevrolet Suburban 2023</a>
                                            </h6>
                                            <p className="mypt-address">
                                                <i className="icon-map-1-1" />
                                                Boston, MA, United States north america
                                            </p>
                                            <div className="price">$27,000</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p className="status-publish"> Approved </p>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>Petrol</p>
                                        <b>Fuel Type</b>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>2017</p>
                                        <b>Reg Year</b>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>5000mi</p>
                                        <b>Mileage</b>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-wrapper">
                                        <p>Manual</p>
                                        <b>Transmission</b>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="tf-pagination mt-60">
                        <a className="prev page-numbers" href="#">
                            <i className="icon-3" />
                        </a>
                        <a className="page-numbers" href="#">1</a>
                        <a className="page-numbers active" href="#">2</a>
                        <a className="page-numbers" href="#">3</a>
                        <a className="page-numbers" href="#">...</a>
                        <a className="next page-numbers" href="#">
                            <i className="icon--1" />
                        </a>
                    </div>
                </div>
            </LayoutAdmin>
        </>
    )
}