import { Button } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import useStyles from '@/styles/ButtonIcon'

export default function ButtonIcon(props) {
	const { icon, title, ...rest } = props
	const classes = useStyles()
	return (
		<Button
			{...rest}
			className={`
                ${classes.button} 
                ${rest.variant === 'outlined' ? classes.buttonOutlined : ''} 
                ${
									rest.variant === 'outlined'
										? classes.buttonOutlinedSweep
										: classes.buttonContainedSweep
								}
              `}
		>
			{icon && <Icon>{icon}</Icon>}
			{title}
		</Button>
	)
}
