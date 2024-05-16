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

.footer-div{
  border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(130deg, rgba(255, 255, 255, 0.12) 2%, rgba(204, 204, 204, 0) 17.83%);
    overflow: hidden;
    /* position: fixed; */
    /* right: 40px; */
    /* bottom: 40px; */
    gap: 20px;
    /* padding: 0px 24px; */
    /* height: 64px; */
    /* border-radius: 64px; */
    border: 1px solid rgba(255, 255, 255, 0.32);
    /* background: rgba(0, 0, 0, 0.32); */
    backdrop-filter: blur(13.5px);
    z-index: 99;
}
}

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
