import { DISTANCE_TO_SCROLL_OPACITY } from '@/constants/scroll';
import { useEffect, useState } from 'react';

function useScroll() {
	const [isOnTop, setIsOnTop] = useState(true);
	const [isGoingUp, setIsGoingUp] = useState(false);

	useEffect(() => {
		let lastScrollValue = 0;

		function handleScroll() {
			setIsOnTop(window.scrollY <= DISTANCE_TO_SCROLL_OPACITY);
			if (lastScrollValue > window.scrollY) {
				setIsGoingUp(true);
			} else {
				setIsGoingUp(false);
			}

			lastScrollValue = window.scrollY;
		}

		document.addEventListener('scroll', handleScroll);

		return () => document.removeEventListener('scroll', handleScroll);
	}, []);

	return { isOnTop, isGoingUp };
}

export default useScroll;
