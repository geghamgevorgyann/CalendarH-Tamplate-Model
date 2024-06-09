import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
    dropArea: {
        width: '90%',
        minHeight: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        boxSizing: 'border-box',
        padding: '10px',
      },
      dropAreaActive: {
        borderTop: '1px solid #299D8F',
      },
      draggableItem: {
        width: '100px',
        height: '100px',
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
        lineHeight: '100px',
        margin: '10px',
        cursor: 'grab'
      },
      
      heading: {
        fontSize: '24px',
        color: 'black',
        margin: '10px 0'
      },
      input: {
        width: '100%',
        padding: '10px',
        marginTop: '10px',
        borderRadius: '4px',
        border: '1px dashed #299D8F',
        fontSize: '16px',
        textDecoration: 'none',
        '&:focus': {
          outline: 'none',
          border: '1px solid #299D8F',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)'
        }
      },
      button: {
        width: 100,
        height: 40,
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#7F56D9',
        color: 'white',
        cursor: 'pointer'
      },
      img: {
        minWidth: '100px',
        minHeight: '100px',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '4px',
        border: '1px solid #7F56D9',
        cursor: 'pointer',
        objectFit: 'cover',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
        '&:hover': {
          border: '1px solid #299D8F',
        }
      },
      textAreaInput: {
        maxWidth: '100%',
        maxHeight: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #299D8F',
        fontSize: '16px',
        '&:focus': {
          outline: 'none',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)'
        }   

      }
});

export default useStyles