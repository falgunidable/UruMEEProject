import React, { useEffect } from 'react';
import { Gradient } from '../component/Navbar/NavbarElements';
import './style.css';

function Terms(props) {
	const { to } = props;
	useEffect(
		() => {
			document.getElementById('topScroll').scrollIntoView({ behavior: 'smooth' });
			if (to === 'terms') terms();
			if (to === 'privacy') privacy();
			if (to === 'copyright') copyright();
		},
		[ to ]
	);

	const privacy = () => {
		document.getElementById('termsInfo').style.display = 'none';
		document.getElementById('privacyInfo').style.display = 'block';
		document.getElementById('copyrightInfo').style.display = 'none';
		document.getElementById('terms').style = 'none';
		document.getElementById('copy').style = 'none';
		document.getElementById('privacy').style.borderLeft = '2px solid #006AA6';
		document.getElementById('privacy').style.padding = '3px';
		document.getElementById('privacy').style.textShadow = '1px 1px 1px #006AA6';
	};
	const terms = () => {
		document.getElementById('termsInfo').style.display = 'block';
		document.getElementById('privacyInfo').style.display = 'none';
		document.getElementById('copyrightInfo').style.display = 'none';
		document.getElementById('privacy').style = 'none';
		document.getElementById('copy').style = 'none';
		document.getElementById('terms').style.borderLeft = '2px solid #006AA6';
		document.getElementById('terms').style.padding = '3px';
		document.getElementById('terms').style.textShadow = '1px 1px 1px #006AA6';
	};
	const copyright = () => {
		document.getElementById('privacyInfo').style.display = 'none';
		document.getElementById('termsInfo').style.display = 'none';
		document.getElementById('copyrightInfo').style.display = 'block';

		document.getElementById('privacy').style = 'none';

		document.getElementById('terms').style = 'none';
		document.getElementById('copy').style.borderLeft = '2px solid #006AA6';
		document.getElementById('copy').style.padding = '3px';
		document.getElementById('copy').style.textShadow = '1px 1px 1px #006AA6';
	};

	return (
		<div style={{ height: 'auto' }} id="topScroll">
			<br />
			<br />
			<br />
			<br />

			<div className="flex-container" id="topTerm">
				<div className="flex-child" style={{ width: '25%', marginTop: '70px' }}>
					<h4
						id="terms"
						style={{ borderLeft: '2px solid #006AA6', padding: '3px', textShadow: '1px 1px 1px #006AA6' }}
						onClick={terms}
					>
						Terms of Use
					</h4>
					<h4 id="privacy" style={{ padding: '5px' }} onClick={privacy}>
						Privacy Policy
					</h4>
					<h4 id="copy" style={{ padding: '5px' }} onClick={copyright}>
						Copyright Information
					</h4>
				</div>

				<div id="termsInfo" className="flex-child" style={{ width: '80%' }}>
					<h1>Terms of Use</h1>
					<h4>1. INTRODUCTION</h4>
					These Terms of Use (“Terms of Use”) apply to the use of the <Gradient>UruMEE</Gradient> mobile
					application (“Platform”) provided by the company{' '}
					<Gradient>UruMEE Social Tech Private Limited</Gradient> registered under the Indian Companies Act
					2013. Our platform (discussed in detail below) and these Terms of Use are governed by the Indian
					Criminal Code of 1860 and the Information Technology Act of 2000, which includes all amendments made
					to the platform and the rules below it. When you use our Platform, you agree to these Terms and
					Conditions. However, please note that we cannot guarantee that our Platform is compliant with the
					laws in any other country. If you would like to use our platform outside India, please ensure that
					you are authorised to do so. We ask that you follow our guidelines while using our platform. We have
					included these rules in this document. We would like you to read these Terms and Conditions and
					please note that by using our Platform, you agree to these Terms and Conditions. If you are using
					this platform outside of India, please comply with your local laws. These terms govern your use of
					our platform. Our privacy policy also applies to your use of our platform and describes how we
					collect, protect and disclose the information that results from your use of our web pages. Our
					contract includes these Terms of Use and Privacy Policy (the "Contract"). Thank you for reading and
					understanding the agreements. I agree to be bound by them. If you do not agree to (or cannot comply
					with) the Agreements, you may not use the Platform, but please let us know by email at{' '}
					<a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none'}}><Gradient> vanakkam@urumee.com</Gradient></a> so that we can try to find a solution. These Terms apply
					to all visitors, users and others who wish to access or use the Platform.<br />
					<br />
					<h4>2. COMMUNICATIONS</h4>
					By using our platform, you're agreeing to receive newsletters, marketing materials, and other
					information from us. However, you can choose not to receive any of our communications by following
					the unsubscribe link or by emailing at <a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none'}}><Gradient>vanakkam@urumee.com</Gradient></a>
					<br />
					<br />
					<h4>3. CONTESTS, SWEEPSTAKES AND PROMOTIONS</h4>
					Any campaigns, contests, sweepstakes, or other promotions made available through our platform may
					have different rules than these terms and conditions. We recommend you check the rules before
					participating. If you're planning on participating in any promotional activities, be sure to review
					the rules and our privacy policy. If the promotion rules conflict with these Terms of Use, the
					promotion rules will only hold.<br />
					<br />
					<h4>4. CONTENT</h4>
					Our platform provides you with the ability to post, link, store, share, and otherwise make available
					certain information, text, graphic, and audio. You are responsible for the content that you post on
					or through the Platform. This includes ensuring that the content is legal, reliable, and
					appropriate.<br />
					<br />
					By posting Content on or through the Platform, you represent and warrant that:
					<ul style={{ listStyle: 'none' }}>
						<li>
							<b>a. </b>You have the right to own and/ or use the Content and to grant us the rights and
							licences set forth in these Terms & Conditions, and
						</li>
						<li>
							<b>b. </b>Posting Content on or through the Platform does not infringe on individual or
							group privacy rights, publicity rights, copyrights, contract rights, or other rights. We
							reserve the right to terminate the account of a person who is found to be infringing on a
							copyright.
						</li>
						<li>
							<b>c. </b>You are responsible for retaining and protecting all rights to the Content you
							send, post, or display on or through the Platform. We are not responsible or responsible for
							content posted on or through the Platform by you or any third party. However, by posting
							content through the Platform, we grant us the right and licence to use, modify, publicly
							execute, publicly display, copy, and distribute such Content on and through the Platform.
						</li>
						<li>
							<b>d. </b>You agree that this licence gives us the right to make your Content available to
							other users of the Platform. They may also use your content in accordance with these Terms
							of Use.
						</li>
						<li>
							<b>e. </b>You agree that sharing UruMEE contents on other social media platforms is entirely
							dependent on your desires and needs and is your responsibility. The platform{' '}
							<Gradient>(UruMEE)</Gradient> is not responsible for this promotion.
						</li>
						<li>
							<b>f. </b>
							<Gradient>UruMEE</Gradient> has the right, but not the obligation, to monitor and edit
							user-generated content. In addition, Content found on or through this Platform is owned or
							used by UruMEE with permission. You may not distribute, modify, transmit, reuse, download,
							repost, copy all or part of such content for commercial or personal gain without a prior
							written permission from us.
						</li>
						<li>
							<b>g. </b>You agree that you are in control of your data and deleting such data would be
							deleted permanently and will not be available in any forms and shape.
						</li>
					</ul>
					<br />
					<h4>5. PROHIBITED USES</h4>
					You may use our Platform only for lawful purposes and in accordance with Terms and Conditions
					herein.<br />
					You agree to not use the Platform:
					<ul style={{ listStyle: 'none' }}>
						<li>
							<b>a. </b>In any way that violates any applicable national or international law or
							regulation.
						</li>
						<li>
							<b>b. </b>Attempting to abuse, harm, or abuse or harm minors, such as by exposing them to
							inappropriate content.
						</li>
						<li>
							<b>c. </b>To send or receive any advertisements or promotional materials, including "junk
							emails," "chain letters," "spam," or other similar solicitations.
						</li>
						<li>
							<b>d. </b>To impersonate or attempt to impersonate Company, an employee of a Company,
							another user, or any other individual or group.
						</li>
						<li>
							<b>e. </b>Any method that infringes the rights of others, or that is illegal, threatening,
							fraudulent or harmful in any way, or that is related to an illegal, illegal, fraudulent or
							harmful purpose or activity.
						</li>
						<li>
							<b>f. </b>To engage in any other conduct that restricts or inhibits anyone’s use or
							enjoyment of the Platform, or which, as determined by us, may harm, or offend Company or
							users of the Platform or expose them to liability.
						</li>
						<br />
						Additionally, you agree not to:
						<li>
							<b>g. </b>Use the Platform in a way that can disable, overload, damage, or prevent others
							from using it. This includes the ability to participate in real-time activities through the
							platform.
						</li>
						<li>
							<b>h. </b>Use robots, spiders, or other automated devices, processes, or means to access the
							platform for any purpose, including monitoring or copying materials on the platform.
						</li>
						<li>
							<b>i. </b>Use manual processes to monitor or copy materials on the Platform or use them for
							any other unauthorised purpose without prior written consent.
						</li>
						<li>
							<b>j. </b>Use any device, software, or routine that interferes with the proper working of
							the Platform.
						</li>
						<li>
							<b>k. </b>Introduce any viruses, trojan horses, worms, logic bombs, or other material which
							is malicious or technologically harmful.
						</li>
						<li>
							<b>l. </b>Attempt to gain unauthorised access to, interfere with, damage, or disrupt any
							parts of Platform, the server on which the Platform is stored, or any server, computer, or
							database connected to the Platform.
						</li>
						<li>
							<b>m. </b>Attack the Platform via a denial-of-service attack or a distributed
							denial-of-service attack.
						</li>
						<li>
							<b>n. </b>Otherwise attempt to interfere with the proper working of the Platform.
						</li>
					</ul>
					<br />
					<h4>6. ANALYTICS</h4>
					We may use third-party Service Providers to monitor and analyse the use of our Platform. As on date
					we have not engaged any such service provider.<br />
					<br />
					<h4>7. Accounts</h4>
					By creating an account with us, you ensure that you are over 18 years old and that the information
					you provide to us is always accurate, complete and up-to-date. If the information is inaccurate,
					incomplete, or out of date, your account on the platform may be terminated immediately. <br />
					<br />
					You are responsible for maintaining the confidentiality of your account and password, including but
					not limited to restricting access to your computer or account. You agree to accept responsibility
					for all activities or actions that occur under your account and/ or password, whether or not your
					password is on our platform or third party services. If you become aware of a security breach or
					unauthorised use of your account, you should be notified immediately. <br />
					<br />
					You may not use the name of an individual or organisation, or a name that cannot be legally used, or
					a name or trademark controlled by the rights of an individual or organisation other than you, as
					your user name without proper permission. You cannot use an offensive, vulgar, or obscene name as
					your username. <br />
					<br />
					We reserve the right, in our sole discretion, to refuse service, terminate your account, delete or
					edit content, or cancel your order.<br />
					<br />
					<h4>8. DEVICE PROPERTY</h4>
					We are taking steps to ensure that the platform is safe. However, it does not guarantee that the
					platform will be protected from hackers and virus attacks. To ensure security, make sure that your
					mobile device and computer have the necessary anti-malware and anti-virus software. We will do
					everything we can to protect the use of the platform, but keep in mind that we cannot consider any
					form of attack on the platform. In general, you need to prevent your mobile device and computer from
					being abused or tampered with.
					<h4>9. CONTENT GUIDELINES</h4>
					We proactively remove content that is not permitted by the Platform and violates our Content
					Guidelines as well as applicable Indian regulations. If such impermissible Content is brought to our
					attention, we may proceed to take the impermissible content down or ban user Accounts or both. If in
					the event you come across any content which violated the present Guidelines, we encourage you to
					report it. We as a Company, emphasise on the importance of freedom of expression, but in no manner
					whatsoever do we solicit or support Content that intends to cause discomfort, spread what may be
					under the ambit and purview of hate speech and abuse, promotes violence and illegal activities or
					impedes the creator or artist ecosystem on the Platform.<br />
					<br />
					<b>I. Adherence to Applicable Laws</b>
					<br />
					All content, including but not limited to content that you upload, post, comment, or share on our
					platform, must comply with Indian law, including but not limited to Indian Criminal Code 1860 and
					Information Technology Act. there is. 2000 and all rules and amendments made under those laws. We
					work with legal authorities and follow applicable law violation enforcement mechanisms. You may not
					upload, post, comment or share content that threatens India's unity, integrity, defence, security or
					sovereignty, foreign friendship or public order and morals. You may not post or engage in content
					that offends other countries, encourages the execution of crimes, or interferes with criminal
					investigations.<br />
					<br />
					<b>II. Nudity and Pornography</b>
					<br />
					Content which contains the following is prohibited on the Platform and will be considered as a
					strict violation of these Guidelines:<br />
					<ul style={{ listStyle: 'none' }}>
						<li>
							<b>A.</b>Obscene, sexually explicit, pornographic or nude material or images / videos that
							expose private areas (genitals, breasts and nipples, buttocks) or portray sexual activity.
						</li>
						<li>
							<b>B.</b>Videos or Images of UruMEE in compromising positions or content which portrays
							sexual actions or fetish or erotic intent or sexual arousal.
						</li>
						<li>
							<b>C.</b>Sextortion or revenge pornography.
						</li>
						<li>
							<b>D.</b>Bestiality or zoophilia.
						</li>
						<li>
							<b>E.</b>Content that exploits or endangers someone (eg, listing phone numbers or other
							personal information intended to exploit or endanger someone, including the purpose of
							promoting or soliciting prostitution or escort services);
						</li>
						<li>
							<b>F.</b>Content that is paedophile or related to child pornography (including without
							limitation, creation, promotion, glorification, transmission or browsing of child
							pornography); or
						</li>
						<li>
							<b>G.</b>Content that is indecent, immoral, or related to on rape, sexual objectification,
							non-consensual activities, and molestation.
						</li>
					</ul>
					<b>III. Harassment or Bullying</b>
					<br />
					Content which qualifies as a violation of these Guidelines includes, but is not limited to:<br />
					<ul style={{ listStyle: 'none' }}>
						<li>
							<b>A.</b>Posting abusive language or curse words, morphed images, and/or malicious
							recordings.
						</li>
						<li>
							<b>B.</b>The platform makes people objective, insulting, and harassing people based on race,
							caste, color, disability, religion, sexual orientation, sexual orientation, and other sexual
							orientations. That is not allowed. Similarly, it is strictly forbidden to blackmail or
							blackmail a person by any other means or based on the above.
						</li>
						<li>
							<b>C.</b>If someone blocks you from your account, don't try to contact them from another
							account. If users do not want to interact with you on the platform, we encourage you to
							respect this. The vice versa is also true.
						</li>
						<li>
							<b>D.</b>Any image or information of a person that is shared without their consent with an
							intent to harass, distress or endanger them.
						</li>
						<li>
							<b>E.</b>False information posted to harass someone for financial gain, or cause any injury
							to them
						</li>
						<li>
							<b>F.</b>However, if the issue contains critical discussions or deliberations by people
							featured in the news or with a large audience, we may allow it in accordance with the Terms
							and this Policy.
						</li>
					</ul>
					<br />
					<b>IV. Intellectual Property</b>
					<br />
					We strive to protect our intellectual property rights and consider infringement of such rights to be
					a serious offence. All content, including literature, music, drama, art, sound recordings, and film
					works, is subject to intellectual property protection. <br />
					<br />
					It is not permitted to post content on the Platform that is not original and is copied from an
					individual/ organisation that owns the intellectual property rights to such content / work. Content
					that infringes the intellectual property rights of third parties will be removed and strict measures
					will be taken against users who repeatedly fail. If you choose to re-share such content within the
					platform, do not remove attribution, watermarks, and original signatures that trust the genuine
					source of the content. In addition, obtain the required permission and give legitimate credit by
					assigning the name or original source to fellow users or other organisations/ individuals who own
					the intellectual property rights of such content.<br />
					<br />
					<b>V. Violence</b>
					<br />
					Violence includes content that offends users due to the cruelty of content, such as not limited to
					graphic images and videos depicting physical or animal cruelty aimed at praising or inciting
					violence or suffering. Content that encourages dangerous and illegal activity or praises
					individuals, groups or leaders involved in terrorism, organized violence or criminal activity is
					strictly prohibited. The platform may allow educational or informative content related to violence.
					Violent content and martial arts on the platform in the form of fictitious structures may be
					permitted in accordance with these guidelines.<br />
					<br />
					<b>VI. Hate speech and Propaganda</b>
					<br />
					Any content that promotes violence against individuals or groups of people with the aim of
					threatening, attacking, or insulting religion, race, caste, ethnicity, community, nationality,
					disability (physical or mental), illness, or gender is prohibited. Content that incites hatred or is
					intended to generate or disseminate hatred or hatred advertising, such as religion, caste,
					ethnicity, community, sexual orientation, or gender identity, is also not permitted. We do not
					maintain content that refers to individuals or groups of individuals as having inferior or negative
					implications, with the aim of promoting discrimination and justifying violence based on the above
					attributes.<br />
					<br />
					We recommend that you do not post ideologies of theories or hatreds that may offend or adversely
					affect your users, or post instigating comments. Subject to a clear intention to post such content
					on the Platform, we may allow such content for the purpose of raising awareness or challenging these
					issues.<br />
					<br />
					<b>VII. Abuse, Self-Injury or Suicide</b>
					<br />
					Content that tends to portray suicide or similar, content that encourages self-harm or harm, or
					content that encourages participation in dangerous activities is not permitted. Posting content
					related to physical, mental, sexual or psychological abuse, neglect, or abuse of anyone, children or
					adults, is severely criticized. Content that describes self-harm, praises self-harm or suicide, or
					explains how to do self-harm in any way is not permitted. In addition, content that identifies,
					tags, attacks, negatively attacks, or teases victims or survivors of psychological / physical abuse,
					abuse, self-harm, domestic violence, or other forms of violence is prohibited. <br />
					<br />
					We allow content aimed at helping, assisting, and helping people with such serious problems. We also
					allow users to share their experiences which may provide a coping mechanism for users in need of
					assistance, depending on their intent to post such content.<br />
					<br />
					<b>VIII. Illegal Activities</b>
					<br />
					We do not tolerate any content that supports or encourages illegal activity. Content related to
					organized crime, criminal activity, weapons, firearms, promotion/ sale/ use of explosives, violence
					or terrorist activities is prohibited. The sale of illegal goods and services, regulated goods,
					drugs and controlled substances, and the provision or sale of sexual services are strictly
					prohibited. Content that harasses, harms or offends children is not permitted. <br />
					<br />
					Users may not post content related to or encouraging money laundering or gambling. Users are
					permitted to post content that provides tutorials and instructions, or content that educates users
					about illegal and prohibited activities such as engaging in criminal activities, creating bombs,
					encouraging drug use and trading. Do not use our platform to solicit or promote transactions or
					gifts related to goods or services declared illegal by the Government of India. <br />
					<br />
					Impersonating another person (family, friends, celebrities, brands, other people / organisations,
					etc.) and posting false or misleading information on the Platform for personal or financial gain is
					considered fraudulent. increase. Content containing computer viruses, malware, or other computer
					code designed to limit the functionality of computer resources may not be uploaded to the platform.<br
					/>
					<br />
					<b>IX. Non-consensual (Personal) Content</b>
					<br />
					Posting or misuse of anyone else's personal content, data, or information (including images or
					videos of other Urumi, including those that do not expressly consent to the posting of such
					material) is not permitted. Do not post personal or intimate photos or videos without your
					permission or consent. Please do not post content that invades the privacy of others. We will take
					down such content. <br />
					<br />
					Disclosure of personal or sensitive personal information. This includes contact information,
					address, financial information, Aadhar numbers, health information, sexual or intimate images and
					videos, passport information, or threatening to disclose or use such information. However, it is not
					limited to these. Information is considered harassment and such activities are strictly
					unacceptable.<br />
					<br />
					<b>X. Misinformation</b>
					<br />
					Our goal is to combat the spread of false information on our platform. No content of any kind that
					intentionally disseminates false information, disinformation, hoaxes, or fake advertisements is
					permitted for the purpose of misleading users or the general public. Posting content that
					exaggerates existing messages by introducing untrue elements is prohibited. <br />
					<br />
					Misleading users, trying to create ways to tamper with content, being vulnerable or vulnerable,
					damaging an individual's reputation based on false information, or damaging their financial or
					political position. Content on such platforms is not allowed. Use a third-party fact checker to
					counter the threat of fake news. Based on this, if the content turns out to be virtually incorrect,
					we will proactively warn the user. We encourage you to take this into account and act accordingly.
					However, fake news should not be confused with satire or parody. Allow such content on the platform
					unless the content is misleading to other users and is intended to disseminate false information.<br
					/>
					<br />
					<h4>10. PLATFORM SECURITY</h4>
					<b>I. Reporting</b>
					<br />
					If you find content or activity that violates these guidelines, tap or click the Report button. If
					you report content, process and review it. If you determine that the content or activity is
					inappropriate for your platform, delete it. If you believe that the content on the Platform
					infringes your rights as a copyright owner, you can file a copyright infringement claim by sending
					an email to admin@urumee.com. This is subject to further review and action. The platform may contain
					content that you don't like, but it may not violate these guidelines. In this case, please unfollow
					or block these users.<br />
					<br />
					<b>II. Intermediary status and review of content</b>
					<br />
					We are intermediaries within the meaning of applicable law. We do not control what you post,
					comment, share, or say on the Platform and are not responsible for your behaviour (online as well as
					offline). Even if you access through our platform, we are not responsible for the services and
					functions provided by others. All responsibilities and responsibilities arising on our platform are
					strictly governed and limited by Indian law. We expect you to be responsible for what you post and
					what you see. If one of your users reports that your content violates these guidelines, we may take
					coercive action as necessary.
					<br />
					<br />
					<b>III. Grievance Policy</b>
					<br />
					<Gradient>UruMEE</Gradient> has a Grievance Policy to address your concerns regarding data safety,
					privacy, and other Platform usage concerns.<br />
					<br />
					​​There is no action, suit, inquiry, notice of violation, proceeding or investigation pending or, to
					the knowledge of the Company, threatened against or affecting the Company, any Subsidiary or any of
					their respective properties before or by any court, arbitrator, governmental or administrative
					agency or regulatory authority (federal, state, county, local or foreign) (collectively, an
					“Action”) which (i) adversely affects or challenges the legality, validity or enforceability of any
					of the Transaction Documents or the Securities or (ii) could, if there were an unfavourable
					decision, have or reasonably be expected to result in a Material Adverse Effect. Neither the Company
					nor any Subsidiary, nor any director or officer thereof, is or has been the subject of any Action
					involving a claim of violation of or liability under federal or state securities laws or a claim of
					breach of fiduciary duty. There has not been, and to the knowledge of the Company, there is not
					pending or contemplated, any investigation by the Commission involving the Company or any current or
					former director or officer of the Company. The Commission has not issued any stop order or other
					order suspending the effectiveness of any registration statement filed by the Company or any
					Subsidiary under the Exchange Act or the Securities Act.<br />
					<br />
					You may contact us through email at <a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none'}}><Gradient>vanakkam@urumee.com</Gradient></a>
					<br />
					<br />
					<b>IV. Right to Challenge</b>
					<br />
					If the content you upload or post, or your activity is reported by another user and removed from our
					platform, we will notify you of the deletion and why. If you believe your content has been deleted
					improperly, you can send an email to <a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none'}}><Gradient>vanakkam@urumee.com</Gradient></a> to challenge the
					deletion. You may want to review the content and determine if reposting to the platform is allowed.<br />
					<br />
					<b>V. Our actions against violators</b>
					<br />
					We will respond rigorously and promptly to those who violate these guidelines. If a profile is
					reported to violate these guidelines, it may be temporarily suspended. If you repeatedly violate
					this policy, we may be forced to permanently terminate your account and prohibit you from
					registering. We work with law enforcement agencies and law enforcement agencies as needed. Please
					note that we have no obligation to assist you.<br />
					<br />
					<h4>11. INTELLECTUAL PROPERTY</h4>
					The Platform and its original content (excluding user-supplied content), features, and features are
					the exclusive property of UruMEE and its licensors and will continue to do so. The platform is
					protected by national and international copyrights, trademarks, and other laws. UruMEE's trademarks
					may not be used in connection with any product or service without the prior written consent of
					UruMEE.<br />
					<br />
					<h4>12. User Content</h4>
					Certain areas of the Platform may enable you to post comments, send messages, correspond with others
					and/or otherwise post content (“User Content”) in connection with various features that Spectra may
					elect to offer, such as information libraries, email service, bulletin boards, chatrooms, electronic
					postcards, chats with special guests, e-mails, and forums to communicate with others (“Message
					Features''). You must use the Message Features in a responsible manner and you are fully responsible
					for all User Content that you provide to us or others. Your Licence to Us. By submitting User
					Content, you grant us and our designees a royalty-free, irrevocable, perpetual, non-exclusive,
					worldwide, fully sub-licensable, transferable, licence to publish, reproduce, distribute, display,
					perform, edit, adapt, modify, translate, create derivative works, make, sell, offer for sale,
					export, and otherwise use and exploit your User Content (or any portion thereof) in any way that we
					want and in any form, media, or technology now known or later developed. You hereby waive any moral
					rights you may have in your User Content in favour of Spectra and any of its designees. You
					represent that you have obtained all necessary permissions necessary to grant us those rights,
					including from any person identified in or implicated by your submission (including those shown in
					photographic content), and, in the case of minors, also from their parents or legal guardians, as
					appropriate. No Obligation to Publish. We are not obligated to publish, transmit or use your User
					Content. Spectra is not in any manner endorsing any User Content that it may publish or post on the
					Platform and cannot, and will not, vouch for its reliability. Spectra is not responsible for any
					User Content and has no duty to monitor User Content. You use any information contained in User
					Content at your own risk. Spectra and its designees have the right, in their sole discretion, to
					monitor, review, edit, remove, delete, disable, refuse, restrict, or terminate access to your User
					Content or the Platform (in whole or in part) at any time, without prior notice and in our sole
					discretion, for any or no reason. The obligations that you have to us under these Terms shall
					survive termination of the Platform, any use by you of the Platform, any User Content on the
					Platform, or these Terms. You will not continue to post any User Content that Spectra has previously
					advised you not to post.<br />
					<br />
					<h4>13. ERROR REPORTING AND FEEDBACK</h4>
					You can contact us directly at <a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none'}}><Gradient>vanakkam@urumee.com.</Gradient></a> Or through third-party
					websites and tools (“Feedback”) with information and feedback on bugs, suggestions for improvements,
					ideas, issues, complaints, and other platform-related matters. You shall acknowledge and agree that:
					<ul style={{ listStyle: 'none' }}>
						<li>
							<b>A. </b>you shall not retain, acquire, or assert any intellectual property right or other
							right, title, or interest in or to the Feedback.
						</li>
						<li>
							<b>B. </b>Companies may have development ideas like Feedback.
						</li>
						<li>
							<b>C. </b>Feedback does not contain confidential information or proprietary information from
							you or any third party; and
						</li>
						<li>
							<b>D. </b>We have no obligation to keep your feedback confidential. Transfer of ownership to
							the Feedback is not possible due to applicable mandatory laws, you grant Company and its
							affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable,
							unlimited, and perpetual right to use (including copy, modify, create derivative works,
							publish, distribute, and commercialise) Create Feedback in any manner and for any purpose.
						</li>
						<li>
							<b>E. </b>Our Platform may contain links to third party web sites or services that are not
							owned or controlled by the Company.
						</li>
					</ul>
					<h4>14. LINKS TO OTHER WEBSITES</h4>
					We have no control over and are not responsible for the content, privacy policies, or practices of
					third party websites or services. We make no representations regarding the provision of these
					companies / individuals or their websites. <br />
					<br />
					You acknowledge and agree that the company shall not be responsible directly, or indirectly, for any
					damage or loss caused or alleged to be caused by or in connection with use of or reliance on any
					such content, goods, or services available on or through any such third-party web sites or services.
					You may contact us, or through the website or service of such a third party. We strongly recommend
					that you read the Terms of Service and Privacy Policy of the third-party websites or services you
					visit.<br />
					<br />
					<h4>15. DISCLAIMER OF WARRANTY</h4>
					These services and the Platform provided by the Company is on an “as is” and “as available” basis.
					Company makes no representations or warranties of any kind, express or implied, as to the operation
					of their services, or the information, content or materials included therein. You expressly agree
					that your use of these services, their content, and any services or items obtained from us is at
					your sole risk.<br />
					<br />
					Neither company nor any person associated with the company makes any warranty or representation with
					respect to the completeness, security, reliability, quality, accuracy, or availability of the
					Platform. Without limiting the foregoing, neither company nor anyone associated with company
					represents or warrants that the Platform, their content, or any services or items obtained through
					the Platform will be accurate, reliable, error-free, or uninterrupted, that defects will be
					corrected, that the Platform or the server that makes it available are free of viruses or other
					harmful components or that the Platform or any services or items obtained through the Platform will
					otherwise meet your needs or expectations.<br />
					<br />
					Company hereby disclaims any statutory or other type of warranty, express or implied, including but
					not limited to warranties of merchantability, non-infringement, fitness for a particular purpose.
					The above does not affect any warranty that cannot be excluded or restricted under applicable law.<br
					/>
					<br />
					<h4>16. LIMITATION OF LIABILITY</h4>
					We are not responsible for any loss or damage whatsoever, arising directly or indirectly from any
					inaccuracy or incompleteness of any information or breach of any warranty or guarantee. warranties
					resulting from the actions of any user of the Platform. The Platform and services are provided "as
					is" and "as available" without any representations or warranties, express or implied, unless
					otherwise stated in writing. We do not guarantee the quality of the Services or the Platform,
					including its uninterrupted, timely, secure or error-free delivery, its continued compatibility on
					any device, or the correction of any errors. In no event shall we, or any of our affiliates,
					successors and assigns, and each investor, director, officer, employee, agent, or service provider
					service and their respective providers shall not be liable for special, incidental, punitive,
					direct, indirect, or consequential damages suffered as a result of another user's breach of the
					Terms or by use or depend on the Platform.<br />
					<br />
					<h4>17. INDEMNIFICATION</h4>
					You agree to indemnify, defend, and hold harmless us, and our subsidiaries, affiliates and agents
					and their respective officers, directors, employees, successors and assigns from and against any
					claim, proceeding, loss, damage, liability, cost, demand, or expense (including but not limited to
					attorney's fees) of any kind arising out of: <br />
					<ul style={{ listStyle: 'none' }}>
						<li>
							<b>a)</b> your access to or use of the Platform.
						</li>
						<li>
							<b>b)</b> any breach by you of your obligations under this Agreement.
						</li>
						<li>
							<b>c)</b> your violation of the rights of any third party, including any infringement of
							intellectual property, or of any privacy or consumer protection right.
						</li>
						<li>
							<b>d)</b> any violation of law or contractual obligation and any claims, demands, notices
							pursuant to such violation.
						</li>
						<li>
							<b>e)</b> your negligence or wilful misconduct
						</li>
						<li>
							<b>f)</b> This obligation will survive the termination of our Terms.
						</li>
					</ul>
					<br />
					<h4>18. ACCOUNTABILITY and TERMINATION</h4>
					We may terminate or suspend your account and prohibit access to the Platform immediately, without
					notice or liability, in our sole discretion, for any reason and without limit, including, but not
					limited to, breach of the Terms and Conditions. If you wish to terminate your account, you may
					simply stop using our Platform. All provisions of these Terms and Conditions that remain in effect
					after termination will remain in effect after termination, including, without limitation, title
					provisions, from disclaimers of warranty, indemnification and limitation of liability. In the event
					of any discrepancies and operational/operational issues, the management reserves the right to
					provide appropriate modifications to the service during the course of the transaction/business.
					business mentioned above. Management reserves the right to terminate service if the original
					founder/contract is misleading.<br />
					<br />
					<h4>19. GOVERNING LAW</h4>
					These Terms & Conditions shall be governed by and construed in accordance with the laws of India.
					Contracts governing laws applicable regardless of the principles of conflict law, and any dispute
					arising under this contract, shall be subject to the exclusive jurisdiction of the courts in
					Chennai, Tamil Nadu. ,India. Failure to enforce the rights or provisions of these Terms of Use will
					not be deemed a waiver of those rights. If any provision of these Terms of Use is determined by the
					court to be invalid or unenforceable, the remaining provisions of these Terms of Use will continue
					to be valid. These Terms of Use constitute the entire agreement between us regarding our platform
					and supersede our previous agreement regarding the platform.<br />
					<br />
					<h4>20. CHANGES TO SERVICE</h4>
					We reserve the right, in our sole discretion, to withdraw or change access to our Platform and the
					services or materials provided through it without notice. We are not responsible if, for any reason,
					all or part of the Platform is unavailable at any time or at any time. We may limit access to some
					or all of the Platform to users, including registered users.<br />
					<br />
					<h4>21. AMENDMENTS TO TERMS</h4>
					By posting the changed terms on this website, we may change the terms at any time. It is your
					responsibility to check these terms on a regular basis. Continued use of the Platform after the
					publication of the revised Terms means accepting and agreeing to the changes. Changes are binding
					and you should check this page regularly to confirm your changes. By continuing to access or use the
					Platform after the Amendment becomes effective, you agree to be bound by the Amended Terms. If you
					do not agree to the new terms, you will no longer be authorised to use the platform.<br />
					<br />
					<h4>22. WAIVER AND SEVERABILITY</h4>
					The company's waiver of the terms set forth in the Terms of Use shall not be deemed to be a further
					or ongoing waiver of those terms, a waiver of other terms, or a breach of enforcement by the
					company. The rights or provisions under the Terms of Use do not constitute a waiver of those rights
					or provisions. If a court or other court of competent jurisdiction determines that any provision of
					the Terms of Use is invalid, illegal, or unenforceable for any reason, that provision shall continue
					to be in full force for the remaining provisions of the Terms of Use shall be deleted or restricted
					to a minimum.<br />
					<br />
					<h4>23. ARBITRATION</h4>
					Except to the extent company seeks injunctive or other equitable relief to enforce provisions of
					this Agreement, and except for controversies, claims or disputes based on company's failure to pay
					any fees due hereunder when due; company's violation of any law; or customers use of the Marks, all
					controversies, claims or disputes between company and the customer arising out of or relating to{' '}
					<ul style={{ listStyle: 'none' }}>
						<li>
							<b>(i)</b> this Agreement or any other agreement between Company and customer
						</li>
						<li>
							<b>(ii)</b> the relationship between company and customer, or{' '}
						</li>
						<li>
							<b>(iii)</b> the validity of this Agreement or any other agreement between Company and
							customer shall be determined by arbitration with the Arbitrator mutually agreed by Company
							and the customer. Such arbitration shall be conducted before three arbitrators (unless the
							parties agree to one arbitrator) chosen as follows: Company and customer shall each select
							one arbitrator. These two arbitrators shall mutually agree on one other arbitrator to act as
							the third arbitrator. The decision of the arbitrators shall be final and binding upon all
							parties concerned.
						</li>
					</ul>
					Such decision shall be rendered within 30 days of the close of the arbitration hearing record. The
					arbitration proceeding shall be conducted at the office closest to the company's registered office.
					In any arbitration proceeding, Company and the customer agree that each must submit or file any
					claim which would constitute a compulsory counterclaim within the same proceeding as the claim to
					which it relates. Any claim not submitted or filed as required is forever barred. The arbitrator may
					not consider any settlement discussions or offers that might have been made by either party. The
					arbitration will be conducted on an individual, not a className wide basis, and the arbitration
					proceeding may not be consolidated with any other arbitration proceeding between the company and any
					other person. Judgement upon the award rendered by the arbitration may be entered in any court
					having competent jurisdiction thereof.
					<br />
					<br />
					<h4>24. ADVERTISING</h4>
					We allow advertisers to display their advertisements and other information in certain areas of the
					Website or Application, such as sidebar advertisements or banner advertisements. If you are an
					advertiser, you shall take full responsibility for any advertisements you place on the Website or
					Application and any services provided on the Website or Application on products sold through those
					advertisements. Further, as an advertiser, you warrant and represent that you possess all rights and
					authority to place advertisements on the Website or Application, including, but not limited to,
					intellectual property rights, publicity rights, and contractual rights. We simply provide the space
					to place such advertisements, and we have no other relationship with advertisers.<br />
					<br />
					<h4>25. ACKNOWLEDGEMENT</h4>
					By using the Platform or other services provided by us, you acknowledge that you have read these
					Terms and Conditions and agree to be bound by them.<br />
					<br />
					<h4>26. OBJECTIONABLE CONTENT DISCLAIMER</h4>
					There is no way to control the nature of User-generated content provided through the mobile app. You
					are solely responsible for your interaction with other users of our platform and for all content you
					post. We are not responsible for any damage or damage resulting from your interaction with the
					Content or other users of the Platform. We have the right to monitor your interactions with other
					users of the Platform and to take other steps to limit access to or use of materials that we or
					other users of the Platform may consider obscene. I reserve it, but I have no obligation. Lewd,
					lewd, dirty, overly violent, harassing, or other unfavourable (including, but not limited to,
					violating these Terms & Conditions).<br />
					<br />
					<h4>27. CONTACT US</h4>
					Please send your feedback, comments, requests for technical support by email:{' '}
					<a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none'}}><Gradient>vanakkam@urumee.com.</Gradient></a>
				</div>
				<div id="privacyInfo" className="flex-child" style={{ width: '80%', display: 'none' }}>
					<h1>Privacy Policy</h1>
					<h3>INTRODUCTION</h3>
					<Gradient>UruMEE </Gradient>Social Tech Private Limited is committed to protecting the privacy of
					visitors to our websites and/ or mobile application. This policy stipulates how we handle your
					personal information.<br />
					<br />
					<h4>A. WHAT DO WE COLLECT?</h4>
					We may collect, store, and use the following kinds of personal data.<br />
					<br />
					<b>Registration and Profile Information:</b>
					<br />
					When you sign up for an account or use our services, we will ask you for the following information:<br
					/>
					<ul style={{ listStyle: 'none' }}>
						<li>
							<b>A.</b> Full Name
						</li>
						<li>
							<b>B.</b> Gender
						</li>
						<li>
							<b>C.</b> Username
						</li>
						<li>
							<b>D.</b> Date of Birth
						</li>
						<li>
							<b>E.</b> Profile Picture
						</li>
						<li>
							<b>F.</b> Mobile Number
						</li>
						<li>
							<b>G.</b> Email address
						</li>
						<li>
							<b>H.</b> Any other relevant information as required from time to time
						</li>
					</ul>
					<br />
					<b>Communications:</b>
					<br />
					If you contact us directly, we may receive additional information about you. For example, when you
					reach us for assistance, we will receive your name, email address, phone number, and content of your
					support issue along with any other information you chose to provide.<br />
					<br />
					<b>Device Information:</b>
					<br />
					We receive information about the device and software you use to access our Services, including IP
					address, Web Browser type, OS Version, Phone Carrier and Manufacturer, application installations,
					device ID and push notification tokens.<br />
					<br />
					<b>Usage Information:</b>
					<br />
					To help us understand how you use our Services and to help us improve them, we automatically receive
					information about your interactions with them, like the pages or other content you view. The
					information you upload, the length of time you spend on a page, objects such as hyperlinks you click
					on, and the dates and times of your visits.<br />
					<br />
					<b>Contacts Information:</b>
					<br />
					User contact information is collected only for the purpose to allow users to communicate with
					friends (contacts only) and share content. Our app helps you build a network of friends in your
					contacts. This gives users a great user experience that makes it easy to connect with their
					contacts. The above data will only be collected with the consent of the individual user. Without
					your consent, our app will not collect contact information from you.<br />
					<br />
					<h4>B. HOW DO WE USE YOUR PERSONAL DATA?</h4>
					Personal Data submitted on our Platform will be used for the purposes specified in this Privacy
					Policy or in relevant parts of our Website/ Mobile Application.<br />
					<br />
					We may use your Personal Information:<br />
					<ul>
						<li>To provide, maintain, improve, and enhance our Services.</li>
						<li>
							To understand and analyse how you use our Services and develop new products, services,
							features, and functionality.
						</li>
						<li>
							To communicate with you, provide you with updates and other information relating to our
							Services, provide information that you request, respond to comments and questions, and
							otherwise provide customer support.
						</li>
						<li>To generate de-identified or aggregated data for our business purposes.</li>
						<li>To send you push notifications and text messages.</li>
						<li>To find and prevent fraud and respond to trust and safety issues that may arise.</li>
						<li>
							For compliance purposes, including enforcing our Terms of Service or other legal rights, as
							may be required by applicable laws and regulations, or as requested by any judicial process
							or governmental agency; and
						</li>
						<li>
							For other purposes for which we provide specific notice at the time the information is
							collected.
						</li>
					</ul>
					<br />
					<br />
					<h4>C. HOW DO WE SHARE THE INFORMATION WE COLLECT?</h4>
					We do not share or otherwise disclose the information we collect from or about you except as
					described below or otherwise disclosed to you at the time of the collection:<br />
					<br />
					<b>User Content:</b>
					<br />
					Our service is a media sharing networking service that allows you to view and share content. Your
					name, username, and other profile information will be visible to other users. Content shared by the
					Services will be displayed on the Services and may be viewed by other users who have been granted
					access to view the Content. Our platform is not responsible for the use of content by other users,
					so you should carefully consider whether to share it, what you share it with, and how you identify
					yourself on the platform. <Gradient>UruMEE</Gradient> is a media sharing network app that allows
					users to post texts, images, audio files, and videos via the platform's content feed and share them
					with friends and followers. With our app, users can network with their friends and followers to view
					other users' content or view their own content (text, audio, images, videos) only after their
					consent and approval. You can share it. In this way, the app acts as a social networking platform
					for end users. Our app does not collect content data from you without your consent. This content
					data is stored by us and we guarantee that we will not pass this data on to other third parties.<br />
					<br />
					<b>Analytics Partners:</b>
					<br />
					We may use analytics services such as Google Analytics to collect and process certain analytics
					data. These services may also collect information about your use of other websites, apps, and online
					resources.<br />
					<br />
					As required by Law and Similar Disclosures:<br />
					We may access, preserve, and disclose your information if we believe doing so is required or
					appropriate to:<br />
					<ul style={{ listStyle: 'none' }}>
						<li value="1">
							<b>1.</b> Comply with law enforcement requests and legal processes, such as a Court Order or
							subpoena.
						</li>
						<li>
							<b>2.</b> Respond to your requests; or
						</li>
						<li>
							<b>3.</b> Protect your, our, or others’ rights, property, or safety.
						</li>
					</ul>
					For the avoidance of doubt, the disclosure of your information may occur if you send any
					objectionable content on or through our services.<br />
					<br />
					<b>Merger, Sale, or Other Asset Transfer:</b>
					<br />
					We may transfer your information to service providers, advisors, potential transactional partners,
					or other third parties in connection with the consideration, negotiation, or completion of a
					corporate transaction in which we are acquired by or merged with another company, or we sell,
					liquidate, or transfer all or a portion of our assets.<br />
					<br />
					<b>Consent:</b>
					<br />
					We may also disclose your information with your permission.<br />
					<br />
					<h4>D. WHERE WE STORE YOUR PERSONAL INFORMATION</h4>
					We use Amazon Web Services, Google Firebase to store your data on its servers located in India and
					abroad. These Web Services implement the necessary Security measures to protect the loss, misuse and
					alteration of the information, details of which are available at Amazon Web Services, Google
					Firebase.<br />
					<br />
					<h4>E. YOUR CHOICES</h4>
					<b>Sharing Preferences:</b>
					<br />
					We provide you with settings to allow you to set your sharing preferences for content you share on
					our services. Certain information may always be publicly available to others, and other information
					is publicly viewable, you can adjust the settings in your account. Additional information regarding
					privacy settings can be found by reaching us at <a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none'}}><Gradient>vanakkam@urumee.com</Gradient></a>
					<br />
					<br />
					<b>Do Not Track:</b>
					<br />
					There is no accepted benchmark for how to respond to Do Not Track signals and they will not respond
					to such signals. If you choose not to provide the information we collect, some features of our
					services may not function as intended.<br />
					<br />
					<h4>F. THIRD PARTIES</h4>
					Our services may include links to other websites, apps, products, or services that we do not own or
					operate. We are not responsible for the privacy practices of these third parties. We encourage you
					to read their privacy policy before providing any information.<br />
					<br />
					<h4>G. SECURITY</h4>
					We make reasonable efforts to protect your information by using physical and electronic safeguards
					to enhance the security of the information we manage. However, we cannot guarantee the security or
					confidentiality of your information as the electronic transmission or storage of information is
					absolutely insecure.
					<br />
					<br />
					<h4>H. CHILDREN’S PRIVACY</h4>
					We do not knowingly collect, store or use personal information from children under the age of 13,
					and no part of our services is directed to children. If you learn that your child has provided
					personal information in violation of this privacy policy, please contact us at{' '}
					<a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none'}}><Gradient>vanakkam@urumee.com.</Gradient></a><br />
					<br />
					<h4>I. INTERNATIONAL VISITORS</h4>
					Our services are hosted in the United States and are intended for US visitors. If you choose to use
					our services from the European Union or other parts of the world, the laws governing the collection
					and use of data may differ from those of the United States. We may transfer your personal
					information to areas other than these areas. The United States transfers storage and processing. We
					may also transfer your information from the United States to other countries or regions in
					connection with the storage and processing of data, our response to your requests, and the operation
					of our services. By providing information, including personal data, on or for our services, you
					consent to such transfers, storage, and processing.<br />
					<br />
					<h4>J. UPDATE YOUR INFORMATION OR POSE A QUESTION</h4>
					You can use profile settings to update your account and profile information. If you have any
					questions about the privacy of our services or this privacy policy, please contact us at{' '}
					<a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none'}}><Gradient>vanakkam@urumee.com.</Gradient></a><br />
					<br />
					<h4>K. CHANGES TO THIS PRIVACY POLICY</h4>
					Changes to our privacy policy will be posted on this page and the revised version will be effective
					at the time of posting. If we make significant changes to the way we use or share personal
					information previously collected from you through our Services, we will try to notify you through
					our Services, email or other means.<br />
					<br />
					<h4>L. GRIEVANCE POLICY</h4>
					At <Gradient>UruMEE,</Gradient> we always strive to provide the best value to our users and the best
					experience in every situation. To provide this seamlessly, we have created this complaint policy to
					resolve all complaint-related issues from our customers in a highly efficient manner. We are always
					doing our best to provide a seamless transaction experience with the <Gradient>UruMEE</Gradient>{' '}
					app. In rare cases, users may encounter problems due to human or technical random errors. To address
					this type of issue, our complaints policy certainly helps our end users. <br />
					<br />
					<Gradient>UruMEE</Gradient> may allow users to purchase the <Gradient>UruMEE</Gradient> coins and
					creator's subscriptions by transferring their funds to their <Gradient>UruMEE</Gradient> account. In
					this case, various errors can lead to a situation where the user is deducted from their account
					without receiving the relevant goods / services / values ​​from <Gradient>UruMEE.</Gradient> To
					solve this kind of problem, there is an automated mechanism to detect back end problems. As soon as
					a problem is detected, the monetary value of the transaction in question will be automatically
					refunded to each end user's bank account (which we received) within hours or a day. However, it can
					take up to 3-5 business days for the bank to be processed and reflected in the end user's account.
					If you still want to communicate with us, you can contact us via{' '}
					<a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none'}}><Gradient>vanakkam@urumee.com.</Gradient></a> There, executives communicate and clarify user questions
					and provide appropriate solutions via chat / phone.
				</div>
				<div id="copyrightInfo" className="flex-child" style={{ width: '80%', display: 'none' }}>
					<h1>Copyright Information</h1>
					If you believe that any content posted on the <Gradient>UruMEE</Gradient> Website or Mobile
					Application infringes copyright, you may send us a notification including all relevant information
					to <a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none'}}><Gradient>vanakkam@urumee.com</Gradient></a>
					<h4>Copyright Notification Guidelines</h4>
					<Gradient>UruMEE</Gradient> respects third party’s copyright, and it is our policy to respond to all
					notifications about copyright infringement as established by applicable regulations. Once the
					notification complying with these Guidelines is received, <Gradient>UruMEE</Gradient> may remove or
					disable access to the allegedly infringing material or adopt further action that we consider
					appropriate, including disabling a user’s account. When taking such measures,{' '}
					<Gradient>UruMEE</Gradient> will attempt to contact the party that posted the content so that they
					may make any statement they deem appropriate according to applicable regulations.<br />
					<br />
					Copyright infringement notifications must meet the following requirements:
					<br />
					<ul>
						<li> The handwritten or electronic signature of the person submitting the notification.</li>
						<li>
							{' '}
							Identification of the copyrighted work claimed to have been infringed, or, if multiple
							copyrighted works, a list of such works.
						</li>
						<li>
							{' '}
							Identification of the material claimed to be infringing and that is to be removed or access
							to which is to be disabled, as well as sufficient information to allow{' '}
							<Gradient>UruMEE</Gradient> to locate that material.
						</li>
						<li>
							{' '}
							Information to allow <Gradient>UruMEE</Gradient> to contact the complaining party, such as
							an address, telephone number, and, if possible, an email address.
						</li>
						<li>
							{' '}
							A statement that the complaining party has reason to believe that the use of the material is
							not authorised by the copyright owner or the law.
						</li>
						<li> A statement that the information in the notification is accurate and true.</li>
					</ul>
					<br />
					<Gradient>UruMEE</Gradient> will follow the procedure provided by applicable regulations to ensure
					compliance with copyright. When a proper notification complying with the conditions above is
					received, <Gradient>UruMEE</Gradient> will remove or disable access to infringing materials as soon
					as possible. <Gradient>UruMEE</Gradient> will not necessarily send a confirmation regarding the
					removal/disabling.<br />
					<br />
					The statements by the party that posted the allegedly infringing content must also comply with the
					requirements for copyrights notifications. Note that you may be liable if the material infringes
					third party’s rights, so we recommend that if you are unsure, seek legal advice.
					<br />
					<br />
					<h4>UruMEE Copyright Contact Information:</h4>
					<a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none'}}><Gradient>vanakkam@urumee.com</Gradient></a>
					<br />
					<br />
					If you believe that the party posting the allegedly infringing material is a reoffending publisher,
					you may facilitate <Gradient>UruMEE</Gradient> the relevant information in order to verify and take
					the corresponding measures.<br />
					<br />
					If any of the above requirements is not fulfilled, the copyright infringement notification may be
					invalid.<br />
					<br />
					Thank you for your cooperation.<br />
					<br />
					<h4>Reporting Abuse</h4>
					<Gradient>UruMEE</Gradient> has a zero tolerance approach towards abusive content/files. To report
					abuse in relation to content or files please email <a href="mailto: vanakkam@urumee.com" style={{ textDecoration: 'none'}}><Gradient>vanakkam@urumee.com</Gradient></a> with a
					clear summary/description of the issue at hand.
				</div>
			</div>
		</div>
	);
}

export default Terms;
