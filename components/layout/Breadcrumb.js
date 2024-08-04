import Link from "next/link";

export default function Breadcrumb({ category, product }) {
  return (
    <>
      <div className="widget-breakcrumb">
        <div className="themesflat-container">
          <div className="breakcrumb">
            <div className="title-breakcrumb">
              <Link className="home" href="/">
                Home
              </Link>
              <Link className="home" href="/">
                {category}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
