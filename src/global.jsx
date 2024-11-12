import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *, body{
        margin: 0;
        padding: 0;
    }

    @font-face{
        font-family: 'Lazy Dog'
        src: local('Lazy Dog'), url(./assets/fonts/lazy_dogttf) format('truetype');
    }

    @font-face{
        font-family: 'Maharlika'
        src: local('Maharlika'), url(./assets/fonts/Maharlika-Regular.ttf) format('truetype');
    }
`;