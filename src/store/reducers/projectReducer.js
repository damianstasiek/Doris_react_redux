
const initState = {
    projects: [
        { id: '1', title: '13m2', content: 'Minimalizm form, maksimum koloru - to najlepszy opis tego konceptu. Wymagania były jasno określone: chcemy koloru i to dużo! W tym duchu zaprojektowałyśmy salon - czerń ściany okiennej przełamują limonkowe akcenty, a jasne, dębowe drewno łagodzi całość. Takie wnętrze zapewnia przytulność, nie tracąc przy tym na nowoczesności. Minimalistyczna w formie kuchnia idealnie wpisuje się w klimat całego wnętrza i nie stanowi głównego punktu salonu, o to chodziło! Zabawa kolorem nie omija pozostałych pomieszczeń, w tym bawialni, gdzie połączyłyśmy ze sobą ciepły, wygaszony granat ze sklejką. Ścianka wspinaczkowa we własnym M, to dopiero frajda dla małych mieszkańców! W tym wnętrzu wyobraźnia najmłodszych pozostaje nieograniczona.', img: '' },
        { id: '2', title: 'Projekt 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos sunt voluptate itaque labore sed impedit perspiciatis provident ducimus fugiat, totam possimus maiores modi, accusamus necessitatibus animi iure repudiandae, vitae saepe sint alias fugit consequatur corrupti! Delectus, harum. ', img: 'https://firebasestorage.googleapis.com/v0/b/dorisreact-867a5.appspot.com/o/images%2FDom%20w%20nowoczesnym%20stylu%20z%20bawialni%C4%85%20dla%20dzieci%2Fkuchnia-salon-2.jpg?alt=media&token=d6624926-ab8b-4654-b794-80d74407fb66', category: 'kawalerka' },
        { id: '3', title: 'Projekt 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In doloribus id modi eligendi nemo veritatis iusto assumenda, eveniet officia delectus, iure excepturi quisquam ipsa reprehenderit. ', img: 'https://firebasestorage.googleapis.com/v0/b/dorisreact-867a5.appspot.com/o/images%2F1.jpg?alt=media&amp;token=247bc19e-d6cf-419f-adc0-04334597361a', category: 'kawalerka' },
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer