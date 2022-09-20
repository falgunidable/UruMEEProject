import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
	z-index: 1;
	position: fixed;
	width: 100%;
	height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
	display: flex;
	flex-direction: column;

	@media (min-width: 700px) {
		height: 80px;
	}
`;

export const LeftContainer = styled.div`
	flex: 40%;
	display: flex;
	align-items: center;
	padding-left: 5%;
`;

export const RightContainer = styled.div`
	flex: 40%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 60px;
	@media screen and (max-width: 768px) {
		padding-right: 20px;
		flex: 50%;
		font-size: 14px;
		text-align: center;
	}
`;

export const NavbarInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
`;

export const NavbarLinkContainer = styled.div`display: flex;`;

export const NavbarLink = styled(Link)`
  background-image: linear-gradient(to right, #ff0202, #ff1d1a, #ff2c2a, #fe3837, #fd4343);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  font-weight:bold;
  text-decoration: none;
  margin: 10px;

    &:hover{
border-bottom:1px solid;
border-image-slice:1;
border-width:3px;
    border-image-source:linear-gradient(to right, #006aa6, #4288bc, #6ba7d2, #93c6e8, #bce6ff);
}
    &.active{
    border-bottom:1px solid;
border-image-slice:1;
border-width:3px;
    border-image-source:linear-gradient(to right, #006aa6, #4288bc, #6ba7d2, #93c6e8, #bce6ff)
}

  @media (max-width: 700px) {
    display: none;
  }
@media screen and (max-width: 768px){
margin: 5px;
}
`;

export const NavbarLinkExtended = styled(Link)`
  background-image: linear-gradient(to right, #ff0202, #ff1d1a, #ff2c2a, #fe3837, #fd4343);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  font-weight:bold;
  text-decoration: none;
  margin: 10px;
&:hover{
border-bottom:1px solid;
border-image-slice:1;
border-width:3px;
    border-image-source:linear-gradient(to right, #006aa6, #4288bc, #6ba7d2, #93c6e8, #bce6ff)
}
`;

export const Logo = styled.img`
	margin: 10px;
	max-width: 35%;
	height: auto;
margin-top:1.5rem;
	@media screen and (max-width: 414px) {
		max-width: 100%;
	}
	@media screen and (max-width: 768px) {
		max-width: 210px;
	}
`;

export const OpenLinksButton = styled.button`
	width: 70px;
	height: 50px;
	background: none;
	border: none;
	background: #ff3d47;
	background: linear-gradient(to right, #ff3d47 0%, #ff6464 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: bold;
	font-size: 45px;
	cursor: pointer;

	@media (min-width: 700px) {
		display: none;
	}
`;

export const NavbarExtendedContainer = styled.div`
	display: flex;
    margin-top:1rem;
	flex-direction: column;
	align-items: center;
    height:100%;
	background-image: linear-gradient(to right bottom, #d1effe, #d3f1f3, #def2ea, #e9f1e7, #f1f0e9);

	@media (min-width: 700px) {
		display: none;
	}
`;
export const Gradient = styled.span`
	font-weight: bold;
	background-image: linear-gradient(to right, #ff0202, #ff1d1a, #ff2c2a, #fe3837, #fd4343);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const GradientNav = styled.span`
	background-image: linear-gradient(to right, #ff0202, #ff1d1a, #ff2c2a, #fe3837, #fd4343);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-align: center;
	font-weight: bold;
	display: flex;
	text-decoration: none;
	height: 100%;
	cursor: pointer;
`;
