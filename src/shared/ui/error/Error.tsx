import React, { FC } from 'react'

type TError = {
	error: string;
};

const Error: FC<TError> = ({ error }) => {
	return <p className='text-[#B00020] text-[10px]'>{error}</p>;
};

export { Error };
