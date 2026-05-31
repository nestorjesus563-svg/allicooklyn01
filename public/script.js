const API = "https://allicooklyn.onrender.com";

//PLATILLOS
const platillos = [

//VEGETARIANO

{
    categoria: "vegetariano",

    nombre: "Ensalada de Quinoa",

    tiempo: "20 min",

    personas: "2 personas",

    imagen: "imagenes/comida1.jpg",

    ingredientes: [
        "Quinoa",
        "Tomate",
        "Pepino",
        "Limón",
        "Sal",
        "Aceite de oliva"
    ],

    preparacion: [
        "Lava la quinoa y cuécela durante 15 minutos.",
        "Déjala reposar 5 minutos.",
        "Corta tomate y pepino.",
        "Mezcla todos los ingredientes.",
        "Agrega limón y sal al gusto."
    ],

    precio: 80
},

{
    categoria: "vegetariano",

    nombre: "Tacos de champiñones",

    tiempo: "25 min",

    personas: "3 personas",

    imagen: "imagenes/comida2.jpg",

    ingredientes: [
        "Champiñones",
        "Queso panela",
        "Tortillas",
        "Cebolla",
        "Ajo",
        "Cilantro"
    ],

    preparacion: [
        "Lava y corta los champiñones.",
        "Pica cebolla y ajo.",
        "Sofríe la cebolla y el ajo.",
        "Agrega los champiñones y cocina 8 minutos.",
        "Añade queso panela en cubos.",
        "Calienta las tortillas.",
        "Sirve los tacos con cilantro."
    ],

    precio: 140
},

{
    categoria: "vegetariano",

    nombre: "Pasta cremosa con espinacas",

    tiempo: "30 min",

    personas: "4 personas",

    imagen: "imagenes/comida3.jpg",

    ingredientes: [
        "Pasta",
        "Espinacas",
        "Crema",
        "Queso parmesano",
        "Ajo",
        "Mantequilla"
    ],

    preparacion: [
        "Cuece la pasta en agua con sal.",
        "Derrite mantequilla en un sartén.",
        "Sofríe el ajo durante 1 minuto.",
        "Agrega las espinacas.",
        "Añade crema y queso parmesano.",
        "Mezcla con la pasta cocida.",
        "Sirve caliente."
    ],

    precio: 180
},

{
    categoria: "vegetariano",

    nombre: "Hamburguesas de lentejas",

    tiempo: "35 min",

    personas: "4 personas",

    imagen: "imagenes/comida4.jpg",

    ingredientes: [
        "Lentejas",
        "Zanahoria",
        "Cebolla",
        "Huevo",
        "Pan molido",
        "Lechuga",
        "Tomate",
        "Pan para hamburguesa"
    ],

    preparacion: [
        "Cuece las lentejas hasta que estén suaves.",
        "Tritura las lentejas en un recipiente.",
        "Agrega zanahoria rallada y cebolla picada.",
        "Añade huevo y pan molido.",
        "Forma las hamburguesas con las manos.",
        "Cocínalas en un sartén durante 5 minutos por lado.",
        "Arma la hamburguesa con lechuga y tomate."
    ],

    precio: 160
},

{
    categoria: "vegetariano",

    nombre: "Quesadillas de flor de calabaza",

    tiempo: "20 min",

    personas: "3 personas",

    imagen: "imagenes/comida5.jpg",

    ingredientes: [
        "Tortillas",
        "Queso Oaxaca",
        "Flor de calabaza",
        "Cebolla",
        "Aceite",
        "Sal"
    ],

    preparacion: [
        "Lava muy bien la flor de calabaza.",
        "Pica la cebolla en trozos pequeños.",
        "Sofríe la cebolla en un sartén.",
        "Agrega la flor de calabaza y cocina 5 minutos.",
        "Añade sal al gusto.",
        "Coloca queso y flor de calabaza en la tortilla.",
        "Cocina las quesadillas hasta que el queso se derrita."
    ],

    precio: 130
},

{
    categoria: "vegetariano",

    nombre: "Limonada de pepino",

    tiempo: "10 min",

    personas: "4 personas",

    imagen: "imagenes/bebida1.jpg",

    ingredientes: [
        "2 pepinos",
        "4 limones",
        "1 litro de agua",
        "Azúcar",
        "Hielo",
        "Hojas de menta"
    ],

    preparacion: [
        "Lava y pela los pepinos.",
        "Corta los pepinos en trozos pequeños.",
        "Licúa el pepino junto con agua y jugo de limón.",
        "Agrega azúcar al gusto.",
        "Cuela la mezcla.",
        "Sirve con hielo y hojas de menta."
    ],

    precio: 70
},

{
    categoria: "vegetariano",

    nombre: "Smoothie de plátano y fresa",

    tiempo: "15 min",

    personas: "2 personas",

    imagen: "imagenes/bebida2.jpg",

    ingredientes: [
        "2 plátanos",
        "1 taza de fresas",
        "1 taza de leche",
        "Miel",
        "Hielo"
    ],

    preparacion: [
        "Lava y corta las fresas.",
        "Pela los plátanos.",
        "Coloca todos los ingredientes en la licuadora.",
        "Licúa durante 2 minutos.",
        "Agrega miel al gusto.",
        "Sirve frío con hielo."
    ],

    precio: 90
},
{
    categoria: "vegetariano",

    nombre: "Agua de jamaica",

    tiempo: "15 min",

    personas: "5 personas",

    imagen: "imagenes/bebida3.jpg",

    ingredientes: [
        "Flor de jamaica",
        "Agua",
        "Azúcar",
        "Hielo"
    ],

    preparacion: [
        "Hierve la flor de jamaica en agua.",
        "Deja reposar 10 minutos.",
        "Cuela la mezcla.",
        "Agrega azúcar al gusto.",
        "Añade agua fría.",
        "Sirve con hielo."
    ],

    precio: 60
},

{
    categoria: "vegetariano",

    nombre: "Horchata",

    tiempo: "20 min",

    personas: "5 personas",

    imagen: "imagenes/bebida4.jpg",

    ingredientes: [
        "Arroz",
        "Canela",
        "Leche",
        "Agua",
        "Azúcar",
        "Hielo"
    ],

    preparacion: [
        "Remoja el arroz durante varias horas.",
        "Licúa con canela y agua.",
        "Cuela la mezcla.",
        "Agrega leche y azúcar.",
        "Mezcla bien.",
        "Sirve fría con hielo."
    ],

    precio: 65
},
//VEGANO

{
    categoria: "vegano",

    nombre: "Tacos de Nopal",

    tiempo: "20 min",

    personas: "3 personas",

    imagen: "imagenes/comida6.jpg",

    ingredientes: [
        "Nopal",
        "Tortillas",
        "Cebolla",
        "Cilantro",
        "Aceite",
        "Sal"
    ],

    preparacion: [
        "Lava y corta los nopales.",
        "Cocina los nopales durante 10 minutos.",
        "Fríe cebolla en una sartén.",
        "Agrega los nopales y mezcla.",
        "Sirve en tortillas con cilantro."
    ],

    precio: 85
},
{
    categoria: "vegano",
    nombre: "Tacos de setas al pastor",
    tiempo: "30 min",
    personas: "4 personas",
    imagen: "imagenes/comida7.jpg",
    ingredientes: [
      "Setas ostra",
      "Piña",
      "Tortillas de maíz",
      "Cebolla",
      "Cilantro",
      "Chile guajillo",
      "Achiote",
      "Naranja",
      "Ajo"
    ],
    preparacion: [
      "Hidrata el chile guajillo y licúalo con achiote, ajo y jugo de naranja.",
      "Marina las setas deshebradas 20 min.",
      "Saltea las setas marinadas hasta dorar.",
      "Asa trocitos de piña.",
      "Calienta tortillas de maíz y sirve con piña, cebolla y cilantro."
    ],
    precio: 150
  },
  {
    categoria: "vegano",
    nombre: "Bowl de quinoa y garbanzo",
    tiempo: "25 min",
    personas: "2 personas",
    imagen: "imagenes/comida8.jpg",
    ingredientes: [
      "Quinoa",
      "Garbanzos cocidos",
      "Aguacate",
      "Jitomate cherry",
      "Pepino",
      "Espinaca",
      "Limón",
      "Tahini",
      "Pimentón"
    ],
    preparacion: [
      "Cuece la quinoa según instrucciones.",
      "Dora los garbanzos en sartén con pimentón.",
      "Pica todas las verduras.",
      "Mezcla tahini con limón y agua para el aderezo.",
      "Arma el bowl y baña con aderezo."
    ],
    precio: 165
  },
  {
    categoria: "vegano",
    nombre: "Curry de lentejas y coco",
    tiempo: "35 min",
    personas: "4 personas",
    imagen: "imagenes/comida9.jpg",
    ingredientes: [
      "Lentejas rojas",
      "Leche de coco",
      "Jitomate triturado",
      "Cebolla",
      "Ajo",
      "Jengibre",
      "Curry en polvo",
      "Cúrcuma",
      "Cilantro"
    ],
    preparacion: [
      "Sofríe cebolla, ajo y jengibre.",
      "Agrega curry y cúrcuma, cocina 1 min.",
      "Añade lentejas, jitomate y agua. Cocina 15 min.",
      "Vierte leche de coco y cocina 5 min más.",
      "Sirve con arroz y cilantro fresco."
    ],
    precio: 145
  },
  {
    categoria: "vegano",
    nombre: "Hamburguesa de frijol negro",
    tiempo: "40 min",

    personas: "4 personas",
    imagen: "imagenes/comida10.jpg",
    ingredientes: [
      "Frijoles negros cocidos",
      "Avena",
      "Cebolla morada",
      "Pimiento",
      "Comino",
      "Pan para hamburguesa vegano",
      "Lechuga",
      "Jitomate",
      "Aguacate"
    ],
    preparacion: [
      "Machaca los frijoles sin hacer puré total.",
      "Mezcla con avena, cebolla y pimiento picados.",
      "Sazona con comino y forma las patties.",
      "Hornea o cocina en sartén 6 min por lado.",
      "Arma con lechuga, jitomate y aguacate en pan vegano."
    ],
    precio: 155
  },
  {
    categoria: "vegano",
    nombre: "Limonada de pepino y chía",
    tiempo: "10 min",
    personas: "4 personas",
    imagen: "imagenes/bebida5.jpg",
    ingredientes: [
      "2 pepinos",
      "4 limones",
      "1 litro de agua",
      "Azúcar mascabado",
      "Chía",
      "Hielo",
      "Menta"
    ],
    preparacion: [
      "Licúa pepino con agua y jugo de limón.",
      "Endulza con azúcar mascabado al gusto.",
      "Cuela la mezcla.",
      "Agrega chía y deja reposar 10 min.",
      "Sirve con hielo y menta."
    ],
    precio: 70
  },
  {
    categoria: "vegano",
    nombre: "Smoothie de frutos rojos",
    tiempo: "5 min",
    personas: "2 personas",
    imagen: "imagenes/bebida6.jpg",
    ingredientes: [
      "1 taza fresas",
      "1/2 taza frambuesas",
      "1/2 taza moras",
      "1 plátano",
      "1 taza leche de almendra",
      "Dátiles",
      "Hielo"
    ],
    preparacion: [
      "Congela la fruta previamente si quieres más espeso.",
      "Pon todo en la licuadora.",
      "Endulza con 1-2 dátiles sin hueso.",
      "Licúa hasta cremoso.",
      "Sirve al momento."
    ],
    precio: 95
  },
  {
    categoria: "vegano",
    nombre: "Agua de horchata vegana",
    tiempo: "20 min + remojo",
    personas: "6 personas",
    imagen: "imagenes/bebida7.jpg",
    ingredientes: [
      "Arroz",
      "Canela en rama",
      "Leche de avena",
      "Agua",
      "Azúcar mascabado",
      "Vainilla",
      "Hielo"
    ],
    preparacion: [
      "Remoja arroz con canela 4 horas.",
      "Licúa con agua y cuela muy bien.",
      "Mezcla con leche de avena, azúcar y vainilla.",
      "Enfría muy bien.",
      "Sirve con hielo y canela molida."
    ],
    precio: 80
  },
  {
    categoria: "vegano",
    nombre: "Té helado de jamaica con jengibre",
    tiempo: "15 min",
    personas: "4 personas",
    imagen: "imagenes/bebida8.jpg",
    ingredientes: [
      "Flor de jamaica",
      "Jengibre fresco",
      "Agua",
      "Jugo de naranja",
      "Azúcar mascabado",
      "Hielo"
    ],
    preparacion: [
      "Hierve jamaica con rodajas de jengibre 8 min.",
      "Cuela y deja enfriar.",
      "Agrega jugo de naranja y endulza.",
      "Mezcla bien.",
      "Sirve con mucho hielo."
    ],
    precio: 75
  },

//SIN LACTOSA

{
    categoria: "sin lactosa",
    nombre: "Pechuga a la plancha con verduras",
    tiempo: "25 min",
    personas: "2 personas",
    imagen: "imagenes/comida11.jpg",
    ingredientes: [
      "2 pechugas de pollo",
      "Calabacita",
      "Zanahoria",
      "Brócoli",
      "Aceite de oliva",
      "Ajo en polvo",
      "Sal",
      "Pimienta",
      "Limón"
    ],
    preparacion: [
      "Sazona las pechugas con ajo, sal y pimienta.",
      "Cocina a la plancha con aceite de oliva 6 min por lado.",
      "Cuece al vapor calabacita, zanahoria y brócoli.",
      "Sirve el pollo con las verduras.",
      "Acompaña con jugo de limón."
    ],
    precio: 170
  },
  {
    categoria: "sin lactosa",
    nombre: "Salmón al horno con papas",
    tiempo: "35 min",
    personas: "3 personas",
    imagen: "imagenes/comida12.jpg",
    ingredientes: [
      "3 filetes de salmón",
      "Papas",
      "Aceite de oliva",
      "Eneldo",
      "Ajo",
      "Limón",
      "Sal",
      "Pimienta"
    ],

    preparacion: [
      "Precalienta el horno a 200°C.",
      "Corta papas en gajos y hornea 15 min con aceite y sal.",
      "Coloca el salmón con ajo, eneldo y rodajas de limón.",
      "Hornea todo junto 12 min más.",
      "Sirve caliente."
    ],
    precio: 280
  },
  {
    categoria: "sin lactosa",
    nombre: "Tacos de carne asada",
    tiempo: "20 min",
    personas: "4 personas",
    imagen: "imagenes/comida13.jpg",
    ingredientes: [
      "Bistec de res",
      "Tortillas de maíz",
      "Cebolla",
      "Cilantro",
      "Limón",
      "Salsa verde sin lácteos",
      "Sal",
      "Pimienta"
    ],
    preparacion: [
      "Sazona el bistec con sal y pimienta.",
      "Asa la carne al término deseado.",
      "Pica cebolla y cilantro.",
      "Calienta tortillas de maíz.",
      "Arma los tacos con carne, cebolla, cilantro y salsa."
    ],
    precio: 220
  },
  {
    categoria: "sin lactosa",
    nombre: "Ensalada de atún",
    tiempo: "15 min",
    personas: "2 personas",
    imagen: "imagenes/comida14.jpg",
    ingredientes: [
      "2 latas de atún en agua",
      "Lechuga",
      "Jitomate",
      "Pepino",
      "Aguacate",
      "Elote",
      "Aceite de oliva",
      "Vinagre",
      "Sal"
    ],

    preparacion: [
      "Escurre bien el atún.",
      "Lava y pica toda la verdura.",
      "Mezcla lechuga, jitomate, pepino y elote.",
      "Agrega el atún y aguacate en cubos.",
      "Aliña con aceite de oliva, vinagre y sal."
    ],
    precio: 130
  },
  {
    categoria: "sin lactosa",
    nombre: "Agua de pepino con limón",
    tiempo: "10 min",
    personas: "5 personas",
    imagen: "imagenes/bebida9.jpg",
    ingredientes: [
      "2 pepinos",
      "5 limones",
      "1.5 litros de agua",
      "Azúcar",
      "Hielo",
      "Chía"
    ],
    preparacion: [
      "Pela y licúa los pepinos con agua.",
      "Agrega jugo de limón y azúcar al gusto.",
      "Cuela la mezcla.",
      "Añade chía y deja hidratar 10 min.",
      "Sirve con mucho hielo."
    ],
    precio: 65
  },
  {
    categoria: "sin lactosa",
    nombre: "Té helado de durazno",
    tiempo: "15 min",
    personas: "4 personas",
    imagen: "imagenes/bebida10.jpg",
    ingredientes: [
      "Té negro",
      "Duraznos en almíbar",
      "Agua",
      "Azúcar",
      "Hielo",
      "Menta"
    ],
    preparacion: [
      "Prepara té negro cargado y deja enfriar.",
      "Licúa duraznos con un poco del almíbar.",
      "Mezcla el puré de durazno con el té.",
      "Endulza al gusto.",
      "Sirve con hielo y hojas de menta."
    ],
    precio: 75
  },
  {
    categoria: "sin lactosa",
    nombre: "Smoothie de mango",
    tiempo: "5 min",
    personas: "2 personas",
    imagen: "imagenes/bebida11.jpg",
    ingredientes: [
      "2 mangos",
      "Jugo de naranja",
      "Hielo",
      "Jugo de limón",
      "Miel de agave"
    ],
    preparacion: [
      "Pela y corta los mangos en cubos.",
      "Congela el mango 1 hora si quieres más espeso.",
      "Licúa mango con jugo de naranja.",
      "Agrega un chorrito de limón y miel de agave.",
      "Sirve al instante."
    ],
    precio: 85
  },
  {
    categoria: "sin lactosa",
    nombre: "Café cold brew",
    tiempo: "5 min + 12h reposo",
    personas: "4 personas",
    imagen: "imagenes/bebida12.jpg",
    ingredientes: [
      "Café molido grueso",
      "Agua fría",
      "Hielo",
      "Azúcar o jarabe",
      "Canela opcional"
    ],
    preparacion: [
      "Mezcla 1 taza de café con 4 tazas de agua fría.",
      "Refrigera 12-18 horas.",
      "Cuela con filtro de tela o papel.",
      "Sirve sobre hielo.",
      "Endulza al gusto y espolvorea canela si quieres."
    ],
    precio: 90
  },

//BAJO EN CARBOHIDRATOS
{
    categoria: "bajo en carbohidratos",
    nombre: "Pollo al ajo con espárragos",
    tiempo: "20 min",
    personas: "2 personas",
    imagen: "imagenes/comida15.jpg",
    ingredientes: [
      "2 pechugas de pollo",
      "1 manojo de espárragos",
      "3 dientes de ajo",
      "Mantequilla",
      "Aceite de oliva",
      "Sal",
      "Pimienta",
      "Queso parmesano"
    ],
    preparacion: [
      "Sazona el pollo con sal y pimienta.",
      "Dora el pollo en sartén con aceite 6 min por lado.",
      "Agrega mantequilla y ajo picado, baña el pollo.",
      "Saltea espárragos en la misma sartén 4 min.",
      "Sirve con parmesano rallado encima."
    ],
    precio: 195,
    carbs: "8g"
  },
  {
    categoria: "bajo en carbohidratos",
    nombre: "Salmón con ensalada de aguacate",
    tiempo: "18 min",
    personas: "2 personas",
    imagen: "imagenes/comida16.jpg",
    ingredientes: [
      "2 filetes de salmón",
      "1 aguacate",
      "Jitomate cherry",
      "Pepino",
      "Cebolla morada",
      "Limón",
      "Aceite de oliva",
      "Cilantro",
      "Sal"
    ],
    preparacion: [
      "Cocina el salmón a la plancha con sal 4 min por lado.",
      "Pica aguacate, jitomate, pepino y cebolla.",
      "Mezcla las verduras con limón, aceite y cilantro.",
      "Sirve el salmón sobre la ensalada.",
      "Agrega más limón al gusto."
    ],
    precio: 265,
    carbs: "9g"
  },
  {
    categoria: "bajo en carbohidratos",
    nombre: "Omelette de espinaca y queso",
    tiempo: "12 min",
    personas: "1 persona",
    imagen: "imagenes/comida17.jpg",
    ingredientes: [
      "3 huevos",
      "Espinaca fresca",
      "Queso manchego",
      "Champiñones",
      "Mantequilla",
      "Sal",
      "Pimienta"
    ],
    preparacion: [
      "Saltea champiñones y espinaca con mantequilla.",
      "Bate los huevos con sal y pimienta.",
      "Vierte los huevos en sartén caliente.",
      "Agrega las verduras y queso manchego.",
      "Dobla el omelette y cocina 2 min más."
    ],
    precio: 110,
    carbs: "4g"
  },
  {
    categoria: "bajo en carbohidratos",
    nombre: "Calabacitas rellenas de carne",
    tiempo: "30 min",
    personas: "4 personas",
    imagen: "imagenes/comida18.jpg",
    ingredientes: [
      "4 calabacitas",
      "Carne molida de res",
      "Queso oaxaca",
      "Jitomate",
      "Cebolla",
      "Ajo",
      "Comino",
      "Orégano",
      "Sal"
    ],

    preparacion: [
      "Parte las calabacitas a la mitad y quita la pulpa.",
      "Sofríe carne con cebolla, ajo, jitomate y especias.",
      "Rellena las calabacitas con la carne.",
      "Cubre con queso oaxaca y hornea 15 min a 180°C.",
      "Gratina 3 min y sirve."
    ],
    precio: 185,
    carbs: "12g"
  },
  {
    categoria: "bajo en carbohidratos",
    nombre: "Agua mineral con limón y pepino",
    tiempo: "5 min",
    personas: "2 personas",
    imagen: "imagenes/bebida13.jpg",
    ingredientes: [
      "Agua mineral",
      "1 pepino",
      "2 limones",
      "Hielo",
      "Menta",
      "Stevia opcional"
    ],
    preparacion: [
      "Rebana el pepino en rodajas delgadas.",
      "Exprime el jugo de los limones.",
      "Mezcla agua mineral con jugo de limón.",
      "Agrega pepino y hojas de menta.",
      "Endulza con stevia si quieres y sirve con hielo."
    ],
    precio: 55,
    carbs: "2g"
  },
  {
    categoria: "bajo en carbohidratos",
    nombre: "Té helado sin azúcar",
    tiempo: "10 min",
    personas: "4 personas",
    imagen: "imagenes/bebida14.jpg",
    ingredientes: [
      "Té verde o negro",
      "Agua",
      "Hielo",
      "Limón",
      "Hojas de menta",
      "Eritritol o stevia"
    ],
    preparacion: [
      "Prepara té bien cargado y deja enfriar.",
      "Exprime medio limón en el té.",
      "Endulza con eritritol o stevia al gusto.",
      "Sirve con mucho hielo.",
      "Decora con rodajas de limón y menta."
    ],
    precio: 45,
    carbs: "0g"
  },
  {
    categoria: "bajo en carbohidratos",
    nombre: "Smoothie verde keto",
    tiempo: "5 min",
    personas: "1 persona",
    imagen: "imagenes/bebida15.jpg",
    ingredientes: [
      "Espinaca",
      "1/2 aguacate",
      "Leche de almendra sin azúcar",
      "1 cda crema de almendra",
      "Hielo",
      "Vainilla",
      "Stevia"
    ],
    preparacion: [
      "Pon espinaca, aguacate y leche de almendra en licuadora.",
      "Agrega crema de almendra y vainilla.",
      "Endulza con stevia al gusto.",
      "Licúa con hielo hasta cremoso.",
      "Sirve al momento."
    ],
    precio: 95,
    carbs: "6g"
  },
  {
    categoria: "bajo en carbohidratos",
    nombre: "Café bomba keto",
    tiempo: "3 min",
    personas: "1 persona",
    imagen: "imagenes/bebida16.jpg",
    ingredientes: [
      "Café negro",
      "1 cda aceite de coco",
      "1 cda mantequilla",
      "Canela",
      "Stevia opcional"
    ],
    preparacion: [
      "Prepara una taza de café negro caliente.",
      "Agrega aceite de coco y mantequilla.",
      "Licúa 20 seg hasta que haga espuma.",
      "Espolvorea canela encima.",
      "Toma caliente en ayunas."
    ],
    precio: 70,
    carbs: "1g"
  },

//ALTO EN PROTEINA

 {
    categoria: "alto en proteina",
    nombre: "Bowl de pollo y quinoa",
    tiempo: "30 min",

    personas: "2 personas",
    imagen: "imagenes/comida19.jpg",
    ingredientes: [
      "300g pechuga de pollo",
      "1 taza quinoa cocida",
      "1 taza brócoli",
      "1/2 taza edamames",
      "1 huevo cocido",
      "Aguacate",
      "Salsa de soya",
      "Ajonjolí",
      "Limón"
    ],
    preparacion: [
      "Cocina el pollo a la plancha y córtalo en cubos.",
      "Cuece brócoli y edamames al vapor 5 min.",
      "Sirve quinoa como base.",
      "Acomoda pollo, brócoli, edamames, huevo y aguacate.",
      "Baña con soya, limón y espolvorea ajonjolí."
    ],
    precio: 210,
    proteina: "42g"
  },
  {
    categoria: "alto en proteina",
    nombre: "Steak con huevos",
    tiempo: "15 min",
    personas: "1 persona",
    imagen: "imagenes/comida20.jpg",
    ingredientes: [
      "200g bistec de res",
      "3 huevos",
      "Espinaca",
      "Jitomate cherry",
      "Aceite de oliva",
      "Sal",
      "Pimienta",
      "Ajo en polvo"
    ],

    preparacion: [
      "Sazona el bistec con sal, pimienta y ajo.",
      "Sella el bistec 3 min por lado a término medio.",
      "En la misma sartén haz los huevos estrellados.",
      "Saltea espinaca y jitomates 2 min.",
      "Sirve todo junto. Desayuno de campeones."
    ],
    precio: 240,
    proteina: "58g"
  },
  {
    categoria: "alto en proteina",
    nombre: "Atún sellado con garbanzo",
    tiempo: "20 min",
    personas: "2 personas",
    imagen: "imagenes/comida21.jpg",
    ingredientes: [
      "2 medallones de atún",
      "1 taza garbanzos cocidos",
      "Pepino",
      "Cebolla morada",
      "Perejil",
      "Limón",
      "Aceite de oliva",
      "Comino",
      "Sal"
    ],
    preparacion: [
      "Sella el atún 1 min por lado, que quede rojo por dentro.",
      "Machaca garbanzos y mezcla con pepino y cebolla picados.",
      "Aliña con limón, aceite, comino y perejil.",
      "Rebana el atún en láminas.",
      "Sirve el atún sobre la ensalada de garbanzo."
    ],
    precio: 260,
    proteina: "45g"
  },
  {
    categoria: "alto en proteina",
    nombre: "Claras revueltas con pavo",
    tiempo: "10 min",
    personas: "1 persona",
    imagen: "imagenes/comida22.jpg",
    ingredientes: [
      "6 claras de huevo",
      "100g pechuga de pavo",
      "Espinaca",
      "Champiñones",
      "Queso cottage",
      "Pimienta",
      "Paprika"
    ],
    preparacion: [
      "Saltea champiñones y espinaca en sartén.",
      "Agrega pavo en cubitos y dora 2 min.",
      "Vierte las claras y revuelve.",
      "Cuando cuaje, agrega 2 cdas de queso cottage.",
      "Sazona con pimienta y paprika."
    ],
    precio: 125,
    proteina: "48g"
  },
  {
    categoria: "alto en proteina",
    nombre: "Licuado de proteína chocolate",
    tiempo: "3 min",
    personas: "1 persona",
    imagen: "imagenes/bebida17.jpg",
    ingredientes: [
      "1 scoop proteína whey chocolate",
      "Leche de almendra sin azúcar",
      "1 cda crema de cacahuate",
      "1/2 plátano",
      "Hielo",
      "Cacao en polvo",
      "Stevia"
    ],
    preparacion: [
      "Pon leche, proteína y crema de cacahuate en licuadora.",
      "Agrega medio plátano para textura.",
      "Añade cacao y stevia al gusto.",
      "Licúa con hielo hasta cremoso.",
      "Sirve frío post-entreno."
    ],
    precio: 85,
    proteina: "32g"
  },
  {
    categoria: "alto en proteina",
    nombre: "Batido de fresa y yogur griego",
    tiempo: "5 min",
    personas: "2 personas",
    imagen: "imagenes/bebida18.jpg",
    ingredientes: [
      "1 taza yogur griego natural",
      "1 taza fresas",
      "1 scoop proteína vainilla",
      "Leche light",
      "Chía",
      "Hielo",
      "Vainilla"
    ],
    preparacion: [
      "Congela las fresas previamente.",
      "Licúa yogur griego con leche y proteína.",
      "Agrega fresas y vainilla.",
      "Licúa hasta espeso.",
      "Decora con chía encima."
    ],
    precio: 110,
    proteina: "35g"
  },
  {
    categoria: "alto en proteina",
    nombre: "Malteada de café y proteína",
    tiempo: "4 min",
    personas: "1 persona",
    imagen: "imagenes/bebida19.jpg",
    ingredientes: [
      "1 taza café frío",
      "1 scoop proteína vainilla",
      "Leche de almendra",
      "Hielo",
      "Canela",
      "Stevia",
      "1 cda avena"
    ],
    preparacion: [
      "Prepara café cargado y enfría.",
      "Licúa café con proteína y leche.",
      "Agrega avena para espesar.",
      "Endulza con stevia y pon canela.",
      "Sirve con hielo. Pre-workout."
    ],
    precio: 75,
    proteina: "27g"
  },
  {
    categoria: "alto en proteina",
    nombre: "Smoothie de frutos rojos pro",
    tiempo: "5 min",
    personas: "1 persona",
    imagen: "imagenes/bebida20.jpg",
    ingredientes: [
      "1 scoop proteína sin sabor",
      "Mix de frutos rojos congelados",
      "Kéfir natural",
      "Espinaca",
      "Chía",
      "Agua",
      "Stevia"
    ],
    preparacion: [
      "Pon frutos rojos, espinaca y kéfir en licuadora.",
      "Agrega el scoop de proteína.",
      "Añade chía y un chorrito de agua.",
      "Licúa hasta homogéneo.",
      "Toma al momento para mejor absorción."
    ],
    precio: 95,
    proteina: "30g"
  },

//SIN RESTRICCIONES

{
    categoria: "sin restricciones",
    nombre: "Lasaña clásica de carne",
    tiempo: "60 min",
    personas: "6 personas",
    imagen: "imagenes/comida23.jpg",
    ingredientes: [
      "Pasta para lasaña",
      "500g carne molida de res",
      "Salsa de tomate",
      "Queso ricotta",
      "Queso mozzarella",
      "Queso parmesano",
      "Cebolla",
      "Ajo",
      "Albahaca",
      "Orégano"
    ],
    preparacion: [
      "Sofríe carne con cebolla, ajo y salsa de tomate. Sazona.",
      "Mezcla ricotta con huevo y albahaca.",
      "Arma capas: salsa, pasta, ricotta, mozzarella.",
      "Repite y termina con mozzarella y parmesano.",
      "Hornea 45 min a 180°C hasta dorar."
    ],
    precio: 320
  },
  {
    categoria: "sin restricciones",
    nombre: "Hamburguesa doble con queso y tocino",
    tiempo: "25 min",
    personas: "2 personas",
    imagen: "imagenes/comida24.jpg",
    ingredientes: [
      "400g carne molida",
      "4 rebanadas tocino",
      "Pan brioche",
      "Queso cheddar",
      "Queso manchego",
      "Lechuga",
      "Jitomate",
      "Cebolla caramelizada",
      "Mayonesa",
      "Catsup",
      "Mostaza"
    ],
    preparacion: [
      "Forma 4 patties delgados y cocina el tocino.",
      "Sella las patties 3 min por lado y pon queso encima.",
      "Tuesta el pan brioche con mantequilla.",
      "Arma con doble carne, doble queso y tocino.",
      "Agrega verduras y aderezos al gusto."
    ],
    precio: 280
  },
  {
    categoria: "sin restricciones",
    nombre: "Chilaquiles rojos con pollo y huevo",
    tiempo: "30 min",
    personas: "4 personas",
    imagen: "imagenes/comida25.jpg",
    ingredientes: [
      "Totopos de maíz",
      "Salsa roja",
      "Pechuga de pollo deshebrada",
      "Crema",
      "Queso fresco",
      "Cebolla",
      "Huevos",
      "Aguacate",
      "Frijoles refritos"
    ],
    preparacion: [
      "Calienta la salsa roja en sartén grande.",
      "Agrega totopos y baña bien, que queden aguaditos.",
      "Sirve con pollo deshebrado encima.",
      "Corona con crema, queso, cebolla y huevo estrellado.",
      "Acompaña con aguacate y frijoles."
    ],
    precio: 190
  },
  {
    categoria: "sin restricciones",
    nombre: "Pizza pepperoni casera",
    tiempo: "40 min",
    personas: "4 personas",
    imagen: "imagenes/comida26.jpg",
    ingredientes: [
      "Masa para pizza",
      "Salsa de tomate",
      "Queso mozzarella",
      "Pepperoni",
      "Champiñones",
      "Pimiento",
      "Aceitunas",
      "Orégano",
      "Aceite de oliva"
    ],

    preparacion: [
      "Estira la masa y pon salsa de tomate.",
      "Cubre con mucho queso mozzarella.",
      "Acomoda pepperoni, champiñones y pimiento.",
      "Espolvorea orégano y chorrito de aceite.",
      "Hornea 15 min a 220°C hasta dorada."
    ],
    precio: 230
  },
  {
    categoria: "sin restricciones",
    nombre: "Malteada de chocolate con helado",
    tiempo: "5 min",
    personas: "2 personas",
    imagen: "imagenes/bebida21.jpg",
    ingredientes: [
      "Helado de chocolate",
      "Leche entera",
      "Jarabe de chocolate",
      "Crema batida",
      "Chispas de chocolate",
      "Galleta oreo",
      "Cereza"
    ],
    preparacion: [
      "Licúa helado con leche hasta cremoso.",
      "Decora el vaso con jarabe de chocolate por dentro.",
      "Sirve la malteada.",
      "Corona con crema batida.",
      "Decora con chispas, oreo y cereza."
    ],
    precio: 120
  },
  {
    categoria: "sin restricciones",
    nombre: "Frappé de caramelo",
    tiempo: "7 min",
    personas: "1 persona",
    imagen: "imagenes/bebida22.jpg",
    ingredientes: [
      "Café espresso",
      "Leche entera",
      "Jarabe de caramelo",
      "Hielo",
      "Azúcar",
      "Crema batida",
      "Dulce de leche"
    ],
    preparacion: [
      "Licúa café frío, leche, hielo y azúcar.",
      "Agrega jarabe de caramelo y licúa 30 seg.",
      "Sirve en vaso alto.",
      "Pon crema batida encima.",
      "Decora con más caramelo y dulce de leche."
    ],
    precio: 105
  },
  {
    categoria: "sin restricciones",
    nombre: "Horchata tradicional",
    tiempo: "20 min + remojo",
    personas: "6 personas",
    imagen: "imagenes/bebida23.jpg",
    ingredientes: [
      "Arroz",
      "Canela en rama",
      "Leche entera",
      "Leche condensada",
      "Leche evaporada",
      "Vainilla",
      "Azúcar",
      "Hielo"
    ],
    preparacion: [
      "Remoja arroz con canela 4 horas mínimo.",
      "Licúa y cuela muy bien.",
      "Mezcla con las 3 leches, vainilla y azúcar.",
      "Enfría muy bien en el refri.",
      "Sirve con hielos y canela molida."
    ],
    precio: 110
  },
  {
    categoria: "sin restricciones",
    nombre: "Michelada clásica",
    tiempo: "5 min",
    personas: "1 persona",
    imagen: "imagenes/bebida24.jpg",
    ingredientes: [
      "Cerveza clara",
      "Jugo de limón",
      "Salsa inglesa",
      "Salsa maggi",
      "Salsa picante",
      "Sal",
      "Chile piquín",
      "Hielo",
      "Chamoy"
    ],
    preparacion: [
      "Escarcha el vaso con chamoy, sal y chile piquín.",
      "Llena de hielo el vaso.",
      "Agrega jugo de limón y todas las salsas.",
      "Vierte la cerveza bien fría lentamente.",
      "Mezcla suave y decora con limón."
    ],
    precio: 95
  },
  // SIN AZÚCAR

{
    categoria: "sin azucar",
    nombre: "Pechuga de pollo al limón",
    tiempo: "35 min",
    personas: "4 personas",
    imagen: "imagenes/comida27.jpg",
    ingredientes: [
      "4 pechugas de pollo",
      "Jugo de limón",
      "Ajo",
      "Aceite de oliva",
      "Pimienta",
      "Sal",
      "Perejil"
    ],
    preparacion: [
      "Marina el pollo con limón, ajo y especias.",
      "Calienta una sartén con aceite de oliva.",
      "Cocina las pechugas 6 minutos por lado.",
      "Agrega más limón al final.",
      "Sirve con perejil fresco."
    ],
    precio: 220
  },
  {
    categoria: "sin azucar",
    nombre: "Salmón al horno con verduras",
    tiempo: "40 min",
    personas: "4 personas",
    imagen: "imagenes/comida28.jpg",
    ingredientes: [
      "Filetes de salmón",
      "Brócoli",
      "Zanahoria",
      "Calabaza",
      "Aceite de oliva",
      "Ajo",
      "Pimienta",
      "Sal"
    ],
    preparacion: [
      "Coloca el salmón y verduras en una bandeja.",
      "Sazona con aceite, ajo, sal y pimienta.",
      "Hornea a 200°C durante 25 minutos.",
      "Verifica que el salmón esté cocido.",
      "Sirve caliente."
    ],
    precio: 340
  },
  {
    categoria: "sin azucar",
    nombre: "Ensalada de atún y aguacate",
    tiempo: "15 min",
    personas: "2 personas",
    imagen: "imagenes/comida29.jpg",
    ingredientes: [
      "Atún en agua",
      "Aguacate",
      "Lechuga",
      "Pepino",
      "Jitomate",
      "Limón",
      "Sal"
    ],
    preparacion: [
      "Lava y corta las verduras.",
      "Escurre el atún.",
      "Mezcla todos los ingredientes.",
      "Agrega limón y sal al gusto.",
      "Sirve fresca."
    ],
    precio: 180
  },
  {
    categoria: "sin azucar",
    nombre: "Omelette de espinacas y queso",
    tiempo: "20 min",
    personas: "2 personas",
    imagen: "imagenes/comida30.jpg",
    ingredientes: [
      "Huevos",
      "Espinacas",
      "Queso panela",
      "Aceite de oliva",
      "Sal",
      "Pimienta"
    ],
    preparacion: [
      "Bate los huevos con sal y pimienta.",
      "Saltea las espinacas.",
      "Vierte los huevos en la sartén.",
      "Añade queso y espinacas.",
      "Dobla el omelette y sirve."
    ],
    precio: 150
  },
  {
    categoria: "sin azucar",
    nombre: "Limonada sin azúcar",
    tiempo: "10 min",
    personas: "4 personas",
    imagen: "imagenes/bebida25.jpg",
    ingredientes: [
      "Limones",
      "Agua",
      "Hielo",
      "Endulzante sin calorías"
    ],
    preparacion: [
      "Exprime los limones.",
      "Mezcla con agua fría.",
      "Agrega endulzante al gusto.",
      "Añade hielo.",
      "Sirve fría."
    ],
    precio: 60
  },
  {
    categoria: "sin azucar",
    nombre: "Té verde helado",
    tiempo: "15 min",
    personas: "4 personas",
    imagen: "imagenes/bebida26.jpg",
    ingredientes: [
      "Té verde",
      "Agua",
      "Hielo",
      "Rodajas de limón"
    ],
    preparacion: [
      "Prepara el té verde.",
      "Deja enfriar completamente.",
      "Agrega hielo.",
      "Decora con limón.",
      "Sirve frío."
    ],
    precio: 55
  },
  {
    categoria: "sin azucar",
    nombre: "Agua de pepino con limón",
    tiempo: "10 min",
    personas: "4 personas",
    imagen: "imagenes/bebida27.jpg",
    ingredientes: [
      "Pepino",
      "Limón",
      "Agua",
      "Hielo"
    ],
    preparacion: [
      "Licúa el pepino con agua.",
      "Cuela la mezcla.",
      "Agrega jugo de limón.",
      "Añade hielo.",
      "Sirve fría."
    ],
    precio: 50
  },
  {
    categoria: "sin azucar",
    nombre: "Café frío sin azúcar",
    tiempo: "5 min",
    personas: "1 persona",
    imagen: "imagenes/bebida28.jpg",
    ingredientes: [
      "Café preparado",
      "Hielo",
      "Leche descremada opcional"
    ],
    preparacion: [
      "Prepara el café y deja enfriar.",
      "Llena un vaso con hielo.",
      "Vierte el café.",
      "Agrega leche si deseas.",
      "Sirve inmediatamente."
    ],
    precio: 70
  },
];


