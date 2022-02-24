import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form id="trunfo-form">
        <label htmlFor="name-input">
          <p>Nome</p>
          <input
            name="cardName"
            data-testid="name-input"
            id="name-input"
            type="text"
            onChange={ onInputChange }
            placeholder="placeholder"
            value={ cardName }
          />
        </label>
        <label htmlFor="description-input">
          <p>Descrição</p>
          <input
            name="cardDescription"
            data-testid="description-input"
            id="description-input"
            type="textarea"
            onChange={ onInputChange }
            placeholder="description"
            value={ cardDescription }
          />
        </label>
        <label htmlFor="attr1-input">
          attr1
          <input
            name="cardAttr1"
            id="attr1-input"
            data-testid="attr1-input"
            type="number"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="attr2-input">
          attr2
          <input
            name="cardAttr2"
            id="attr2-input"
            data-testid="attr2-input"
            type="number"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="attr3-input">
          attr3
          <input
            name="cardAttr3"
            id="attr3-input"
            data-testid="attr3-input"
            type="number"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="image-input">
          <p>Imagem</p>
          <input
            name="cardImage"
            id="image-input"
            data-testid="image-input"
            type="text"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>
        <label htmlFor="rare-input">
          <select
            data-testid="rare-input"
            name="cardRare"
            id="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          <input
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            name="cardTrunfo"
            id="trunfo-input"
            onChange={ onInputChange }
            type="checkbox"
          />
        </label>
        <button
          name="isSaveButtonDisabled"
          className="btn"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  onSaveButtonClick: null,
};

export default Form;
