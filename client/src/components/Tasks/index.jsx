/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styles from "./styles.module.css";
import MongoJ from "../img/mongo.png";
import Node from "../img/node.png";
import ReactJ from "../img/reactJ.png";
import Express from "../img/express.png";
import Html from "../img/html.jpg";
import Js from "../img/js.png";
import Npm from "../img/npm.png";

const Tasks = () => {
	const strings = ['Стек MERN - это JavaScript-стек, разработанный для упрощения процесса разработки. MERN включает в себя четыре компонента с открытым исходным кодом: MongoDB, Express, React и Node.js.', 'База данных веб-приложения должна функционировать на СУБД MongoDB. В тоже время допускается (приветствуется) применение СУБД FireBase, PostgreSQL, MySQL.', 'Юзабилити веб-приложения должна соответствовать уровню HTML5', 'Использование модуля @mui/material – простая и настраиваемая библиотека React компонентов, для создания более быстрых и красивых приложений', 'Формирование стилей через каскадные таблицы стилей', 'Публикация проекта в сети (Heroku, Github, Netlify)'];
	return (
		<div className={styles.headerContainer}>
			<main>
				<h2 className={styles.h2}>Цель</h2>
				<p className={styles.goal}>Цель курсового проектирования - разработать вебприложение, реализующее требования к функциональности в предметной
					области, а также на платформе в соответствии заданием.</p>
				<h2 className={styles.h2}>Задачи</h2>
				<ol className={styles.ol}>
					{strings.map((string, index) => {
						return (
							<li className={styles.li} key={index}>{string}</li>
						)
					})}
				</ol>
				<h2 className={styles.h2}>Технологии</h2>
				<div className={styles.container}>
					<div className={styles.img}><img src={Js} alt="" /></div>
					<div className={styles.img}><img src={MongoJ} alt="" /></div>
					<div className={styles.img}><img src={Express} alt="" /></div>
					<div className={styles.img}><img src={Node} alt="" /></div>
					<div className={styles.img}><img src={ReactJ} alt="" /></div>
					<div className={styles.img}><img src={Html} alt="" /></div>
					<div className={styles.img}><img src={Npm} alt="" /></div>
				</div>
			</main>
		</div>
	);
};

export default Tasks;
