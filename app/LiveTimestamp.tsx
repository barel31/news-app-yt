'use client';

import { useState } from 'react';
import TimeAgo from 'react-timeago';

type Props = {
	time: string;
	classes?: string;
};

function LiveTimestamp({ time, classes }: Props) {
	const [rawTime, setRawTime] = useState(false);

	if (!time) return null;

	const date = new Date(time);

	return (
		<p
			className={`cursor-help ${classes} ${rawTime && `text-xs`}`}
			onClick={() => setRawTime(!rawTime)}>
			{rawTime ? (
				date.toString()
				// `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`
			) : (
				<TimeAgo date={time} />
			)}
		</p>
	);
}

export default LiveTimestamp;