function mostrarRecetas(){


    const menu = document.getElementById("menurecetas");

    menu.innerHTML = "";

    let veg = document.getElementById("vegetariano").checked;

    let vega = document.getElementById("vegano").checked;

    let lactosa = document.getElementById("sinlac").checked;

    let carbohidratos = document.getElementById("bajocarbo").checked;

    let azucar = document.getElementById("azucar").checked;

    let proteina = document.getElementById("proteina").checked;

    let restricciones = document.getElementById("restriccion").checked;

    if(
        !veg &&
        !vega &&
        !lactosa &&
        !carbohidratos &&
        !azucar &&
        !proteina &&
        !restricciones
    ){

        alert("Selecciona al menos una preferencia");

        return;
    }

    for(let i = 0; i < platillos.length; i++){

        if(

            (veg && platillos[i].categoria == "vegetariano") ||

            (vega && platillos[i].categoria == "vegano") ||

            (lactosa && platillos[i].categoria == "sin lactosa") ||

            (carbohidratos && platillos[i].categoria == "bajo en carbohidratos") ||

            (azucar && platillos[i].categoria == "sin azucar") ||

            (proteina && platillos[i].categoria == "alto en proteina") ||

            (restricciones && platillos[i].categoria == "sin restricciones")

        ){

            let ingredientesHTML = "";

            let preparacionHTML = "";

            for(let j = 0; j < platillos[i].ingredientes.length; j++){

                ingredientesHTML += `
                    <li>${platillos[i].ingredientes[j]}</li>
                `;
            }

            for(let j = 0; j < platillos[i].preparacion.length; j++){

                preparacionHTML += `
                    <li>${platillos[i].preparacion[j]}</li>
                `;
            }

            menu.innerHTML += `

            <div class="platillo">

                <h1>${platillos[i].nombre}</h1>

                <h2>
                    ⏱ ${platillos[i].tiempo}
                    | 👥 ${platillos[i].personas}
                </h2>

                <img
                src="${platillos[i].imagen}"
                class="imagen-receta">

                <h3>Ingredientes</h3>

                <ul>
                    ${ingredientesHTML}
                </ul>

                <h3>Preparación</h3>

                <ol>
                    ${preparacionHTML}
                </ol>

                <h2>
                    Precio: $${platillos[i].precio}
                </h2>

                <label>Cantidad</label>

                <input
                type="number"
                min="0"
                value="0"
                id="cantidad${i}">

            </div>

            `;
        }
    }

    menu.innerHTML += `

        <button onclick="generarTicket()">

            Generar Ticket

        </button>

    `;
}



