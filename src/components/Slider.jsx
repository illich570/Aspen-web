import Slider from 'react-slick'
import ArrowSlider from '@/components/ArrowSlider'

export default function SliderCard({ children, slidesToShow, dots }) {
	const settings = {
		dots: dots !== undefined ? dots : true,
		slidesToShow: slidesToShow ? slidesToShow : 4,
		prevArrow: <ArrowSlider />,
		nextArrow: <ArrowSlider isRight />,
		pauseOnDotsHover: true,
		pauseOnFocus: true,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	return <Slider {...settings}>{children}</Slider>
}
