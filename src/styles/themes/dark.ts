import light from './light';

const dark: typeof light = {
  colors: {
    background: '#FFDF22',
    text: '#fff',

    yellow: '#FFDF22',
    white: '#f1f1f1',
    black: '#212121',

    yellow_linear_gradient: 'linear-gradient(107deg, #FFD503 0%, #FFDF22 100%)',
    red_linear_gradient: 'linear-gradient(99deg, #D90606 0%, #F11B1B 100%)',
    black_linear_gradient: 'linear-gradient(99deg, #000000 0%, #232323 100%)',
  },
  fontFamily: {
    Lato: 'Lato, sans-serif',
    Nunito: 'Nunito, sans-serif',
  },
};

export default dark;