function generarTicket(){

    const ticket = document.getElementById("ticket");

    ticket.innerHTML = "";

    let nombre = document.getElementById("nombre").value;

    if(nombre == ""){

        alert("Escribe tu nombre");

        return;
    }

    let total = 0;

    let productosSeleccionados = 0;

    let contenido = `

        <div class="ticketFinal">

        <h1>Ticket de Compra</h1>

        <p><b>Cliente:</b> ${nombre}</p>

        <hr>

    `;

    for(let i = 0; i < platillos.length; i++){

        let cantidadInput = document.getElementById(`cantidad${i}`);

        if(cantidadInput){

            let cantidad = parseInt(cantidadInput.value);

            if(cantidad > 0){

                productosSeleccionados++;

                let subtotal = cantidad * platillos[i].precio;

                total += subtotal;

                contenido += `

                    <p>

                    ${platillos[i].nombre}

                    x ${cantidad}

                    = $${subtotal}

                    </p>

                `;
            }
        }
    }

    if(productosSeleccionados == 0){

        alert("Selecciona al menos un platillo");

        return;
    }

   contenido += `

    <hr>

    <h2>Total: $${total}</h2>

    <button onclick="guardarPedido()">

        GUARDAR PEDIDO

    </button>

    </div>

`;

    ticket.innerHTML = contenido;
}







