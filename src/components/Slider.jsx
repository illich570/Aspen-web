import Slider from 'react-slick'
import ArrowSlider from '@/components/ArrowSlider'

export default function SliderCard({ children, slidesToShow, dots }) {
	const checkSlides = (slidesToShow, maxSlides = 4) => {
		if(slidesToShow){
			return slidesToShow >= maxSlides ? maxSlides : slidesToShow
		}else{
			return maxSlides
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
				breakpoint: 1420,
				settings: {
					slidesToShow: checkSlides(slidesToShow, 3),
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 790,
				settings: {
					slidesToShow: checkSlides(slidesToShow, 2),
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
