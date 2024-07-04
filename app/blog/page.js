
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Blog() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Page">
                <div className="flat-blog-list main-content">
                    <div className="themesflat-container w1320">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="flat-blog">
                                    <article className="entry format-standard">
                                        <div className="feature-post">
                                            <div className="category">
                                                <ul className="flex">
                                                    <li>
                                                        <Link href="/#">Business</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src="/assets/images/blog/bl1.jpg" alt="image" />
                                        </div>{/* /.feature-post */}
                                        <div className="main-post">
                                            <div className="entry-meta">
                                                <span className="author line"><i className="icon-user" /><Link href="/#">Mehedii
                                                    .Ha</Link></span>
                                                <span className="comment line"><i className="icon-2" /><Link href="/#">Coments
                                                    (03)</Link></span>
                                                <span className="time line"><i className="icon-uniE971" /><Link href="/#">3 min
                                                    Read</Link></span>
                                            </div>
                                            <h2 className="entry-title">
                                                <Link href="/blog-single">The whimsically named Egg Canvas brainch </Link>
                                            </h2>
                                            <p className="entry-des">There are many variations of passages of Lorem Ipsum
                                                available, but majority have suffered
                                                teration in some form, by injected humour, or randomised words which don't
                                                look even slight
                                                believable. If you are going to use a passage of Lorem Ipsum.</p>
                                            <div className="btn-read-more">
                                                <Link className="more-link" href="/blog-single">
                                                    <span>Read MOre</span>
                                                    <i className="icon-Path-90148" />
                                                </Link>
                                            </div>
                                            {/* /.entry-meta */}
                                        </div>{/* /.main-post */}
                                    </article>
                                    <article className="entry format-standard">
                                        <div className="feature-post">
                                            <div className="category">
                                                <ul className="flex">
                                                    <li>
                                                        <Link href="/#">Business</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src="/assets/images/blog/bl2.jpg" alt="image" />
                                        </div>{/* /.feature-post */}
                                        <div className="main-post">
                                            <div className="entry-meta">
                                                <span className="author line"><i className="icon-user" /><Link href="/#">Mehedii
                                                    .Ha</Link></span>
                                                <span className="comment line"><i className="icon-2" /><Link href="/#">Coments
                                                    (03)</Link></span>
                                                <span className="time line"><i className="icon-uniE971" /><Link href="/#">3 min
                                                    Read</Link></span>
                                            </div>
                                            <h2 className="entry-title">
                                                <Link href="/blog-single">The whimsically named Egg Canvas brainch </Link>
                                            </h2>
                                            <p className="entry-des">There are many variations of passages of Lorem Ipsum
                                                available, but majority have suffered
                                                teration in some form, by injected humour, or randomised words which don't
                                                look even slight
                                                believable. If you are going to use a passage of Lorem Ipsum.</p>
                                            <div className="btn-read-more">
                                                <Link className="more-link" href="/blog-single">
                                                    <span>Read MOre</span>
                                                    <i className="icon-Path-90148" />
                                                </Link>
                                            </div>
                                            {/* /.entry-meta */}
                                        </div>{/* /.main-post */}
                                    </article>
                                    <article className="entry format-standard">
                                        <div className="feature-post">
                                            <div className="category">
                                                <ul className="flex">
                                                    <li>
                                                        <Link href="/#">Business</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src="/assets/images/blog/bl3.jpg" alt="image" />
                                        </div>{/* /.feature-post */}
                                        <div className="main-post">
                                            <div className="entry-meta">
                                                <span className="author line"><i className="icon-user" /><Link href="/#">Mehedii
                                                    .Ha</Link></span>
                                                <span className="comment line"><i className="icon-2" /><Link href="/#">Coments
                                                    (03)</Link></span>
                                                <span className="time line"><i className="icon-uniE971" /><Link href="/#">3 min
                                                    Read</Link></span>
                                            </div>
                                            <h2 className="entry-title">
                                                <Link href="/blog-single">The whimsically named Egg Canvas brainch </Link>
                                            </h2>
                                            <p className="entry-des">There are many variations of passages of Lorem Ipsum
                                                available, but majority have suffered
                                                teration in some form, by injected humour, or randomised words which don't
                                                look even slight
                                                believable. If you are going to use a passage of Lorem Ipsum.</p>
                                            <div className="btn-read-more">
                                                <Link className="more-link" href="/blog-single">
                                                    <span>Read MOre</span>
                                                    <i className="icon-Path-90148" />
                                                </Link>
                                            </div>
                                            {/* /.entry-meta */}
                                        </div>{/* /.main-post */}
                                    </article>
                                </div>
                                <div className="tf-pagination mt-60">
                                    <Link className="prev page-numbers" href="/#">
                                        <i className="icon-3" />
                                    </Link>
                                    <Link className="page-numbers" href="/#">1</Link>
                                    <Link className="page-numbers active" href="/#">2</Link>
                                    <Link className="page-numbers" href="/#">3</Link>
                                    <Link className="page-numbers" href="/#">...</Link>
                                    <Link className="next page-numbers" href="/#">
                                        <i className="icon--1" />
                                    </Link>
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
                </div>

            </Layout>
        </>
    )
}