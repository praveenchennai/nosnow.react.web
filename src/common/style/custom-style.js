const customStyle = () =>{
    return {
        typography: {
          fontFamily: [
            'Montserrat',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
          ].join(','),
          body2: {
            fontSize: "12px",
            fontWeight: '600',
            fontFamily: 'Montserrat',
            //padding: '10px'
          },
          body1: {
            fontSize: "12px",
            fontWeight: '600',
            fontFamily: 'Montserrat'
          },
          subtitle1: {
            fontSize: "11px",
            fontWeight: 'bold',
            fontFamily: 'Montserrat'
          },
          subtitle2: {
            fontSize: "11px",
            fontFamily: 'Montserrat'
          },
          h1: {
            fontSize: "3rem",
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
            padding: '10px',
            color: "#0080c8"
          },
          h2: {
            fontSize: "12px",
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
            padding: '10px',
            color: "#828282"
          },
          h3: {
            fontSize: "12px",
            fontWeight: '600',
            fontFamily: 'Montserrat',
            borderBottom: 'solid 1px #f0f4f9',
            padding: '10px'
          },
          h4: {
            fontSize: "12px",
            fontWeight: '600',
            fontFamily: 'Montserrat',
          },
          h5: {
            fontSize: "14px",
            fontWeight: '600',
            fontFamily: 'Montserrat'
          },
          h6: {
            fontSize: "16px",
            fontWeight: '600',
            fontFamily: 'Montserrat'
          }
        }
      }
}

export default customStyle;