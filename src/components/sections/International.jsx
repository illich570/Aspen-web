import { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Image from 'next/image'
import useStyles from '@/styles/sections/International'

const International = ({ dataSection }) => {
	const data = dataSection[0]
	const classes = useStyles(data)


	useEffect(() => {
		const val = document.getElementById('text_editor').getElementsByTagName('a')
		const arrayAnchor = [...val]
		arrayAnchor.map(element => element.setAttribute('target','_blank'))
	},[])
	return (
		<div className={classes.container}>
			<div className={classes.glassBlur} />
			<div className={classes.containerBackground}>
				<Grid className={classes.containerSection} container justify="flex-end">
					<Grid className={classes.containerInfo} item md={6}>
						<div className={classes.containerRow}>
							<div className={classes.containerImage}>
								<Image alt="ICG internacional" height={80} src={data.image.url} width={80} />
							</div>
						</div>
						<div className={classes.containerText}>
							<h1 className={classes.title}>{data.title}</h1>
							<div
								className={classes.paragraph}
								dangerouslySetInnerHTML={{ __html: data.content.html }}
								id="text_editor"
							/>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default International
