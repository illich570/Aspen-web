import { Grid } from '@material-ui/core'
import useStyles from '@/styles/sections/Team'


const layout = [1, 2, 3, 4, 5]
const layout2 = [1, 2, 3]

const Team = () => {
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
							{layout.map((element, index) => (
								<div className={classes.containerTeam} key={`tu_mama_${index}`}>
									<div className={`${classes.containerImageSection}`}>
										<img alt="" className={classes.image} src="/peopleCircle.png" />
									</div>
									<h5 className={classes.nameTeam}>Juan Manuel Santana</h5>
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
								<div className={classes.sectionTeam}>
									{layout2.map((element, index) => (
										<div className={classes.containerTeam} key={`tu_mama_2_${index}`}>
											<div className={`${classes.containerImageSection}`}>
												<img
													alt=""
													className={classes.image}
													src="/peopleCircle.png"
												/>
											</div>
											<h5 className={classes.nameTeam}>Juan Manuel Santana</h5>
										</div>
									))}
								</div>
							</section>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Team
