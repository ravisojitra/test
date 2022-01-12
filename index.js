export default `*{
  box-sizing: border-box;
}
body{
  font-family: 'Roboto', sans-serif !important;
  margin: 0;
  padding: 0;
  height: 100vh;
}
.dhiwise-code, .dhiwise-navigation{
  height: 100%;
}
.dhiwise-code > div {
 /* align-items: center; */
 min-height: auto;
 display: block;
}

.common-row{
  flex-direction: row;
  display: flex;
  /* min-height: auto; */
}
.common-column{
  flex-direction: column;
  display: flex;
  /* min-height: auto; */
}
.common-grid{
  min-height: auto;
}
.common-stack > img {
  /* position: absolute; */
}
/* .common-stack img + .common-column{
  position: absolute;
} */
/* .common-stack > div{
  position: absolute;
} */
.common-image{
  max-width: 100%;
}
.common-line{
}
.common-stack{
  position: relative;
  flex-wrap: wrap;
}
/* .common-stack > img + div{
  position: absolute;
}
.common-stack img +  .common-stack *{
  position: absolute;
} */
.common-text{
  
}
.common-list{
  display: grid;
}
.common-grid{
  display: grid;
  flex-wrap: wrap;
  flex-direction: row;
}
.common-button{
  cursor: pointer;
  outline: none;
}
.dhiwise-navigation{
  padding: 20px;
  background-color: #232323;
}
.dhiwise-navigation h1{
  color: white;
}
.dhiwise-navigation .headline{
  font-size: 14px;
  margin-bottom: 10px;
  color: white;
}
.dhiwise-navigation ul{
  padding: 0;
}
.dhiwise-navigation ul li{
  list-style: none;
  margin-right: 20px;
  font-size: 16px;
  font-weight: bold;
}
.dhiwise-navigation a{
  color: #132cdc;

}`