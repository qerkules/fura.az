
import Link from 'next/link'

export default function CarBlogV1() {
    return (
        <>
            <div className="themesflat-container main-content">
                <div className="row">
                    <div className="col-md-4">
                        <article className="widget-blog bl-v1">
                            <div className="feature-post">
                                <div className="category">
                                    <ul className="flex">
                                        <li>
                                            <Link href="/#"><i className="icon-Group-12" />Business</Link>
                                        </li>
                                    </ul>
                                </div>
                                <Link href="/blog-single">
                                    <img src="/assets/images/blog/wg1.jpg" alt="image" />
                                </Link>
                            </div>{/* /.feature-post */}
                            <div className="main-post">
                                <div className="entry-meta">
                                    <span className="author">
                                        <img src="/assets/images/avatar/avt-blog.png" alt="" />
                                        <Link href="/#">Mehedii .H</Link>
                                    </span>
                                    <span className="comment">
                                        <i className="icon-2" />
                                        <Link href="/#">Coments (03)</Link>
                                    </span>
                                </div>
                                <h2 className="entry-title">
                                    <Link href="/blog-single">FIVE WAYS THAT CAN DEVELOP YOUR BUSINESS</Link>
                                </h2>
                                <p className="entry-des">The time it takes to paint a car repair depen</p>
                                <div className="btn-read-more">
                                    <Link className="more-link" href="/blog-single">
                                        <span>Read MOre</span>
                                        <i className="icon-Arrow-1" />
                                    </Link>
                                </div>
                                {/* /.entry-meta */}
                            </div>{/* /.main-post */}
                        </article>
                    </div>
                    <div className="col-md-4">
                        <article className="widget-blog bl-v1">
                            <div className="feature-post">
                                <div className="category">
                                    <ul className="flex">
                                        <li>
                                            <Link href="/#"><i className="icon-Group-12" />Business</Link>
                                        </li>
                                    </ul>
                                </div>
                                <Link href="/blog-single">
                                    <img src="/assets/images/blog/wg2.jpg" alt="image" />
                                </Link>
                            </div>{/* /.feature-post */}
                            <div className="main-post">
                                <div className="entry-meta">
                                    <span className="author">
                                        <img src="/assets/images/avatar/avt-blog.png" alt="" />
                                        <Link href="/#">Mehedii .H</Link>
                                    </span>
                                    <span className="comment">
                                        <i className="icon-2" />
                                        <Link href="/#">Coments (03)</Link>
                                    </span>
                                </div>
                                <h2 className="entry-title">
                                    <Link href="/blog-single">FIVE WAYS THAT CAN DEVELOP YOUR BUSINESS</Link>
                                </h2>
                                <p className="entry-des">The time it takes to paint a car repair depen</p>
                                <div className="btn-read-more">
                                    <Link className="more-link" href="/blog-single">
                                        <span>Read MOre</span>
                                        <i className="icon-Arrow-1" />
                                    </Link>
                                </div>
                                {/* /.entry-meta */}
                            </div>{/* /.main-post */}
                        </article>
                    </div>
                    <div className="col-md-4">
                        <article className="widget-blog bl-v1">
                            <div className="feature-post">
                                <div className="category">
                                    <ul className="flex">
                                        <li>
                                            <Link href="/#"><i className="icon-Group-12" />Business</Link>
                                        </li>
                                    </ul>
                                </div>
                                <Link href="/blog-single">
                                    <img src="/assets/images/blog/wg3.jpg" alt="image" />
                                </Link>
                            </div>{/* /.feature-post */}
                            <div className="main-post">
                                <div className="entry-meta">
                                    <span className="author">
                                        <img src="/assets/images/avatar/avt-blog.png" alt="" />
                                        <Link href="/#">Mehedii .H</Link>
                                    </span>
                                    <span className="comment">
                                        <i className="icon-2" />
                                        <Link href="/#">Coments (03)</Link>
                                    </span>
                                </div>
                                <h2 className="entry-title">
                                    <Link href="/blog-single">FIVE WAYS THAT CAN DEVELOP YOUR BUSINESS</Link>
                                </h2>
                                <p className="entry-des">The time it takes to paint a car repair depen</p>
                                <div className="btn-read-more">
                                    <Link className="more-link" href="/blog-single">
                                        <span>Read MOre</span>
                                        <i className="icon-Arrow-1" />
                                    </Link>
                                </div>
                                {/* /.entry-meta */}
                            </div>{/* /.main-post */}
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}
