var trabajos = [{
    figure: "media/trabajo-01-desfile.jpg",
    alt: "Packaging de comida callejera modular",
    title: "Fritangana",
    about: "Packaging modular para alimentos callejeros, Taller Producto (2018)",
    url: "https://www.instagram.com/p/BntVMAFF4bE/"
}, {
    figure: "media/trabajo-02-app.jpg",
    alt: "Traje para parapléjicos de neopreno",
    title: "Nekton",
    about: "Traje de autoejercitación para parapléjicos, Taller Producto (2018)",
    url: "https://youtu.be/nyxjLTwvb9w"
}, {
    figure: "media/trabajo-03-homy.jpg",
    alt: "Modelado 3D máquina de coser",
    title: "Modelo 3D Singer Sphinx",
    about: "Modelado en Rhino y Keyshot de máquina de coser Singer, Diseño por Computación (2019)",
    url: "https://www.instagram.com/p/B1XNqcoFEpG/"
}, {
    figure: "media/trabajo-04-editorial.png",
    alt: "Juego de investigación, elementos",
    title: "TOB, Think outside the box",
    about: "Kit de investigación tipo juego, Taller Producto (2018)",
    url: "https://www.instagram.com/p/Bp8OrX4hHip/"
}, {
    figure: "media/trabajo-05-artesania.png",
    alt: "Persona con mochila para emergencias",
    title: "Misco",
    about: "Organizador colgante tipo mochila en caso de evacuacion, Taller Producto (2018)",
    url: "https://youtu.be/ysQGDxrdlck"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Render de tapa para ollas y sartenes",
    title: "Protection",
    about: "Tapa protectora para ollas y sartenes que permite revolver sin destapar, Taller Calidad I (2019)",
    url: "https://youtu.be/yt7YFJLaL2A"
}, {
    figure: "media/trabajo-07-materiales.jpg",
    alt: "Banca de doble curvatura y uniones de amarracables",
    title: "Kurve",
    about: "Soporte estructural de terciado de 3mm, Estructuras y Materiales (2019)",
    url: "https://drive.google.com/file/d/17IYWgLgPuX1bNN7sOoYb25x_uHDo7h2B/view?usp=sharing"
}, {
    figure: "media/trabajo-08-carteras.png",
    alt: "Mujer con cartera de acrílico hecha a mano",
    title: "SP, Carteras",
    about: "Nueva linea de productos para emprendedoras de maipu, Taller Calidad I (2019)",
    url: "https://drive.google.com/file/d/1K0IghfG5AVaO7rcRi3HiomNKS2qZS0T9/view?usp=sharing"
}, {
    figure: "media/trabajo-10-emergencia.png",
    alt: "Protector de huertos pequeños",
    title: "Dagán",
    about: "Cobertor de Hortalizas bajas en heladas, Taller Producto (2018)",
    url: "https://youtu.be/V9_J0NnyDew"
}, {
    figure: "media/trabajo-11-banca.png",
    alt: "Banca de diagonales y uniones de amarracables",
    title: "Encrucijada",
    about: "Soporte estructural de terciado de 3mm, Estructuras y Materiales (2019)",
    url: "https://drive.google.com/file/d/1RJDMfJyddIGUeq8MVXtTHTiHjmDg1FhC/view?usp=sharing"
}, {
    figure: "media/trabajo-12-carcasa.png",
    alt: "Explosión funcionamiento eléctrico carcasa gamer",
    title: "Dashbit",
    about: "Carcasa para teléfonos móviles que emite sonidos, Taller Identidad (2018)",
    url: "https://drive.google.com/file/d/1Bpmm04Zh0r9nEkZlaWrAKTqtkmVqgAZg/view?usp=sharing"
}, {
    figure: "media/trabajo-13-modelo.png",
    alt: "Render de perspectiva edificio Casa Danzante",
    title: "Modelo Casa Danzante",
    about: "Modelado en Rhino y Keyshot de la Casa Danzante, Diseño por computación (2019)",
    url: "https://drive.google.com/file/d/187Gnz0UCwtK7TDkHoMH_dj2s7Ixpf2tl/view?usp=sharing"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href= "' + trabajos[i].url + '" >Ver más</a><p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});
