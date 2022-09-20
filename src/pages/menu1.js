import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Explore from '../assets/explore.png';
import Inspire from '../assets/create.png';
import Collab from '../assets/collab1.png';
import Collab1 from '../assets/collab2.png';
import Collab2 from '../assets/collab3.png';
import Campaign from '../assets/campaign.png';
import Coin from '../assets/coin.png';
import './style.css';
import { Gradient } from '../component/Navbar/NavbarElements';

const Menu1 = () => {
    var imageID=0;
function changeImage(){
    console.log(imageID);
  var img1 = document.getElementById("collab1");
  var img2 = document.getElementById("collab2");
    var img3 = document.getElementById("collab3");
  if(imageID == 0){
      img2.style.display = 'none';
      img3.style.display = 'none';
    img1.style.display = 'block';
      imageID=1;
  }else if(imageID == 1){
      img1.style.display = 'none';
      img3.style.display = 'none';
    img2.style.display = 'block';
      imageID=2;
  }
  else if (imageID == 2){
      img2.style.display = 'none';
    img1.style.display = 'none';
      img3.style.display = 'block';
      imageID=0;
  }
}

//call same function again for x of seconds
setInterval(changeImage, 2000);
    
    
	useEffect(() => {
		document.getElementById('topScroll').scrollIntoView({ behavior: 'smooth' });
		AOS.init();
	}, []);
    

	return (
		<div style={{ padding: '50px' }} id={'topScroll'}>
			<br />
			<br />
			<br />
			<br />
			<br />

			<div className="menu" style={{ paddingTop: '10px' }}>
				<br />
				<img id="explore" src={Explore} alt="Animae1" />
				<br />
				<h2>Explore</h2>
				Never settle for what’s not the best. Absorb the latest, best, and bewitching content created by our
				captivating content creators. Be enthralled by their riveting ideas and impeccable contents present in
				diverse forms and shapes. Get a glimpse of the new-age content world and be a part of it.
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

			<div className="menu">
				<img id="inspire" src={Inspire} />
				<h2>Create & Inspire</h2>
				Unleash the creativity in you and kindle the fascination in other content creators. The creator-driven
				world of{' '}
				<Gradient>
					<b>UruMEE</b>
				</Gradient>{' '}
				lets you publish contents in your desired form. The true success of creators and creations is to
				persuade others to become creators. Be that creator who engenders passion and enchantment in the content
				community.
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

			<div className="menu">
				<img id="collab1" class="collabImage" style={{ display: 'none' }} src={Collab} />
				<img id="collab2" class="collabImage" style={{ display: 'none' }} src={Collab1} />
                <img id="collab3" class="collabImage" style={{ display: 'none' }} src={Collab2} />

				<div style={{ marginTop: '40px' }}>
					<h2>Collaborate</h2>
					Let your content be contagious. Aspire to inspire other content creators and collaborate to enrich
					the content we present on our platform.{' '}
					<Gradient>
						<b>UruMEE</b>
					</Gradient>{' '}
					paves the path for you to{' '}
					<Gradient>
						<b>Collab</b>
					</Gradient>{' '}
					with the best minds on the internet to augment your content.{' '}
					<Gradient>
						<b>Collab</b>
					</Gradient>{' '}
					helps your content cross boundaries, take different forms & shapes, and reach a broad spectrum of
					audience.
				</div>
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

			<div className="menu">
				<img id="camp" src={Campaign} />
				<h2>Campaigns</h2>
				Campaigns are a great motivation to create and collaborate contents in specific themes or topics. You
				not only get to learn, understand or convey your knowledge to the world but also get to maximise your
				creative thinking. Bear in mind that all your new posts and collabs for Campaigns will be rewarded 2x
				than normal in addition to the bountiful rewards for finishing in the top.
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

			<div className="menu">
				<img id="coin" src={Coin} />
				<h2>Mint Dubs</h2>
				Earn Dubs, our in-app currency by publishing captivating contents and engaging through our various
				gamifying platform interactions. Soon, you can make use of the Dubs to do wonders like promoting your
				content to other users on the platform thereby widening your target audience.
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};

export default Menu1;
