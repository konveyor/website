import React from 'react'
import Seo from '../components/seo'
import { ReactComponent as Slack } from '../images/slack-large.svg'

export default function SlackPage() {
  const ledeStyle = 'max-w-[60ch] text-xl lg:text-2xl text-base-700 mb-6 max-w-[50ch] md:max-w-none'
  const paragraphStyle = 'max-w-[60ch] text-lg lg:text-xl text-base-600 mb-4'
  const aStyle =
    'underline text-primary-700 visited:text-primary-900 focus:ring-2 focus:ring-primary-600 hover:text-warning-700'

  return (
    <>
      <Seo title="Slack" description="Find Konveyor on the Kubernetes Slack channel." />
      <section className="light border-b border-base-300 bg-tertiary-800">
        <div className="page-wrapper !max-w-screen-sm flex flex-col md:flex-row gap-8 items-center py-8 md:py-16">
          <div className="w-full md:w-5/6">
            <h1 className="font-headings font-bold text-3xl md:text-4xl lg:text-5xl text-base-200">
              Slack
            </h1>
            <p className={`${paragraphStyle} text-base-200 my-6 lg:my-8`}>
              Talk with us on the Kubernetes Slack
            </p>
          </div>
          <div className="order-first md:order-none w-full md:w-1/6">
            <Slack className="max-w-[100px] lg:max-w-none" alt="" />
          </div>
        </div>
      </section>
      <section className="page-wrapper  !max-w-screen-md py-8 md:py-16">
        <p className={ledeStyle}>
          Join the discussion on the{' '}
          <a
            className={aStyle}
            href="https://slack.kubernetes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kubernetes Slack Channel
          </a>
          . The community slack channel can help you address any questions or concerns and discuss
          feature requests.
        </p>
        <p className={paragraphStyle}>
          You are always welcome in the Konveyor channel on the Kubernetes Slack!
        </p>
        <p className={paragraphStyle}>To join the channel:</p>
        <ol className="ordered">
          <li>
            Navigate to the{' '}
            <a
              className={aStyle}
              href="https://slack.kubernetes.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kubernetes Slack Channel
            </a>{' '}
            and create your Slack account. Kubernetes will accept your new account, and you will
            have access to the entire Kubernetes workspace.
          </li>
          <li>
            Join the{' '}
            <a
              className={aStyle}
              href="https://kubernetes.slack.com/archives/CR85S82A2"
              target="_blank"
              rel="noopener noreferrer"
            >
              #Konveyor channel
            </a>{' '}
            or be{' '}
            <a
              className={aStyle}
              href="https://kubernetes.slack.com/?redir=%2Fmessages%2Fkonveyor"
              target="_blank"
              rel="noopener noreferrer"
            >
              redirected directly to the channel
            </a>
            .
          </li>
        </ol>
      </section>
    </>
  )
}
