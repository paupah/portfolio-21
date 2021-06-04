import me from './images/paul-drawing.png';
import React, { useState } from 'react';
import { cards } from './cards.js';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="flex-row scroll">
				<div className="header__copy-container">
					<h1 className="header__title">PAUL PAHIKAINEN</h1>
					<h3 className="header__sub-title">is a front end (front-end?) dudeveloper!</h3>
					<p className="copy">I'm one of the only people I know that loves CSS and that's okay with me.</p>
				</div>

				<div className="header__img-container">
					<img src={me} alt="portrait drawing"/>
				</div>
			</header>

			<section className="top-margin scroll">
				<div className="about__container">
					<h1 className="header__title">
						About me
					</h1>

					<p className="copy">
						Hi, I'm Paul &#128075; and I'm a web developer that focuses on the front end. My journey into web development was unexpected, yet highly rewarding. Prior to getting into this space, I never thought I'd be able to work with code because I come from an arts background doing photography for much of my life and studies and the idea seemed so foreign and so far away from my skillset. But, once I started learning code, seeing results and putting together the puzzle pieces that make up a website/app; I started to see how rewarding it building something with code can be and experiencing that great feeling from the sense of accomplishment doing something hard.
						I've had the pleasure of taking on the role of designer and developer on a new site for Pathcore, a digital pathology company. Working on setting up a store on Shopify and learning the basics of working with liquid for HumbleFlower as well as modifying a template to implement the designs provided to me. And working fulltime on a yoga streaming app, creating new features, landing pages, emails and fixing bugs/general maintanence for Glo.
					</p>
				</div>
			</section>

			<section className="top-margin scroll">
				<h1 className="header__title">
					Stuff I've worked on
				</h1>

				<div className="split-container">
					{ cardContents }
				</div>
			</section>
		</div>
	);
}

function Card(props) {
	const [cardId, setCardId] = useState(null);

	const handleShowModal = (value) => {
		setCardId(value);
	};

	const handleHideModal = () => {
		setCardId(null);
	};

	return (
		<React.Fragment>
			<div className="card__item" onClick={() => handleShowModal(props.id)}>
				<div className="card__number">
					<h1>0{props.id}</h1>
				</div>

				<div className="card__copy-container">
					<div className="card__copy">
						<h1>{props.name}</h1>
						<p>{props.title}</p>
						<p>{props.date}</p>
					</div>
					
					<div className="card__icon">&#128064;</div>
				</div>
			</div>

			<Modal 
				key={props.id}
				show={cardId === props.id}
				hideModal={handleHideModal}
				name={props.name}
				title={props.title}
				description={props.description}
				date={props.date}
				modalContent={props.modalContent}
				stack={props.stack}
				cardImage={props.cardImage}
			/>
		</React.Fragment>
	)

}

function Modal(props) {
	return (
		<React.Fragment>
			{props.show && (
				<div className="modal modal--open">
					<div className="modal__content shadow-container relative">
						<div className="modal__header">
							<img className="modal__image" src={props.cardImage} alt=""/>
							<div className="modal__header-copy-container">
								<p>{props.title} - {props.date}</p>
							</div>
						</div>

						{props.stack.map((item, index) => (
							<div className="pill" key={item.item}>{item.item}</div>
						))}

						<div className="hr"></div>

						<p className="copy">{props.description}</p>

						<div className="hr"></div>

						<div className="modal__image-container">
							{props.modalContent.map((item, index) => (
								<img className="modal__image-screens" key={item.item} src={item.item} alt=""/>
							))}
						</div>

						<img className="close" src="close.svg" alt="" onClick={props.hideModal}/>
					</div>
				</div>
			)}
		</React.Fragment>
	)
}

let cardContents = cards.map(card => 
	<Card { ...card } key={ card.id } />
  )

export default App;
