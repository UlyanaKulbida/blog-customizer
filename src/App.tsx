import { CSSProperties, useState } from 'react';
import { defaultArticleState } from './constants/articleProps';
import {
	ArticleParamsForm,
	FormState,
} from './components/article-params-form/ArticleParamsForm';
import { Article } from './components/article';
import clsx from 'clsx';
import './styles/index.scss';
import styles from './styles/index.module.scss';

export const App = () => {
	//создаем состояния для каждого параметра
	//инициализируем их значениями по умолчанию из defaultArticleState
	const [fontFamilyOption, setFontFamilyOption] = useState(
		defaultArticleState.fontFamilyOption.value
	);
	const [fontSizeOption, setFontSizeOption] = useState(
		defaultArticleState.fontSizeOption.value
	);
	const [fontColor, setFontColor] = useState(
		defaultArticleState.fontColor.value
	);
	const [contentWidth, setContentWidth] = useState(
		defaultArticleState.contentWidth.value
	);
	const [backgroundColor, setBackgroundColor] = useState(
		defaultArticleState.backgroundColor.value
	);

	//Передаем функцию handleApply компоненту ArticleParamsForm,
	//которая обновляет состояния при нажатии на «Применить».
	const handleApply = (formState: FormState) => {
		setFontFamilyOption(
			formState.fontFamilyOption?.value ??
				defaultArticleState.fontFamilyOption.value
		);
		setFontSizeOption(formState.fontSizeOption.value);
		setFontColor(
			formState.fontColor?.value ?? defaultArticleState.fontColor.value
		);
		setContentWidth(
			formState.contentWidth?.value ?? defaultArticleState.contentWidth.value
		);
		setBackgroundColor(
			formState.backgroundColor?.value ??
				defaultArticleState.backgroundColor.value
		);
	};

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					// обновляем стиль main, используя состояния
					'--font-family': fontFamilyOption,
					'--font-size': fontSizeOption,
					'--font-color': fontColor,
					'--container-width': contentWidth,
					'--bg-color': backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm onApply={handleApply} />
			<Article />
		</main>
	);
};