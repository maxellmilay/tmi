import React from 'react';
import classNames from 'classnames';

interface PropsInterface {
	children?: JSX.Element | JSX.Element[];
	isOpen?: boolean;
}

function Dropdown(props: PropsInterface) {
	const { children, isOpen } = props;

	return (
		<div
			className={classNames('absolute top-10 p-2 bg-white', {
				block: isOpen,
				hidden: !isOpen,
			})}
		>
			{children}
		</div>
	);
}

export default Dropdown;
