import React from 'react'

function RecentPost() {
  return (
    <div>
        <section className="section recent" aria-label="recent post">
    <div className="container">
      <div className="title-wrapper">
        <h2 className="h2 section-title">
          See what we’ve <strong className="strong">written lately</strong>
        </h2>
        <div className="top-author">
          <ul className="avatar-list">
            <li className="avatar-item">
              <a
                href="#"
                className="avatar large img-holder"
                style={{ width: 100, height: 100 }}
              >
                <img
                  src="./images/author-1.jpg"
                  width={100}
                  height={100}
                  alt="top author"
                  className="img-cover"
                />
              </a>
            </li>
            <li className="avatar-item">
              <a
                href="#"
                className="avatar large img-holder"
                style={{ width: 100, height: 100 }}
              >
                <img
                  src="./images/author-2.jpg"
                  width={100}
                  height={100}
                  alt="top author"
                  className="img-cover"
                />
              </a>
            </li>
            <li className="avatar-item">
              <a
                href="#"
                className="avatar large img-holder"
                style={{ width: 100, height: 100 }}
              >
                <img
                  src="./images/author-3.jpg"
                  width={100}
                  height={100}
                  alt="top author"
                  className="img-cover"
                />
              </a>
            </li>
            <li className="avatar-item">
              <a
                href="#"
                className="avatar large img-holder"
                style={{ width: 100, height: 100 }}
              >
                <img
                  src="./images/author-4.jpg"
                  width={100}
                  height={100}
                  alt="top author"
                  className="img-cover"
                />
              </a>
            </li>
            <li className="avatar-item">
              <a
                href="#"
                className="avatar large img-holder"
                style={{ width: 100, height: 100 }}
              >
                <img
                  src="./images/author-5.jpg"
                  width={100}
                  height={100}
                  alt="top author"
                  className="img-cover"
                />
              </a>
            </li>
          </ul>
          <span className="span">Meet our top authors</span>
        </div>
      </div>
      <ul className="grid-list">
        <li>
          <div className="blog-card">
            <figure
              className="card-banner img-holder"
              style={{ width: 550, height: 660 }}
            >
              <img
                src="./images/recent-1.jpg"
                width={550}
                height={660}
                loading="lazy"
                alt="Creating is a privilege but it’s also a gift"
                className="img-cover"
              />
              <ul className="avatar-list absolute">
                <li className="avatar-item">
                  <a
                    href="#"
                    className="avatar img-holder"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      src="./images/author-3.jpg"
                      width={100}
                      height={100}
                      loading="lazy"
                      alt="Author"
                      className="img-cover"
                    />
                  </a>
                </li>
                <li className="avatar-item">
                  <a
                    href="#"
                    className="avatar img-holder"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      src="./images/author-5.jpg"
                      width={100}
                      height={100}
                      loading="lazy"
                      alt="Author"
                      className="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>
            <div className="card-content">
              <ul className="card-meta-list">
                <li>
                  <a href="#" className="card-tag">
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a href="#" className="card-tag">
                    People
                  </a>
                </li>
                <li>
                  <a href="#" className="card-tag">
                    Review
                  </a>
                </li>
              </ul>
              <h3 className="h4">
                <a href="#" className="card-title hover:underline">
                  Creating is a privilege but it’s also a gift
                </a>
              </h3>
              <p className="card-text">
                Nullam vel lectus vel velit pellentesque dignissim nec id magna.
                Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur
                eu venenatis justo. Nullam felis augue, imperdiet at sodales a,
                sollicitudin nec risus.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="blog-card">
            <figure
              className="card-banner img-holder"
              style={{ width: 550, height: 660 }}
            >
              <img
                src="./images/recent-2.jpg"
                width={550}
                height={660}
                loading="lazy"
                alt="Being unique is better than being perfect"
                className="img-cover"
              />
              <ul className="avatar-list absolute">
                <li className="avatar-item">
                  <a
                    href="#"
                    className="avatar img-holder"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      src="./images/author-5.jpg"
                      width={100}
                      height={100}
                      loading="lazy"
                      alt="Author"
                      className="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>
            <div className="card-content">
              <ul className="card-meta-list">
                <li>
                  <a href="#" className="card-tag">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="card-tag">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" className="card-tag">
                    Idea
                  </a>
                </li>
              </ul>
              <h3 className="h4">
                <a href="#" className="card-title hover:underline">
                  Being unique is better than being perfect
                </a>
              </h3>
              <p className="card-text">
                Nam in pretium dui. Phasellus dapibus, mi at molestie cursus,
                neque eros aliquet nisi, non efficitur nisi est nec mi. Nullam
                semper, ligula a luctus ornare, leo turpis fermentum lectus,
                quis volutpat urna orci a lectus. Duis et odio lobortis, auctor
                justo ut, egestas magna.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="blog-card">
            <figure
              className="card-banner img-holder"
              style={{ width: 550, height: 660 }}
            >
              <img
                src="./images/recent-3.jpg"
                width={550}
                height={660}
                loading="lazy"
                alt="Now we’re getting somewhere"
                className="img-cover"
              />
              <ul className="avatar-list absolute">
                <li className="avatar-item">
                  <a
                    href="#"
                    className="avatar img-holder"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      src="./images/author-2.jpg"
                      width={100}
                      height={100}
                      loading="lazy"
                      alt="Author"
                      className="img-cover"
                    />
                  </a>
                </li>
                <li className="avatar-item">
                  <a
                    href="#"
                    className="avatar img-holder"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      src="./images/author-5.jpg"
                      width={100}
                      height={100}
                      loading="lazy"
                      alt="Author"
                      className="img-cover"
                    />
                  </a>
                </li>
                <li className="avatar-item">
                  <a
                    href="#"
                    className="avatar img-holder"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      src="./images/author-1.jpg"
                      width={100}
                      height={100}
                      loading="lazy"
                      alt="Author"
                      className="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>
            <div className="card-content">
              <ul className="card-meta-list">
                <li>
                  <a href="#" className="card-tag">
                    Idea
                  </a>
                </li>
                <li>
                  <a href="#" className="card-tag">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" className="card-tag">
                    Review
                  </a>
                </li>
              </ul>
              <h3 className="h4">
                <a href="#" className="card-title hover:underline">
                  Now we’re getting somewhere
                </a>
              </h3>
              <p className="card-text">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Donec volutpat rhoncus quam, a
                feugiat elit gravida eget. Curabitur id pharetra ligula. Integer
                porttitor suscipit ante ac faucibus. Sed a enim non enim viverra
                pulvinar vel diam ut lorem congue feugiat.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="blog-card">
            <figure
              className="card-banner img-holder"
              style={{ width: 550, height: 660 }}
            >
              <img
                src="./images/recent-4.jpg"
                width={550}
                height={660}
                loading="lazy"
                alt="The trick to getting more done is to have the freedom to roam around"
                className="img-cover"
              />
              <ul className="avatar-list absolute">
                <li className="avatar-item">
                  <a
                    href="#"
                    className="avatar img-holder"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      src="./images/author-3.jpg"
                      width={100}
                      height={100}
                      loading="lazy"
                      alt="Author"
                      className="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>
            <div className="card-content">
              <ul className="card-meta-list">
                <li>
                  <a href="#" className="card-tag">
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a href="#" className="card-tag">
                    Design
                  </a>
                </li>
              </ul>
              <h3 className="h4">
                <a href="#" className="card-title hover:underline">
                  The trick to getting more done is to have the freedom to roam
                  around
                </a>
              </h3>
              <p className="card-text">
                Integer nec mi cursus, blandit est et, auctor mauris. Aenean ex
                metus, faucibus in mattis at, tincidunt eu dolor. Cras hendrerit
                massa nec augue placerat rutrum. Sed facilisis massa enim, ac
                tempus diam elementum sit amet.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="blog-card">
            <figure
              className="card-banner img-holder"
              style={{ width: 550, height: 660 }}
            >
              <img
                src="./images/recent-5.jpg"
                width={550}
                height={660}
                loading="lazy"
                alt="Every day, in every city and town across the country"
                className="img-cover"
              />
              <ul className="avatar-list absolute">
                <li className="avatar-item">
                  <a
                    href="#"
                    className="avatar img-holder"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      src="./images/author-1.jpg"
                      width={100}
                      height={100}
                      loading="lazy"
                      alt="Author"
                      className="img-cover"
                    />
                  </a>
                </li>
                <li className="avatar-item">
                  <a
                    href="#"
                    className="avatar img-holder"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      src="./images/author-6.jpg"
                      width={100}
                      height={100}
                      loading="lazy"
                      alt="Author"
                      className="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>
            <div className="card-content">
              <ul className="card-meta-list">
                <li>
                  <a href="#" className="card-tag">
                    People
                  </a>
                </li>
                <li>
                  <a href="#" className="card-tag">
                    Story
                  </a>
                </li>
                <li>
                  <a href="#" className="card-tag">
                    Lifestyle
                  </a>
                </li>
              </ul>
              <h3 className="h4">
                <a href="#" className="card-title hover:underline">
                  Every day, in every city and town across the country
                </a>
              </h3>
              <p className="card-text">
                Morbi a facilisis lectus. Ut eu dapibus risus, a interdum justo.
                Vestibulum volutpat velit ac tellus mollis, sit amet sodales
                metus elementum. Aliquam eu mi massa. Proin suscipit enim a
                pulvinar viverra.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="blog-card">
            <figure
              className="card-banner img-holder"
              style={{ width: 550, height: 660 }}
            >
              <img
                src="./images/recent-6.jpg"
                width={550}
                height={660}
                loading="lazy"
                alt="Your voice, your mind, your story, your vision"
                className="img-cover"
              />
              <ul className="avatar-list absolute">
                <li className="avatar-item">
                  <a
                    href="#"
                    className="avatar img-holder"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      src="./images/author-6.jpg"
                      width={100}
                      height={100}
                      loading="lazy"
                      alt="Author"
                      className="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>
            <div className="card-content">
              <ul className="card-meta-list">
                <li>
                  <a href="#" className="card-tag">
                    People
                  </a>
                </li>
                <li>
                  <a href="#" className="card-tag">
                    Review
                  </a>
                </li>
                <li>
                  <a href="#" className="card-tag">
                    Story
                  </a>
                </li>
              </ul>
              <h3 className="h4">
                <a href="#" className="card-title hover:underline">
                  Your voice, your mind, your story, your vision
                </a>
              </h3>
              <p className="card-text">
                Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus.
                Vivamus lobortis posuere enim finibus sodales. Phasellus quis
                tellus scelerisque, sagittis tortor et, maximus metus.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <button className="btn">Load more</button>
    </div>
  </section>
    </div>
  )
}

export default RecentPost