import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Discord from '../assets/discord.png';
import Linkedin from '../assets/linkedin.png';
import One from '../assets/1.png';
import Two from '../assets/2.png';
import Three from '../assets/3.png';
import Four from '../assets/4.png';
import Google from '../assets/playstore.png';
import Apple from '../assets/app-store.png';
import Launch from '../assets/launch.png';
import { Gradient } from '../component/Navbar/NavbarElements';

const Home = (props) => {
	const { to } = props;

	useEffect(
		() => {
			if (to === 'download') document.getElementById('download').scrollIntoView({ behavior: 'smooth' });
			else if (to === 'socialsTab') document.getElementById('socialsTab').scrollIntoView({ behavior: 'smooth' });
			else document.getElementById('topScroll').scrollIntoView({ behavior: 'smooth' });
		},
		[ to ]
	);

	return (
		<React.Fragment>
     <div className="top1" id="topScroll">
        
        <div class="flex-container1">
            <div class="flex-child">
                <img className="img1" src={One} />
            </div>
            <div class="flex-child"><h2 className="inner">
				Welcome to the<br /> modern day<Gradient> creator </Gradient><Gradient>driven </Gradient> world of <Gradient>UruMEE</Gradient> making creativity and collaboration a priority</h2>
            </div>
            <div class="flex-child"><img className="img2" src={Three} /></div>
        </div>
    </div>

    <div className="top2">
        <h2 className="inner">
            An <Gradient>Artistic</Gradient> <Gradient>Powerhouse</Gradient> for creators of diverse{' '}
            <Gradient>mediums</Gradient> and forms
        </h2>
    </div>

    <div className="top3">
        <div class="flex-container1">
            <div class="flex-child">
                <img className="img3" src={Four} />
            </div>
            <div class="flex-child">
				<h2 class="inner">
                Redefining User Generated Content creation
                through one
                <Gradient> Inspiration</Gradient> & <Gradient>Collab</Gradient> at a time
				</h2>
            </div>
            <div class="flex-child">
                <img className="img4" src={Two} />
            </div>
        </div>		
    </div>
			<br />
			<br />
			<br />
			<br />
			<br />

			<div id="download">
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
        <div class="flex-container1">
            <div class="flex-child" style={{width:'50%'}}>
                <img id="launch" src={Launch} />
            </div>
            <div class="flex-child">
                <h1 className="launch">
					Buckle up as you are about to enter a chucklesome world
				</h1>
            </div>
        </div>
				<br />
				<table id="table1">
					<tr>
						<td>
							<div className="grid">
								<div className="left">
									<img id="play" src={Google} alt="Google" />
								</div>
								<div className="right-up">Launching Soon</div>
							</div>
						</td>
						<td>
							<div className="grid" style={{ marginLeft: '20px' }}>
								<div className="left">
									<img id="app"  src={Apple} alt="Apple"  />
								</div>
								<div className="right-up">Launching Soon</div>
							</div>
						</td>
					</tr>
				</table>
			</div>
			<br />
			<br />
			<br />
			<br /><br />

			<div id="socialsTab">
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />

				<h1 className="inner" id="soc">
					Our Socials
				</h1>
				<br />
				<table id="socials">
					<tr>
						<td className="icon">
							<a
								href="https://www.facebook.com/UruMee-Social-App-108581525332682/"
								target="_blank"
								rel="noreferrer"
								style={{ textDecoration: 'none' }}
							>
								<img src={Facebook} alt="facebook" width="35%" />
							</a>
						</td>

						<td className="icon">
							<a
								href="https://instagram.com/urumeeofficial?igshid=ZDU1ZDhlY2E="
								target="_blank"
								rel="noreferrer"
								style={{ textDecoration: 'none' }}
							>
								<img src={Instagram} alt="instagram" width="35%" />
							</a>
						</td>

						<td className="icon">
							<a
								href="https://discord.gg/H9z6Z7KG5J"
								target="_blank"
								rel="noreferrer"
								style={{ textDecoration: 'none' }}
							>
								<img src={Discord} alt="discord" width="35%" />
							</a>
						</td>
                        <td className="icon">
							<a href="https://www.linkedin.com/company/urumee/"
								target="_blank"
								rel="noreferrer"
								style={{ textDecoration: 'none' }}
							>
								<img class="link" src={Linkedin} alt="linkedin" width="35%"/>
							</a>
						</td>
					</tr>
				</table>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</React.Fragment>
	);
};
export default Home;
