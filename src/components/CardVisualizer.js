import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import DeleteBtn from './DeleteBtn';

class CardVisualizer extends React.Component {
  render() {
    const { data, delCard } = this.props;
    return (
      <section id="card-visualizer">
        {data.map((obj) => {
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
          } = obj;
          return (
            <div key={ `${cardName}-super-card` } className="super-card">
              <Card
                key={ cardName }
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ Number(cardAttr1) }
                cardAttr2={ Number(cardAttr2) }
                cardAttr3={ Number(cardAttr3) }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ Boolean(cardTrunfo) }
                optionalEmoji={ optionalEmoji }
              />
              <DeleteBtn cardName={ cardName } delCard={ delCard } />
            </div>
          );
        })}
      </section>
    );
  }
}

CardVisualizer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  delCard: PropTypes.func.isRequired,
};

export default CardVisualizer;
