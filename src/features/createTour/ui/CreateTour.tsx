import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { yupResolver } from '@hookform/resolvers/yup';

import {
	BaseButton,
	BaseInput,
	Error,
	Loader,
	Wrapper
} from '../../../shared/ui';
import { FormData, schema } from '../lib';
import createTourModel from '../model';

const CreateTour: FC = observer(() => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: yupResolver(schema) });

	const onSubmit = (dto: FormData) => {
		console.log('==========>dto', dto);
		createTourModel.setTour({
			title: dto.title.trim(),
			description: dto.description.trim(),
			started_at: dto.started_at.trim(),
			finished_at: dto.finished_at.trim(),
			status: 'OPENED'
		});
	};

	if (createTourModel.loading) {
		return <Loader />;
	}

	return (
		<Wrapper>
			<div className='flex flex-col gap-[20px]'>
				<h1 className='font-bold lg:mb-0 mb-4 text-[#242424] text-2xl lg:text-5xl'>
					Новый турнир
				</h1>
				<form
					className='w-[900px] bg-[#FFF] shadow-lg m-auto px-[168px] py-[60px] rounded-[10px] gap-[30px] flex flex-col'
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className='flex flex-col gap-[10px]'>
						<BaseInput
							placeholder='Название турнира'
							type='text'
							{...register('title')}
							error={errors.title?.message ?? ''}
						/>
						<BaseInput
							placeholder='Описание'
							type='text'
							{...register('description')}
							error={errors.description?.message ?? ''}
						/>
						<div className='flex flex-row justify-between gap-[20px]'>
							<BaseInput
								type='datetime-local'
								{...register('started_at')}
								error={errors.started_at?.message ?? ''}
							/>
							<BaseInput
								type='datetime-local'
								{...register('finished_at')}
								error={errors.finished_at?.message ?? ''}
							/>
						</div>
						<input
							className='px-[12px] py-[12px] outline-0 rounded-[10px] bg-[#ECF1F7] w-[100%]'
							value='Олимпийская система'
							disabled={true}
							type='text'
						/>
					</div>
					<BaseButton title='Создать' className={'py-3'} />
					{createTourModel.error && <Error error={createTourModel.error} />}
				</form>
			</div>
		</Wrapper>
	);
});

export { CreateTour };
