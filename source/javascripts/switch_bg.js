imgs = [
'https://www.d-print.pl/___Siudmak/gallery_color/K20-medrzec-820x905.jpg', // 9 ...
'https://www.d-print.pl/___Siudmak/gallery_color/K08-Idylla_MK-820x820-AKCEPT.jpg', // 10 idylle
'https://www.d-print.pl/___Siudmak/gallery_color/K12-Chwila-bezruchu-820x1010.jpg', // 15
'https://www.d-print.pl/___Siudmak/gallery_color/K11-Zloty-Jezdziec-820x1010.jpg', // 11 cavalier
'https://www.d-print.pl/___Siudmak/gallery_color/K38-statua-1160x1430.jpg', // 4 NY
'https://www.d-print.pl/___Siudmak/gallery_color/K52-Fantomatyczny-Zaglowiec_491x613.jpg', // 1 Voilier fantome
'https://www.d-print.pl/___Siudmak/gallery_color/K83-PAPIER-APARS-488x651.jpg', // 19 Papiers epars
'https://www.d-print.pl/___Siudmak/gallery_color/K53-Galaz-Zycia_492x612.jpg', // 6
'https://www.d-print.pl/___Siudmak/gallery_color/K34-nici-losu-1020x1320.jpg', // 17 Filaments destin
];

function switch_bg() {
  img = imgs[Math.floor(Math.random() * imgs.length)];
  $('#main_banner').css('background-image', 'url(' + img + ')');
  setTimeout(switch_bg, 8000);
}
switch_bg();
