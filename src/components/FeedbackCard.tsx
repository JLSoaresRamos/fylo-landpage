export interface FeedbackCardProps {
	feedback: string
	author: string
	occupation: string
	urlAvatar: string
}

export function FeedbackCard({
	feedback,
	author,
	urlAvatar,
	occupation,
}: FeedbackCardProps) {
	return (
		<div className='bg-primary-darkBlueTestimonials p-8'>
			<p>{feedback}</p>
			<footer className='mt-4 flex gap-2'>
				<img src={urlAvatar} className='h-10 w-10 rounded-full' />
				<div>
					<h2 className='font-bold'>{author}</h2>
					<p>{occupation}</p>
				</div>
			</footer>
		</div>
	)
}
