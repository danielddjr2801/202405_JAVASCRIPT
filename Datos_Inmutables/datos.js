const videojuegos = Object.freeze([

    { "id": 1, "nombre": "The Legend of Zelda: Breath of the Wild", "genero": "aventura", "plataforma": "Nintendo Switch" },

        { "id": 2, "nombre": "Super Mario Odyssey", "genero": "plataformas", "plataforma": "Nintendo Switch" },

        { "id": 3, "nombre": "Red Dead Redemption 2", "genero": "acción-aventura", "plataforma": "PlayStation 4" },

        { "id": 4, "nombre": "The Witcher 3: Wild Hunt", "genero": "RPG", "plataforma": "PC" },

        { "id": 5, "nombre": "Fortnite", "genero": "battle royale", "plataforma": "multiplataforma" },

        { "id": 6, "nombre": "Minecraft", "genero": "sandbox", "plataforma": "multiplataforma" },

        { "id": 7, "nombre": "Overwatch", "genero": "shooter", "plataforma": "multiplataforma" },

        { "id": 8, "nombre": "FIFA 20", "genero": "deportes", "plataforma": "multiplataforma" },

        { "id": 9, "nombre": "Super Smash Bros. Ultimate", "genero": "lucha", "plataforma": "Nintendo Switch" },

        { "id": 10, "nombre": "League of Legends", "genero": "MOBA", "plataforma": "PC" },

        { "id": 11, "nombre": "God of War", "genero": "acción-aventura", "plataforma": "PlayStation 4" },

        { "id": 12, "nombre": "Animal Crossing: New Horizons", "genero": "simulación", "plataforma": "Nintendo Switch" },

        { "id": 13, "nombre": "Call of Duty: Warzone", "genero": "shooter", "plataforma": "multiplataforma" },

        { "id": 14, "nombre": "Cyberpunk 2077", "genero": "acción-RPG", "plataforma": "multiplataforma" },

        { "id": 15, "nombre": "Assassin's Creed Valhalla", "genero": "acción-aventura", "plataforma": "multiplataforma" },

        { "id": 16, "nombre": "Among Us", "genero": "party", "plataforma": "multiplataforma" },

        { "id": 17, "nombre": "Pokémon Sword and Shield", "genero": "RPG", "plataforma": "Nintendo Switch" },

        { "id": 18, "nombre": "Genshin Impact", "genero": "acción-RPG", "plataforma": "multiplataforma" },

        { "id": 19, "nombre": "Valorant", "genero": "shooter táctico", "plataforma": "PC" },

        { "id": 20, "nombre": "Death Stranding", "genero": "acción-aventura", "plataforma": "PlayStation 4" },

        { "id": 21, "nombre": "Spider-Man: Miles Morales", "genero": "acción-aventura", "plataforma": "PlayStation 5" },

        { "id": 22, "nombre": "Hades", "genero": "roguelike", "plataforma": "PC" },

        { "id": 23, "nombre": "Overcooked! 2", "genero": "cooperativo", "plataforma": "multiplataforma" },

        { "id": 24, "nombre": "Sekiro: Shadows Die Twice", "genero": "acción-aventura", "plataforma": "multiplataforma" },

        { "id": 25, "nombre": "Rainbow Six Siege", "genero": "shooter táctico", "plataforma": "multiplataforma" },

        { "id": 26, "nombre": "Grand Theft Auto V", "genero": "acción-aventura", "plataforma": "multiplataforma" }


    ]);

    1.

    var resultado =videojuegos.filter((videojuegos) => videojuegos.id % 3 === 0);
    console.log(resultado);

    2.

    var resultado = videojuegos.filter((videojuegos) => videojuegos.genero === "acción-RPG");
    console.log(resultado);

    .3

    var resultado = videojuegos.filter((videojuegos) => videojuegos.genero.includes (" "));
    console.log(resultado);

    4.

    var nombres = videojuegos.map( videojuegos => videojuegos.nombre);
    console.log(nombres);

    5.

    var nombres = videojuegos.filter( videojuegos => videojuegos.id > 19). map( videojuegos => videojuegos.nombre);
    console.log(nombres);

    6.

    var genero = videojuegos.filter( videojuegos => videojuegos.genero === "shooter").map(videojuegos => videojuegos.nombre);
    console.log(genero);

    8.

    var conteo = videojuegos.filter( videojuegos => videojuegos.genero === "party").length;
    console.log(conteo);

    10.

    var resultado = videojuegos.map((element) => {
            if (element.id == 5){
                element.genero = "Otro";
            }

            return element;

    });

    console.log(resultado);

