import HomeSlide from '@/components/sections/Home/HomeSlide'
import { useEmblaCarousel } from 'embla-carousel/react'

const Home = ({ dataHome }) => {
	const [emblaRef] = useEmblaCarousel({ axis: 'y', draggable: false })
	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__viewport">
				<div className="embla__container">
					{dataHome.map((element, index) => (
						<div className="embla__slide" key={`vertical_${index}`}>
							<HomeSlide data={element} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
