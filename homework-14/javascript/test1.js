"use strict";
if (confirm(`Почати   тестування?`)) {
    let websitesArr = [
        {
            companyName: 'Aura',
            ownerCompany: 'Ivanov',
            sponsors: [
                {
                    sponsorLastName: 'Petrov',
                    sponsorFirstName: 'Ivan',
                    attachment: 20000
                },
                {
                    sponsorLastName: 'Franco',
                    sponsorFirstName: 'Max',
                    attachment: 15000
                }
            ],
            yearGraduation: 2005,
            costSite: 5000
        },
        {
            companyName: 'amigo',
            ownerCompany: 'Sokolov',
            sponsors: [
                {
                    sponsorLastName: 'Lysenko',
                    sponsorFirstName: 'Vasyl',
                    attachment: 152000
                },
                {
                    sponsorLastName: 'Zhelezna',
                    sponsorFirstName: 'Victoria',
                    attachment: 25000
                }
            ],
            yearGraduation: 2025,
            costSite: 200000
        },
        {
            companyName: 'omg',
            ownerCompany: 'Korolev',
            sponsors: [
                {
                    sponsorLastName: 'Kostenco',
                    sponsorFirstName: 'Olga',
                    attachment: 33000
                },
                {
                    sponsorLastName: 'Taranenco',
                    sponsorFirstName: 'Sergiy',
                    attachment: 700000
                },
                {
                    sponsorLastName: 'Konovalenko',
                    sponsorFirstName: 'Mikhail',
                    attachment: 110000
                }
            ],
            yearGraduation: 2003,
            costSite: 190000
        }
    ];
    // 1) загальну вартість усіх сайтів
    let totalSum = websitesArr.reduce((prevSum, site) => prevSum + site.costSite, 0);
    document.write(`1.загальна вартість усіх сайтів - ${totalSum}<br>`);
    // 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
    let countSites = websitesArr.reduce((prevCount, site) => (site.yearGraduation >= 2000 && site.yearGraduation <= 2009 ? prevCount + 1 : prevCount), 0);
    document.write(`2.кількість сайтів, що було зроблено між 2000 та 2009 рр. - ${countSites}<br>`);
    // 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
    let attacmentMore100000 = websitesArr.reduce((prevCount, site) => {
        let totalAttacment = site.sponsors.reduce((prevSum, sponsor) => prevSum + sponsor.attachment, 0);
        return totalAttacment > 100000 ? prevCount + 1 : prevCount;
    }, 0);
    document.write(`3.кількість сайтів, де сума спонсорських вкладень була більшою за 100000. - ${attacmentMore100000}<br>`);
    // 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
    const sponsorsList = [];
    for (const arr of websitesArr) {
        for (const sponsor of arr.sponsors) {
            sponsorsList.push(sponsor);
        }
    }
    console.log('загальний список усіх спонсорів-', sponsorsList);
    document.write('4.створити загальний список усіх спонсорів. - відповідь у консолі<br>');
    // 5) знайти рік, коли прибуток був найбільшим
    let maxProfit = 0;
    let year = 0;
    for (const profit of websitesArr) {
        if (profit.costSite > maxProfit) {
            maxProfit = profit.costSite;
            year = profit.yearGraduation;
        }
    }
    document.write(`5.рік, коли прибуток був найбільшим. - ${year}<br>`);
    // 6) упорядкувати список за спаданням прибутку
    const websitesArrCopy = [...websitesArr];
    websitesArrCopy.sort((cost1, cost2) => cost2.costSite - cost1.costSite);
    console.log('список за спаданням прибутку-', websitesArrCopy);
    document.write('6.упорядкувати список за спаданням прибутку. - відповідь у консолі<br>');
    // 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
    const listSitesPriceMore10000 = websitesArr.filter((price) => price.costSite > 10000);
    const listSitesPriceLess10000 = websitesArr.filter((price) => price.costSite < 10000);
    console.log('сайти з вартість більше 10000-', listSitesPriceMore10000);
    console.log('сайти з вартість до 10000-', listSitesPriceLess10000);
    document.write(`7.Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000 - відповідь у консолі<br>`);
}
