type IconProps = {
	url: string
	alt?: string
}

export interface InfoCardProps {
	icon: IconProps
	title: string
	description: string
}

export default function InfoCard({
	icon,
	title,
	description,
}: InfoCardProps) {
	return (
		<div className='text-center'>
			<img src={icon.url} alt={icon.alt} className='mx-auto mb-8' />
			<div className='space-y-2'>
				<h2 className='font-raleway text-lg font-bold'>{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	)
}
