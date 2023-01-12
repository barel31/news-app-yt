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

	return (
		<p
			className={`cursor-help ${classes}`}
			onClick={() => setRawTime(!rawTime)}>
			{rawTime ? time : <TimeAgo date={time} />}
		</p>
	);
}

export default LiveTimestamp;
