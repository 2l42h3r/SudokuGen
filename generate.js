var liczby = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var licznik;

var tablica = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function mieszaj(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function zakres(start, koniec) {
    return Array(koniec - start + 1).fill().map((_, idx) => start + idx);
}

function sprawdz(tablica) {
    for (rzad = 0; rzad < 9; rzad++) {
        for (kol = 0; kol < 9; kol++) {
            if (tablica[rzad][kol] == 0) {
                return false;
            }
        }
    }
    return true;
}

function rozwiaz(tablica) {
    for (i = 0; i < 81; i++) {
        rzad = Math.floor(i / 9);
        kol = i % 9;
        if (tablica[rzad][kol] == 0) {
            zakres(1, 9).forEach(function() {
                if (!tablica[rzad].includes(wartosc)) {
                    if (!tablica[0][rzad].includes(wartosc) && !tablica[1][rzad].includes(wartosc) && !tablica[2][rzad].includes(wartosc) && !tablica[3][rzad].includes(wartosc) && !tablica[4][rzad].includes(wartosc) && !tablica[5][rzad].includes(wartosc) && !tablica[6][rzad].includes(wartosc) && !tablica[7][rzad].includes(wartosc) && !tablica[8][rzad].includes(wartosc)) {
                        kwadrat = [];
                        if (rzad < 3) {
                            if (kol < 3) {
                                zakres(0, 2).forEach(function() {
                                    kwadrat = [tablica[j][0]];
                                    kwadrat.push(tablica[j][1]);
                                    kwadrat.push(tablica[j][2]);
                                }, j);
                            } else if (kol < 6) {
                                zakres(0, 2).forEach(function() {
                                    kwadrat = [tablica[j][3]];
                                    kwadrat.push(tablica[j][4]);
                                    kwadrat.push(tablica[j][5]);
                                }, j);
                            } else {
                                zakres(0, 2).forEach(function() {
                                    kwadrat = [tablica[j][6]];
                                    kwadrat.push(tablica[j][7]);
                                    kwadrat.push(tablica[j][8]);
                                }, j);
                            }
                        } else if (rzad < 6) {
                            if (kol < 3) {
                                zakres(3, 5).forEach(function() {
                                    kwadrat = [tablica[j][0]];
                                    kwadrat.push(tablica[j][1]);
                                    kwadrat.push(tablica[j][2]);
                                }, j);
                            } else if (kol < 6) {
                                zakres(3, 5).forEach(function() {
                                    kwadrat = [tablica[j][3]];
                                    kwadrat.push(tablica[j][4]);
                                    kwadrat.push(tablica[j][5]);
                                }, j);
                            } else {
                                zakres(3, 5).forEach(function() {
                                    kwadrat = [tablica[j][6]];
                                    kwadrat.push(tablica[j][7]);
                                    kwadrat.push(tablica[j][8]);
                                }, j);
                            }
                        } else {
                            if (kol < 3) {
                                zakres(6, 8).forEach(function() {
                                    kwadrat = [tablica[j][0]];
                                    kwadrat.push(tablica[j][1]);
                                    kwadrat.push(tablica[j][2]);
                                }, j);
                            } else if (kol < 6) {
                                zakres(6, 8).forEach(function() {
                                    kwadrat = [tablica[j][3]];
                                    kwadrat.push(tablica[j][4]);
                                    kwadrat.push(tablica[j][5]);
                                }, j);
                            } else {
                                zakres(6, 8).forEach(function() {
                                    kwadrat = [tablica[j][6]];
                                    kwadrat.push(tablica[j][7]);
                                    kwadrat.push(tablica[j][8]);
                                }, j);
                            }
                        }
                        if (!kwadrat[0].includes(wartosc) && !kwadrat[1].includes(wartosc) && !kwadrat[2].includes(wartosc)) {
                            tablica[rzad][kol] = wartosc;
                            if (sprawdz(tablica)) {
                                licznik += 1;
                                break;
                            } else {
                                if (rozwiaz(tablica))
                                    return true;
                            }
                        }
                    }
                }
            }, wartosc);
            break;
        }
    }
    tablica[rzad][kol] = 0;
}

function wypelnij(tablica) {
    for (i = 0; i < 81; i++) {
        rzad = Math.floor(i / 9);
        kol = i % 9;
        if (tablica[rzad][kol] == 0) {
            mieszaj(liczby);
            liczby.forEach(function() {
                if (!tablica[rzad].includes(wartosc)) {
                    if (wartosc !== tablica[0][kol] && wartosc !== tablica[1][kol] && wartosc !== tablica[2][kol] && wartosc !== tablica[3][kol] && wartosc !== tablica[4][kol] && wartosc !== tablica[5][kol] && wartosc !== tablica[6][kol] && wartosc !== tablica[7][kol] && wartosc !== tablica[8][kol]) {
                        kwadrat = [];
                        if (rzad < 3) {
                            if (kol < 3) {
                                zakres(0, 2).forEach(function() {
                                    kwadrat = [tablica[j][0]];
                                    kwadrat.push(tablica[j][1]);
                                    kwadrat.push(tablica[j][2]);
                                }, j);
                            } else if (kol < 6) {
                                zakres(0, 2).forEach(function() {
                                    kwadrat = [tablica[j][3]];
                                    kwadrat.push(tablica[j][4]);
                                    kwadrat.push(tablica[j][5]);
                                }, j);
                            } else {
                                zakres(0, 2).forEach(function() {
                                    kwadrat = [tablica[j][6]];
                                    kwadrat.push(tablica[j][7]);
                                    kwadrat.push(tablica[j][8]);
                                }, j);
                            }
                        } else if (rzad < 6) {
                            if (kol < 3) {
                                zakres(3, 5).forEach(function() {
                                    kwadrat = [tablica[j][0]];
                                    kwadrat.push(tablica[j][1]);
                                    kwadrat.push(tablica[j][2]);
                                }, j);
                            } else if (kol < 6) {
                                zakres(3, 5).forEach(function() {
                                    kwadrat = [tablica[j][3]];
                                    kwadrat.push(tablica[j][4]);
                                    kwadrat.push(tablica[j][5]);
                                }, j);
                            } else {
                                zakres(3, 5).forEach(function() {
                                    kwadrat = [tablica[j][6]];
                                    kwadrat.push(tablica[j][7]);
                                    kwadrat.push(tablica[j][8]);
                                }, j);
                            }
                        } else {
                            if (kol < 3) {
                                zakres(6, 8).forEach(function() {
                                    kwadrat = [tablica[j][0]];
                                    kwadrat.push(tablica[j][1]);
                                    kwadrat.push(tablica[j][2]);
                                }, j);
                            } else if (kol < 6) {
                                zakres(6, 8).forEach(function() {
                                    kwadrat = [tablica[j][3]];
                                    kwadrat.push(tablica[j][4]);
                                    kwadrat.push(tablica[j][5]);
                                }, j);
                            } else {
                                zakres(6, 8).forEach(function() {
                                    kwadrat = [tablica[j][6]];
                                    kwadrat.push(tablica[j][7]);
                                    kwadrat.push(tablica[j][8]);
                                }, j);
                            }
                        }
                        if (!kwadrat[0].includes(wartosc) && !kwadrat[1].includes(wartosc) && !kwadrat[2].includes(wartosc)) {
                            tablica[rzad][kol] = wartosc;
                            if (sprawdz(tablica)) {
                                return true;
                            } else {
                                if (wypelnij(tablica))
                                    return true;
                            }
                        }
                    }
                }
            }, wartosc);
            break;
        }
    }
    tablica[rzad][kol] = 0;
}

wypelnij(tablica);
await new Promise(resolve => setTimeout(resolve, 1));

puste = 5;
licznik = 1;

while (puste > 0) {
    rzad = Math.floor(Math.random() * 9);
    kol = Math.floow(Math.random() * 9);
    while (tablica[rzad][kol] == 0) {
        rzad = Math.floor(Math.random() * 9);
        kol = Math.floow(Math.random() * 9);
    }
    var backup = tablica[rzad][kol];
    tablica[rzad][kol] = 0;
    kopia = [];
    zakres(0, 8).forEach(function() {
        kopia.append([]);
        zakres(0, 8).forEach(function() {
            kopia[r].append(tablica[r][k]);
        }, k);
    }, r);
    licznik = 0;
    rozwiaz(kopia);
    if (licznik !== 1) {
        tablica[rzad][kol] = kopia;
        puste -= 1;
    }
}