import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,    
    },

    // home
    homeSection: {
        width: '100%',
        background: '#fea6a0',
        display: 'flex',
        justifyContent: 'center'
    },
    homeImage: {
        width: '100%',
        height: '100%',
    },

    // introduction
    introSection: {
        width: '100%',
        background: '#fed1ce',
        textAlign: 'center',
        paddingBottom: '50px',
        background: 'linear-gradient(#fec8c5, #fed1ce 40%)'
    },
    introLogoBox: {
        width: '100%',
        textAlign: 'center',
        marginTop: '20px'
    },
    firstArticleArea: {
        width: '100%',
        paddingTop: '20px',
        paddingLeft: '130px',
        paddingRight: '130px',
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '50px',
            paddingRight: '50px',
        },
    },
    firstArticleBox: {
        position: 'relative',
        width: '800px',
        height: '500px',
        paddingTop: '30px',
        paddingLeft: '30px',
        borderRadius: '16px',
        background: '#fea6a0',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
        },
    },
    featherOne: {
        position: 'absolute',
        width: '200px',
        height: '290px',
        left: '-210px',
        top: '10px',
        backgroundImage: 'url(' + '/images/bird-feather1.png' + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'none'
        },
    },
    secondArticleArea: {
        width: '100%',
        paddingTop: '50px',
        paddingLeft: '50px',
        paddingRight: '50px',
        display: 'flex',
        justifyContent: 'center'
    },
    secondArticleBox: {
        position: 'relative',
        width: '350px',
        height: '350px',
        borderRadius: '16px',
        background: '#fea6a0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    featherTwo: {
        position: 'absolute',
        width: '210px',
        height: '280px',    
        left: '-270px',
        [theme.breakpoints.down('sm')]: {
            left: '-125px',
            width: '120px',
        },
        top: '0px',
        backgroundImage: 'url(' + '/images/bird-feather2.png' + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        [theme.breakpoints.down('xs')]: {
            backgroundImage: 'none'
        },
    },
    featherThree: {
        position: 'absolute',
        width: '280px',
        height: '200px',
        right: '-150px',
        bottom: '-50px',
        [theme.breakpoints.down('sm')]: {
            right: '-140px',
            height: '120px',
            bottom: '-35px',
        },
        backgroundImage: 'url(' + '/images/bird-feather3.png' + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        [theme.breakpoints.down('xs')]: {
            backgroundImage: 'none'
        },
    },
    video: {
        width: '90%',
        height: '90%',
        borderRadius: '16px'
    },

    // roadmap
    roadmapSection: {
        position: 'relative',
        width: '100%',
        background: '#fed1ce',
        textAlign: 'center'
    },
    roadmapLine: {
        position: 'absolute',
        top: '350px',
        left: '44%',
        width: '105px',
        height: '470px',
        backgroundImage: 'url(' + '/images/roadmap.png' + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'none'
        },
        [theme.breakpoints.down('md')]: {
            left: '43%',
        },
    },
    roadmapLogoBox: {
        width: '100%',
        textAlign: 'center',
        marginTop: '20px'
    },
    roadmapArea: {
        paddingLeft: '50px',
        paddingRight: '90px',
        width: '100%',
        height: 'auto'
    },
    stageOne: {
        width: '100%',
        height: '250px',
        borderRadius: '15px',
        background: '#FEA7A0',
        paddingTop: '30px',
        paddingLeft: '20px',
        paddingRight: '20px',
        textAlign: 'left'
    },
    stageTwo: {
        marginTop: '150px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px',
        },
        width: '100%',
        height: '130px',
        borderRadius: '15px',
        background: '#FEA7A0',
        marginLeft: '5px',
        paddingTop: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        textAlign: 'left'
    },
    stageThree: {
        marginTop: '50px',
        width: '100%',
        height: '130px',
        borderRadius: '15px',
        background: '#FEA7A0',
        paddingTop: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        textAlign: 'left'
    },
    stageFour: {
        marginTop: '120px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px',
        },
        width: '100%',
        height: '130px',
        borderRadius: '15px',
        background: '#FEA7A0',
        paddingTop: '15px',
        paddingLeft: '20px',
        paddingRight: '20px',
        textAlign: 'left'
    },
    stageFive: {
        marginTop: '60px',
        width: '100%',
        height: '200px',
        borderRadius: '15px',
        background: '#FEA7A0',
        paddingTop: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        textAlign: 'left'
    },


    // faq
    faqSection: {
        width: '100%',
        background: '#fed1ce',
        textAlign: 'center'
    },
    fagLogoBox: {
        paddingTop: '30px',
        width: '100%',
        textAlign: 'center'
    },
    faqArea: {
        width: '100%',
        paddingLeft: '50px',
        paddingRight: '90px',
        paddingTop: '50px',
        height: '600px',
        background: '#fed1ce'
    },
    faqUnderImage: {
        width: '100%',
        height: '40px',
        backgroundColor: '#FEA7A0',
        backgroundImage: 'url(' + '/images/faq-under-image.png' + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    accodionRoot: {
        width: '100%',
        '&.MuiPaper-root': {
            background: '#fea7a0'
        }
    },
    heading: {
        flexBasis: '33.33%',
        flexShrink: 0,
        color: '#ffffff'
    },
    secondaryHeading: {
        color: '#ffffff',
        textAlign: 'left'
    },

    sectionId: {
        width: '100%',
        height: '1px',
        paddingBottom: '45px'
    },
    paper: {
        paddingTop: theme.spacing(4)
    }
}))

export default useStyles
