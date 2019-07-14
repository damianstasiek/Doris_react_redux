import React from 'react';
import styled from 'styled-components'
import { Wrapper, SectionTitle, } from '../../styles/Theme'
import logo from '../../img/drawable-hdpi/logo_szerokie.png'
import { Link } from 'react-router-dom'
import { device } from '../../styles/Device'

const WrapperLogo = styled.div`
    display: flex;
    justify-content: center;
`

const Logo = styled.img`
    width: 300px;
    height: auto;
    z-index: 10;
    text-align: center;
    @media ${device.laptop} {
    width: auto;
    }
    `


const PrivacyPolicy = () => {
    return (
        <Wrapper>
            <WrapperLogo>
                <Link to="/"><Logo src={logo} alt="logo"></Logo></Link>
            </WrapperLogo>

            <SectionTitle>Polityka cookie</SectionTitle>
            <ol>
                <li>Serwis nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem informacji zawartych w
                        plikach cookies.</li>
                <li>Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe,
                    które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do
                    korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony
                    internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny
                        numer.</li>
                <li>Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz
                    uzyskującym do nich dostęp jest operator Serwisu Doris Design Services z siedzibą pod adresem
                        ul. Wspólna 31A Modlniczka</li>
                <li>Pliki cookies wykorzystywane są w celu:</li>
                <ol class="nested" type="a">
                    <li>dostosowania zawartości stron internetowych Serwisu do preferencji Użytkownika oraz
                        optymalizacji korzystania ze stron internetowych; w szczególności pliki te pozwalają
                        rozpoznać urządzenie Użytkownika Serwisu i odpowiednio wyświetlić stronę internetową,
                            dostosowaną do jego indywidualnych potrzeb;</li>
                    <li>tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają
                        ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;
                        </li>
                    <li>utrzymanie sesji Użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik nie musi na
                            każdej podstronie Serwisu ponownie wpisywać loginu i hasła;</li>
                </ol>
                <li>W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session
                    cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które
                    przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony
                    internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies
                    przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików
                    cookies lub do czasu ich usunięcia przez Użytkownika.
                    </li>
                <li>W ramach Serwisu stosowane są następujące rodzaje plików cookies:</li>
                <ol class="nested" type="a">
                    <li>„niezbędne” pliki cookies, umożliwiające korzystanie z usług dostępnych w ramach Serwisu,
                        np. uwierzytelniające pliki cookies wykorzystywane do usług wymagających uwierzytelniania w
                            ramach Serwisu;</li>
                    <li>pliki cookies służące do zapewnienia bezpieczeństwa, np. wykorzystywane do wykrywania
                        nadużyć w zakresie uwierzytelniania w ramach Serwisu;
                        „wydajnościowe” pliki cookies, umożliwiające zbieranie informacji o sposobie korzystania ze
                        stron internetowych Serwisu;
                        </li>
                    <li>„funkcjonalne” pliki cookies, umożliwiające „zapamiętanie” wybranych przez Użytkownika
                        ustawień i personalizację interfejsu Użytkownika, np. w zakresie wybranego języka lub
                        regionu, z którego pochodzi Użytkownik, rozmiaru czcionki, wyglądu strony internetowej
                            itp.;</li>
                    <li>„reklamowe” pliki cookies, umożliwiające dostarczanie Użytkownikom treści reklamowych
                            bardziej dostosowanych do ich zainteresowań.</li>
                </ol>
                <li>W wielu przypadkach oprogramowanie służące do przeglądania stron internetowych (przeglądarka
                    internetowa) domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym
                    Użytkownika. Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień dotyczących
                    plików cookies. Ustawienia te mogą zostać zmienione w szczególności w taki sposób, aby blokować
                    automatyczną obsługę plików cookies w ustawieniach przeglądarki internetowej bądź informować o
                    ich każdorazowym zamieszczeniu w urządzeniu Użytkownika Serwisu. Szczegółowe informacje o
                    możliwości i sposobach obsługi plików cookies dostępne są w ustawieniach oprogramowania
                        (przeglądarki internetowej).</li>
                <li>Operator Serwisu informuje, że ograniczenia stosowania plików cookies mogą wpłynąć na niektóre
                        funkcjonalności dostępne na stronach internetowych Serwisu.</li>
                <li>Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu i wykorzystywane mogą być
                        również przez współpracujących z operatorem Serwisu reklamodawców oraz partnerów.</li>
                <li>Więcej informacji na temat plików cookies dostępnych jest pod adresem
                        http://wszystkoociasteczkach.pl/ lub w sekcji „Pomoc” w menu przeglądarki internetowej.</li>
            </ol>
            <SectionTitle>Polityka prywatności</SectionTitle>
            <h3>W oparciu o jakie przepisy prawa przetwarzane są Państwa dane osobowe?</h3>
            <p>
                Zasady dotyczące ochrony danych osobowych (dalej ODO) zostały określone między innymi w
                Rozporządzeniu
                Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich
                danych
                oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych, dalej RODO), ustawie o
                ochronie danych osobowych w porządku krajowym oraz w ustawach specjalnych (lex specialis) również w
                porządku krajowym.
                </p>
            <h3>Kto jest Administratorem Państwa danych osobowych?</h3>
            <p>Zgodnie z art. 12 i 13 RODO, czyli prawem do bycia poinformowanym, informujemy, iż Administratorem
                danych osobowych jest Doris Design Services Dorota Filip z siedzibą ul. Wspólna 31A 30-085
                    Modlniczka.</p>
            <h3>Z kim mogą Państwo skontaktować się w sprawie ochrony danych osobowych?</h3>
            <p>Pytanie w tematach związanych z ochroną danych osobowych prosimy kierować na adres
                    biuro@dorisdesignservices.pl.</p>
            <h3>W jakich celach mogą być przetwarzane Państwa dane osobowe?</h3>
            <ol>
                <p>Informujemy, że podane dane osobowe przetwarzane są lub mogą być przez w/w Administratorów
                    danych, w
                        następujących celach:</p>
                <li> w celach kontaktowych, czyli
                    udzielania odpowiedzi, informacji zwrotnej na zadawane przez
                    Państwa
                    pytania w sprawach związanych z naszymi produktami lub usługami. Podstawą prawną przetwarzania
                    danych
                    osobowych jest uzasadniony interes realizowany przez Administratora (art. 6 ust.1 f) RODO). Za
                    prawnie
                    usprawiedliwionym celem uważa się wówczas udzielenie odpowiedzi na zadawane przez Państwa
                        pytania,</li>
                <li>w celach związanych z przygotowaniem oferty. Podstawą prawną
                    przetwarzania
                    danych osobowych jest
                    zgoda
                        osoby, której dane dotyczą (art. 6 ust. 1 a) RODO),</li>
                <li>w celach związanych z zawarciem i realizacja postanowień umowy, gdzie
                    przetwarzanie jest niezbędne
                    do
                    wykonania umowy, której stroną jest osoba, której dane dotyczą, lub do podjęcia działań na
                    żądanie
                        osoby, której dane dotyczą, przed zawarciem umowy (art. 6 ust 1 c) RODO).</li>
            </ol>
            <h3>Czy Państwa dane osobowe są udostępniane lub powierzane?</h3>
            <p>Informujemy, że Państwa dane osobowe mogą być przekazywane odbiorcom danych, organom lub podmiotom
                publicznym na mocy obecnie obowiązujących przepisów prawa oraz mogą być powierzane do przetwarzania
                na
                mocy art. 28 RODO (Administrator powierzył przetwarzanie danych osobowych – podmiot przetwarzający,
                inaczej procesor). Administrator danych podejmuje współpracę wyłącznie z takimi podmiotami, które
                spełniają wymogi z RODO i wdrożyły właściwe środki techniczne i organizacyjne w celu zabezpieczenia
                    powierzonych danych osobowych.</p>
            <h3>Przekazywanie Państwa danych osobowych do Państwa trzeciego (czyli poza EOG)</h3>
            <p>Informujemy, że dane osobowe nie są przekazywane do państwa trzeciego.
                W przypadku przekazania danych osobowych poza Europejski Obszar Gospodarczy, takie przekazanie może
                    odbyć się wyłącznie na zasadach określonych w art. 46, art. 47 lub 49 RODO.</p>
            <h3>Jak długo, zgodnie z zasada czasowości, będą przetwarzane Państwa dane osobowe?</h3>
            <p>IInformujemy, iż:</p>
            <ol>
                <li>w celach kontaktowych, czyli udzielania odpowiedzi, informacji zwrotnej na
                    zadawane przez Państwa
                    pytania w sprawach związanych z naszymi produktami lub usługami – przez czas niezbędny do
                    udzielenia
                    wyczerpujących informacji oraz przez okres wynikający z obecnie obowiązujących przepisów prawa,
                    </li>
                <li>w celach związanych z przygotowaniem oferty – przez okres niezbędny do
                    przygotowania i
                    przedstawienia
                        Państwu naszej oferty oraz przez okres wynikający z obecnie obowiązujących przepisów prawa,</li>
                <li>w celach związanych z zawarciem i realizacja postanowień umowy – przez
                    czas
                    trwania umowy oraz
                    przez
                    okres wynikający z obecnie obowiązujących przepisów prawa.
                    </li>
            </ol>
            <h3>Jakie prawa przysługują osobie, której dane dotyczą?</h3>
            <p>Informujemy o prawie do żądania od Administratora dostępu do danych osobowych dotyczących osoby,
                której
                dane dotyczą, ich sprostowania, usunięcia lub ograniczenia przetwarzania lub o prawie do
                wniesienia
                    sprzeciwu wobec przetwarzania, a także o prawie do przenoszenia danych.</p>
            <h3>Kto jest organem nadzorczym?</h3>
            <ol>
                <p>Informuje się o prawie wniesienia skargi do organu nadzorczego, tj. do Urzędu Ochrony Danych
                    Osobowych z
                        siedzibą przy ul. Stawki 2, 00-193 Warszawa.</p>
                <h3>W jakich okolicznościach podanie danych jest wymogiem a kiedy jest dobrowolne?</h3>
                <p>Informujemy, że podanie danych osobowych jest:</p>
                <li>1.w celach kontaktowych, czyli udzielania odpowiedzi, informacji zwrotnej
                    na
                    zadawane przez
                    Państwa
                    pytania w sprawach związanych z naszymi produktami lub usługami – dobrowolne. Niepodanie danych
                    osobowych będzie skutkowało brakiem możliwości udzielenia Państwu odpowiedzi na zadawane
                    pytania,
                    </li>
                <li>w celach związanych z przygotowaniem oferty – dobrowolne. Niepodanie
                    danych
                    osobowych będzie
                    skutkowało
                        brakiem możliwości przygotowania i przesłania oferty,</li>
                <li>w celach związanych z zawarciem i realizacja postanowień umowy – jest
                    wymogiem umownym.
                    Niepodanie
                    danych osobowych będzie skutkowało brakiem możliwości przygotowania i realizacji postanowień
                    zawartych
                    w umowie.
                    </li>
            </ol>
            <h3>Informacje o zautomatyzowanym przetwarzaniu w tym profilowaniu.</h3>
            <p>Informujemy, iż wchodząc na stronę internetową Administratora danych, mogą Państwo podlegać
                zautomatyzowanemu przetwarzaniu, w tym profilowaniu na zasadach określonych w art. 22 RODO.
                Informujemy, iż profilowanie może odbywać się z wykorzystaniem takich narzędzi jak, pliki
                cookies
                (Polityka Cookies Doris Design Services) lub Google Analytics: (informacje o zasadach
                profilowania:
                https://www.google.com/analytics/terms/pl.html). Informujemy, iż przesłanką prawną
                przetwarzania
                danych
                osobowych jest zgoda osoby, której dane dotyczą. Informujemy, iż profilowanie podejmowane jest
                w
                celu
                    przygotowania dla Państwa dedykowanej oferty z uwzględnieniem Państwa preferencji. </p>
            <h3>Jakie jest źródło pochodzenia danych?</h3>
            <p>Dane osobowe przekazywane są bezpośrednio od osoby, której dane dotyczą. W przypadku, gdy dane
                osobowe
                pozyskiwane są niebezpośrednio od osoby, której dane dotyczą, wówczas informujemy o źródle
                pochodzenia
                    danych.</p>
            <h3>W jaki sposób zabezpieczamy dane osobowe?</h3>
            <p>Informujemy, iż w celu ochrony prywatności i danych osobowych, Administrator danych wdrożył
                odpowiednie
                środki techniczne i organizacyjne w celu zapewnienia bezpieczeństwa przetwarzania danych
                    osobowych.</p>
        </Wrapper>
    );
}

export default PrivacyPolicy;