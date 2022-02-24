import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      optionalEmoji,
    } = this.props;

    function isCardTrunfoTrue() {
      if (cardTrunfo === true) {
        return <p data-testid="trunfo-card">Super Trunfo</p>;
      }
    }

    function colour() {
      let color = '';
      if (cardTrunfo === true) {
        color = 'gold';
        return color;
      }
      switch (cardRare) {
      case 'normal':
        color = 'darkgreen';
        break;
      case 'raro':
        color = 'darkred';
        break;
      case 'muito raro':
        color = 'darkblue';
        break;
      default:
        color = 'rgb(39, 190, 139)';
      }
      return color;
    }

    return (
      <section id="card-container" style={ { backgroundColor: colour() } }>
        <h2 data-testid="name-card">{cardName}</h2>
        <img
          id="card-image"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        <p id="optional-emoji">{optionalEmoji}</p>
        {isCardTrunfoTrue()}
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  optionalEmoji: PropTypes.string,
};

Card.defaultProps = {
  optionalEmoji: '',
};

export default Card;
