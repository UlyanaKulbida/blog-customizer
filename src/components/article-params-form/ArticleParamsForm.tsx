import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false); // добавлено состояние с помощью хука
	const [selectedFontFamily, setSelectedFontFamily] =
		useState<OptionType | null>(defaultArticleState.fontFamilyOption);
	const [selectedFontColors, setSelectedFontColors] =
		useState<OptionType | null>(defaultArticleState.fontColor);
	const [selectedBackgroundColors, setSelectedBackgroundColors] =
		useState<OptionType | null>(defaultArticleState.backgroundColor);
	const [selectedContentWidthArr, setSelectedContentWidthArr] =
		useState<OptionType | null>(defaultArticleState.contentWidth);
	const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(
		fontSizeOptions[0]
	);

	// обавлен обработчик для переключения состояния
	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleToggle} />
			{isOpen && <div className={styles.overlay} onClick={handleToggle} />}{' '}
			{/* затемнение фона при открытии */}
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						options={fontFamilyOptions}
						selected={selectedFontFamily}
						onChange={setSelectedFontFamily}
					/>
					<RadioGroup
						title='Размер шрифта'
						name={RadioGroup.name}
						options={fontSizeOptions}
						selected={selectedFontSize}
						onChange={setSelectedFontSize}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={selectedFontColors}
						onChange={setSelectedFontColors}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={selectedBackgroundColors}
						onChange={setSelectedBackgroundColors}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={selectedContentWidthArr}
						onChange={setSelectedContentWidthArr}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
