
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function AddCart() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="tf-video-car-banner">
                        <div className="themesflat-container full">
                            <div className="widget-video-car ">
                                <Link href="/https://www.youtube.com/watch?v=6u_j4d9D4Rc" className="icon-video">
                                    <i className="icon-Polygon-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* video */}
                    <div className="tf-widget-add-cart">
                        <div className="themesflat-container">
                            <div className="tf-add-cart">
                                <form action="/" id="submit-add-cart" className="form-add-cart needs-validation" noValidate>
                                    <fieldset id="information" className="mb-60">
                                        <div className="inner-title mb-30">
                                            <span className="sub-title">Add Your Car Today</span>
                                            <h3 className="title">Add Your car</h3>
                                        </div>
                                        <div className="tfad-listing-title mb-30">
                                            <div className="form-group">
                                                <label>Listing Title (*)</label>
                                                <input type="text" id="listing-title" className="form-control" name="listing-title" placeholder="Enter title here" />
                                            </div>
                                        </div>
                                        <div className="listing-fields-grid mb-30">
                                            <div className="form-group">
                                                <label>Listing Title (*)</label>
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">BMV</option>
                                                        <option data-value="Audi" className="option">Audi</option>
                                                        <option data-value="Bentley" className="option">Bentley</option>
                                                        <option data-value="Acura" className="option">Acura</option>
                                                        <option data-value="Ferrari" className="option">Ferrari</option>
                                                        <option data-value="Ford" className="option">Ford</option>
                                                        <option data-value="Lexus" className="option">Lexus</option>
                                                        <option data-value="Maybach" className="option">Maybach</option>
                                                        <option data-value="Mercedes" className="option">Mercedes</option>
                                                        <option data-value="Porsche" className="option">Porsche</option>
                                                        <option data-value="Toyota" className="option">Toyota</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label> Model (*)</label>
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">X5</option>
                                                        <option data-value="3 Series" className="option">3 Series</option>
                                                        <option data-value="718 Boxster T" className="option">718 Boxster T</option>
                                                        <option data-value="718 Cayman" className="option">718 Cayman</option>
                                                        <option data-value="911 Carrera 4" className="option">911 Carrera 4</option>
                                                        <option data-value="A4" className="option">A4</option>
                                                        <option data-value="Bentayga" className="option">Bentayga</option>
                                                        <option data-value="Bentayga Azure" className="option">Bentayga Azure</option>
                                                        <option data-value="Bentayga Technology" className="option">Bentayga
                                                            Technology</option>
                                                        <option data-value="C Class" className="option">C Class</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Type (*)</label>
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">Crossover</option>
                                                        <option data-value="Crossover" className="option">Compact</option>
                                                        <option data-value="Convertible" className="option">Convertible</option>
                                                        <option data-value="Crossover" className="option">Crossover</option>
                                                        <option data-value="Hatchback" className="option">Hatchback</option>
                                                        <option data-value="Sedan" className="option">Sedan</option>
                                                        <option data-value="SUV" className="option">SUV</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Years (*)</label>
                                                <div className="group-select">
                                                    <input type="tel" id="year" defaultValue={2022} required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Condition</label>
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">Used</option>
                                                        <option data-value="New" className="option">New</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Stock Number</label>
                                                <div className="group-select">
                                                    <input type="tel" id="stock-number" placeholder="Enter Number" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>VIN Number</label>
                                                <div className="group-select">
                                                    <input type="tel" id="vin-number" placeholder="Enter VIN" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Mileage</label>
                                                <div className="group-select">
                                                    <input type="number" id="mileage" placeholder="Enter Mileage" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Transmission</label>
                                                <div className="group-select">


                                                    <select className="nice-select">
                                                        <option data-value className="option selected">Manual Transmission</option>
                                                        <option data-value="Auto" className="option">Auto</option>
                                                        <option data-value="CVT" className="option">CVT</option>
                                                        <option data-value="DCT" className="option">DCT</option>
                                                        <option data-value="MT" className="option">MT</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Driver Type</label>
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">FWD</option>
                                                        <option data-value="2WD" className="option">2WD</option>
                                                        <option data-value="3WD" className="option">3WD</option>
                                                        <option data-value="4WD" className="option">4WD</option>
                                                        <option data-value="WD" className="option">WD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Engine Size</label>
                                                <div className="group-select">
                                                    <input type="text" id="engine-size" placeholder="Enter Engine" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Cylinders</label>
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">1</option>
                                                        <option data-value={2} className="option">2</option>
                                                        <option data-value={3} className="option">3</option>
                                                        <option data-value={4} className="option">4</option>
                                                        <option data-value={5} className="option">5</option>
                                                        <option data-value={6} className="option">6</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Fuel Type</label>
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">Petrol</option>
                                                        <option data-value="Diesel" className="option">Diesel</option>
                                                        <option data-value="Electric" className="option">Electric</option>
                                                        <option data-value="Gasoline" className="option">Gasoline</option>
                                                        <option data-value="Hybrid" className="option">Hybrid</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Doors</label>
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">4</option>
                                                        <option data-value={2} className="option">2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Color</label>
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">Black</option>
                                                        <option data-value="red" className="option">Red</option>
                                                        <option data-value="White" className="option">White</option>
                                                        <option data-value="Green" className="option">Green</option>
                                                        <option data-value="Yellow" className="option">Yellow</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Seats</label>
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">1</option>
                                                        <option data-value={2} className="option">2</option>
                                                        <option data-value={3} className="option">3</option>
                                                        <option data-value={4} className="option">4</option>
                                                        <option data-value={5} className="option">5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>City MPG</label>
                                                <div className="group-select">
                                                    <input type="text" id="city-mpg" placeholder={18} required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Highway MPG</label>
                                                <div className="group-select">
                                                    <input type="text" id="highway-mpg" placeholder={28} required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="description-fields mb-30">
                                            <div className="form-group">
                                                <label>Description</label>
                                                <div className="group-select">
                                                    <textarea id="description" name="Description" defaultValue={"                                            "} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-fields-grid mb-30">
                                            <div className="form-group">
                                                <label>Request Price Label</label>
                                                <div className="group-select">
                                                    <div className="radio">
                                                        <input id="first" type="radio" name="numbers" defaultValue="first" />
                                                        <label htmlFor="first">Negotiable</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label> Regular Price *</label>
                                                <div className="group-select">
                                                    <input type="number" id="regular-price" placeholder="Enter Sale Price" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Sale Price</label>
                                                <div className="group-select">
                                                    <input type="number" id="sale-price" placeholder="Enter Sale Price" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Request Price Label</label>
                                                <div className="group-select">
                                                    <input type="number" id="requesr-price" placeholder="Enter Sale Price" required />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset id="amenities" className="mb-60">
                                        <div className="inner-title mb-30">
                                            <span className="sub-title">Add Your Car Today</span>
                                            <h3 className="title">Select Listing Features</h3>
                                        </div>
                                        <div className="tfad-listing-feature">
                                            <div className="listing-feature-item">
                                                <div className="form-group">
                                                    <label>Request Price Label</label>
                                                    <div className="group-select">
                                                        <div className="radio">
                                                            <input id="front" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="front">A/C: Front</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="rear" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="rear">A/C: Rear</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="camera" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="camera">Backup Camera</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="control" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="control">Cruise Control</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="navigation" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="navigation">Navigation</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="locks" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="locks">Power Locks</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="listing-feature-item">
                                                <div className="form-group">
                                                    <label>Entertainment</label>
                                                    <div className="group-select">
                                                        <div className="radio">
                                                            <input id="stereo" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="stereo">AM/FM Stereo</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="cd" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="cd">CD Player</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="dvd" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="dvd">DVD System</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="mp3" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="mp3">MP3 Player</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="portable" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="portable">Portable Audio</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="premium" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="premium">Premium Audio</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="listing-feature-item">
                                                <div className="form-group">
                                                    <label>Safety</label>
                                                    <div className="group-select">
                                                        <div className="radio">
                                                            <input id="driver" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="driver">Airbag: Driver</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="passenger" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="passenger">Airbag: Passenger</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="brakes" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="brakes">Antilock Brakes</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="bluetooth" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="bluetooth">Bluetooth</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="hands-free" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="hands-free">Hands-Free</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="fog-lights" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="fog-lights">Fog Lights</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="listing-feature-item">
                                                <div className="form-group">
                                                    <label>Windows</label>
                                                    <div className="group-select">
                                                        <div className="radio">
                                                            <input id="power" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="power">Power Windows</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="defroster" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="defroster">Windows Defroster</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="rear-window" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="rear-window">Rear Window</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="wiper-tinted-glass" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="wiper-tinted-glass">Wiper Tinted Glass</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="sunroof" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="sunroof">Sunroof</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="tow-package" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="tow-package">Tow Package</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="listing-feature-item">
                                                <div className="form-group">
                                                    <label>Seats</label>
                                                    <div className="group-select">
                                                        <div className="radio">
                                                            <input id="bucket-seats" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="bucket-seats">Bucket Seats</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="heated-seats" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="heated-seats">Heated Seats</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="leather-interior" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="leather-interior">Leather Interior</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="memory-seats" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="memory-seats">Memory Seats</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="power-seats" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="power-seats">Power Seats</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="third-row-seats" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="third-row-seats">Third Row Seats</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset id="location" className="pd-bg mb-60">
                                        <div className="inner-title mb-30">
                                            <span className="sub-title">Add Your Car Today</span>
                                            <h3 className="title">Add Your location</h3>
                                        </div>
                                        <p className="location mb-20">*Note: Just type the address into the search bar in the
                                            upper-right corner of the map below, then press the Enter key.</p>
                                        <div className="form-group">
                                            <label>Full Address</label>
                                            <div className="group-select">
                                                <input type="text" id="address" placeholder="Enter Full Address" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Map Location</label>
                                            <div className="group-map-address-field">
                                                <input className="address-searching " id="address-searching" type="text" aria-invalid="false" />
                                                <button type="button" className="button-location">
                                                    <i className="icon-search-1" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="map2">
                                                <div id="map2" />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset id="upload-media" className="pd-bg">
                                        <div className="inner-title mb-30">
                                            <span className="sub-title">Media</span>
                                            <h3 className="title">Upload Your Photos</h3>
                                        </div>
                                        <div className="upload-image-add-car">
                                            <div className="upload-image">
                                                <label htmlFor="photoLoad" className="uploadLabel">
                                                    <i className="icon-Group4" />
                                                    <span>Add a Photo</span>
                                                    <input type="file" id="photoLoad" className="photoLoad" accept="image/*" />
                                                </label>
                                            </div>
                                            <div className="upload-image">
                                                <label htmlFor="photoLoad1" className="uploadLabel">
                                                    <i className="icon-Group4" />
                                                    <span>Add a Photo</span>
                                                    <input type="file" id="photoLoad1" className="photoLoad" accept="image/*" />
                                                </label>
                                            </div>
                                            <div className="upload-image">
                                                <label htmlFor="photoLoad2" className="uploadLabel">
                                                    <i className="icon-Group4" />
                                                    <span>Add a Photo</span>
                                                    <input type="file" id="photoLoad2" className="photoLoad" accept="image/*" />
                                                </label>
                                            </div>
                                            <div className="upload-image">
                                                <label htmlFor="photoLoad3" className="uploadLabel">
                                                    <i className="icon-Group4" />
                                                    <span>Add a Photo</span>
                                                    <input type="file" id="photoLoad3" className="photoLoad" accept="image/*" />
                                                </label>
                                            </div>
                                            <div className="upload-image">
                                                <label htmlFor="photoLoad4" className="uploadLabel">
                                                    <i className="icon-Group4" />
                                                    <span>Add a Photo</span>
                                                    <input type="file" id="photoLoad4" className="photoLoad" accept="image/*" />
                                                </label>
                                            </div>
                                        </div>
                                        <p className="one-photo text-red">*You must upload at least one photo</p>
                                    </fieldset>
                                    <fieldset id="video" className="pd-bg">
                                        <div className="inner-title mb-30">
                                            <h3 className="title">Add Video</h3>
                                        </div>
                                        <div className="form-group">
                                            <div className="group-video">
                                                <input type="url" id="link-video" placeholder="Www.youtube.com/mehedii mohammad" required />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset id="file-attachment" className="pd-bg">
                                        <div className="inner-title mb-30">
                                            <h3 className="title">Attachment / VIN Report</h3>
                                        </div>
                                        <div className="upload-image">
                                            <label htmlFor="photoLoad-vin" className="uploadLabel">
                                                <i className="icon-Group4" />
                                                <span>Add a Photo</span>
                                                <input type="file" id="photoLoad-vin" className="photoLoad" accept="image/*" />
                                            </label>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <button type="submit" className="button-save-listing">Add
                                            Car</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}