import { DISTANCE_TO_SCROLL_OPACITY } from '@/constants/scroll';
import { useEffect, useState } from 'react';

function useScroll() {
	const [isOnTop, setIsOnTop] = useState(true);

	useEffect(() => {
		function handleScroll() {
			setIsOnTop(window.scrollY <= DISTANCE_TO_SCROLL_OPACITY);
		}

		document.addEventListener('scroll', handleScroll);

		return () => document.removeEventListener('scroll', handleScroll);
	}, []);

	return [isOnTop];
}

export default useScroll;
