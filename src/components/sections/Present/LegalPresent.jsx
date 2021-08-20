import Hero from '@/components/Hero'
import CardSlider from '@/components/sections/Present/PresentCardSlider'

const LegalPresent = ({ dataArticles, dataHero }) => {
	return (
		<>
			<Hero dataHero={dataHero} />
			<CardSlider dataArticles={dataArticles} />
		</>
	)
}

export default LegalPresent