async function guardarPedido() {

    let nombre = document.getElementById("nombre").value;

    let total = 0;

    let listaProductos = "";

    for(let i = 0; i < platillos.length; i++){

        let cantidadInput = document.getElementById(`cantidad${i}`);

        if(cantidadInput){

            let cantidad = parseInt(cantidadInput.value);

            if(cantidad > 0){

                let subtotal = cantidad * platillos[i].precio;

                total += subtotal;

                listaProductos +=
                platillos[i].nombre +
                " x " +
                cantidad +
                ", ";
            }
        }
    }

    const datosCliente = {

        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        telefono: document.getElementById("telefono").value,
        direccion: document.getElementById("direccion").value,

        vegetariano: document.getElementById("vegetariano").checked,
        vegano: document.getElementById("vegano").checked,
        sinlac: document.getElementById("sinlac").checked,
        bajocarbo: document.getElementById("bajocarbo").checked,
        azucar: document.getElementById("azucar").checked,
        proteina: document.getElementById("proteina").checked,
        restriccion: document.getElementById("restriccion").checked
    };

    const datosPedido = {

        cliente: nombre,
        productos: listaProductos,
        total: total
    };

    try {

    

const respuestaCliente = await fetch(`${API}/clientes`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(datosCliente)
        });

        const resultadoCliente = await respuestaCliente.text();

        console.log(resultadoCliente);


     

const respuestaPedido = await fetch(`${API}/pedidos`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(datosPedido)
        });

        const resultadoPedido = await respuestaPedido.text();

        alert(resultadoPedido);


        

        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("direccion").value = "";

        document.getElementById("vegetariano").checked = false;
        document.getElementById("vegano").checked = false;
        document.getElementById("sinlac").checked = false;
        document.getElementById("bajocarbo").checked = false;
        document.getElementById("azucar").checked = false;
        document.getElementById("proteina").checked = false;
        document.getElementById("restriccion").checked = false;

        document.getElementById("menurecetas").innerHTML = "";

        document.getElementById("ticket").innerHTML = "";

    } catch(error){

        console.log(error);

        alert("Error al guardar");
    }
}