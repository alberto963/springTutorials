const width='400px';
const fontSize='20px';
const background='rgb(240,240,240)';

export const primaryColor='rgb(55,150,198)';
export const secondaryColor='#ff9900';
export const style = {
    textBox: {
        padding: '10px',
        margin: '0 auto 10px auto',
        fontSize,
        width,
    },
    label: {
        padding: '10px',
        margin: '0 auto 10px auto',
        background,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        fontSize,
        width,
    },
    main:{
        textAlign:'center',
        fontFamily:' Arial, Helvetica, sans-serif',
    },
    topLabel:{
        color:secondaryColor,
        fontSize:'10px',
        textAlign:'left',
        margin:'auto',
        fontWeight:'bold',
        width,
    },
    hr:{
        margin:'50px auto'
    }
}