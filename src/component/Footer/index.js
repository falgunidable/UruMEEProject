import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Row, Image, Column, Heading } from './FooterStyle';
import Logo from '../../assets/logo.png';
import { Gradient } from '../Navbar/NavbarElements';

const Footer = () => {
	return (
		<Box>
			<hr class="hrline" style={{width:'76%'}}/>
			<Container>
				<Row>
					<Column>
                        <Link to="/">
						  <Image src={Logo} alt="Logo" />
                        </Link>
					</Column>
					<Column>
						<Heading id="foot1Head">
							<Link to="/terms" style={{ textDecoration: 'none', color: 'black' }}>
								<Gradient> Terms</Gradient> <Gradient>of Use </Gradient>
							</Link>
						</Heading>
					</Column>
					<Column>
						<Heading id="foot2Head">
							<Link to="/privacy" style={{ textDecoration: 'none', color: 'black' }}>
								<Gradient>Privacy</Gradient> <Gradient> Policy</Gradient>
							</Link>
						</Heading>
					</Column>
					<Column>
						<Heading id="foot3Head">
							<Link to="/copyright" style={{ textDecoration: 'none', color: 'black' }}>
								<Gradient> Copyright</Gradient> <Gradient>Information</Gradient>
							</Link>
						</Heading>
					</Column>
					<Column>
						<Heading id="foot4Head">
							<a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none', color: 'black' }}>
								<Gradient>Reach Us At vanakkam@urumee.com</Gradient>
							</a>
						</Heading>
					</Column>
				</Row>
			</Container>
			<hr class="hrline" style={{ marginTop: '5px',width:'76%' }} />
			<h5 style={{ textAlign: 'center', padding: '10px', color: 'black' }}>
				<Gradient>UruMEE</Gradient>
				<Gradient> Social</Gradient>
				<Gradient> Tech</Gradient>
				<Gradient> Private</Gradient>
				<Gradient> Limited.,</Gradient>
				<Gradient>&#169;Copyrights</Gradient> <Gradient>2022.</Gradient> <Gradient>All Rights</Gradient>{' '}
				<Gradient>Reserved.</Gradient>
			</h5>
		</Box>
	);
};
export default Footer;
