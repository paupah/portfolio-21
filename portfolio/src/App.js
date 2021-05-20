import me from './images/paul-drawing.png';
import React, { useState } from 'react';
import { cards } from './cards.js';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="flex-row">
				<div className="header__copy-container">
					<h1 className="header__title">paul</h1>
					<h1 className="header__title">pahikainen</h1>
					<h3 className="header__sub-title">is a fuckin engineer, bruv</h3>
					<p className="copy">blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. </p>
				</div>

				<div className="header__img-container">
					<img src={me} alt="portrait drawing"/>
				</div>
			</header>

			<section className="top-margin">
				<div className="about__container">
					<h3 className="section__title">
					about me
					</h3>

					<p className="copy">
					blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff. blah blah blah blah stuff blah stuff and stuff.
					</p>
				</div>
			</section>

			<div className="split-container">
				{ cardContents }
			</div>
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
			<div className="split-item shadow-container" onClick={() => handleShowModal(props.id)}>
				<div className="card__image-container">
					<img className="card__image" src={props.cardImage} alt=""/>
				</div>

				<div className="card__copy-container">
					<h1>{props.name}</h1>
					<p>{props.title}</p>
					<p>{props.description}</p>
					<p>{props.date}</p>
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
				img={props.img}
			/>
		</React.Fragment>
	)

}

function Modal(props) {
	return (
		<React.Fragment>
			{props.show && (
				<div className="modal modal--open">
					<div className="shadow-container">
						<h1>{props.name}</h1>
						<button onClick={props.hideModal}>close me</button>
						<p>{props.title}</p>
						<p>{props.description}</p>
						<p>{props.date}</p>
						{props.img.map((item, index) => (
							<img className="card__image" src={item.item} key={item.item} alt=""/>
						))}
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
