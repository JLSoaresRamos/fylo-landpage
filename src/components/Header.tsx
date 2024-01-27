export default function Header() {
	return (
		<header className='flex items-center justify-between'>
			<img
				src='/images/logo.svg'
				alt='Fylo logo'
				className='w-28 md:w-auto'
			/>
			<nav className='xs:space-x-8 space-x-2 md:space-x-16'>
				<a
					href='#'
					className='opacity-75 hover:underline  hover:opacity-100'
				>
					Features
				</a>
				<a
					href='#'
					className='opacity-75 hover:underline  hover:opacity-100'
				>
					Team
				</a>
				<a
					href='#'
					className='opacity-75 hover:underline  hover:opacity-100'
				>
					Sign in
				</a>
			</nav>
		</header>
	)
}
