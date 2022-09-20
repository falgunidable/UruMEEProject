import React, { useEffect } from 'react';
import Plus from '../assets/add.png';
import Minus from '../assets/minus.png';
import FAQ from '../assets/faq.png';
import { Gradient } from '../component/Navbar/NavbarElements';
import Collab from '../assets/collab.svg';
import  {Link} from 'react-router-dom';

function Menu3() {
	useEffect(() => {
		document.getElementById('styleMenu3').scrollIntoView({ behavior: 'smooth' });
	}, []);

	const display = () => {
		document.getElementById('first').style.display = 'block';
		document.getElementById('plus1').style.display = 'none';
		document.getElementById('minus1').style.display = 'block';
		document.getElementById('1').style.display = 'none';
		document.getElementById('11').style.display = 'block';
	};
	const block = () => {
		document.getElementById('first').style.display = 'none';
		document.getElementById('plus1').style.display = 'block';
		document.getElementById('minus1').style.display = 'none';
		document.getElementById('1').style.display = 'block';
		document.getElementById('11').style.display = 'none';
	};
	const display2 = () => {
		document.getElementById('second').style.display = 'block';
		document.getElementById('plus2').style.display = 'none';
		document.getElementById('minus2').style.display = 'block';
		document.getElementById('2').style.display = 'none';
		document.getElementById('22').style.display = 'block';
	};
	const block2 = () => {
		document.getElementById('second').style.display = 'none';
		document.getElementById('plus2').style.display = 'block';
		document.getElementById('minus2').style.display = 'none';
		document.getElementById('2').style.display = 'block';
		document.getElementById('22').style.display = 'none';
	};
	const display3 = () => {
		document.getElementById('third').style.display = 'block';
		document.getElementById('plus3').style.display = 'none';
		document.getElementById('minus3').style.display = 'block';
		document.getElementById('3').style.display = 'none';
		document.getElementById('33').style.display = 'block';
	};
	const block3 = () => {
		document.getElementById('third').style.display = 'none';
		document.getElementById('plus3').style.display = 'block';
		document.getElementById('minus3').style.display = 'none';
		document.getElementById('3').style.display = 'block';
		document.getElementById('33').style.display = 'none';
	};
	const display4 = () => {
		document.getElementById('fourth').style.display = 'block';
		document.getElementById('plus4').style.display = 'none';
		document.getElementById('minus4').style.display = 'block';
		document.getElementById('4').style.display = 'none';
		document.getElementById('44').style.display = 'block';
	};
	const block4 = () => {
		document.getElementById('fourth').style.display = 'none';
		document.getElementById('plus4').style.display = 'block';
		document.getElementById('minus4').style.display = 'none';
		document.getElementById('4').style.display = 'block';
		document.getElementById('44').style.display = 'none';
	};
	const display5 = () => {
		document.getElementById('fifth').style.display = 'block';
		document.getElementById('plus5').style.display = 'none';
		document.getElementById('minus5').style.display = 'block';
		document.getElementById('5').style.display = 'none';
		document.getElementById('55').style.display = 'block';
	};
	const block5 = () => {
		document.getElementById('fifth').style.display = 'none';
		document.getElementById('plus5').style.display = 'block';
		document.getElementById('minus5').style.display = 'none';
		document.getElementById('5').style.display = 'block';
		document.getElementById('55').style.display = 'none';
	};
	const display6 = () => {
		document.getElementById('sixth').style.display = 'block';
		document.getElementById('plus6').style.display = 'none';
		document.getElementById('minus6').style.display = 'block';
		document.getElementById('6').style.display = 'none';
		document.getElementById('66').style.display = 'block';
	};
	const block6 = () => {
		document.getElementById('sixth').style.display = 'none';
		document.getElementById('plus6').style.display = 'block';
		document.getElementById('minus6').style.display = 'none';
		document.getElementById('6').style.display = 'block';
		document.getElementById('66').style.display = 'none';
	};
	const display7 = () => {
		document.getElementById('seventh').style.display = 'block';
		document.getElementById('plus7').style.display = 'none';
		document.getElementById('minus7').style.display = 'block';
		document.getElementById('7').style.display = 'none';
		document.getElementById('77').style.display = 'block';
	};
	const block7 = () => {
		document.getElementById('seventh').style.display = 'none';
		document.getElementById('plus7').style.display = 'block';
		document.getElementById('minus7').style.display = 'none';
		document.getElementById('7').style.display = 'block';
		document.getElementById('77').style.display = 'none';
	};
	return (
		<div id="styleMenu3">
			<br />
			<br />
			<br />

			<img id="faq" src={FAQ} />
			<br />
			<br />
			<div id="faqt">
	           <div class="flex-container">
        <div class="flex-child" style={{width:'60%'}}><h4>How can we earn UruMEE Dubs?</h4></div>
        <div class="flex-child"><button class="buttonStyle" id="plus1" onClick={display}>
        <img class="imgSize" src={Plus} />
    </button>
    <button class="buttonStyle" id="minus1" onClick={block} style={{display:'none'}}>
        <img src={Minus} class="imgSize"/>
    </button></div>
        </div>
        <div id="first">You can earn <Gradient>UruMEE</Gradient> <Gradient>Dubs</Gradient> through your interactions within the app, such as
            <br/><br/>
                <Gradient>
                &#x2022; Sign up - 50 dubs<br/>
                &#x2022; New Post - 5 dubs<br/>
                &#x2022; Collab - 7 dubs<br/>
                &#x2022; Follow other user - 3 dubs<br/>
                &#x2022; Like - 3 dubs<br/>
                &#x2022; Comment - 3 dubs<br/>
                &#x2022; Bookmark - 2 dubs<br/>
                &#x2022; Turns on push notifications - 10 dubs<br/>
                &#x2022; For every referral - 15 dubs<br/>
                &#x2022; Campaign new post - 10 dubs<br/>
                &#x2022; Campaign post Collab - 15 dubs
                </Gradient>
            </div>
        <hr class="hrline" id="1" style={{width:"64%",float:'left'}}/><br/>
        <hr class="hrline" id="11" style={{display:'none'}}/>
        
        <div class="flex-container">
        <div class="flex-child" style={{width:'60%'}}><h4>What do we do with the UruMEE Dubs?</h4></div>
        <div class="flex-child"><button class="buttonStyle" id="plus2" onClick={display2}>
        <img id="plu2" src={Plus} class="imgSize" />
    </button>
    <button class="buttonStyle" id="minus2" onClick={block2} style={{display:'none'}}>
        <img id="min2" src={Minus} class="imgSize"/>
    </button></div>
        </div>
       
        <div id="second"><Gradient>UruMEE</Gradient> <Gradient>Dubs</Gradient> can be redeemed to make use of many exciting gamifying user experiences within the app. First thing out of the pipeline, soon creators can redeem their <Gradient>Dubs</Gradient> to promote their content to other users on the platform thereby widening their target audience and garnering more attention to their creations.</div><br/>
        
        <hr class="hrline" id="2" style={{width:"64%",float:'left'}}/><br/>
        <hr class="hrline" id="22" style={{display:'none'}}/>
        
        <div class="flex-container">
        <div class="flex-child" style={{width:'60%'}}><h4>What are Collabs and how do we do it?</h4></div>
        <div class="flex-child"><button class="buttonStyle" id="plus3" onClick={display3}>
        <img id="plu3" src={Plus} class="imgSize" />
    </button>
    <button class="buttonStyle" id="minus3" onClick={block3} style={{display:'none'}}>
        <img id="min3" src={Minus} class="imgSize"/>
    </button></div>
        </div>
        
        <div id="third">
            <Gradient>Collabs</Gradient> are posts that are inspired from other posts on the platform. By doing so, we can maintain the transparency of content creation and pass on the due credits thereby to grow a very healthy and organic content creation environment.<br/>
            Clicking on <Gradient>Collab </Gradient>icon<Gradient>〘<img src={Collab} />〙</Gradient>on posts allows users to add a new collab, browse through previously Collabed posts, and also look at the inspired post if this present one was a collab post to it.
        </div><br/>
        
        <hr class="hrline" id="3" style={{width:"64%",float:'left'}}/><br/>
        <hr class="hrline" id="33" style={{display:'none'}}/>
        
        <div class="flex-container">
        <div class="flex-child" style={{width:'60%'}}><h4>How many of our posts will actually reach our followers?</h4></div>
        <div class="flex-child"><button class="buttonStyle" id="plus4" onClick={display4}>
        <img id="plu4" src={Plus} class="imgSize" /></button>
    <button class="buttonStyle" id="minus4" onClick={block4} style={{display:'none'}}>
        <img id="min4" src={Minus} class="imgSize"/></button></div>
        </div>
       
        <div id="fourth">
            At<Gradient> UruMEE,</Gradient> you will always reach 100% of your followers, instead of the 4-10% the other social media platforms offer without sponsored posts.
        </div><br/>
        
        <hr class="hrline" id="4" style={{width:"64%",float:'left'}}/><br/>
        <hr class="hrline" id="44" style={{display:'none'}}/>
        
        <div class="flex-container">
        <div class="flex-child" style={{width:'60%'}}><h4>How can I download the App?</h4></div>
        <div class="flex-child"><button class="buttonStyle" id="plus5" onClick={display5}>
        <img id="plu5" src={Plus} class="imgSize" /></button>
    <button class="buttonStyle" id="minus5" onClick={block5} style={{display:'none'}}>
        <img id="min5" src={Minus} class="imgSize"/></button></div>
        </div>
        
        <div id="fifth">
            We will be soon available on Google Play store and Apple App store.
            Please stay in touch with us by following <Link to="/socialsTab" style={{textDecoration:'none'}}> <Gradient>our socials</Gradient></Link> and joining our <a href= "https://discord.gg/H9z6Z7KG5J" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}><Gradient>Discord</Gradient> <Gradient>community.</Gradient></a>
        </div><br/>
        
        <hr class="hrline" id="5" style={{width:"64%",float:'left'}}/><br/>
        <hr class="hrline" id="55" style={{display:'none'}}/>
        
         <div class="flex-container">
        <div class="flex-child" style={{width:'60%'}}><h4>How do I sign Up?</h4></div>
        <div class="flex-child"><button class="buttonStyle" id="plus6" onClick={display6}>
        <img id="plu6" src={Plus} class="imgSize" /></button>
    <button class="buttonStyle" id="minus6" onClick={block6} style={{display:'none'}}>
        <img id="min6" src={Minus} class="imgSize"/></button></div>
        </div>
        
        <div id="sixth">
            You can sign up with just an email/ phone number and a password. Alternatively, you can also onboard through your social logins such as Google, Apple or Facebook. 
        </div><br/>
            
        <hr class="hrline" id="6" style={{width:"64%",float:'left'}}/><br/>
        <hr class="hrline" id="66" style={{display:'none'}}/>
        
        <div class="flex-container">
        <div class="flex-child" style={{width:'60%'}}><h4>How safe is UruMEE in terms of Data policy?</h4></div>
        <div class="flex-child"><button class="buttonStyle" id="plus7" onClick={display7}>
        <img id="plu7" src={Plus} class="imgSize" /></button>
    <button class="buttonStyle" id="minus7" onClick={block7} style={{display:'none'}}>
        <img id="min7" src={Minus} class="imgSize"/></button></div>
        </div>
        
        <div id="seventh">
            <Gradient>UruMEE</Gradient> is a safer platform built for <Gradient>ALL</Gradient> striving to grow a very positive yet creative community with strict content moderation policies. We sincerely value User’s data and privacy. Hence, we are strictly against monetising them for strange pop-up and timeline ads that target user’s browsing history and cookies.
        </div><br/>
        
        <hr class="hrline" id="7" style={{width:"64%",float:'left'}}/><br/>
        <hr class="hrline" id="77" style={{display:'none'}}/>
			</div>
			<br />
			<br />
			<br />
		</div>
	);
}

export default Menu3;
