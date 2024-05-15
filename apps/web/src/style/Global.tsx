import { PancakeTheme } from '@pancakeswap/uikit'
import { createGlobalStyle } from 'styled-components'


declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme { }
}

const GlobalStyle = createGlobalStyle`
@tailwind base;
@tailwind components;
@tailwind utilities;

.min-box{
  border:1px solid rgba(255, 255, 255, 0.14)
}

  .boxes{
    border:1px solid rgba(255, 255, 255, 0.14)
  }
  .partner-wrap ul li {
    border: 1px solid rgba(255, 255, 255, 0.14);
    padding:30px;
   cursor: pointer;
    display: flex;
    align-items: center;
   justify-content: center;

}

.partner-wrap .ul2 {
 border-radius: 50px
}
.partner-wrap ul {
 border-radius: 50px
}
.partner-wrap .ul2 li {
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding:80px 20px;
 cursor: pointer;
  display: flex;
  align-items: center;
 justify-content: center;
height:80px
}
.partner-wrap .ul2 li img{
// height: 80px;
}
// .partner-wrap ul li {
  width: 20%;
  // height: 123px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  
  margin-left: -1px;
  margin-top: -1px;
// }

  * {
    font-family: 'Kanit', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;

    img {
      height: auto;
      max-width: 100%;
    }
  }

  #__next {
    position: relative;
    z-index: 1;
  }

  #portal-root {
    position: relative;
    z-index: 2;
  }
`

export default GlobalStyle
