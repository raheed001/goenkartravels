import React from 'react';

function FeaturedPost() {
    return (
        <div>
            <section className="section featured" aria-label="featured post">
                <div className="container">
                    <p className="section-subtitle">
                        Get started with our <strong className="strong">best stories</strong>
                    </p>
                    <ul className="has-scrollbar">
                        <li className="scrollbar-item">
                            <div className="blog-card">
                                <figure className="card-banner img-holder" style={{ width: 500, height: 600 }}>
                                    <img src="./images/featured-1.jpg" width={500} height={600} loading="lazy" alt="New technology is not good or evil in and of itself" className="img-cover" />
                                    <ul className="avatar-list absolute">
                                        <li className="avatar-item">
                                            <a href="#" className="avatar img-holder" style={{ width: 100, height: 100 }}>
                                                <img src="./images/author-1.jpg" width={100} height={100} loading="lazy" alt="Author" className="img-cover" />
                                            </a>
                                        </li>
                                        <li className="avatar-item">
                                            <a href="#" className="avatar img-holder" style={{ width: 100, height: 100 }}>
                                                <img src="./images/author-2.jpg" width={100} height={100} loading="lazy" alt="Author" className="img-cover" />
                                            </a>
                                        </li>
                                    </ul>
                                </figure>
                                <div className="card-content">
                                    <ul className="card-meta-list">
                                        <li>
                                            <a href="#" className="card-tag">Design</a>
                                        </li>
                                        <li>
                                            <a href="#" className="card-tag">Idea</a>
                                        </li>
                                        <li>
                                            <a href="#" className="card-tag">Review</a>
                                        </li>
                                    </ul>
                                    <h3 className="h4">
                                        <a href="#" className="card-title hover:underline">
                                            New technology is not good or evil in and of itself
                                        </a>
                                    </h3>
                                    <p className="card-text">
                                        Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta,
                                        ullamcorper massa eu, ullamcorper sapien. Donec pretium tortor augue. Integer egestas ut tellus sed
                                        pretium. Nullam tristique augue ut mattis vulputate. Duis et lorem in odio ultricies porttitor.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="scrollbar-item">
                            <div className="blog-card">
                                <figure className="card-banner img-holder" style={{ width: 500, height: 600 }}>
                                    <img src="./images/featured-2.jpg" width={500} height={600} loading="lazy" alt="It’s a new era in design, there are no rules" className="img-cover" />
                                    <ul className="avatar-list absolute">
                                        <li className="avatar-item">
                                            <a href="#" className="avatar img-holder" style={{ width: 100, height: 100 }}>
                                                <img src="./images/author-3.jpg" width={100} height={100} loading="lazy" alt="Author" className="img-cover" />
                                            </a>
                                        </li>
                                    </ul>
                                </figure>
                                <div className="card-content">
                                    <ul className="card-meta-list">
                                        <li>
                                            <a href="#" className="card-tag">Creative</a>
                                        </li>
                                        <li>
                                            <a href="#" className="card-tag">Product</a>
                                        </li>
                                    </ul>
                                    <h3 className="h4">
                                        <a href="#" className="card-title hover:underline">
                                            It’s a new era in design, there are no rules
                                        </a>
                                    </h3>
                                    <p className="card-text">
                                        Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest, ut id ipsum, quod interest, non
                                        sit magnum. Ita fit ut, quanta differentia est in principiis naturalibus, tanta sit in finibus
                                        bonorum malorumque dissimilitudo.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="scrollbar-item">
                            <div className="blog-card">
                                <figure
                                    className="card-banner img-holder"
                                    style={{ width: 500, height: 600 }}
                                >
                                    <img
                                        src="./images/featured-3.jpg"
                                        width={500}
                                        height={600}
                                        loading="lazy"
                                        alt="Perfection has to do with the end product"
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
                                                    src="./images/author-4.jpg"
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
                                                Creative
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
                                            Perfection has to do with the end product
                                        </a>
                                    </h3>
                                    <p className="card-text">
                                        Aenean eget urna aliquet, viverra orci quis, aliquam erat. Ut rutrum
                                        quam quam, eu eleifend est blandit et. Vivamus suscipit ultrices
                                        venenatis. Aliquam massa ipsum, porta quis hendrerit at, varius sed
                                        leo. Curabitur convallis urna sit amet mi tempus posuere.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="scrollbar-item">
                            <div className="blog-card">
                                <figure
                                    className="card-banner img-holder"
                                    style={{ width: 500, height: 600 }}
                                >
                                    <img
                                        src="./images/featured-4.jpg"
                                        width={500}
                                        height={600}
                                        loading="lazy"
                                        alt="Everyone has a different life story"
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
                                    </ul>
                                    <h3 className="h4">
                                        <a href="#" className="card-title hover:underline">
                                            Everyone has a different life story
                                        </a>
                                    </h3>
                                    <p className="card-text">
                                        Non est igitur summum malum dolor. Tu autem inter haec tantam
                                        multitudinem hominum interiectam non vides nec laetantium nec
                                        dolentium. Nunc vero a primo quidem mirabiliter occulta natura est nec
                                        perspici nec cognosci potest.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="scrollbar-item">
                            <div className="blog-card">
                                <figure
                                    className="card-banner img-holder"
                                    style={{ width: 500, height: 600 }}
                                >
                                    <img
                                        src="./images/featured-5.jpg"
                                        width={500}
                                        height={600}
                                        loading="lazy"
                                        alt="The difference is quality"
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
                                                Design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="card-tag">
                                                Lifestyle
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
                                            The difference is quality
                                        </a>
                                    </h3>
                                    <p className="card-text">
                                        Vide, ne etiam menses! nisi forte eum dicis, qui, simul atque
                                        arripuit, interficit. Atque his de rebus et splendida est eorum et
                                        illustris oratio.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="scrollbar-item">
                            <div className="blog-card">
                                <figure
                                    className="card-banner img-holder"
                                    style={{ width: 500, height: 600 }}
                                >
                                    <img
                                        src="./images/featured-6.jpg"
                                        width={500}
                                        height={600}
                                        loading="lazy"
                                        alt="Problems are not stop signs, they are guidelines"
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
                                                Idea
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="card-tag">
                                                Creating
                                            </a>
                                        </li>
                                    </ul>
                                    <h3 className="h4">
                                        <a href="#" className="card-title hover:underline">
                                            Problems are not stop signs, they are guidelines
                                        </a>
                                    </h3>
                                    <p className="card-text">
                                        Quid ad utilitatem tantae pecuniae. Duo enim genera quae erant, fecit
                                        tria. Et quod est munus, quod opus sapientiae.
                                    </p>
                                </div>
                            </div>
                        </li>

                        {/* Add more list items as needed */}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default FeaturedPost;
