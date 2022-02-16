import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}

:root {
  --white:#FFF;
  --black:#141414;
  --purple-500:#7C83FD;
}

@media (max-width:1080px) {
  html{
    font-size:93.17%;
  }
}
@media (max-width:720px) {
  html{
    font-size:87.5%;
  }
}
body {
  background:${(props) => props.theme.colors.background};
}

body,input,select,textarea,button {
  font: 400 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}`;
