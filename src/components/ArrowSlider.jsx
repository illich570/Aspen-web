import Image from 'next/image'

const ArrowSlider = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
    <Image alt="arrow" height={100} src="/arrowCarousel.svg" width={100} />
    </div>
  )
}

export default ArrowSlider
