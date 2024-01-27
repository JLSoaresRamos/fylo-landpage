interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

export default function Button({ children, ...rest }: ButtonProps) {
	return (
		<button
			className='rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue px-16 py-4 font-raleway font-bold'
			{...rest}
		>
			{children}
		</button>
	)
}
