import { createUseStyles } from "react-jss";


const useStyles = createUseStyles(() => ({
    sidebar: {
        minWidth: '100px',
        background: '#fff',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',  
        gap: '10px',
        alignItems: 'center',
       
    },
}));

export default useStyles;