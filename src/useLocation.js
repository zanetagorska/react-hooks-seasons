import { useState, useEffect } from 'react';

export default () => {
	const [ lat, setLat ] = useState(null);
	const [ errorMessage, setError ] = useState('');

	const checkUserGeolocation = () => {
		window.navigator.geolocation.getCurrentPosition(
			(position) => setLat(position.coords.latitude),
			(err) => setError(err.message)
		);
	};

	useEffect(() => {
		checkUserGeolocation();
	}, []);

	return [ lat, errorMessage ];
};
