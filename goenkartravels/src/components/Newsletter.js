import React from 'react'

function Newsletter() {
  return (
    <div>
        <section className="section newsletter">
    <h2 className="h2 section-title">
      Subscribe to <strong className="strong">new posts</strong>
    </h2>
    <form action="" className="newsletter-form">
      <input
        type="email"
        name="email_address"
        placeholder="Your email address"
        required=""
        className="email-field"
      />
      <button type="submit" className="btn">
        Subscribe
      </button>
    </form>
  </section>
    </div>
  )
}

export default Newsletter