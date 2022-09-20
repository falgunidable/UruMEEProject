import React from 'react';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextProps {
	colors: string[],
	[x: string]: any
}

const GradientText = ({ colors, ...rest }: GradientTextProps) => {
	return (
		<MaskedView>
			<LinearGradient colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
		</MaskedView>
	);
};

export default GradientText;
