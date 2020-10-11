import { useEffect } from 'react';

/**
 * Countdown Timer
 * @param {boolean} bool to trigger timer
 * @param {function} fn to control the count outside of useEffect
 * @param {number} time the number that will count down or up
 * @param {number} limit the last number to reach
 */
const useTimer = (bool, fn, time = 0, limit = 0) => {
	useEffect(() => {
		const timer = setTimeout(() => fn(true), 1000);
		if (bool) {
			if (time === limit) {
				fn(false);
				clearTimeout(timer);
			}
		} else {
			return clearTimeout(timer);
		}
	}, [bool, fn, time, limit]);
};

export default useTimer;
