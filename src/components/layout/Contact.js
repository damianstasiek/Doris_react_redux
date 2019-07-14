import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionTitle, Wrapper } from '../../styles/Theme'
import { device } from '../../styles/Device'
import axios from 'axios';

const API_PATH = 'https://www.dorisdesignservices.pl/api/contact/index.php';

const ContactWrapp = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.laptop} {
        align-items: center;
        margin: 50px;
        text-align: center;
    }
    `
const ContactInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${device.laptop} {
        flex-direction: row;
    }
    `
const Name = styled.h3`
    color: #2C2C2C;
    margin-top: 6px;
    margin-bottom: 6px;
    @media ${device.laptop} {
    font-size: 1.4em;
    }
    `
const FormTitle = styled.h3`
    margin: 0;
    font-size: 1.5em;
    `
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12px;
    `
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `
const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid;
    padding: 12px 4px;
    font-family: 'Georgia';
    :focus {
        outline: 0;
        border-bottom: 1px solid #D98B30;
    }
    @media ${device.laptop} {
        font-size: 1.1em
    }
    `
const Textarea = styled.textarea`
    width: 100%;
    padding: 8px 4px;
    border: none;
    border-bottom: 1px solid;
    font-family: 'Georgia';
    resize: vertical; 
    :focus {
        outline: 0;
        border-bottom: 1px solid #D98B30;
    }
    @media ${device.laptop} {
        font-size: 1.1em;
        height: 150px;
    }
    `
const Button = styled.button`
    font-family: 'Georgia';
    font-weight: bold;
    color: #2C2C2C;
    width: 150px;
    margin: 20px 0;
    padding: 8px;
    border-radius: 18px;
    background-color: #D98B30;
    border: none;
    &:hover {
        transform: scale(1.1);
        color: #fff;
    }
    `
const ParagraphContact = styled.p`
    color: #717171;
    margin: 4px 0;
    @media ${device.laptop} {
    font-size: 1.2em;
    margin: 8px 0;
    }
    `
const ErrorMsg = styled.div`
    color: red;
    padding: 4px 0;
    `
const SuccessMsg = styled(ErrorMsg)`
    color: green;
    `
const Email = styled.a`
    text-decoration: none;
    color: black;
    &:hover {
        color: #d98b30;
    }
`
class Contact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
        nameError: '',
        emailError: '',
        error: null,
        emailSent: false
    }
    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            axios({
                method: "post",
                url: `${API_PATH}`,
                headers: { "content-type": "application/json" },
                data: this.state
            })
                .then(result => {
                    if (result.data.sent) {
                        this.setState({
                            emailSent: result.data.sent
                        });
                        this.setState({
                            error: false
                        });
                        this.setState({
                            name: '',
                            email: '',
                            phone: '',
                            message: '',
                            nameError: '',
                            emailError: '',
                            error: null,
                        })
                    } else {
                        this.setState({ error: true });
                    }
                })
                .catch(error => this.setState({ error: error.message }));
        }
    }

    validate = () => {
        let nameError = '';
        let emailError = '';

        if (!this.state.name) {
            nameError = "Proszę podaj imię"
        }

        if (!this.state.email.includes('@')) {
            emailError = "Niepoprawny adres email"
        }
        if (emailError || nameError) {
            this.setState({ emailError, nameError })
            return false;
        }

        return true
    }
    render() {
        const { name, email, phone, message, emailSent, nameError, emailError, phoneError } = this.state;
        return (
            <Wrapper id="contact">
                <SectionTitle>Kontakt</SectionTitle>
                <ContactInfoWrapper>
                    <ContactWrapp>
                        <Name>Dorota</Name>
                        <ParagraphContact>604-703-690</ParagraphContact>
                        <ParagraphContact><Email href="mailto:biuro@dorisdesignservices.pl">biuro@dorisdesignservices.pl</Email></ParagraphContact>
                    </ContactWrapp>
                    <ContactWrapp>
                        <Name>Wiola</Name>
                        <ParagraphContact>508-070-617</ParagraphContact>
                        <ParagraphContact><Email href="mailto:wiola@dorisdesignservices.pl">wiola@dorisdesignservices.pl</Email></ParagraphContact>
                    </ContactWrapp>
                </ContactInfoWrapper>
                {/* <FormContainer>
                    <FormTitle>Napisz do nas</FormTitle>
                    <Form action="#">
                        <Input type="text" name="name" placeholder="Imię" value={name} required onChange={(e) => this.handleInputChange(e)}></Input>
                        <ErrorMsg>{nameError}</ErrorMsg>
                        <Input type="email" name="email" placeholder="Adres email" value={email} onChange={(e) => this.handleInputChange(e)}></Input>
                        <ErrorMsg>{emailError}</ErrorMsg>
                        <Input type="phone" name="phone" placeholder="Telefon" value={phone} onChange={(e) => this.handleInputChange(e)}></Input>
                        <ErrorMsg>{phoneError}</ErrorMsg>
                        <Textarea placeholder="Twoja wiadomość" name="message" value={message} onChange={(e) => this.handleInputChange(e)}></Textarea>
                        <Button type="submit" onClick={e => this.handleSubmit(e)}>Wyślij</Button>
                        {emailSent ? <SuccessMsg>Wiadomość wysłana</SuccessMsg> : null}
                        {emailError && <ErrorMsg>Wiadomość nie została wysłana</ErrorMsg>}
                    </Form>
                </FormContainer> */}

            </Wrapper>
        );
    }
}

export default Contact;
