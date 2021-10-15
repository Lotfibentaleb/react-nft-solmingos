import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    appBar: {
        transition: 'background, height 0.5s',
        background: 'transparent',
        boxShadow: 'rgba(0, 0, 0, 0.04) 0px 0px 6px',
        zIndex: theme.zIndex.drawer + 1,

        '&.light': {
            background: 'transparent',
            boxShadow: 'none'
        },
        color: theme.palette.text.primary
    },
    toolbar: {
        // transition: 'all 0.5s',
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            height: theme.spacing(7)
        },
        [theme.breakpoints.up('md')]: {
            height: theme.spacing(10)
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(8),
            paddingRight: theme.spacing(8)
        },
        '&.small': {
            [theme.breakpoints.down('sm')]: {
                height: theme.spacing(7)
            },
            [theme.breakpoints.up('md')]: {
                height: theme.spacing(10)
            }
        }
    },
    navBar: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: theme.spacing(4),
        height: theme.spacing(10), 
        alignItems: 'center',
        transition: 'all 0.5s',
        // [theme.breakpoints.up('md')]: {
        //     marginTop: theme.spacing(-5)
        // },
        '&.small': {
            [theme.breakpoints.up('md')]: {
                marginTop: 0,
                height: theme.spacing(10),
                background: '#fed1ce99'
            }
        }
    },
    topMenu: {},
    profile: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(4)
    }
}))

export default useStyles
