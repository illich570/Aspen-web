import Image from 'next/image'

const ArrowSlider = (props) => {
	const { className, onClick, isRight } = props
	return (
		<div className={className} onClick={onClick}>
			<Image
				alt="arrow"
				height={100}
				src={isRight ? '/arrow-right.svg' : '/arrow-left.svg'}
				width={100}
			/>
		</div>
	)
}

export default ArrowSlider
