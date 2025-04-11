import Link from 'next/link'
import FadeIn from '../fadeIn/FadeIn'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<FadeIn>
			<footer className='footer footer-center p-10 bg-base-200'>
				<nav>
					<Link href='https://uhodovo.vercel.app' className='link link-hover'>
						Уходово.лонгрид
					</Link>
				</nav>
				<aside>
					<p>Copyright © {year} - tezis.digital</p>
				</aside>
			</footer>
		</FadeIn>
	)
}

export default Footer
