import * as yup from 'yup';

const schema = yup.object({
	title: yup
		.string()
		.required('Поле обязательно для заполнения'),
	started_at: yup
		.string()
		.required('Поле обязательно для заполнения'),
	finished_at: yup
		.string()
		.required('Поле обязательно для заполнения'),
	description: yup
		.string()
		.required('Поле обязательно для заполнения'),
});

type FormData = yup.InferType<typeof schema>;

export { schema };
export type { FormData };
