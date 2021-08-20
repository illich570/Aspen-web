import { Grid } from '@material-ui/core'
import useStyles from '@/styles/sections/Team/ConsultantTeam'

const ConsultantTeam = ({ dataTeam, dataSection }) => {
	//eslint-disable-next-line
	console.log(dataTeam)
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<Grid container justify="center">
				<Grid item md={12}>
					<div className={classes.containerTitle}>
						<div className={classes.titleLogo}>
							<div>
								<h3 className={classes.title}>{dataSection[0].consultantsTitle}</h3>
							</div>
						</div>
						<div>
							<h3 className={classes.subtitle}>{dataSection[0].teamTitle}</h3>
						</div>
					</div>
				</Grid>
			</Grid>
			<div className={classes.containerCards}>
				{dataTeam.map((element) => (
					<article className={classes.card} key={element.id}>
						<div className={`${classes.containerImageSection}`}>
							<img alt={element.name} className={classes.image} src={element.image.url} />
						</div>
						<header className={classes.memberNameRow}>
							<h3 className={classes.nameMember}>{element.name}</h3>
							<h3 className={classes.subtitleMember}>{element.description}</h3>
						</header>
						<div
							className={classes.infoMember}
							dangerouslySetInnerHTML={{ __html: element.resume.html }}
						/>
					</article>
				))}
			</div>
		</div>
	)
}

export default ConsultantTeam
