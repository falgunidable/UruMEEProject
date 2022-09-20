import React, { useEffect } from 'react';
import Collab from '../assets/collab.svg';
import Wt1 from '../assets/wt1.png';
import Wt2 from '../assets/wt2.png';
import Wt3 from '../assets/wt3.png';
import Wt4 from '../assets/wt4.png';
import Wt5 from '../assets/wt5.png';
import Star from '../assets/star.png';
import './style.css';
import { Gradient } from '../component/Navbar/NavbarElements';

function Menu2() {
	useEffect(() => {
		document.getElementById('styleMenu2').scrollIntoView({ behavior: 'smooth' });
	}, []);

	return (
		<div id="styleMenu2">
			<br />
			<br />
			<br />
			<br />

			<div class="menu2">
				<h2>What is it about UruMEE? 🤷</h2>
				<div class="flex-container1">
					<div class="flex-child" style={{ width: '100%' }}>
						<Gradient>UruMEE,</Gradient> a new age media sharing network is designed and built specifically
						to connect <Gradient>innovative</Gradient> <Gradient>creators</Gradient> and{' '}
						<Gradient>entertaining</Gradient> <Gradient>buffs.</Gradient> <Gradient>UruMEE</Gradient> is a{' '}
						<Gradient>virtual</Gradient> <Gradient>on-demand</Gradient> <Gradient>collaborative</Gradient>{' '}
						<Gradient>space</Gradient> for the masses to join hands to <Gradient>Create,</Gradient>{' '}
						<Gradient>Inspire,</Gradient> and <Gradient>Collaborate.</Gradient> It builds a convivial realm
						of holistic content and shatters the boundaries between creators who expand their vision and for
						consumers who wish to explore new genre content. <Gradient>UruMEE</Gradient> is an inclusive
						platform that offers divergent textual, musical and graphical content, curated by determined
						creators who strive to deliver quality and entertaining content.
					</div>
					<div class="flex-child">
						<img id="img1" src={Wt1} />
					</div>
				</div>
			</div>
			<br />
			<br /><br />

			<div class="menu2">
				<h2>Why another media sharing network you may wonder 🧐</h2>

				<div style={{ textAlign: 'center' }}>
					Do you feel exhausted having consumed cliche and uninteresting content across different platforms?{' '}
					<br />
					Have you ever imagined having a dedicated platform for expressing your creative work to the world?<br
					/>
					Are you constantly stuck switching between your creative and consuming facets?<br />
					<h3 class="inner">
						<Gradient>UruMEE is your go-to creative space!</Gradient>
					</h3>
				</div>

				<br />
				<div class="flex-container1">
					<div class="flex-child" style={{ width: '100%' }}>
						Shouldn't the world of content not be restricted to just a visual medium? Hence, at{' '}
						<Gradient>UruMEE,</Gradient> we are affirmative that creators should share content in their
						desired form of medium in textual, musical, and graphical. <Gradient>UruMEE</Gradient> is a
						platform for the ingenious content creators to collaborate with newfangled contemporaries who
						envision a content in distinct forms than the one imagined and published by themselves. <br />
						<br />
						To sum it all, don't restrict your content to a single medium. Just post and relax, your content
						will band together with other talented creators to present your collaborated idea in different
						forms.
					</div>
					<div class="flex-child">
						<img id="img2" src={Wt2} />
					</div>
				</div>
			</div>
			<br />
			<br />

			<div class="menu2">
				<h3>How UruMEE stands out from its contemporaries ​​🤔</h3>
				<div class="flex-container1">
					<div class="flex-child" style={{ width: '100%' }}>
						At <Gradient>UruMEE,</Gradient> we foster creativity and innovation by encouraging and
						recognising content creators with inspiring ideas and ripping content. We bolster collaboration
						among creators to ensure content consumers are provided with intriguing and captivating content.
						We focus on providing a platform for <Gradient>passionate</Gradient>{' '}
						<Gradient>filmmakers,</Gradient> <Gradient>movie</Gradient> <Gradient>buffs</Gradient> and{' '}
						<Gradient>innovators</Gradient> filled with prolific ideas to share their tantalising and
						enthralling work with the entertainment-loving audiences. <br />
						<br />
						At <Gradient>UruMEE,</Gradient> we firmly believe in the concept of{' '}
						<Gradient>‘Together, we build better’,</Gradient> which inspired us to start this journey.{' '}
						<Gradient>UruMEE,</Gradient> in different ways, supports content creators who fancy thinking
						out-of-the-box ideas to add flavour and enkindle a new art form to their vision. We embolden
						content creators to envision their ideas from a different dimensional view-point.
					</div>
					<div class="flex-child">
						{' '}
						<img id="img3" src={Wt3} />
					</div>
				</div>
			</div>
			<br />
			<br />

			<div class="menu2">

				<div class="flex-container1">
					<div class="flex-child" id="lastCont">
						<h2>Out of Syllabus 😜</h2><Gradient>UruMEE</Gradient> is a great place for creators to share their diverse contents, and
						we're proud to be a launch pad for creativity and innovation. Our community is a great place to
						share your ideas and inspire others to redefine in their own style.
                    <br/>
                    <br/>
                    <div id="lastInst">
                    <b>For instance,</b>
						<br />
						<ul id="inst">
							<li style={{ listStyle: 'none' }}>
								<img src={Star} style={{width:'2.5%'}}/> A creator can upload a story and inspire other creators to upload a post
								containing dialogue/ screenplay/ visual enactment of that story/ song lyric/ soundtrack
								and many more inspired from that story.
							</li>
							<br />
							<li style={{ listStyle: 'none' }}>
								<img src={Star} style={{width:'2.5%'}}/> It just doesn't end there. Above is just one of the sample use cases of content
								creation and collaboration around <Gradient>media</Gradient> and{' '}
								<Gradient>entertainment.</Gradient> Even the sky is not the limit for exploring with our
								imagination to create and collaborate with <Gradient>UruMEE.</Gradient>
							</li>
						</ul>
						<br />
						We firmly believe that <Gradient>Text based contents</Gradient> have the potential to mould
						themselves into newer realities and art forms. They are the{' '}
						<Gradient>foundation of UruMEE</Gradient> in this <Gradient>movement</Gradient> to{' '}
						<Gradient>improve the quantity and quality in content creation.</Gradient> <br />
						<br />
						We value <Gradient>recognition</Gradient> above all else and for every collaboration that exists
						out of an idea/content, the creator (inspirer) is by default, highlited on the{' '}
						<Gradient>COLLAB </Gradient>post when uploaded and also by clicking the{' '}
						<Gradient>COLLAB</Gradient> icon	<Gradient>〘<img src={Collab} />〙,
						</Gradient> the inspired post(s) can be seen and appreciated.
                        </div>
					</div>
					<div class="flex-child">
						<img id="img4" src={Wt4} />
                        <img id="img51" src={Wt5} />
					</div>
				</div>
				<div class="flex-container1" id="mobInst">
					<div class="flex-child" style={{ width: '100%' }}>
						<b>For instance,</b>
						<br />
						<ul id="inst">
							<li style={{ listStyle: 'none' }}>
								<img src={Star} style={{width:'2.5%'}}/> A creator can upload a story and inspire other creators to upload a post
								containing dialogue/ screenplay/ visual enactment of that story/ song lyric/ soundtrack
								and many more inspired from that story.
							</li>
							<br />
							<li style={{ listStyle: 'none' }}>
								<img src={Star} style={{width:'2.5%'}}/> It just doesn't end there. Above is just one of the sample use cases of content
								creation and collaboration around <Gradient>media</Gradient> and{' '}
								<Gradient>entertainment.</Gradient> Even the sky is not the limit for exploring with our
								imagination to create and collaborate with <Gradient>UruMEE.</Gradient>
							</li>
						</ul>
						<br />
						We firmly believe that <Gradient>Text based contents</Gradient> have the potential to mould
						themselves into newer realities and art forms. They are the{' '}
						<Gradient>foundation of UruMEE</Gradient> in this <Gradient>movement</Gradient> to{' '}
						<Gradient>improve the quantity and quality in content creation.</Gradient> <br />
						<br />
						We value <Gradient>recognition</Gradient> above all else and for every collaboration that exists
						out of an idea/content, the creator (inspirer) is by default, highlited on the{' '}
						<Gradient>COLLAB </Gradient>post when uploaded and also by clicking the{' '}
						<Gradient>COLLAB</Gradient> icon	<Gradient>〘<img src={Collab} />〙,
						</Gradient> the inspired post(s) can be seen and appreciated.
					</div>
					<div class="flex-child">
						<img id="img5" src={Wt5} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Menu2;
