import FadeIn from '@/components/fadeIn/FadeIn'
import Figure from '@/components/figure/Figure'
import Htag from '@/components/Htag/Htag'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Лонгрид как выбрать сайт',
	description:
		'На этой странице вы тезисно узнаете, как подобрать себе сап, какие критерии важно учесть и немного о ценах'
}

export default function HomePage() {
	return (
		<FadeIn className='cont prose ind !mx-auto'>
			<Htag tag='h1' className='text-4xl font-bold text-center'>
				Как выбрать сап
			</Htag>
			<Htag tag='h2' className='text-center'>
				Ключевые параметры выбора сапа:
			</Htag>
			<Figure
				src='/scheme.png'
				caption='Схема выбора сапа'
				height={600}
				width={600}
				imageClass='m-auto border-[1px] border-gray-300 p-1'
				priority
			/>
			<ol>
				<li>
					<strong>Тип сапа.</strong>
					<br />
					Определитесь с задачами. Сапы глобально делятся на прогулочные
					(семейные, для путешествий) и спортивные (гоночные, туринговые).
					Туринговые - такие длинные и очень узкие, похожие на каноэ, они очень
					скоростные и маневренные, но для прогулочных сплавов по рекам
					Подмосковья не подходят. Прогулочные сапы идеальны для новичков:
					достаточно широки и устойчивы, хоть и бывают разных размеров:
					двухместные или семейные для неспешного катания вдвоем, на них удобно
					лежать и загорать, или для активного отдыха и быстрых заездов.
				</li>
				<li>
					<strong>Материал сапа:</strong>
					<br /> Бывают доски надувные, а бывают жесткие из композитных
					материалов. Надувные или жесткие. На речной сап сплав удобно
					отправляться с надувным сапом - его удобно перевозить и хранить. При
					повреждении можно заклеить и использовать дальше. Обратите внимание,
					что сапы бывают двухслойные и однослойные. Выбирайте двухслойный - он
					может выдержать поверхностное касание проволокой или арматурой, а в
					воде они встречаются часто.
				</li>
				<li>
					<strong>Габариты:</strong>
					<ul>
						<li>
							Из важного - длина. Оптимально - 335 -355 см. Это 11 или 11,5
							футов.
						</li>
						<li>Про ширине примерно 81 см. </li>
						<li>На таких сапах можно комфортно загорать и сидеть вдвоем.</li>
						<li>На 10,5 при 79 уже придется изрядно ловить равновесие.</li>
					</ul>
				</li>
				<li>
					<strong>Курсовая устойчивость:</strong> <br />
					Выбирая прогулочный сап обращайте внимание на количество плавников.
					Один есть всегда, но если по бокам есть еще два маленьких - это
					обеспечит вам лучшую курсовую устойчивость, вас не будет разворачивать
					на ветру.
				</li>
				<li>
					<strong>Форма носа доски.</strong>
					<br /> Чем острее - тем быстрее. Легче режет волны. А волны могут дать
					не только на море, но и нехилая такая рябь на озере.
				</li>
				<li>
					<strong>Крепления плавника</strong>
					<br />
					Это не самый существенный момент, но все же удобнее и надежнее
					использовать крепление на винт, нежели на пластиковую заглушку. Это к
					вопросу качества.
				</li>
				<li>
					<strong>Комплектация</strong>
					<p className='mt-0'>
						Обычно в стандартной комплектации уже есть сумка, ручной насос, лиш
						(это то, чем можно прицепить сап к ноге или использовать его для
						швартовки), весло, рем. комплект. Часто даже чехол для телефона. На
						больших заплывах мы используем специальный автомобильный насос для
						сапов, купили его, чтобы не перетрудиться)) один сап качается минут
						7-10. Что ручным насосом, что автоматическим.
					</p>
					<p>
						По потребностям выбирайте количество «багажников» в сапе или его
						возможность закрепить сидение и трансформировать в каяк. Мне хватает
						одного багажника (чтобы туда поместить герметичный мешок с вещами,
						шлепки, сумку с едой).
					</p>
					<p>
						Предсказуемости ради также посмотрите на вес сумки в сложенном
						состоянии. 9-13 кг в среднем. У меня 11 вроде.
					</p>
					<p>
						Подбирая сап, учитывайте весовую нагрузку. Ну, и свой рост. К
						примеру, если вы ростом под два метра, не берите 10 футов) Также
						максимальная весовая нагрузка обычно указана изготовителем, обратите
						внимание на грузоподъемность.
					</p>
				</li>
			</ol>
			<Htag tag='h3'>По ценам</Htag>
			<ul>
				<li>
					Скорее всего, вам понравится сап шириной 80-81 см - стабильность на
					воде
				</li>
				<li>Длиной 335-355 см (11-11,6 футов)</li>
				<li>Грузоподъемность 160-200</li>
				<li>С тремя плавниками</li>
				<li>
					Оптимальный бюджет 15000-35000, ну, максимум 45000 р все, что выше по
					цене - уже уровень pro
				</li>
			</ul>
			<Htag tag='h3'>Еще пара моментов:</Htag>
			<ul>
				<li>Сап дешевле покупать зимой, к сезону цену сильно возрастают! </li>
				<li>
					Отдельно приобретайте жилет (в городе его обязательно надевать). И
					герметичный мешок.
				</li>
				<li>
					Еще из сап-штучек у меня есть неопреновые носки - это чтобы плавать в
					ноябре или апреле и спокойно опускать ноги в воду!
				</li>
			</ul>

			<div className='mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100'>
				<strong className='text-blue-700'>
					У нас небольшое обновление! 🎉
				</strong>
				<p className='mt-2 mb-0 text-blue-900'>
					Помните чеклист &quot;Взять с собой&quot; на{' '}
					<Link
						href='https://uhodovo.vercel.app'
						className='text-blue-700 underline'
					>
						главной странице
					</Link>
					? Теперь он запоминает, какие пункты вы нажали. Если закроете страницу
					или браузер, а потом вернётесь - ваши отметки сохранятся!
					<br />
					<br />А если захотите очистить список и начать заново, нажмите
					Сбросить все пункты и список очистится!
				</p>
			</div>
		</FadeIn>
	)
}
