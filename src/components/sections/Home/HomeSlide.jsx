import { Grid } from '@material-ui/core'
import Image from 'next/image'
import useStyles from '@/styles/sections/Home/HomeSlide'

const HomeSlide = ({ data }) => {
	const classes = useStyles(data)
	return (
		<>
			<div className={classes.container}>
				<div className={classes.glassBlur} />
				<div className={classes.containerMouse}>
					<Image alt="" height={25} src="/mouse.svg" width={25} />
					<div className={classes.arrows}>
						<Image alt="" height={12} src="/arrows.svg" width={12} />
					</div>
				</div>
				<div className={classes.containerBackground}>
					<Grid className={classes.containerSection} container justify="flex-end">
						<Grid className={classes.containerInfo} item md={6}>
							<div className={classes.containerText}>
								<h1 className={classes.title}>{data.title}</h1>
								<p className={classes.paragraph}>{data.description}</p>
							</div>
							<div className={classes.containerIcons}>
								<a  href={data.iconUrl} rel="noreferrer noopener" target="_blank"  >
									<div className={classes.containerLinkedIn}>
										<Image alt="LinkedIn" height={50} src={data.icon.url} width={100} />
									</div>
								</a>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		</>
	)
}

export default HomeSlide
