import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: '30px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 50px',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	navRegList: {
		flexBasis: "50%",
		display: "flex",
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	navRegListLi: {
		marginRight: "20px",
		position: "relative",
		cursor: "pointer",
		listStyle: "none",
	},
	navRegListLiLink: {
		fontSize: "18px",
		transition: "0.3s all",
		color: "#000",
		textDecoration: "none",
		"&:hover": {
			color: "skyblue",
		},
	},
	heading: {
		color: theme.palette.primary.main,
		textDecoration: 'none',
		fontSize: '2em',
		fontWeight: 300,
	},
	image: {
		marginLeft: '10px',
		marginTop: '5px',
	},
	toolbar: {
		flexBasis: "30%",
		display: 'flex',
		justifyContent: 'flex-end',
		[theme.breakpoints.down('sm')]: {
			width: 'auto',
		},
	},
	profileContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: "fit-content",
		[theme.breakpoints.down('sm')]: {
			width: 'auto',
			marginTop: 20,
			justifyContent: 'center',
		},
	},
	profile: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginRight: "20px",
	},
	logout: {
		marginLeft: '20px',
		textTransform: "none",
	},
	userName: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
		flexBasis: "20%",
		marginRight: "30px",
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
		marginRight: "10px",
		padding: "0px",
	},
}));
