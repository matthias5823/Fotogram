// i = die Index Variable zum Array photoBox im gesammten script

let photoBox = [
    { picName: "DispoGruppe", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Moderner Kontrollraum mit geschwungenen PC- Arbeitsplätzen und Holzverkleidung" },
    { picName: "Betriebszentrum_innen", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Moderner Kontrollraum mit geschwungenen PC- Arbeitsplätzen an denen Personen Arbeiten" },
    { picName: "bus_mit_blick_odeonsplatz", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Straßenzug bei Nacht, am linken Bildrand steht ein Bus an einer Haltestelle. In der flucht ist der Münchner Odeonsplatz" },
    { picName: "bus_vor_leitstelle", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Im Vordergrund ein Gelenkbus der MVG, vor deren Leitstellengebäude" },
    { picName: "OLY_Night", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Münchner Olympiaturm und Olympiadach bei Nacht mit blauen Lichtprojektionen" },
    { picName: "Straße_bei_Nacht", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Nachtaufnahme in München einer beleuchteten Straße im Langzeitbelichtungs-Stil mit leuchtenden blauen Lichtspuren links und roten rechts, die zu einem beleuchteten Monument im Hintergrund führen." },
    { picName: "tram_im_nebel", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Straßenbahn im dichten Nachtnebel an einer beleuchteten Abstellgleis steht, mit leuchtend roten Rücklichtern" },
    { picName: "signal", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Ein U-Bahnsignal im Tunnelbereich, rot für Halt zeigt" },
    { picName: "siemens_stelltisch", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Ein in blau beleuchter Stellwerkstisch von Siemens, im Hintergrund die ausgeleuchteten Fahrwege auf einer Panoramawand" },
    { picName: "u-bahn_ausfahrt", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Eine Fahrende U-Bahn des Typ C2 der MVG, über einen Weichenbereich im Tunnel" },
    { picName: "maya_von_martin", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Seitenprifil eines rot.braunen Huskies vor blauem Himmel" },
    { picName: "apanachi", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Schwarz-Weißer Husky liegt im Gras" },
    { picName: "apanachi2", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Schwarz-Weißer Husky vor grünem Gebüsch" },
    { picName: "ilvy_und_apanachi", picSrc: "./scr/assets/img/", type: ".jpg", alt: "Zwei Huskies ziehen einen Hundeschlitten" }
]

console.log(photoBox);

function generatePicture() {
    for (let i = 0; i < photoBox.length; i++) {
        document.getElementById('photo-overview').innerHTML += `<img class="main-pic" onclick="openDialog(${i})" src="${photoBox[i].picSrc}${photoBox[i].picName}${photoBox[i].type} " alt="${photoBox[i].alt}">`;
    }
}

function openDialog(i) {
    const dialog = document.getElementById('bigbox');
    dialog.showModal();
    dialog.innerHTML = `
    
                                <div class="card-header">
                                        <h2>${photoBox[i].picName}</h2>
                                        <button onclick="closeDialog()" class="card-button">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_63_518" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9"/>
                                            </mask>
                                            <g mask="url(#mask0_63_518)">
                                            <path d="M12 13.4L7.10005 18.3C6.91672 18.4833 6.68338 18.575 6.40005 18.575C6.11672 18.575 5.88338 18.4833 5.70005 18.3C5.51672 18.1167 5.42505 17.8833 5.42505 17.6C5.42505 17.3167 5.51672 17.0833 5.70005 16.9L10.6 12L5.70005 7.1C5.51672 6.91667 5.42505 6.68334 5.42505 6.4C5.42505 6.11667 5.51672 5.88334 5.70005 5.7C5.88338 5.51667 6.11672 5.425 6.40005 5.425C6.68338 5.425 6.91672 5.51667 7.10005 5.7L12 10.6L16.9 5.7C17.0834 5.51667 17.3167 5.425 17.6 5.425C17.8834 5.425 18.1167 5.51667 18.3 5.7C18.4834 5.88334 18.575 6.11667 18.575 6.4C18.575 6.68334 18.4834 6.91667 18.3 7.1L13.4 12L18.3 16.9C18.4834 17.0833 18.575 17.3167 18.575 17.6C18.575 17.8833 18.4834 18.1167 18.3 18.3C18.1167 18.4833 17.8834 18.575 17.6 18.575C17.3167 18.575 17.0834 18.4833 16.9 18.3L12 13.4Z" fill="white"/>
                                            </g>
                                            </svg>
                                        </button>
                                </div>
    
                                <img class="big-Piture" src="${photoBox[i].picSrc}${photoBox[i].picName}${photoBox[i].type}" alt="${photoBox[i].alt}">
                               
                                <div class="control">
                                    <button onclick="pictureBack(${i})" class="control-button">
                                        <svg width="24" height="24" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.77873 18.6777C9.16926 19.0682 9.80242 19.0682 10.1929 18.6777C10.5835 18.2871 10.5835 17.654 10.1929 17.2635L3.41421 10.4847L20.5815 10.4847C21.1338 10.4847 21.5815 10.037 21.5815 9.48473C21.5815 8.93244 21.1338 8.48473 20.5815 8.48473L3.41533 8.48472L10.1929 1.70711C10.5835 1.31658 10.5835 0.683421 10.1929 0.292895C9.80242 -0.0976287 9.16926 -0.0976287 8.77873 0.292895L0.320144 8.75149C0.123303 8.93411 0.000122925 9.19503 0.0001229 9.48472C0.000122883 9.67363 0.0525006 9.85029 0.143525 10.001C0.184636 10.0692 0.234612 10.1335 0.293454 10.1924L8.77873 18.6777Z" fill="#FD5B4F"/>
                                        </svg>
                                    </button>
                                    <p class="pagination">${i + 1}  /  ${photoBox.length}</p>
                                    <button onclick="pictureForward(${i})" class="control-button">
                                        <svg width="24" height="24" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8028 0.292893C12.4123 -0.0976311 11.7791 -0.0976311 11.3886 0.292893C10.9981 0.683417 10.9981 1.31658 11.3886 1.70711L18.1673 8.48584H1C0.447715 8.48584 0 8.93355 0 9.48584C0 10.0381 0.447715 10.4858 1 10.4858H18.1662L11.3886 17.2635C10.9981 17.654 10.9981 18.2871 11.3886 18.6777C11.7791 19.0682 12.4123 19.0682 12.8028 18.6777L21.2614 10.2191C21.4582 10.0364 21.5814 9.77553 21.5814 9.48584C21.5814 9.29694 21.529 9.12027 21.438 8.96957C21.3969 8.90137 21.3469 8.83702 21.2881 8.77817L12.8028 0.292893Z" fill="#FD5B4F"/>
                                        </svg>
                                    </button>
                                </div>
                               
                                `;
}


function closeDialog() {
    const dialog = document.getElementById('bigbox');
    dialog.close();
}

function pictureBack(i) {
    if ((i--) > 0) {
        openDialog(i--);
    } else {
        openDialog(photoBox.length - 1);
    }
}

function pictureForward(i) {
    if ((i++) < (photoBox.length - 1)) {
        openDialog(i++);
    } else {
        openDialog(0);
    }
}