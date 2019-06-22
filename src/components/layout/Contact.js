import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionTitle, Wrapper, Paragraph } from '../../styles/Theme'
import { device } from '../../styles/Device'
import axios from 'axios';

const API_PATH = 'http://localhost:3000/doris_react_redux/api/contact/index.php';

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
        font-size: .9em;
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
        font-size: .9em;
    }
    @media ${device.laptop} {
        font-size: 1.1em
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
    `
const ParagraphContact = styled.p`
    color: #717171;
    margin: 4px 0;
    @media ${device.laptop} {
    font-size: 1.2em;
    margin: 8px 0;
    }
    `
class Contact extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
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
        e.preventDefault()
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'contnt-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }))
    }
    render() {
        const { firstName, lastName, email, phone, message } = this.state;
        console.log(this.state)
        return (
            <Wrapper id="contact">
                <SectionTitle>Kontakt</SectionTitle>
                <ContactInfoWrapper>
                    <ContactWrapp>
                        <Name>Dorota</Name>
                        <ParagraphContact>604-703-690</ParagraphContact>
                        <ParagraphContact>biuro@dorisdesignservices.pl</ParagraphContact>
                    </ContactWrapp>
                    <ContactWrapp>
                        <Name>Wiola</Name>
                        <ParagraphContact>508-070-617</ParagraphContact>
                        <ParagraphContact>wiola@dorisdesignservices.pl</ParagraphContact>
                    </ContactWrapp>
                </ContactInfoWrapper>
                <FormContainer>
                    <FormTitle>Napisz do nas</FormTitle>
                    <Form action="#">
                        <Input type="text" name="firstName" placeholder="Imię" value={firstName} onChange={(e) => this.handleInputChange(e)}></Input>
                        <Input type="text" name="lastName" placeholder="Nazwisko" value={lastName} onChange={(e) => this.handleInputChange(e)}></Input>
                        <Input type="email" name="email" placeholder="Adres email" value={email} onChange={(e) => this.handleInputChange(e)}></Input>
                        <Input type="phone" name="phone" placeholder="Telefon" value={phone} onChange={(e) => this.handleInputChange(e)}></Input>
                        <Textarea placeholder="Twoja wiadomość" name="message" value={message} onChange={(e) => this.handleInputChange(e)}></Textarea>
                        <Button type="submit" onClick={e => this.handleSubmit(e)}>Wyślij</Button>
                    </Form>
                </FormContainer>

            </Wrapper>
        );
    }
}

export default Contact;
