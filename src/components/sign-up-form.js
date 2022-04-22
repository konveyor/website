import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const SignUpForm = () => {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [gdpr, setGdpr] = useState('Y')
  const [bot, setBot] = useState('')

  const emailQuery = (evt) => {
    setEmail(evt.target.value)
  }

  const gdprQuery = (evt) => {
    setGdpr(evt.target.value)
  }

  const botQuery = (evt) => {
    setBot(evt.target.value)
  }

  useEffect(() => {
    if (localStorage.getItem('subscribe')) {
      setSubscribed(true)
    }
  }, [])

  const updateSubscribed = () => {
    localStorage.setItem('subscribe', 'true')
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await addToMailchimp(email, {
      'gdpr[200369]': gdpr,
      b_180317a04b3c2093d37f905a5_1d63a6eeb5: bot,
    })
    setMessage(result.msg)

    if (result.result === 'success') {
      updateSubscribed()
    }
  }

  const headingStyle =
    'text-center font-headings text-3xl lg:text-4xl text-primary-800 mb-2 mb-4 md:mb-8'
  const subheadingStyle =
    'font-headings text-xl lg:text-2xl text-primary-800 mt-4 mb-2 md:mt-0 lg:mb-4'
  const paragraphStyle =
    'mb-4 text-lg lg:text-xl text-base-600 lg:leading-relaxed max-w-[50ch] md:max-w-none'
  const fineprintStyle =
    'mb-4 text-sm lg:text-base text-base-600 lg:leading-relaxed max-w-[70ch] md:max-w-none'
  const aStyle =
    'underline text-primary-700 visited:text-primary-900 focus:ring-2 focus:ring-primary-600 hover:text-warning-700'

  return (
    <>
      {subscribed ? (
        <section id="sign-up" className="hidden target:block z-1 my-12 md:my-24 page-wrapper">
          <p className={subheadingStyle}>Thank you for subscribing to our updates.</p>
        </section>
      ) : (
        <section id="sign-up" className="z-1 my-12 md:my-24 page-wrapper">
          <h2 className={headingStyle}>Get Insights On Migrating To Kubernetes</h2>
          <div className="flex flex-col md:flex-row md:gap-12">
            <div className="md:w-1/2">
              <p className={paragraphStyle}>
                Stay up-to-speed with all things Konveyor and migrating to Kubernetes by subscribing
                to our email list. You'll only hear from us when we have an update worth sharing.
              </p>
              <p className={fineprintStyle}>
                You can unsubscribe at any time by clicking the link in the footer of our emails.{' '}
                <Link className={aStyle} to="/privacy/">
                  Our privacy statement
                </Link>
                .
              </p>
              <p className={fineprintStyle}>
                We use Mailchimp as our marketing platform. By clicking below to subscribe, you
                acknowledge that your information will be transferred to Mailchimp for processing.{' '}
                <a
                  className={aStyle}
                  href="https://mailchimp.com/legal/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about Mailchimp's privacy practices
                </a>
                .
              </p>
            </div>
            <form
              className="md:w-1/2"
              id="mc-embedded-subscribe-form"
              name="signUpForm"
              onSubmit={handleSubmit}
            >
              <h3 className={subheadingStyle}>Subscribe Now</h3>
              <p
                className={`${paragraphStyle} !text-warning-700`}
                role="alert"
                dangerouslySetInnerHTML={{ __html: message }}
              ></p>
              <label className="sr-only" htmlFor="mce-EMAIL">
                Email Address
              </label>
              <input
                className="block w-full mt-1 rounded border-2 border-base-400 px-3 py-2 bg-base-100 dark:border-base-500 hover:ring-2 focus:outline-none focus:ring-2"
                type="email"
                value={email}
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="Email address"
                onFocus={emailQuery}
                onChange={emailQuery}
                required
              />

              <h4 className={`${subheadingStyle} md:!mt-8`}>Outreach Permissions</h4>
              <fieldset className="mb-8" name="interestgroup_field">
                <legend className={paragraphStyle}>
                  Please select all the ways you would like to hear from Konveyor.io:
                </legend>
                <label className={paragraphStyle} htmlFor="gdpr_200369">
                  <input
                    type="checkbox"
                    id="gdpr_200369"
                    name="gdpr[200369]"
                    value={gdpr}
                    onFocus={gdprQuery}
                    onChange={gdprQuery}
                  />{' '}
                  Email
                </label>
              </fieldset>

              <div className="absolute left-[-5000px]" aria-hidden="true">
                <input
                  type="text"
                  name="b_180317a04b3c2093d37f905a5_1d63a6eeb5"
                  tabindex="-1"
                  value={bot}
                  onFocus={botQuery}
                  onChange={botQuery}
                />
              </div>

              <input
                className="inline-flex bg-primary-100 text-primary-700 hover:bg-base-800 hover:text-base-100 focus:bg-base-800 focus:text-base-100 flex-row gap-2 items-center rounded-md border-2 border-primary-400 px-2 md:px-4 py-2 text-base lg:text-lg font-bold hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
              />
            </form>
          </div>
        </section>
      )}
    </>
  )
}

export default SignUpForm
