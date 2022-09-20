import styled from 'styled-components';

export const Box = styled.div`
	padding: 12px 12px;
	position: relative;
	bottom: 0;
	width: auto;
	left: 0;
	right: 0;

	@media screen and (max-width: 414px) {
		text-align: center;
	}
`;

export const Image = styled.img`
	width: 110%;
	@media screen and (max-width: 768px) {
		width: 135%;
	}
	@media screen and (max-width: 414px) {
		width: 55%;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1000px;
	margin: 0 auto;

	@media screen and (max-width: 414px) {
		text-align: center;
	}
`;

export const Column = styled.div`
	display: flex;
	@media screen and (max-width: 414px) {
		text-align: center;
	}
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	grid-gap: 18px;

	@media screen and (max-width: 768px) {
		grid-gap: 1px;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	}
	@media screen and (max-width: 414px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		display: contents;
	}
`;

export const Heading = styled.button`
	font-size: 14px;
	font-weight: bold;
	background: transparent;
	border: none;
	margin: 12px;

	@media screen and (max-width: 768px) {
		font-size: 12px;
		margin-left: 50px;
	}
	@media screen and (max-width: 414px) {
		font-size: 12px;
	}
`;
