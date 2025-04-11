'use client'

import FadeIn from '../fadeIn/FadeIn'
import Logo from '../logo/Logo'

const Header = () => {
	return (
		<FadeIn className='cont'>
			<header className='relative flex justify-center items-center py-4'>
				<Logo
					className='my-4 flex flex-col justify-center z-20'
					logo='Уходово.лонгрид'
					href='https://uhodovo.vercel.app/'
				/>
			</header>
		</FadeIn>
	)
}

export default Header
