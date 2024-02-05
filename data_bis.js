export const tableau = [
  {
    category: "array",
    methods: [
      { 
        description: "Supprime le dernier élément d’un tableau", 
        method: "pop", 
        example: `let myArray = [1, 2, 3];
                  let lastElement = myArray.pop();
                  console.log(lastElement); // Output: 3`
      },
      { 
        description: "Ajoute un nouvel élément à la fin du tableau", 
        method: "push", 
        example: `let myArray = [1, 2, 3];
                  myArray.push(4);
                  console.log(myArray); // Output: [1, 2, 3, 4]`
      },
      { 
        description: "Trie les éléments par ordre alphabétique", 
        method: "sort", 
        example: `let myArray = ["banana", "apple", "orange"];
                  myArray.sort();
                  console.log(myArray); // Output: ["apple", "banana", "orange"]`
      },
      { 
        description: "Trier les éléments dans un ordre décroissant", 
        method: "reverse", 
        example: `let myArray = [1, 2, 3];
                  myArray.reverse();
                  console.log(myArray); // Output: [3, 2, 1]`
      },
      { 
        description: "Supprime le premier élément d’un tableau", 
        method: "shift", 
        example: `let myArray = [1, 2, 3];
                  let firstElement = myArray.shift();
                  console.log(firstElement); // Output: 1`
      },
      { 
        description: "Convertit des éléments en chaînes de caractères", 
        method: "toString", 
        example: `let myArray = [1, 2, 3];
                  let str = myArray.toString();
                  console.log(str); // Output: "1,2,3"`
      },
      { 
        description: "Ajoute un nouvel élément au début d’un tableau", 
        method: "unshift", 
        example: `let myArray = [2, 3];
                  myArray.unshift(1);
                  console.log(myArray); // Output: [1, 2, 3]`
      },
      { 
        description: "Fusionne plusieurs tableaux en un seul", 
        method: "concat", 
        example: `let array1 = [1, 2];
                  let array2 = [3, 4];
                  let newArray = array1.concat(array2);
                  console.log(newArray); // Output: [1, 2, 3, 4]`
      },
      { 
        description: "Combine les éléments d’un tableau en une seule chaîne de caractères et renvoie la chaîne", 
        method: "join", 
        example: `let myArray = [1, 2, 3];
                  let str = myArray.join('-');
                  console.log(str); // Output: "1-2-3"`
      },
      { 
        description: "Copie une partie d’un tableau dans un nouveau tableau", 
        method: "slice", 
        example: `let myArray = [1, 2, 3, 4, 5];
                  let newArray = myArray.slice(1, 4);
                  console.log(newArray); // Output: [2, 3, 4]`
      },
      { 
        description: "Modifie le contenu d’un tableau en supprimant les éléments existants et/ou en ajoutant de nouveaux éléments", 
        method: "splice", 
        example: `let myArray = [1, 2, 3, 4, 5];
                  myArray.splice(2, 1, 'a', 'b');
                  console.log(myArray); // Output: [1, 2, 'a', 'b', 4, 5]`
      },
      { 
        description: "Retourne la valeur primitive de l’objet spécifié", 
        method: "valueOf", 
        example: `let myArray = [1, 2, 3];
                  let primitiveValue = myArray.valueOf();
                  console.log(primitiveValue); // Output: [1, 2, 3]`
      },
      { 
        description: "Retourne le premier index auquel l’élément donné peut être trouvé dans un tableau, ou -1 s’il n’est pas présent dans un tableau", 
        method: "indexOf", 
        example: `let myArray = [1, 2, 3, 4, 5];
                  let index = myArray.indexOf(3);
                  console.log(index); // Output: 2`
      },
      { 
        description: "Retourne le dernier index auquel l’élément donné peut être trouvé dans un tableau, ou -1 s’il n’est pas présent dans un tableau", 
        method: "lastIndexOf", 
        example: `let myArray = [1, 2, 3, 4, 3, 5];
                  let lastIndex = myArray.lastIndexOf(3);
                  console.log(lastIndex); // Output: 4`
      }
    ]
  },
  {
    category: "string",
    methods: [
      { 
        method: 'match', 
        description: 'Récupère les correspondances d’une chaîne par rapport à un motif de recherche',
        example: `let str = "Hello World";
                  let result = str.match(/lo/);
                  console.log(result); // Output: ["lo"]`
      },
      { 
        method: 'search', 
        description: 'Recherche dans une chaîne de caractères la valeur spécifiée et renvoie la position de la correspondance.',
        example: `let str = "Hello World";
                  let position = str.search("World");
                  console.log(position); // Output: 6`
      },
      { 
        method: 'toLowerCase', 
        description: 'Convertit une chaîne de caractères en minuscules',
        example: `let str = "Hello World";
                  let lowerCaseStr = str.toLowerCase();
                  console.log(lowerCaseStr); // Output: "hello world"`
      },
      { 
        method: 'toUpperCase', 
        description: 'Convertit une chaîne de caractères en majuscules',
        example: `let str = "Hello World";
                  let upperCaseStr = str.toUpperCase();
                  console.log(upperCaseStr); // Output: "HELLO WORLD"`
      },
      { 
        method: 'indexOf', 
        description: 'Fournit la position du première occurrence d’un texte spécifié dans une chaîne',
        example: `let str = "Hello World";
                  let index = str.indexOf("World");
                  console.log(index); // Output: 6`
      },
      { 
        method: 'charAt', 
        description: 'Retourne le caractère à la position spécifiée dans la chaîne',
        example: `let str = "Hello";
                  let char = str.charAt(2);
                  console.log(char); // Output: "l"`
      },
      { 
        method: 'concat', 
        description: 'Concatène deux ou plusieurs chaînes en une seule',
        example: `let str1 = "Hello";
                  let str2 = " World";
                  let result = str1.concat(str2);
                  console.log(result); // Output: "Hello World"`
      },
      { 
        method: 'charCodeAt', 
        description: 'Retourne la valeur unicode d’un caractère à la position spécifiée',
        example: `let str = "A";
                  let unicodeValue = str.charCodeAt(0);
                  console.log(unicodeValue); // Output: 65`
      },
      { 
        method: 'indexOf', 
        description: 'Fournit la position du première occurrence d’un texte spécifié dans une chaîne',
        example: `let str = "Hello World";
                  let index = str.indexOf("World");
                  console.log(index); // Output: 6`
      },
      { 
        method: 'lastIndexOf', 
        description: 'Fournit la position du dernière occurrence d’un texte spécifié dans une chaîne',
        example: `let str = "Hello World";
                  let lastIndex = str.lastIndexOf("o");
                  console.log(lastIndex); // Output: 7`
      },
      { 
        method: 'slice', 
        description: 'Extrait une partie d’une chaîne et la renvoie sous forme de nouvelle chaîne',
        example: `let str = "Hello World";
                  let slicedStr = str.slice(6, 11);
                  console.log(slicedStr); // Output: "World"`
      },
      { 
        method: 'split', 
        description: 'Découpe une chaîne de caractère en un tableau de sous-chaînes en fonction d’un séparateur',
        example: `let str = "apple,orange,banana";
                  let fruitsArray = str.split(",");
                  console.log(fruitsArray); // Output: ["apple", "orange", "banana"]`
      },
      { 
        method: 'substr', 
        description: 'Comme slice() mais extrait une sous-chaîne en fonction du nombre de caractères spécifié',
        example: `let str = "Hello World";
                  let substr = str.substr(6, 5);
                  console.log(substr); // Output: "World"`
      },
      { 
        method: 'substring', 
        description: 'Comme slice() mais ne peut accepter les index négatifs',
        example: `let str = "Hello World";
                  let substring = str.substring(6, 11);
                  console.log(substring); // Output: "World"`
      },
      { 
        method: 'replace', 
        description: 'Recherche et remplace un texte spécifique dans une chaîne',
        example: `let str = "Hello World";
                  let newStr = str.replace("World", "Universe");
                  console.log(newStr); // Output: "Hello Universe"`
      }
    ]
  },
  {
    category: "math",
    methods: [
      { 
        method: 'random', 
        description: 'Retourne un nombre aléatoire compris entre 0 et 1',
        example: `let randomNumber = Math.random();
                  console.log(randomNumber); // Output: un nombre aléatoire entre 0 (inclus) et 1 (exclus)`
      },
      { 
        method: 'round', 
        description: 'Arrondie la valeur de x à son entier le plus proche',
        example: `let roundedNumber = Math.round(2.5);
                  console.log(roundedNumber); // Output: 3`
      },
      { 
        method: 'pow', 
        description: 'X à la puissance de y',
        example: `let result = Math.pow(2, 3);
                  console.log(result); // Output: 8`
      },
      { 
        method: 'exp', 
        description: 'Exponentielle de x',
        example: `let result = Math.exp(2);
                  console.log(result); // Output: environ 7.39`
      },
      { 
        method: 'log', 
        description: 'Le logarithme naturel (base E) de x',
        example: `let result = Math.log(10);
                  console.log(result); // Output: environ 2.30`
      },
      { 
        method: 'max', 
        description: 'Retourne le maximum',
        example: `let result = Math.max(5, 10, 3);
                  console.log(result); // Output: 10`
      },
      { 
        method: 'min', 
        description: 'Retourne le minimum',
        example: `let result = Math.min(5, 10, 3);
                  console.log(result); // Output: 3`
      },
      { 
        method: 'abs', 
        description: 'Retourne la valeur absolue de x',
        example: `let result = Math.abs(-5);
                  console.log(result); // Output: 5`
      },
      { 
        method: 'sqrt', 
        description: 'La racine carrée de x',
        example: `let result = Math.sqrt(25);
                  console.log(result); // Output: 5`
      },
      { 
        method: 'cos', 
        description: 'Le cosinus de x',
        example: `let result = Math.cos(Math.PI);
                  console.log(result); // Output: -1`
      },
      { 
        method: 'sin', 
        description: 'Le sinus de x',
        example: `let result = Math.sin(Math.PI / 2);
                  console.log(result); // Output: 1`
      },
      { 
        method: 'tan', 
        description: 'La tangente de x',
        example: `let result = Math.tan(0);
                  console.log(result); // Output: 0`
      },
      { 
        method: 'ceil', 
        description: 'Arrondie la valeur de x à l’entier le plus proche',
        example: `let result = Math.ceil(2.3);
                  console.log(result); // Output: 3`
      }
    ]
  },
  {
    category: "date",
    methods: [
      { 
        method: 'getDate', 
        description: 'Récupère le jour du mois sous forme de nombre (1-31)',
        example: `let currentDate = new Date();
                  let dayOfMonth = currentDate.getDate();
                  console.log(dayOfMonth); // Output: jour actuel du mois`
      },
      { 
        method: 'getDay', 
        description: 'Le jour de la semaine sous forme de nombre (0-6)',
        example: `let currentDate = new Date();
                  let dayOfWeek = currentDate.getDay();
                  console.log(dayOfWeek); // Output: jour actuel de la semaine (0: dimanche, 1: lundi, ..., 6: samedi)`
      },
      { 
        method: 'getFullYear', 
        description: 'Année sous la forme d’un nombre à quatre chiffres (aaaa)',
        example: `let currentDate = new Date();
                  let year = currentDate.getFullYear();
                  console.log(year); // Output: année actuelle`
      },
      { 
        method: 'getHours', 
        description: 'Retourne l’heure (0-23)',
        example: `let currentDate = new Date();
                  let hours = currentDate.getHours();
                  console.log(hours); // Output: heure actuelle`
      },
      { 
        method: 'getMilliseconds', 
        description: 'Retourne les millisecondes (0-999)',
        example: `let currentDate = new Date();
                  let milliseconds = currentDate.getMilliseconds();
                  console.log(milliseconds); // Output: millisecondes actuelles`
      },
      { 
        method: 'getMinutes', 
        description: 'Retourne les minutes (0-59)',
        example: `let currentDate = new Date();
                  let minutes = currentDate.getMinutes();
                  console.log(minutes); // Output: minutes actuelles`
      },
      { 
        method: 'getMonth', 
        description: 'Retourne le mois sous forme de nombre (0-11)',
        example: `let currentDate = new Date();
                  let month = currentDate.getMonth();
                  console.log(month); // Output: mois actuel (0: janvier, 1: février, ..., 11: décembre)`
      },
      { 
        method: 'getSeconds', 
        description: 'Récupère les secondes (0-59)',
        example: `let currentDate = new Date();
                  let seconds = currentDate.getSeconds();
                  console.log(seconds); // Output: secondes actuelles`
      },
      { 
        method: 'getTime', 
        description: 'Récupère les millisecondes depuis le 1er janvier 1970',
        example: `let currentDate = new Date();
                  let timestamp = currentDate.getTime();
                  console.log(timestamp); // Output: millisecondes depuis le 1er janvier 1970`
      },
      { 
        method: 'getUTCDate', 
        description: 'Le jour du mois à la date spécifiée selon l’heure universelle.',
        example: `let currentDate = new Date();
                  let utcDayOfMonth = currentDate.getUTCDate();
                  console.log(utcDayOfMonth); // Output: jour du mois en temps universel`
      },
      { 
        method: 'setDate', 
        description: 'Définit le jour en tant que nombre (1-31)',
        example: `let currentDate = new Date();
                  currentDate.setDate(15);
                  console.log(currentDate); // Output: date avec le jour défini`
      },
      { 
        method: 'setFullYear', 
        description: 'Définit l’année',
        example: `let currentDate = new Date();
                  currentDate.setFullYear(2023);
                  console.log(currentDate); // Output: date avec l'année définie`
      },
      { 
        method: 'setHours', 
        description: 'Définit l’heure (0-23)',
        example: `let currentDate = new Date();
                  currentDate.setHours(12);
                  console.log(currentDate); // Output: date avec l'heure définie`
      },
      { 
        method: 'setMilliseconds', 
        description: 'Définit les millisecondes (0 à 999)',
        example: `let currentDate = new Date();
                  currentDate.setMilliseconds(500);
                  console.log(currentDate); // Output: date avec les millisecondes définies`
      },
      { 
        method: 'setMinutes', 
        description: 'Définit les minutes (0-59)',
        example: `let currentDate = new Date();
                  currentDate.setMinutes(30);
                  console.log(currentDate); // Output: date avec les minutes définies`
      },
      { 
        method: 'setMonth', 
        description: 'Définit le mois (0-11)',
        example: `let currentDate = new Date();
                  currentDate.setMonth(5);
                  console.log(currentDate); // Output: date avec le mois défini`
      },
      { 
        method: 'setSeconds', 
        description: 'Définit les secondes (0-59)',
        example: `let currentDate = new Date();
                  currentDate.setSeconds(45);
                  console.log(currentDate); // Output: date avec les secondes définies`
      },
      { 
        method: 'setTime', 
        description: 'Fixe l’heure (en millisecondes depuis le 1er janvier 1970)',
        example: `let currentDate = new Date();
                  currentDate.setTime(1644044400000);
                  console.log(currentDate); // Output: date avec le timestamp défini`
      },
      { 
        method: 'setUTCDate', 
        description: 'Définit le jour du mois pour une date spécifiée en fonction du temps universel',
        example: `let currentDate = new Date();
                  currentDate.setUTCDate(10);
                  console.log(currentDate); // Output: date avec le jour du mois en temps universel défini`
      }
    ]
  },
  {
    category: "output",
    methods: [
      { 
        method: 'alert', 
        description: 'Affiche la sortie sur une boîte de dialogue du navigateur',
        example: `alert("Hello, World!");`
      },
      { 
        method: 'confirm', 
        description: 'Ouvre une boîte de dialogue oui/non et renvoie true/false en fonction du clic de l’utilisateur',
        example: `let userChoice = confirm("Voulez-vous continuer?");
                  console.log(userChoice); // Output: true si l'utilisateur clique sur "OK", false sinon`
      },
      { 
        method: 'console.log', 
        description: 'Affiche la sortie sur la console du navigateur, utile pour le débogage',
        example: `console.log("Hello, World!");`
      },
      { 
        method: 'document.write', 
        description: 'Écrit directement dans le document HTML',
        example: `document.write("Hello, World!");`
      }
    ]
  },
  {
    category: "global",
    methods: [
      { 
        method: 'isNaN', 
        description: 'Détermine si une valeur est NaN (Not a Number) ou non',
        example: `isNaN("Hello"); // Output: true`
      },
      { 
        method: 'Number', 
        description: 'Convertit l’argument en nombre représentant la valeur de l’objet. Si la valeur ne peut pas être convertie en nombre, NaN est renvoyé.',
        example: `let num = Number("123");
                  console.log(num); // Output: 123`
      },
      { 
        method: 'eval', 
        description: 'Évalue le code JavaScript représenté sous forme de chaîne',
        example: `let x = 10;
                  let result = eval("x * 2");
                  console.log(result); // Output: 20`
      },
      { 
        method: 'encodeURI', 
        description: 'Encode un URI en UTF-8',
        example: `let uri = "https://www.example.com/page with spaces";
                  let encodedURI = encodeURI(uri);
                  console.log(encodedURI);`
      },
      { 
        method: 'decodeURI', 
        description: 'Décode un URI créé par encodeURI() ou d’autres fonctions',
        example: `let encodedURI = "https%3A%2F%2Fwww.example.com%2Fpage%20with%20spaces";
                  let decodedURI = decodeURI(encodedURI);
                  console.log(decodedURI);`
      },
      { 
        method: 'decodeURIComponent', 
        description: 'Décode un composant URI',
        example: `let encodedComponent = "Hello%20World%21";
                  let decodedComponent = decodeURIComponent(encodedComponent);
                  console.log(decodedComponent); // Output: "Hello World!"`
      },
      { 
        method: 'parseInt', 
        description: 'Convertit une chaîne de caractères en entier',
        example: `let str = "123";
                  let num = parseInt(str);
                  console.log(num); // Output: 123`
      },
      { 
        method: 'parseFloat', 
        description: 'Convertit une chaîne de caractères en nombre à virgule flottante',
        example: `let str = "123.45";
                  let num = parseFloat(str);
                  console.log(num); // Output: 123.45`
      },
      { 
        method: 'isFinite', 
        description: 'Détermine si la valeur transmise est un nombre fini',
        example: `isFinite(42); // Output: true`
      }
    ]
  }
];
