import React from 'react';
import styled from 'styled-components';
import { SectionTitle, Wrapper, Paragraph } from '../../styles/Theme'


const ContactWrapp = styled.div`
    display: flex;
    flex-direction: column;
    `
const Name = styled.h3`
    color: #2C2C2C;
    margin-top: 6px;
    margin-bottom: 6px;
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
    `
const Textarea = styled.textarea`
    width: 100%;
    padding: 8px 4px;
    border: none;
    border-bottom: 1px solid;
    font-family: 'Georgia';
    :focus {
        outline: 0;
        border-bottom: 1px solid #D98B30;
        font-size: .9em;
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


const Contact = () => {
    return (
        <Wrapper id="contact">
            <SectionTitle>Kontakt</SectionTitle>
            <ContactWrapp>
                <Name>Dorota</Name>
                <Paragraph>604-703-690</Paragraph>
                <Paragraph>biuvro@dorisdesignservices.pl</Paragraph>
            </ContactWrapp>
            <ContactWrapp>
                <Name>Wiola</Name>
                <Paragraph>508-070-617</Paragraph>
                <Paragraph>wiola@dorisdesignservices.pl</Paragraph>
            </ContactWrapp>

            <FormContainer>
                <FormTitle>Napisz do nas</FormTitle>
                <Form>
                    <Input type="text" name="firstName" placeholder="Imię"></Input>
                    <Input type="email" name="email" placeholder="Adres email"></Input>
                    <Input type="phone" name="phone" placeholder="Telefon"></Input>
                    <Textarea placeholder="Twoja wiadomość"></Textarea>
                    <Button>Wyślij</Button>
                </Form>
            </FormContainer>

        </Wrapper>
    );
}

export default Contact;