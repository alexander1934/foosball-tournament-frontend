import * as yup from 'yup';

const schema = yup.object({
	login: yup
		.string()
		.required('Поле обязательно для заполнения'),
	password: yup
		.string()
		.required('Поле обязательно для заполнения')
		.min(8, 'Пароль не должен быть менее 8 симоволов')
		.max(20, 'Пароль не может быть более 20 символов')
		.matches(/^(?! )(?!.* $)(?!(?:.* ){2}).*$/, 'Уберите лишние пробелы'),
});

type FormData = yup.InferType<typeof schema>;

export { schema };
export type { FormData };
