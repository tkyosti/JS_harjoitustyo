import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            laskuttava_yritys: '',
            maksupvm: '',
            laskun_loppusumma: '',
            maksaja: '',
        }

        this.state = this.initialState
    }


    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            count:this.state.count - 1,
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    render() {
        const { laskuttava_yritys, maksupvm, laskun_loppusumma, maksaja } = this.state;

        return (
            <form>
                <label>Laskuttava yritys</label>
                <input
                    type="text"
                    name="laskuttava_yritys"
                    value={laskuttava_yritys}
                    onChange={this.handleChange} />
                <label>Maksupvm</label>
                <input
                    type="text"
                    name="maksupvm"
                    value={maksupvm}
                    onChange={this.handleChange} />
                <label>Laskun loppusumma €</label>  
                 <input
                    type="text"
                    name="laskun_loppusumma"
                    value={laskun_loppusumma}
                    onChange={this.handleChange} />
                <label>Maksaja</label>
                 <input
                    type="text"
                    name="maksaja"
                    value={maksaja}
                    onChange={this.handleChange} />
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        );
    } 
}
    export default Form;
