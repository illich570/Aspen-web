import { Grid } from '@material-ui/core'
import useStyles from '@/styles/sections/Team'
import Link from 'next/link'

const Team = ({ dataConsultant, dataTeam }) => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<Grid container justify="center">
				<Grid item md={12}>
					<div className={classes.containerTitle}>
						<div className={classes.titleLogo}>
							<div>
								<h3 className={classes.title}>Equipo</h3>
							</div>
						</div>
					</div>
				</Grid>
				<Grid className={classes.containerSectionTeam} item md={12}>
					<section>
						<div className={classes.sectionTeam}>
							{dataTeam.map((element) => (
								<div className={classes.containerTeam} key={element.id}>
									<Link href={`equipo/${element.slug}`} passHref>
									<a style={{display: 'contents'}}>
									<div className={`${classes.containerImageSection}`}>
										<img alt={element.name} className={classes.image} src={element.image.url} />
									</div>
									<h5 className={classes.nameTeam}>{element.name}</h5>
									</a>
									</Link>
								</div>
									
							))}
						</div>
					</section>
				</Grid>
				<Grid item md={12}>
					<Grid className={classes.containerSectionTeam} container>
						<Grid item md={3}>
							<h3 className={classes.title}>Equipo</h3>
						</Grid>
						<Grid item md={9}>
							<section>
							<Link href={`equipo/consultores`} passHref>
								<a>
								<div className={classes.sectionTeam}>
									{dataConsultant.map((element) => (
										<div className={classes.containerTeam} key={element.id}>
											<div className={`${classes.containerImageSection}`}>
												<img alt={element.name} className={classes.image} src={element.image.url} />
											</div>
											<h5 className={classes.nameTeam}>{element.name}</h5>
										</div>
									))}
								</div>
								</a>
								</Link>
							</section>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Team
