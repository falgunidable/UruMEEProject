import React, { useState } from 'react';
import {
	NavbarContainer,
	LeftContainer,
	RightContainer,
	NavbarExtendedContainer,
	NavbarInnerContainer,
	NavbarLinkContainer,
	NavbarLink,
	Logo,
	OpenLinksButton,
	NavbarLinkExtended
} from './NavbarElements.js';
import LogoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import ham from '../../assets/mob.png';

function Navbar() {
	const [ extendNavbar, setExtendNavbar ] = useState(false);
    
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 10){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    
    window.addEventListener('scroll',changeColor);

	return (
		<NavbarContainer extendNavbar={extendNavbar} className = {color ? "navbarColor" : "navbar"}>
			<NavbarInnerContainer>
				<LeftContainer>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<Logo src={LogoImg} />
					</Link>
				</LeftContainer>
				<RightContainer>
					<NavbarLinkContainer>
						<NavbarLink to="pillars"> 5 Pillars of UruMEE</NavbarLink>
						<NavbarLink to="about"> About UruMEE</NavbarLink>
						<NavbarLink to="download"> Download App</NavbarLink>
						<NavbarLink to="socialsTab"> Our Socials</NavbarLink>
						<NavbarLink to="faq">FAQ</NavbarLink>
						<OpenLinksButton onClick={() => setExtendNavbar(!extendNavbar)}>
							{extendNavbar ? (
								<React.Fragment>&#10005;</React.Fragment>
							) : (
								<React.Fragment> &#8801;</React.Fragment>
							)}
						</OpenLinksButton>
					</NavbarLinkContainer>
				</RightContainer>
			</NavbarInnerContainer>
			{extendNavbar && (
				<NavbarExtendedContainer>
					<NavbarLinkExtended to="pillars" onClick={() => setExtendNavbar(!extendNavbar)}>
						{' '}
						5 Pillars of UruMEE
					</NavbarLinkExtended>
					<NavbarLinkExtended to="about" onClick={() => setExtendNavbar(!extendNavbar)}>
						{' '}
						About UruMEE
					</NavbarLinkExtended>
					<NavbarLinkExtended to="download" onClick={() => setExtendNavbar(!extendNavbar)}>
						{' '}
						Download App
					</NavbarLinkExtended>
					<NavbarLinkExtended to="socialsTab" onClick={() => setExtendNavbar(!extendNavbar)}>
						{' '}
						Our Socials{' '}
					</NavbarLinkExtended>
					<NavbarLinkExtended to="faq" onClick={() => setExtendNavbar(!extendNavbar)}>
						FAQ{' '}
					</NavbarLinkExtended>
                     <img src={ham} style={{width:'70%', marginTop:'1rem'}}/>
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
}

export default Navbar;
