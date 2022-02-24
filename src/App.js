import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.inputHandler = this.inputHandler.bind(this);
    this.state = {
      cardName: 'Banana Briguenta',
      cardDescription:
        'Assim como toda banana boa de luta,'
        + ' Banana Briguenta se tornou famosa pelos seus golpes rápidos e agilidade'
        + ' impressionante nos ringues de vale tudo. Seu histórico como campeã de Muay'
        + ' Thai e Boxe Chinês é seu maior diferencial.',
      cardAttr1: 8.5,
      cardAttr2: 8.2,
      cardAttr3: 6.5,
      cardImage:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7781e256-3f3f-465a-a13a-d12083ec13a4/dcmuzww-f2dceabf-a18f-47ea-995a-58566998a060.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3ODFlMjU2LTNmM2YtNDY1YS1hMTNhLWQxMjA4M2VjMTNhNFwvZGNtdXp3dy1mMmRjZWFiZi1hMThmLTQ3ZWEtOTk1YS01ODU2Njk5OGEwNjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SgVG8A1QG5ja_zmD1COmj29G33KyzR7BuIHvMDhkRA0',
      cardRare: 'raro',
      cardTrunfo: false,
      optionalEmoji: '🍌 🍌 🍌',
      // hasTrunfo: false,
      // isSaveButtonDisabled: false,
      // onSaveButtonClick: false,
    };
  }

  inputHandler({ target }) {
    const { name, value, checked } = target;
    console.log(target.name);
    if (checked) {
      this.setState({
        [name]: checked,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  render() {
    const { state } = this;
    return (
      <main id="main-container">
        <div id="form-container">
          <h1>Adicionar carta</h1>
          <Form
            cardName={ state.cardName }
            cardDescription={ state.cardDescription }
            cardAttr1={ state.cardAttr1 }
            cardAttr2={ state.cardAttr2 }
            cardAttr3={ state.cardAttr3 }
            cardImage={ state.cardImage }
            cardRare={ state.cardRare }
            cardTrunfo={ state.cardTrunfo }
            // hasTrunfo={ state.hasTrunfo }
            // isSaveButtonDisabled={ state.isSaveButtonDisabled }
            onInputChange={ this.inputHandler }
          />
        </div>
        <div id="card-super-container">
          <h1>Pré-visualização</h1>
          <Card
            cardName={ state.cardName }
            cardDescription={ state.cardDescription }
            cardAttr1={ state.cardAttr1 }
            cardAttr2={ state.cardAttr2 }
            cardAttr3={ state.cardAttr3 }
            cardImage={ state.cardImage }
            cardRare={ state.cardRare }
            cardTrunfo={ state.cardTrunfo }
            optionalEmoji={ state.optionalEmoji }
          />
        </div>
      </main>
    );
  }
}

export default App;
