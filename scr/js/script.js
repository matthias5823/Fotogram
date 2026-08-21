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
        console.log(photoBox[i].picName);

    }

}

function openDialog(i) {
    const dialog = document.getElementById('bigbox');
    dialog.showModal();
    dialog.innerHTML =`
    
                                <div class="card-header">
                                        <h2>${photoBox[i].picName}</h2>
                                        <button onclick="closeDialog()" class="card-button">X</button>
                                </div>
    
                                <img class="big-Piture" src="${photoBox[i].picSrc}${photoBox[i].picName}${photoBox[i].type}" alt="${photoBox[i].alt}">
                               
                                <div class="control">
                                    <button class="control-button">←</button>
                                    <p class="pagination">${i +1} / ${photoBox.length}</p>
                                    <button class="control-button">→</button>
                                </div>
                               
                                `;
}


function closeDialog() {
    const dialog = document.getElementById('bigbox');
    dialog.close();
}