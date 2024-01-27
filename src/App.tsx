import Button from './components/Button'
import {
	FeedbackCard,
	FeedbackCardProps,
} from './components/FeedbackCard'
import Footer from './components/Footer'
import Header from './components/Header'

import InfoCard, { InfoCardProps } from './components/InfoCard'
import ArrowIcon from './components/SVG/ArrowIcon'

const InfoData: InfoCardProps[] = [
	{
		title: 'Access your files, anywhere',
		description:
			'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
		icon: { url: '/images/icon-access-anywhere.svg' },
	},
	{
		title: 'Security you can trust',
		description:
			'2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
		icon: { url: '/images/icon-security.svg' },
	},
	{
		title: 'Real-time collaboration',
		description:
			'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
		icon: { url: '/images/icon-collaboration.svg' },
	},
	{
		title: 'Store any type of file',
		description:
			"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
		icon: { url: '/images/icon-any-file.svg' },
	},
]

const feedbackData: FeedbackCardProps[] = [
	{
		author: 'Satish Patel',
		feedback:
			'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
		occupation: 'Founder & CEO, Huddle',
		urlAvatar: '/images/profile-1.jpg',
	},
	{
		author: 'Satish Patel',
		feedback:
			'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
		occupation: 'Founder & CEO, Huddle',
		urlAvatar: '/images/profile-1.jpg',
	},
	{
		author: 'Satish Patel',
		feedback:
			'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
		occupation: 'Founder & CEO, Huddle',
		urlAvatar: '/images/profile-1.jpg',
	},
]

function App() {
	return (
		<main className='h-screen w-screen space-y-16 px-4 py-8 font-openSans text-bodyCopy text-white md:p-16'>
			<Header />
			<section className='flex flex-col items-center justify-center text-center'>
				<img
					src='/images/illustration-intro.png'
					alt='People collaborating on a document in a folder, engaged in productive teamwork.'
				/>
				<div className='my-8 space-y-4'>
					<h1 className='font-raleway text-2xl font-bold'>
						All your files in one secure location, accessible
						anywhere.
					</h1>
					<p>
						Fylo stores all your most important files in one secure
						location. Access them wherever you need, share and
						collaborate with friends family, and co-workers.
					</p>
				</div>
				<Button>Get Started</Button>
			</section>
			<section className='grid grid-cols-1 gap-16'>
				{InfoData.map((info, index) => (
					<InfoCard
						key={`${info.title}${index}`}
						title={info.title}
						description={info.description}
						icon={info.icon}
					/>
				))}
			</section>
			<section className='space-y-4'>
				<img
					src='/images/illustration-stay-productive.png'
					alt='People conversing with speech bubbles, engaging in a lively discussion.'
				/>
				<h1 className='font-raleway text-lg font-bold'>
					Stay productive, wherever you are
				</h1>
				<p>
					Never let location be an issue when accessing your files.
					Fylo has you covered for all of your file storage needs.
				</p>
				<p>
					Securely share files and folders with friends, family and
					colleagues for live collaboration. No email attachments
					required.
				</p>
				<a
					href='#'
					className='flex w-fit items-center gap-1 border-b border-b-accent-cyan pb-1 text-accent-cyan'
				>
					See how Fylo works <ArrowIcon width={24} height={24} />
				</a>
			</section>
			<section className='grid gap-4'>
				<img
					src='/images/bg-quotes.png'
					alt='quote'
					className='-mb-4 w-8'
				/>
				{feedbackData.map((item, index) => (
					<FeedbackCard
						key={index}
						author={item.author}
						feedback={item.feedback}
						occupation={item.occupation}
						urlAvatar={item.urlAvatar}
					/>
				))}
			</section>
			<form className='space-y-4 rounded-lg bg-primary-darkBlueIntro p-9 text-center shadow-md'>
				<h1 className='text-lg font-bold'>Get early access today</h1>
				<p>
					It only takes a minute to sign up and our free starter tier
					is extremely generous. If you have any questions, our
					support team would be happy to help you.
				</p>
				<input
					type='text'
					className='w-full rounded-full px-8 py-4'
					placeholder='email@example.com'
				/>
				<Button>Get Started For Free</Button>
			</form>
			<Footer /> 
		</main>
	)
}

export default App

