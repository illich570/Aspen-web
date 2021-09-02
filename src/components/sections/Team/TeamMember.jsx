import { Grid } from '@material-ui/core'
import ButtonArrowNext from '@/components/ButtonArrowNext'
import useStyles from '@/styles/sections/Team/TeamMember'
import Link from 'next/link'

const TeamMember = ({ dataMember }) => {
	const { teamMember, teamSections, teamMembers } = dataMember
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<Grid container justify="center">
				<Grid item md={12}>
					<div className={classes.containerTitle}>
						<div className={classes.titleLogo}>
							<div>
								<h3 className={classes.title}>{teamSections[0].teamTitle}</h3>
							</div>
						</div>
						<div>
							<h3 className={classes.subtitle}>{teamSections[0].consultantsTitle}</h3>
						</div>
					</div>
				</Grid>
			</Grid>
			<Grid container justify="center">
				<Grid item lg={5} md={6}>
					<div className={classes.card}>
						<div className={`${classes.containerImageSection}`}>
							<img
								alt={teamMember.name}
								className={classes.image}
								src={teamMember.image.url}
							/>
						</div>
						<div className={classes.memberNameRow}>
							<h3 className={classes.nameMember}>{teamMember.name}</h3>
							<h3 className={classes.emailMember}>{teamMember.email}</h3>
						</div>
						<p className={classes.memberInfo}>{teamMember.description}</p>
					</div>
				</Grid>
				<Grid item lg={7} md={6}>
					<div
						className={classes.paragraph}
						dangerouslySetInnerHTML={{ __html: teamMember.resume.html }}
					></div>
				</Grid>
				{teamMembers.length > 0 ? (
					<div className={classes.containerButton}>
						<div className={classes.button}>
							<Link href={`/equipo/${teamMembers[0].slug}`} passHref>
								<ButtonArrowNext filled title="Siguiente integrante" />
							</Link>
						</div>
					</div>
				) : null}
			</Grid>
		</div>
	)
}

export default TeamMember
