import { IoLocationSharp } from 'react-icons/io5'
import { MdPhoneInTalk } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
	return (
		<footer className='bg-primary-darkBlueFooter px-4 pb-8 pt-[60%] md:pt-14'>
			<div className='mt-8 flex flex-col md:flex-row md:items-center md:justify-around'>
				<div>
					<img src='/images/logo.svg' alt='Fylo' className='mb-8' />
					<div className='flex max-w-xs items-center gap-4'>
						<IoLocationSharp size={20} style={{ flexShrink: 0 }} />
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua
						</p>
					</div>
				</div>
				<div className='mt-4 flex flex-col gap-4 md:mt-0'>
					<div className='flex items-center gap-4'>
						<MdPhoneInTalk size={20} />
						<p>+1-543-123-4567</p>
					</div>
					<div className='flex items-center gap-4'>
						<MdEmail size={20} />
						<p>example@fylo.com</p>
					</div>
				</div>
				<nav className='mt-8 flex flex-col gap-8 md:mt-0 md:flex-row'>
					<div className='flex flex-col gap-2'>
						<a href='#'>About Us</a>
						<a href='#'>Jobs</a>
						<a href='#'>Press</a>
						<a href='#'>Blog</a>
					</div>
					<div className='flex flex-col gap-2'>
						<a href='#'>Contact Us</a>
						<a href='#'>Terms</a>
						<a href='#'>Privacy</a>
					</div>
				</nav>
			</div>
		</footer>
	)
}
