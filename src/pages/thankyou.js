import React from 'react'
import { graphql } from 'gatsby'
import { Trans } from 'gatsby-plugin-react-i18next'

const ThankYouPage = () => {
	return (
		<main>
			<h1>
				<Trans>Merci pour votre message, je m'efforce de revenir vers vous au plus tôt !</Trans>
			</h1>
		</main>
	)
}

export default ThankYouPage

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`
