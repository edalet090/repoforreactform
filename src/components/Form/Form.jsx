import React, { Component } from "react";
import "./Form.css"

class Form extends Component {
    state = {
        name: "",
        surname: "",
        fathername: "",
        address: "",
        number: "",
        disabled: true
    }

    handleName = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        if (e.target.value.length < 3) {
            this.setState({ disabled: true });
        } else {
            this.setState({ disabled: false });
        }
    }

    handleSurname = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        if (e.target.value.length < 6) {
            this.setState({ disabled: true });
        } else {
            this.setState({ disabled: false });
        }
    }

    handleAddress = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        if (e.target.value.length < 10) {
            this.setState({ disabled: true });
        } else {
            this.setState({ disabled: false });
        }
    }

    submitChanges = (e) => {
        e.preventDefault();
        console.log(this.state);
        if (this.state.name === "" || this.state.surname === "" || this.state.fathername === "" || this.state.address === "" || this.state.number === "") {
            alert("butun bolmeleri doldurun");
        } else {
            alert("Form ugurla gonderildi");
        }
    }

    render() {
        return (
            <div className="main">
                <form onSubmit={this.submitChanges}>
                    <label>
                        Ad
                        <br></br>
                        <input type="text" onChange={this.handleName} name="name" placeholder="Adinizi daxil edin"></input><br></br>
                    </label>
                    <br></br>
                    <label>
                        Soyad
                        <br></br>
                        <input type="text" onChange={this.handleSurname} name="surname" placeholder="Soyadinizi daxil edin"></input><br></br>
                    </label>
                    <br></br>
                    <label>
                        Ata adı
                        <br></br>
                        <input type="text" onChange={this.handleName} name="fathername" placeholder="Ata adinizi daxil edin"></input><br></br>
                    </label>
                    <br></br>
                    <label>
                        Unvan
                        <br></br>
                        <input type="text" onChange={this.handleAddress} name="address" placeholder="unvaninizi daxil edin"></input><br></br>
                    </label>
                    <br></br>
                    <label>
                        Telefon Nomresi
                        <br></br>
                        <input type="number" onChange={this.handleAddress} name="number" placeholder="Telefon nomresini daxil edin"></input><br></br>
                    </label>
                    <br></br>
                    <button disabled={this.state.disabled}>gonder</button>
                </form>
            </div>
        )
    }
}
export default Form