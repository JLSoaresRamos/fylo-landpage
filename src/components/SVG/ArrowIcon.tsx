import { SVGProps } from 'react'
const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 16 16'
		{...props}
	>
		<defs>
			<filter
				id='a'
				width='150%'
				height='150%'
				x='-25%'
				y='-25%'
				filterUnits='objectBoundingBox'
			>
				<feOffset in='SourceAlpha' result='shadowOffsetOuter1' />
				<feGaussianBlur
					in='shadowOffsetOuter1'
					result='shadowBlurOuter1'
					stdDeviation={1}
				/>
				<feColorMatrix
					in='shadowBlurOuter1'
					values='0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0'
				/>
			</filter>
			<circle id='b' cx={6} cy={6} r={6} />
		</defs>
		<g fill='none' fillRule='evenodd'>
			<g transform='translate(2 2)'>
				<use xlinkHref='#b' fill='#000' filter='url(#a)' />
				<use xlinkHref='#b' fill='#62E0D9' />
			</g>
			<path
				fill='#1B2330'
				d='m8.582 6-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z'
			/>
		</g>
	</svg>
)
export default ArrowIcon
