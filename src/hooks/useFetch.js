import { useEffect, useState } from 'react';

export const useFetch = (url, options) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			try {
				const res = await fetch(url, options);
				const json = await res.json();

				setResponse(json);
				setIsLoading(false);
			} catch (error) {
				setError(error);
			}
		})();
	}, [options, url]);

	return { response, error, isLoading };
};
