import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                'value': '',
                'errorMessage': ''
            },
            password: {
                'value': '',
                'errorMessage': ''
            }
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.formValidate = this.formValidate.bind(this);
    }

    handleChangeInput(ev) {
        let stateInput = {};
        stateInput[ev.target.name] = this.state[ev.target.name];
        stateInput[ev.target.name].value = ev.target.value;
        stateInput[ev.target.name].errorMessage = '';
        this.setState(stateInput);
        console.log(stateInput, this.state);
    }

    formValidate() {
        let isFormValid = true,
            state = this.state;

        for (let key in state) {
            let tempInputObject = {};
            tempInputObject[key] = state[key];
            console.log(tempInputObject, key);

            if (tempInputObject[key].value.length < 3) {
                tempInputObject[key].errorMessage = 'Please enter min 3 characters';
                isFormValid = false;
            } else {
                tempInputObject[key].errorMessage = '';
            }
            this.setState(tempInputObject);
        }

        return isFormValid;
    }

    handleFormSubmit(ev) {
        ev.preventDefault();
        if (this.formValidate()) {
            $.ajax({
                url: 'http://localhost:63342/UniproReports2/public/request.html',
                type: 'post',
                data: {
                    'login': this.state.login.value,
                    'password': this.state.password.value
                },
                success: function (data) {
                    console.log(data, 'success');
                },
                error: function (data) {
                    console.log(data);
                }
            });
        }
    }

    render() {
        console.log('state: ', this.state);
        return (
            <div className="login">
                <form className="form login__form" action="post" onSubmit={this.handleFormSubmit}>
                    <div className="form__item">
                        <span className="error-message">{this.state.login.errorMessage}</span>
                        <input className={this.state.login.errorMessage ? "input-text form__input error" : "input-text form__input"} placeholder="Login" type="text" name="login" value={this.state.login.value} onChange={this.handleChangeInput} />
                    </div>
                    <div className="form__item">
                        <span className="error-message">{this.state.password.errorMessage}</span>
                        <input className={this.state.password.errorMessage ? "input-text form__input error" : "input-text form__input"} placeholder="Password" type="password" name="password" value={this.state.password.value} onChange={this.handleChangeInput}/>
                    </div>
                    <div className="form__item">
                        <button className="btn btn_blue form__btn">ok</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage;