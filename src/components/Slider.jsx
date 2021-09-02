import Slider from 'react-slick'
import ArrowSlider from '@/components/ArrowSlider'

export default function SliderCard({ children, slidesToShow, dots }) {
	const checkSlides = (slidesToShow) => {
		if(slidesToShow){
			return slidesToShow < 4 ? slidesToShow : 4
		}else{
			return 4
		}
	}
	const settings = {
		dots: dots !== undefined ? dots : true,
		slidesToShow: checkSlides(slidesToShow) ,
		prevArrow: <ArrowSlider />,
		nextArrow: <ArrowSlider isRight />,
		pauseOnDotsHover: true,
		pauseOnFocus: true,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: checkSlides(slidesToShow),
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow: checkSlides(slidesToShow),
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
