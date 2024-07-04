
import Link from 'next/link'

export default function BlogV2({ h4 }) {
    return (
        <>
            <div className={`${h4 ? "widget-blog-v2-h4 " : "widget-blog-v2"}  main-content`}>
                <div className="themesflat-container">
                    <div className="blog-v2">
                        <div className="heading-section t-al-center mb-46">
                            <span className="sub-title mb-6 wow fadeInUp">{h4 ? "FIND YOUR CAR BY CAR BRAND" : "20% OFF FOR ONLINE BOOKing"}</span>
                            <h2 className="title wow fadeInUp">Latest news &amp; article {h4 && "From The Blog"}</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <article className="widget-blog bl-v2">
                                    <div className="feature-post">
                                        <div className="category">
                                            <ul className="flex">
                                                <li>
                                                    <Link href="/#"><i className="icon-Group-12" />Business</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link href="/blog-single">
                                            <img src="/assets/images/blog/wg4.jpg" alt="image" />
                                        </Link>
                                    </div>{/* /.feature-post */}
                                    <div className="main-post">
                                        <div className="entry-meta flex">
                                            <span className="author">
                                                <i className="icon-Group-13" />
                                                <Link href="/#">Mehedii .H</Link>
                                            </span>
                                            <span className="comment">
                                                <i className="icon-2" />
                                                <Link href="/#">Comments (03)</Link>
                                            </span>
                                        </div>
                                        <div className="line" />
                                        <h2 className="entry-title">
                                            <Link href="/blog-single">How the Maruti Invicto is a
                                                lesson in brand buil...</Link>
                                        </h2>
                                        <div className="btn-read-more">
                                            <Link className="more-link" href="/blog-single">
                                                <span>Read More</span>
                                                <i className="icon-Group-21" />
                                            </Link>
                                        </div>
                                        {/* /.entry-meta */}
                                    </div>{/* /.main-post */}
                                </article>
                            </div>
                            <div className="col-md-4">
                                <article className="widget-blog bl-v2">
                                    <div className="feature-post">
                                        <div className="category">
                                            <ul className="flex">
                                                <li>
                                                    <Link href="/#"><i className="icon-Group-12" />Business</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link href="/blog-single">
                                            <img src="/assets/images/blog/wg5.jpg" alt="image" />
                                        </Link>
                                    </div>{/* /.feature-post */}
                                    <div className="main-post">
                                        <div className="entry-meta flex">
                                            <span className="author">
                                                <i className="icon-Group-13" />
                                                <Link href="/#">Mehedii .H</Link>
                                            </span>
                                            <span className="comment">
                                                <i className="icon-2" />
                                                <Link href="/#">Comments (03)</Link>
                                            </span>
                                        </div>
                                        <div className="line" />
                                        <h2 className="entry-title">
                                            <Link href="/blog-single">How the Maruti Invicto is a
                                                lesson in brand buil...</Link>
                                        </h2>
                                        <div className="btn-read-more">
                                            <Link className="more-link" href="/blog-single">
                                                <span>Read More</span>
                                                <i className="icon-Group-21" />
                                            </Link>
                                        </div>
                                        {/* /.entry-meta */}
                                    </div>{/* /.main-post */}
                                </article>
                            </div>
                            <div className="col-md-4">
                                <article className="widget-blog bl-v2">
                                    <div className="feature-post">
                                        <div className="category">
                                            <ul className="flex">
                                                <li>
                                                    <Link href="/#"><i className="icon-Group-12" />Business</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link href="/blog-single">
                                            <img src="/assets/images/blog/wg6.jpg" alt="image" />
                                        </Link>
                                    </div>{/* /.feature-post */}
                                    <div className="main-post">
                                        <div className="entry-meta flex">
                                            <span className="author">
                                                <i className="icon-Group-13" />
                                                <Link href="/#">Mehedii .H</Link>
                                            </span>
                                            <span className="comment">
                                                <i className="icon-2" />
                                                <Link href="/#">Comments (03)</Link>
                                            </span>
                                        </div>
                                        <div className="line" />
                                        <h2 className="entry-title">
                                            <Link href="/blog-single">How the Maruti Invicto is a
                                                lesson in brand buil...</Link>
                                        </h2>
                                        <div className="btn-read-more">
                                            <Link className="more-link" href="/blog-single">
                                                <span>Read More</span>
                                                <i className="icon-Group-21" />
                                            </Link>
                                        </div>
                                        {/* /.entry-meta */}
                                    </div>{/* /.main-post */}
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
