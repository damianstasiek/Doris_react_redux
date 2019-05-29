import React from 'react';
import { Wrapper, SectionTitle, Paragraph, Bold } from './Theme'

const About = (props) => {
    return (
        <Wrapper id="about">
            <SectionTitle>O nas</SectionTitle>
            <Paragraph><Bold>DORIS DESIGN SERVICES</Bold> to autorska pracowania architektury wnętrz świadcząca usługi zarówno dla Klientów indywidualnych jak firm. Projektowanie wnętrz jest naszą pasją, nie istnieją dla nas wnętrza niemożliwe do zaprojektowania, a największa radość sprawia nam zadowolenie Klienta. Każdy projekt traktujemy indywidualnie, priorytetowo traktując potrzeby naszych Klientów.</Paragraph>
            <Paragraph>W projekty wkładamy serce i zaangażowanie, tak by zaprojektować przestrzeń unikatową, zaskakującą a jednocześnie będącą „domem”. Zapewniamy opiekę nad projektem w każdej fazie realizacji. Czerpiemy inspirację z naszych dalekich i bliskich podróży. Aktywnie poszukujemy nowych trendów i ciekawych rozwiązań biorąc udział w targach oraz wystawach designu w Europie i na Świecie. Specjalizujemy się również w visual merchandisingu, co ułatwia pracę nad projektami dla firm, mającymi na celu efektywny wzrost </Paragraph>
        </Wrapper>
    );
}

export default About;