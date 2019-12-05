import React, { Component } from 'react';
import Table from './Table'
import Form from './Form';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';

class App extends Component {
    state = {
        characters: [],
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character] })
    }

    removeCharacter = index => {
        const { characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })  //tästä poistettiin pilkku??
        })
    }

    render() {
        const { characters } = this.state
        
        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} 
        />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default App


//ReactDOM.render(<App />, document.getElementById('root'));
