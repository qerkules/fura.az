
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogSingle() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Single">
                <section className="flat-blog-list main-content">
                    <div className="themesflat-container w1320">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="post-wrap">
                                    <article className="entry format-standard-details">
                                        <img src="/assets/images/blog/4.jpg" alt="image" className="imge-blog-details mb-25" />
                                        <div className="entry-meta horizontal">
                                            <span className="author line"><i className=" icon-1" /><Link href="/#">02 Apr 2021
                                            </Link></span>
                                            <span className="comment line"><i className="icon-2" /><Link href="/#">Coments
                                                (03)</Link></span>
                                            <span className="time line"><i className="icon-uniE971" /><Link href="/#">3 min
                                                Read</Link></span>
                                        </div>
                                        <h2 className="entry-title mb-20">
                                            <Link href="/#">The whimsically named Egg Canvas brainchild</Link>
                                        </h2>
                                        <p className="mb-6">he whimsically named Egg Canvas is the brainchild of Erica Choi, a
                                            design director and photo
                                            grapher based in York. Why the name “Egg Canvas Erica was inspired by her Korean
                                            childhood
                                            nickname, which means egg, while “canvas” medium with wh art is created. “Egg
                                            Canvas
                                            therefore, is her life—creating beautiful things each day
                                            a blank canvas.
                                        </p>
                                        <p className="mb-30">We have covered many special events such as fireworks, fairs,
                                            parades, races, walks, awards ceremonies,
                                            fashion shows, sporting events, and even a memorial service.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate
                                            vestibulum rhon
                                            cus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat
                                            elit eu lacus.
                                            Vestibulum non justo fun consectetur, cursus ante, tincidunt sapien. Nulla quis
                                            diam sit amet turpis interd enim.
                                            Vivamus fauc ex sed nibh egestas elementum. Mauris et bibendum
                                        </p>
                                    </article>
                                    <blockquote className="text-box-blog">
                                        <p>Your time is limited, so don’t waste it living someone else’s life.
                                            Don’t be trapped by dogma – which is living with the results</p>
                                        <span>John Mehedii</span>
                                        <i className="icon-Group-21081" />
                                    </blockquote>
                                    <h3>Let our investment management team</h3>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <ul className="icon-list mt-12 ">
                                                <li className="flex align-center">
                                                    <i className="icon-Check" />
                                                    <p>Lorem Ipsum generators on the tend to repeat.</p>
                                                </li>
                                                <li className="flex align-center">
                                                    <i className="icon-Check" />
                                                    <p> If you are going to use a passage.</p>
                                                </li>
                                                <li className="flex align-center">
                                                    <i className="icon-Check" />
                                                    <p>Lorem Ipsum generators on the tend to repeat.</p>
                                                </li>
                                                <li className="flex align-center">
                                                    <i className="icon-Check" />
                                                    <p> Lorem Ipsum generators on the tend to repeat.</p>
                                                </li>
                                                <li className="flex align-center">
                                                    <i className="icon-Check" />
                                                    <p> If you are going to use a passage.</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-5 imgae-list">
                                            <img src="/assets/images/blog/details.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="quote t-al-center">“Amazing Beach Scenery &amp; Relaxing Ocean Sounds”</div>
                                    <p>We have covered many special events such as fireworks, fairs, parades, races, walks,
                                        awards
                                        ceremonies, fashion shows, sporting events, and even a memorial service.Lorem ipsum
                                        dolor
                                        sit amet, consectetur adipiscing elit. vestibulum rhoncus, dolor eget viverra
                                        pretium, dolor
                                        ellus aliquet nunc,
                                    </p>
                                    <div className="tag-wrap">
                                        <div className="tags-box">
                                            <div className="flex align-center ">
                                                <p>Tag:</p>
                                                <div className="flex fs-13 fw-6 tags_cloud_inner">
                                                    <Link href="/#" className="text-up active">Business</Link>
                                                    <Link href="/#" className="text-up">Design</Link>
                                                    <Link href="/#" className="text-up">apps</Link>
                                                    <Link href="/#" className="text-up">data</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="share-box flex align-center">
                                            <p>Share:</p>
                                            <ul className="social-icon icon-share">
                                                <li>
                                                    <Link href="/#"><i className="icon-6" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><i className="icon-4" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><i className="icon-5" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><i className="icon-7" /></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="wrap-review w-671">
                                        <h3 className="mb-36">Post Author</h3>
                                        <div className="comment-list">
                                            <ol>
                                                <li className="flex">
                                                    <div className="images">
                                                        <img src="/assets/images/avatar/avt-review.jpg" alt="images" />
                                                    </div>
                                                    <div className="content">
                                                        <div className="title-item flex align-center">
                                                            <h4>Rohan De Spond</h4>
                                                            <p>25 jan 2021</p>
                                                        </div>
                                                        <div className="start-wrap flex align-center">
                                                            <span>very awesome &amp; Comfort</span>
                                                            <div className="star flex">
                                                                <i className="icon-Vector3" />
                                                                <i className="icon-Vector3" />
                                                                <i className="icon-Vector3" />
                                                                <i className="icon-Vector3" />
                                                                <i className="icon-Vector3" />
                                                            </div>
                                                            <span className="number-revivew">5.0</span>
                                                        </div>
                                                        <p className="texts text-color-2">Lorem ipsum dolor sit amet,
                                                            consectetur adipiscing elit.Curabitur have is
                                                            covered many vulputate vestibulum Phasellus rhoncus, dolor eget
                                                            viverra
                                                            pretium dolor tellus aliquet nunc, vitae ultricies erat elit eu
                                                            lacus. Vestibul
                                                            non justo consectetur, cursus ante, tincidunt sapien. Nulla quis
                                                        </p>
                                                    </div>
                                                </li>
                                                <li className="flex">
                                                    <div className="images">
                                                        <img src="/assets/images/avatar/avt-review.jpg" alt="images" />
                                                    </div>
                                                    <div className="content">
                                                        <div className="title-item flex align-center">
                                                            <h4>Rohan De Spond</h4>
                                                            <p>25 jan 2021</p>
                                                        </div>
                                                        <div className="start-wrap flex align-center">
                                                            <span>very awesome &amp; Comfort</span>
                                                            <div className="star flex">
                                                                <i className="icon-Vector3" />
                                                                <i className="icon-Vector3" />
                                                                <i className="icon-Vector3" />
                                                                <i className="icon-Vector3" />
                                                                <i className="icon-Vector3" />
                                                            </div>
                                                            <span className="number-revivew">5.0</span>
                                                        </div>
                                                        <p className="texts text-color-2">Lorem ipsum dolor sit amet,
                                                            consectetur adipiscing elit.Curabitur have is
                                                            covered many vulputate vestibulum Phasellus rhoncus, dolor eget
                                                            viverra
                                                            pretium dolor tellus aliquet nunc, vitae ultricies erat elit eu
                                                            lacus. Vestibul
                                                            non justo consectetur, cursus ante, tincidunt sapien. Nulla quis
                                                        </p>
                                                    </div>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="wrap-contact w-671">
                                        <h3 className="mb-36">leave a Comment</h3>
                                        <div className="comments">
                                            <div className="respond-comment">
                                                <form method="post" id="contactform" className="comment-form form-submit" action="/" acceptCharset="utf-8" noValidate="novalidate">
                                                    <fieldset className="form-cm flex">
                                                        <i className="icon-user-1-1" />
                                                        <input type="text" className="my-input" name="text" placeholder="Your Name*" required />
                                                    </fieldset>
                                                    <fieldset className="form-cm flex">
                                                        <i className="icon-Group2" />
                                                        <input type="email" className="my-input" name="email" placeholder="Email Address*" required />
                                                    </fieldset>
                                                    <fieldset className="form-cm flex">
                                                        <i className="icon-edit-1" />
                                                        <textarea id="comment-message" name="message" rows={4} tabIndex={4} placeholder="Write review" aria-required="true" defaultValue={""} />
                                                    </fieldset>
                                                    <div className="flex check-box">
                                                        <div className="radio">
                                                            <input id="front-agree" type="checkbox" name="check" defaultValue="check" />
                                                            <label htmlFor="front-agree">I agree that my submitted data is being
                                                                collected and stored. *</label>
                                                        </div>
                                                    </div>
                                                    <button className="button-fr" name="submit" type="submit">
                                                        Leave A Comment
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="side-blog">
                                    <div className="inner-side-bar pl-30">
                                        <div className="widget widget-user t-al-center">
                                            <div className="content-user">
                                                <img src="/assets/images/avatar/avt-blog.jpg" alt="" />
                                                <h4>Rosalina D. Willaim</h4>
                                                <span>Blogger/Photographer</span>
                                                <p>he whimsically named Egg Canvas is the design director and photographer
                                                    in New York. Why the nam</p>
                                                <div className="social-blog-dt">
                                                    <ul>
                                                        <li>
                                                            <Link href="#"><i className="icon-6" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#"><i className="icon-4" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#"><i className="icon-5" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#"><i className="icon-7" /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget widget-search ">
                                            <h3 className="widget-title">
                                                search here
                                            </h3>
                                            <form role="search" method="get" className="search-form" action="/">
                                                <label>
                                                    <input type="search" name="s" className="s" placeholder="Search here..." />
                                                </label>
                                                <button type="submit" className="search-submit"><i className="icon-search-1" /></button>
                                            </form>
                                        </div>
                                        <div className="widget widget-recent">
                                            <h3 className="widget-title ">
                                                search here
                                            </h3>
                                            <div className="recent-post-list">
                                                <div className="list-recent">
                                                    <div className="recent-image">
                                                        <Link href="/#">
                                                            <img src="/assets/images/blog/1.jpg" alt="Image" />
                                                        </Link>
                                                    </div>
                                                    <div className="recent-info">
                                                        <div className="meta">
                                                            <i className="icon-1" />
                                                            <span>Jan 23,2022</span>
                                                        </div>
                                                        <h4 className="title">
                                                            <Link href="/#">Budget Issues Force The Our To Become</Link>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="list-recent">
                                                    <div className="recent-image">
                                                        <Link href="/#">
                                                            <img src="/assets/images/blog/2.jpg" alt="Image" />
                                                        </Link>
                                                    </div>
                                                    <div className="recent-info">
                                                        <div className="meta">
                                                            <i className="icon-1" />
                                                            <span>Jan 23,2022</span>
                                                        </div>
                                                        <h4 className="title">
                                                            <Link href="/#">The Best Products That Shape Fashion</Link>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="list-recent">
                                                    <div className="recent-image">
                                                        <Link href="/#">
                                                            <img src="/assets/images/blog/3.jpg" alt="Image" />
                                                        </Link>
                                                    </div>
                                                    <div className="recent-info">
                                                        <div className="meta">
                                                            <i className="icon-1" />
                                                            <span>Jan 23,2022</span>
                                                        </div>
                                                        <h4 className="title">
                                                            <Link href="/#">The Best Products That Shape Fashion</Link>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget widget-categories">
                                            <h3 className="widget-title ">
                                                Catagories
                                            </h3>
                                            <ul>
                                                <li>
                                                    <Link href="/#" className="category">
                                                        <span>Graphic Design</span>
                                                        <div className="number-category">03</div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#" className="category active">
                                                        <span>Web Development</span>
                                                        <div className="number-category">03</div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#" className="category">
                                                        <span>Digital Marketing</span>
                                                        <div className="number-category">03</div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#" className="category">
                                                        <span> UI/UX Development</span>
                                                        <div className="number-category">03</div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-tags">
                                            <h3 className="widget-title ">
                                                Catagories
                                            </h3>
                                            <div className="tags_cloud_inner">
                                                <Link href="/#">Design</Link>
                                                <Link href="/#">marketing</Link>
                                                <Link href="/#">search</Link>
                                                <Link href="/#">branding</Link>
                                                <Link href="/#">startup</Link>
                                                <Link href="/#">tech</Link>
                                                <Link href="/#" className="active">landing </Link>
                                                <Link href="/#">coding</Link>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}