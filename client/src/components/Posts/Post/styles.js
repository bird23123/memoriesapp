import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
	media: {
		height: 0,
		paddingTop: '56.25%',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		backgroundBlendMode: 'darken',
	},
	border: {
		border: 'solid',
	},
	fullHeightCard: {
		height: '100%',
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderRadius: '15px',
		height: '100%',
		position: 'relative',
	},
	overlay: {
		position: 'absolute',
		top: '20px',
		left: '20px',
		color: 'white',
	},
	overlay2: {
		position: 'absolute',
		top: '20px',
		right: '20px',
		color: 'white',
	},
	grid: {
		display: 'flex',
	},
	details: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '20px',
	},
	title: {
		padding: '0 16px',
	},
	cardActions: {
		padding: '0 16px 8px 16px',
		display: 'flex',
		justifyContent: 'space-between',
	},
	cardAction: {
		display: 'block',
		textAlign: 'initial',
	},
	dotbtn: {
		color: "white",
		display: "inline-block",
		width: "24px",
		height: "24px",
		'&::after': {
			content: '"Редактировать"',
			position: 'absolute',
			top: '-20px', /* высота всплывающей надписи над элементом */
			left: '40%', /* центрирование всплывающей надписи над элементом */
			transform: 'translateX(-50%)',
			opacity: "0",
			visibility: 'hidden', /* начальная видимость */
			backgroundColor: '#000',
			color: '#fff',
			padding: '5px 10px',
			borderRadius: '5px',
			whiteSpace: 'nowrap',
			fontSize: '12px',
			transition: 'opacity 0.2s, visibility 0.2s',
		},

		'&:hover::after': {
			opacity: "1",
			visibility: 'visible', /* изменение видимости при наведении */
		},
	},
});
