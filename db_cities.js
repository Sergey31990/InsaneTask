'use strict';

const data = {
    "RU": [{
            "country": "Россия",
            "count": "144500000",
            "cities": [{
                    "name": "Москва",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Санкт-Петербург",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Рязань",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Краснодар",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Екатеринбург",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Ростов-на-Дону",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Воронеж",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]
        },
        {
            "country": "Германия",
            "count": 82175684,
            "cities": [{
                    "name": "Берлин",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Мюнхен",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Франкфурт-на-Майне",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Кёльн",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "Англия",
            "count": 53012456,
            "cities": [{
                    "name": "Лондон",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Манчестер",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Эдинбург",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Бристоль",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]
        }
    ],
    "EN": [{
            "country": "Russia",
            "count": "144500000",
            "cities": [{
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moscow",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "St Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Yekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostov-on-Don",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Voronezh",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Germany",
            "count": 82175684,
            "cities": [{
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Munich",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Cologne",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "United Kingdom",
            "count": 53012456,
            "cities": [{
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ],
    "DE": [{
            "country": "Russland",
            "count": "144500000",
            "cities": [{
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moskau",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Saint Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Jekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostow",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Woronesch",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Deutschland",
            "count": 82175684,
            "cities": [{
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "München",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Köln",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "England",
            "count": 53012456,
            "cities": [{
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ]
};

const inputCities = document.querySelector('.input-cities');
const main = document.querySelector('.main');
const selectCities = document.getElementById('select-cities');
const dropdown = document.querySelector('.dropdown');
const countryName = document.querySelectorAll('.dropdown-lists__country');
const cityName = document.querySelectorAll('.dropdown-lists__city');
const listDefault = document.querySelector('.dropdown-lists__list--default');
const parentBlock = document.querySelector('.dropdown-lists__list');
const listSelect = document.querySelector('.dropdown-lists__list--select');
const listAutoComplete = document.querySelector('.dropdown-lists__list--autocomplete');


// Создание структуры default
const newDiv = () => {
    const listDefault = document.querySelector('.dropdown-lists__list--default');

    const countryBlock = document.createElement('div');
    countryBlock.classList.add('dropdown-lists__countryBlock');

    const totalLine = document.createElement('div');
    totalLine.classList.add('dropdown-lists__total-line');

    const listsCountry = document.createElement('div');
    listsCountry.classList.add('dropdown-lists__country');
    const listsCount = document.createElement('div');
    listsCount.classList.add('dropdown-lists__count');

    const newDivLine = () => {
        const listsLine = document.createElement('div');
        listsLine.classList.add('dropdown-lists__line');

        countryBlock.appendChild(listsLine);

        const listsCity = document.createElement('div');
        listsCity.classList.add('dropdown-lists__city');
        const listsCount = document.createElement('div');
        listsCount.classList.add('dropdown-lists__count');

        listsLine.appendChild(listsCity);
        listsLine.appendChild(listsCount);
    };

    listDefault.appendChild(countryBlock);
    countryBlock.appendChild(totalLine);
    totalLine.appendChild(listsCountry);
    totalLine.appendChild(listsCount);
    newDivLine();
    newDivLine();
    newDivLine();
};

// Создание структуры select
const newDiv2 = (b) => {
    const countryBlock = document.createElement('div');
    countryBlock.classList.add('dropdown-lists__countryBlock');
    const totalLine = document.createElement('div');
    totalLine.classList.add('dropdown-lists__total-line');
    const listsCountry = document.createElement('div');
    listsCountry.classList.add('dropdown-lists__country');
    const listsCount = document.createElement('div');
    listsCount.classList.add('dropdown-lists__count');
    const newDivLine = () => {
        const listsLine = document.createElement('div');
        listsLine.classList.add('dropdown-lists__line');

        countryBlock.appendChild(listsLine);

        const listsCity = document.createElement('div');
        listsCity.classList.add('dropdown-lists__city');
        const listsCount = document.createElement('div');
        listsCount.classList.add('dropdown-lists__count');

        listsLine.appendChild(listsCity);
        listsLine.appendChild(listsCount);
    };
    listSelect.appendChild(countryBlock);
    countryBlock.appendChild(totalLine);
    totalLine.appendChild(listsCountry);
    totalLine.appendChild(listsCount);
    for (let i = 0; i < b; i++) {
        newDivLine();
    }
};

// формирование списка default
const addList1 = () => {
    //Создаем блоки с городами и странами
    for (let i = 0; i < data.RU.length; i++) {
        newDiv();
    }
    // Получаем все div со странами
    const countryName = document.querySelectorAll('.dropdown-lists__country');
    // Получаем все div со городами
    const cityName = document.querySelectorAll('.dropdown-lists__city');
    // Добавляем Названия стран
    countryName.forEach((el, i) => {
        el.textContent = data.RU[i].country;
    });

    let z = 0;
    // Добавляем Названия городов    
    for (let x = 0; x < data.RU.length; x++) {
        for (let y = 0; y <= 2; y++) {
            cityName[z].textContent = data.RU[x].cities[y].name;
            z++;
        }
    }
};

// формирование списка select
const addList2 = (a, b) => {
    newDiv2(b);
    const countryName = document.querySelector('.dropdown-lists__country');
    countryName.textContent = data.RU[a].country;
    const cityName = document.querySelectorAll('.dropdown-lists__city');
    cityName.forEach((el, i) => {
        el.textContent = data.RU[a].cities[i].name;
    });


};

// EventListeners
main.addEventListener('click', (event) => {
    let target = event.target;
    // click по inpit
    if (target === document.getElementById('select-cities')) {
        if (listDefault.classList.contains('active')) {
            event.preventDefault();
        } else {
            dropdown.classList.add('active-list');
            addList1();
            listDefault.classList.add('active');
        }

    }
    // click по city
    if (target.classList.contains('dropdown-lists__country')) {
        listDefault.classList.remove('active');
        if (listSelect.classList.contains('active')) {
            dropdown.classList.remove('active-list');
            const removeList = () => {

                const countryBlock = document.querySelectorAll('.dropdown-lists__countryBlock');
                countryBlock.forEach(el => {
                    el.remove();
                });
                listSelect.style.display = 'none';
                dropdown.classList.add('active-list');
                addList1();
                listDefault.classList.add('active');
                listDefault.style.display = 'block';
                listSelect.classList.remove('active');
            };
            setTimeout(removeList, 500);
        } else {
            dropdown.classList.remove('active-list');
            const removeList = () => {
                // listDefault.style.display = 'none';
                const countryBlock = document.querySelectorAll('.dropdown-lists__countryBlock');
                countryBlock.forEach(el => {
                    el.remove();
                });
                listDefault.style.display = 'none';
            };
            setTimeout(removeList, 500);

            let country = target.textContent;

            const addList = () => {
                let a;
                for (let i = 0; i < data.RU.length; i++) {
                    if (country === data.RU[i].country) {
                        a = i;
                    }
                }
                let b = data.RU[a].cities.length;
                addList2(a, b);
                dropdown.classList.add('active-list');
            };
            setTimeout(addList, 510);
            listSelect.style.display = "block";
            listSelect.classList.add('active');
        }
    }
});


selectCities.addEventListener('input', () => {
    let res = selectCities.value;
    console.log(res);
    const newDiv = document.createElement('div');
    newDiv.classList.add('search_window');
    inputCities.appendChild(newDiv);

    let countres = [];

    for (let i = 0; i < data.RU.length; i++) {

        console.log(data.RU[i].country);
    }


});