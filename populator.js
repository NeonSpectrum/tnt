module.exports = function(db) {
    return {
        populateQuestionnaire: function() {
            /*
             * Questionnaire
             */

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'What is the middle name of the newly elected President of the Republic of the Philippines?',
                choice_a: 'Fernandez',
                choice_b: 'Reyes',
                choice_c: 'Roa',
                choice_d: 'Rodney',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'Who is the newly appointed Presidential Chief Legal Counsel?',
                choice_a: 'Perfecto Yasay Jr.',
                choice_b: 'Salvador Panelo',
                choice_c: 'Silvestre Bello III',
                choice_d: 'Vitaliano Aguirre II',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'What is the venue where the Philippine Government panel and CPP-NPA NDF consultants are holding peace talks?',
                choice_a: 'Bern, Switzerland',
                choice_b: 'Oslo, Norway',
                choice_c: 'Reykjavik, Iceland',
                choice_d: 'Ulm, Sweden',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'Who served as the Senate President of the 16th Congress?',
                choice_a: 'Koko Pimentel',
                choice_b: 'Franklin Drilon',
                choice_c: 'Manny Villar',
                choice_d: 'Juan Ponce Enrile',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'What does the acronym UNCLOS stand for?',
                choice_a: 'United Nations Convention on the Limit of the Sea',
                choice_b: 'United Nations Conference on the Law of the Sea',
                choice_c: 'United Nations Conventional Law of the Sea',
                choice_d: 'United Nations Convention on the Law of the Sea',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'Who was the first president to deliver his inaugural speech in Filipino?',
                choice_a: 'Emilio Aguinaldo',
                choice_b: 'Ferdinand Marcos',
                choice_c: 'Benigno Aquino III',
                choice_d: 'Manuel Quezon',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'In what capital city was the Pope greeted by 6 million people on his visit to it in January 2015?',
                choice_a: 'Manila',
                choice_b: 'Havana',
                choice_c: 'Paris',
                choice_d: 'Ankara',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'Who is the new secretary of the Department of Finance under President Duterte’s administration?',
                choice_a: 'Cesar V. Purisima',
                choice_b: 'Carlos G. Dominguez III',
                choice_c: 'Benjamin E. Diokno',
                choice_d: 'Emmanuel F. Esguerra',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'Last June 30, 2016, President Duterte took his oath in Malacañang before a Supreme Court Associate Justice. What is the name of this Justice?',
                choice_a: 'Reynato Puno',
                choice_b: 'Ma. Lourdes Sereno',
                choice_c: 'Bienvenido Reyes',
                choice_d: 'Cecilia Muñoz Palma',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'Last July 4, President Barack Obama celebrated his daughter Malia’s birthday which also was America’s Independence Day. What is his daughter’s age  during the celebration?',
                choice_a: '17',
                choice_b: '18',
                choice_c: '19',
                choice_d: '20',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'What is the mode for charter change with which President Duterte prefers to amend the Philippine Constitution?',
                choice_a: 'Constitutional Convention',
                choice_b: 'Constitutional Assembly',
                choice_c: 'Constitutional Ratification',
                choice_d: 'Constitutional Framing',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'What is the court that junked China’s claim over the West Philippine Sea?',
                choice_a: 'Supreme Court',
                choice_b: 'United Nations Permanent Court of Arbitration',
                choice_c: 'Court of Appeals',
                choice_d: 'United Nation Convention Court',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'What is the name of the hospital where Sen. Miriam Defensor-Santiago was rushed last May 30, 2016, due to complication of her late-stage lung cancer?',
                choice_a: 'St. Luke’s Medical Center',
                choice_b: 'Asian Hospital and Medical Center',
                choice_c: 'Makati Medical Center',
                choice_d: 'Philippine General Hospital',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'Who is the running mate of Donald Trump in the upcoming November national election of the United States of America?',
                choice_a: 'Mike Pence',
                choice_b: 'Hillary Clinton',
                choice_c: 'Roberth Smith',
                choice_d: 'Henry Clay',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Current Events',
                question: 'How much is the expected peso increase in the pension of retired Social Security System (SSS) members that President Duterte granted to pensioners?',
                choice_a: '₱2,000.00',
                choice_b: '₱2,400.00',
                choice_c: '₱3,200.00',
                choice_d: '₱1,200.00',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'Who is the Secretary of the Department of Information and Communications Technology?',
                choice_a: 'Ismael Sueno',
                choice_b: 'Paulyn Jean R Ubial',
                choice_c: 'Regina Paz Lopez',
                choice_d: 'Rodolfo Salalima',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'Who is the current speaker of the House of Representatives?',
                choice_a: 'Danilo Suarez',
                choice_b: 'Edcel C. Lagman Jr.',
                choice_c: 'Pantaleon Alvarez',
                choice_d: 'Rodolfo Fariñas',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'Who is current Chancellor of Germany?',
                choice_a: 'Angela Merkel',
                choice_b: 'Charles Michel',
                choice_c: 'Dean Barrow',
                choice_d: 'Dilma Rousseff',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'What is the meaning of ISIS?',
                choice_a: 'Independent State of Islamic Syria',
                choice_b: 'Islamic State of Independent Syria',
                choice_c: 'Islamic State of Iran and Syria',
                choice_d: 'Islamic State of Iraq and Syria',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'What is the birthplace of President Rodrigo Duterte?',
                choice_a: 'Davao City',
                choice_b: 'Southern Leyte',
                choice_c: 'Cebu City',
                choice_d: 'Samar',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'What is the type of government which believes that power and authority is allocated between the national and local government units?',
                choice_a: 'Federalism',
                choice_b: 'Dictatorship',
                choice_c: 'Democratic',
                choice_d: 'Republican',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'What is the sports event in which Scott Mitchell beat Martin Adams for the World Championship in January 2015?',
                choice_a: 'Chess',
                choice_b: 'Archery',
                choice_c: 'Darts',
                choice_d: 'Billiards',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'Who is the Representative who refiled the SSS pension hike bill in the 17th Congress last July 25, 2016?',
                choice_a: 'Carlos Zarate',
                choice_b: 'Neri Colmenares',
                choice_c: 'Erico Fabian',
                choice_d: 'Teddy Casiño',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'For the Department of Agriculture, what is the target yield of rice in Central Luzon to make the crop sufficient under the Duterte administration?',
                choice_a: '10 metric tons',
                choice_b: '4 metric tons',
                choice_c: '6 metric tons',
                choice_d: '5 metric tons',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'What is the force battalion that took over the New Bilibid Prison in Muntinlupa last July 20, 2016, to crack down on drug lords?',
                choice_a: 'Special Action Force (SAF)',
                choice_b: 'Armed Forces of the Philippines (AFP)',
                choice_c: 'Philippine Air Force',
                choice_d: 'Philippine Marine Corps',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'What is the term used by the PNP pertaining to their police operation plans to address rampant criminality in the National Capital Region and eventually over the whole country through data-driven strategies?',
                choice_a: 'Oplan Digong',
                choice_b: 'Oplan Lambat-Sibat',
                choice_c: 'Oplan Bantay-Lakbay',
                choice_d: 'Oplan Katok',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'What is the name of the foundation where U.S. Republican presidential candidate Donald Trump donated a $1 million check dated May 24, 2016, from his personal account and is considered as his largest donation among the veterans’ charities in America?',
                choice_a: 'Marine Corps. Law Enforcement Foundation',
                choice_b: 'Partners for Patriots Foundation',
                choice_c: 'Puppy Jake Foundation',
                choice_d: 'Veterans for Life Foundation',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'What is the Supreme Court Justices’ vote count to dismiss the PCSO plunder case against former President Gloria Arroyo?',
                choice_a: '12 concur, 3 dissent',
                choice_b: '9 concur, 6 dissent',
                choice_c: '10 concur, 5 dissent',
                choice_d: '11 concur, 4 dissent',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'Who is Brazil’s new acting President, and who was inaugurated on June 1, 2016 because the prior President was suspended to face an impeachment trial?',
                choice_a: 'Michel Temer',
                choice_b: 'Dilm Rousseff',
                choice_c: 'Pedro Parente',
                choice_d: 'Paulo Rogerio Caffarelli',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Current Events',
                question: 'What is the title of Brillante Mendoza’s film that won the Le Prix Chandrika Charma at the 8th International Film Festival of the Fisherman of the World in Lorient, France?',
                choice_a: '"Hamog"',
                choice_b: '"Apocalypse Child"',
                choice_c: '"Taklub"',
                choice_d: '"Oil and Water"',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'The Filipino scientist who built the first radioisotope laboratory in the Philippines is',
                choice_a: 'Paulo Campos',
                choice_b: 'Benjamin Cabrera',
                choice_c: 'Ramon Barba',
                choice_d: 'Julian Banzon',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'He is considered as the Philippines’ Father of Geothermal Development',
                choice_a: 'Romeo Alicbusan',
                choice_b: 'Pio Andrade',
                choice_c: 'Arturo Alcaraz',
                choice_d: 'Leoncio Amadoro',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'The name of the 2016 Rio Olympics mascot is',
                choice_a: 'Cobi',
                choice_b: 'Quatchi',
                choice_c: 'Vinicius',
                choice_d: 'Sohoorang',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'How many UAAP basketball championships did Baby Dalupan win for UE?',
                choice_a: '9',
                choice_b: '5',
                choice_c: '15',
                choice_d: '12',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'If you had pogonophobia, what would you be afraid of?',
                choice_a: 'Beards',
                choice_b: 'Heights',
                choice_c: 'Blood',
                choice_d: 'Pictures',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'In the geological sense, the safest place to live in the Philippines because it is the farthest from volcanoes and earthquakes is',
                choice_a: 'Davao City',
                choice_b: 'Palawan',
                choice_c: 'Batanes Islands',
                choice_d: 'Sulu',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'Who ran through the streets naked crying “Eureka”?',
                choice_a: 'Archimedes',
                choice_b: 'Plato',
                choice_c: 'Pythagoras',
                choice_d: 'Euclid',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'How many men have walked on the moon?',
                choice_a: '4',
                choice_b: '9',
                choice_c: '12',
                choice_d: '16',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'Which monument is six inches bigger in summer?',
                choice_a: 'Eiffel Tower',
                choice_b: 'Colosseum',
                choice_c: 'Pyramids',
                choice_d: 'Tower of Pisa',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'The 2018 Winter Oylmpic Games will be held in',
                choice_a: 'Pyeonchang (South Korea)',
                choice_b: 'Munich (Germany)',
                choice_c: 'Davao (Phlippines)',
                choice_d: 'Annay (France)',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'The only day of the week in the Philippines that is not a Spanish word is',
                choice_a: 'Huwebes',
                choice_b: 'Linggo',
                choice_c: 'Miyerkules',
                choice_d: 'Sabado',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'The 8 rays of the sun in the Philippine flag represent the first 8 provinces which started the 1896 revolution. Which of the following is not a member of the first 8 provinces',
                choice_a: 'Ilocos',
                choice_b: 'Laguna',
                choice_c: 'Batangas',
                choice_d: 'Pampanga',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'What place is known as the "city within a city"?',
                choice_a: 'Vatican City',
                choice_b: 'Intramuros',
                choice_c: 'Taipei',
                choice_d: 'New York',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'The city known as the "crossroads of the world" is',
                choice_a: 'Istanbul',
                choice_b: 'New York',
                choice_c: 'Shanghai',
                choice_d: 'Davao City',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'General Information',
                question: 'The largest island in the world is',
                choice_a: 'Iceland',
                choice_b: 'Australia',
                choice_c: 'New Zealand',
                choice_d: 'Greenland',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'The Philippine area, which is about 300,000 square kilometers corresponds approximately to the area of',
                choice_a: 'Indonesia',
                choice_b: 'New Zealand',
                choice_c: 'Ireland',
                choice_d: 'Italy',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'The oldest school in the Philippines, founded in 1595 is',
                choice_a: 'University of Santo Tomas',
                choice_b: 'University of San Carlos',
                choice_c: 'Colegio de Santa Potenciana',
                choice_d: 'Beaterio de Santa Isabel',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'The Tabon man\'s remains are believed to be',
                choice_a: '22,000 to 24,000 years old',
                choice_b: '47,000 to 49,000 years old',
                choice_c: '8 years old',
                choice_d: '50,000 to 60,000 years old',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'Eugenio Torre, the first International Grandmaster, won the Chess Olympiad in 1974 held in',
                choice_a: 'Nice, France',
                choice_b: 'Madrid, Spain',
                choice_c: 'Tokyo, Japan',
                choice_d: 'Davao, Philippines',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'The smallest bat is found in the Philippines. It is called a',
                choice_a: 'Fruit Bat',
                choice_b: 'Bamboo Bat',
                choice_c: 'Vesper Bat',
                choice_d: 'Flying Fox',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'The Philippine mouse-deer, the smallest hoofed animal, is found in Balabac Island. It is locally known as',
                choice_a: 'Napu',
                choice_b: 'Chevrotain',
                choice_c: 'Pilandok',
                choice_d: 'Lawanit',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'The world\'s tiniest shell is found in the Philippines. It is called',
                choice_a: 'Conus Leopardus',
                choice_b: 'Conus Coronatus',
                choice_c: 'Pisidum',
                choice_d: 'Lambis',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'The first person in the world with an antenna implanted in his skull and recognized as the world’s first cyborg artist is',
                choice_a: 'Neil Harbisson',
                choice_b: 'Darth Vader',
                choice_c: 'Manfred Clynes',
                choice_d: 'Nathan S. Kline',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'An organism that has restored function or enhanced abilities due to the integration of some artificial component or technology that relies on some sort of feedback is termed as',
                choice_a: 'Bionic',
                choice_b: 'Biorobot',
                choice_c: 'Android',
                choice_d: 'Cyborg',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'The world’s longest underground river is',
                choice_a: 'Yangtze River',
                choice_b: 'Amazon River',
                choice_c: 'Nile River',
                choice_d: 'St. Paul\'s Natural Park',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'The Filipino biologist who invented the artificial coral reefs used for fisheries in Southeast Asia is',
                choice_a: 'Angel Alcala',
                choice_b: 'Arturo Alcaraz',
                choice_c: 'Benjamin Almeda',
                choice_d: 'Gina Lopez',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'The place considered to be the oldest province in the Philippines is',
                choice_a: 'Cebu',
                choice_b: 'Leyte',
                choice_c: 'Bohol',
                choice_d: 'Aklan',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'Believed to be the oldest hospital in the Philippines is',
                choice_a: 'San Lazaro Hospital',
                choice_b: 'Enfermeria de Naga',
                choice_c: 'Hospital de San Juan de Dios',
                choice_d: 'Hospicio de San Jose',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'This is known as the "City of 808 bridges"',
                choice_a: 'San Francisco',
                choice_b: 'Osaka',
                choice_c: 'Istanbul',
                choice_d: 'Rio de Janeiro',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'General Information',
                question: 'This is known as the "City in the Clouds"',
                choice_a: 'Machu Picchu',
                choice_b: 'Rio de Janeiro',
                choice_c: 'Buenos Aires',
                choice_d: 'Baguio City',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'A piece of stone weighs 22.7 g. When it is submerged in a graduated cylinder containing 50.0 mL of water, the level rose to 60.0 mL. What is the density of the stone in g/mL?',
                choice_a: '0.206',
                choice_b: '0.227',
                choice_c: '2.060',
                choice_d: '2.270',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'Which of the following is an endothermic process?',
                choice_a: 'Melting of ice',
                choice_b: 'Burning of paper',
                choice_c: 'Neutralization of a strong acid and a strong base',
                choice_d: 'Violent reaction of sodium metal with water',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'How can the rate at which water evaporates be decreased?',
                choice_a: 'Raising the temperature of water',
                choice_b: 'Covering the surface with a layer of oil',
                choice_c: 'Ensuring that the surrounding air is dry',
                choice_d: 'Exposing the maximum surface area to the air',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'Which functions are handled primarily by the left side of the brain?',
                choice_a: 'Logic',
                choice_b: 'Emotions',
                choice_c: 'Imagination',
                choice_d: 'Spatial Cues',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'Which of these is NOT a reactant in photosynthesis?',
                choice_a: 'Sunlight',
                choice_b: 'Carbon Dioxide',
                choice_c: 'Glucose',
                choice_d: 'Water',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'Who discovered the polio vaccine?',
                choice_a: 'Louis Pasteur',
                choice_b: 'Jonas Salk',
                choice_c: 'Konrad Zuse',
                choice_d: 'Eli Whitney',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'Which among the following vitamins is generally excreted by humans in urine?',
                choice_a: 'Vitamin A',
                choice_b: 'Vitamin C',
                choice_c: 'Vitamin D',
                choice_d: 'Vitamin E',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'When the velocity of an object is doubled, its _____ is doubled.',
                choice_a: 'Momentum',
                choice_b: 'Acceleration',
                choice_c: 'Kinetic Energy',
                choice_d: 'Potential Energy',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'A 340-hertz sound wave travels at 340 m/s in air with a wavelength of _____.',
                choice_a: '0 m',
                choice_b: '1 m',
                choice_c: '680 m',
                choice_d: '115,600 m',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'What do you call the long, narrow cut with very steep sides on the ocean floor?',
                choice_a: 'Guyot',
                choice_b: 'Trench',
                choice_c: 'Abyssal Plain',
                choice_d: 'Hydrothermal Vent',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'The nucleic acid present in virus is either DNA or RNA. Which of the following is not an RNA virus?',
                choice_a: 'Measles',
                choice_b: 'Ebola',
                choice_c: 'Small Pox',
                choice_d: 'Mumps',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'Which of the following is not a Jovian planet?',
                choice_a: 'Neptune',
                choice_b: 'Jupiter',
                choice_c: 'Venus',
                choice_d: 'Uranus',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'The most abundant protein in the human body is',
                choice_a: 'Collagen',
                choice_b: 'Albumin',
                choice_c: 'Keratin',
                choice_d: 'Tubulin',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'In computing, what is a firewall?',
                choice_a: 'Antivirus Program',
                choice_b: 'Internet Blocker',
                choice_c: 'Internet Filter',
                choice_d: 'Internet Logger',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Science and Technology',
                question: 'In what year did the iPhone first become available?',
                choice_a: '2004',
                choice_b: '2005',
                choice_c: '2006',
                choice_d: '2007',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'A female triathlon participant swims across the Cagayan River flowing south at a rate of 0.5 m/s. The participant keeps swimming perpendicular to the river at a rate of 0.5 m/s heading east. What is the resultant velocity of the female triathlon participant?',
                choice_a: '0.25 m/s southeast',
                choice_b: '0.50 m/s southeast',
                choice_c: '0.71 m/s southeast',
                choice_d: '1.00 m/s southeast',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'A car that travels 40 km/h for 2 h, at 50 km/h for 1 hr, and 20 km/h for 0.5 h, has an average speed of _____.',
                choice_a: '25 km/hr',
                choice_b: '37 km/hr',
                choice_c: '40 km/hr',
                choice_d: '45 km/hr',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'In a snail race, five contestants measured the distance covered by their pet snails after a minute; Rev at 19 centimeters, York at 700 millimeters, Ellie at 340 micrometers and Sybil at 6,700 nanometers. Which best represents the distance travelled by each snail in increasing order?',
                choice_a: 'Sybil – Ellie – Rev – York',
                choice_b: 'Sybil – Rev – Ellie – York',
                choice_c: 'York – Rev – Ellie – Sybil',
                choice_d: 'York – Ellie – Rev – Sybil',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'Who is this science fiction writer who wrote the three laws of robotics?',
                choice_a: 'Isaac Asimov',
                choice_b: 'H.G. Wells',
                choice_c: 'Arthur Clarke',
                choice_d: 'Robert Heinlein',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'Mark Zuckerberg is an American computer programmer and Internet entrepreneur. He is best known as one of five co-founders of a social networking website. What is the real name of Mark Zuckerberg?',
                choice_a: 'Mark Anthony Zuckerberg',
                choice_b: 'Mark Elton Zuckerberg',
                choice_c: 'Mark Lyndon Zuckerberg',
                choice_d: 'Mark Elliot Zuckerberg',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'Individuals who take a sedative-hypnotic to get to sleep at night sometimes complain of drowsiness and reduced motor performance the next day. This effect is known as the',
                choice_a: 'Residual Effect',
                choice_b: 'Physical Dependence',
                choice_c: 'Tolerance',
                choice_d: 'Addiction',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'After injection of local anesthetics, loss of function results in which of the following possible orders?',
                choice_a: 'temperature, pain, touch, proprioception, skeletal muscle tone',
                choice_b: 'pain, temperature, touch, proprioception, skeletal muscle tone',
                choice_c: 'pain, touch, skeletal muscle tone, proprioception, temperature',
                choice_d: 'touch, pain, temperature, proprioception, skeletal muscle tone',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'The children of a color-blind mother and a normal father will be',
                choice_a: 'normal daughters and sons',
                choice_b: 'normal sons and carrier daughters',
                choice_c: 'color-blind sons and carrier daughters',
                choice_d: 'color-blind sons and daughters',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'Which of the following pairs of diseases is caused by a virus?',
                choice_a: 'rabies and measles',
                choice_b: 'cholera and tuberculosis',
                choice_c: 'AIDS and syphilis',
                choice_d: 'tetanus and leptospirosis',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'During fasting, in what sequence are the following organic compounds used up by the body?',
                choice_a: 'fats, carbohydrates, then protein',
                choice_b: 'protein, lipids, then carbohydrates',
                choice_c: 'carbohydrates, proteins, then lipids',
                choice_d: 'carbohydrates, fats, then proteins',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'Prolactin is a hormone that activates milk production in mothers. Which gland produces this hormone?',
                choice_a: 'Pineal',
                choice_b: 'Thyroid',
                choice_c: 'Pituitary',
                choice_d: 'Pancreas',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'What do you call the phenomenon wherein materials like zinc oxide wires release electricity when they are bent and afterwards relaxed?',
                choice_a: 'Ohmic Effect',
                choice_b: 'Voltaic Effect',
                choice_c: 'Polarizing Effect',
                choice_d: 'Piezoelectric Effect',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'Which of the following is not a keyboard layout?',
                choice_a: 'QWERTY',
                choice_b: 'Maltron',
                choice_c: 'Sholes',
                choice_d: 'Dvorak',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'What do you call acids that will produce one mole of hydrogen ions when one mole of the acid dissolves in water?',
                choice_a: 'monoacidic',
                choice_b: 'monoprotic',
                choice_c: 'monatomic',
                choice_d: 'All of the above',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Science and Technology',
                question: 'What do you call the thin outermost layer of the Earth which is made up of soil subject to soil formation processes?',
                choice_a: 'Litosphere',
                choice_b: 'Pedosphere',
                choice_c: 'Aestenosphere',
                choice_d: 'None of the above',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'Find the value of r, where r = (3/4) - 2',
                choice_a: '9/16',
                choice_b: '16/9',
                choice_c: '6/8',
                choice_d: '8/6',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'Given A = { m, a, t, h }, B = { a, l, g, e, b, r, a }, C = { x/x is a vowel in the word "Benedict" that appears more than once }. Find ( A ∪ B ) ∩ C',
                choice_a: '{ m, a, t, h, l, g, e, b, r }',
                choice_b: '{ m, a, t, h }',
                choice_c: '{ e }',
                choice_d: '{ a, l, g, e, b, r, a }',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'When v = 6, s = 3, which of the following is a whole number?',
                choice_a: '1/sv',
                choice_b: 'v+s/v-s',
                choice_c: 'v-s/v+s',
                choice_d: 's/v',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'Which of the following equations has a solution of 2?',
                choice_a: '-2/3x - 1/6 + 1 = 13',
                choice_b: '8x - 64 = -64 + x',
                choice_c: '3x + 10 = 2 (x + 1)',
                choice_d: '2[3(-x + 2)] = 0',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'If 1 is subtracted from eight times a certain number the result is the same as if 89 is added to three times the number. Find the number.',
                choice_a: '18',
                choice_b: '20',
                choice_c: '24',
                choice_d: '30',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'The sum of the digits of a two-digit number is 8. If the digits are reversed, the new number is 18 more than the original number. What is the original number?',
                choice_a: '17',
                choice_b: '26',
                choice_c: '35',
                choice_d: '53',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'Jun wants to have an average grade of at least 88 in his Mathematics class. If he got 86, 90 and 87 in the first three quarters, what grade must he get in the last quarter?',
                choice_a: 'at least 87',
                choice_b: 'at least 89',
                choice_c: 'at least 90',
                choice_d: 'at least 91',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'Jan, Jen and Jin prepared a party for their grandmother and had their shares in the ratio 3:2:5. If they spent Php 15,000 for the party, how much was Jen\'s contribution?',
                choice_a: 'Php 3,000',
                choice_b: 'Php 4,500',
                choice_c: 'Php 5,000',
                choice_d: 'Php 7,500',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'What is the area of a rectangle whose dimensions are (3x + 2) by (2x - 7)?',
                choice_a: '6x<sup>2</sup> + 15x - 14',
                choice_b: '6x<sup>2</sup> + 17x - 14',
                choice_c: '6x<sup>2</sup> - 15x - 14',
                choice_d: '6x<sup>2</sup> - 17x - 14',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'A central angle of 1360 subtends an arc of 28.5 cm. What is the radius of the circle?',
                choice_a: '11.01 cm',
                choice_b: '12.01 cm',
                choice_c: '12.09 cm',
                choice_d: '11.09 cm',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'Solve the inequality 3 < -2x + 5 < 8',
                choice_a: '-5 ≤ x < 3/2',
                choice_b: '-3/2 < x < 1',
                choice_c: 'x ≥ –3/2 or x < 3/2',
                choice_d: 'x ≥ 5',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'At the last party Abby prepared 18 meatballs from 2.5 lbs of hamburger. Abby is planning another party and needs 54 meatballs. How many pounds of hamburger does she need?',
                choice_a: '6 pounds',
                choice_b: '6.5 pounds',
                choice_c: '7 pounds',
                choice_d: '7.5 pounds',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'What is the perimeter of a regular nonagon, it one side measures 4 cm?',
                choice_a: '13 cm',
                choice_b: '36 cm',
                choice_c: '12 cm',
                choice_d: '18 cm',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'The measure of a complement of an angle is 5 times the measure of the angle. What is the measure of the angle?',
                choice_a: '15',
                choice_b: '45',
                choice_c: '60',
                choice_d: '75',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'kayangkaya',
                category: 'Mathematics',
                question: 'Three-eighths of a revolution is how many degrees?',
                choice_a: '45',
                choice_b: '90',
                choice_c: '135',
                choice_d: '67.5',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'What comes next in the pattern 0, 1, 6, 31, 156, 781, _____?',
                choice_a: '3904',
                choice_b: '3905',
                choice_c: '3906',
                choice_d: '3907',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'A piece of wire is shaped to enclose an equilateral triangle in which the area is 16<sup>√3</sup> cm<sup>2</sup>. It is then reshaped to enclose a rectangle whose length is 9 cm. Find the area of the rectangle.',
                choice_a: '25 cm<sup>2</sup>',
                choice_b: '37 cm<sup>2</sup>',
                choice_c: '27 cm<sup>2</sup>',
                choice_d: '32 cm<sup>2</sup>',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'How many square inches of a material are needed to create an open top rectangular solid, the volume of which is 54 cubic inches? Assume that the length and width are of the same measurements and that the height is twice the length.',
                choice_a: '64 square inches',
                choice_b: '81 square inches',
                choice_c: '49  square inches',
                choice_d: '121 square inches',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'How many months should Sally invest Php 600,000.00 to earn Php 108,000.00 at the rate of 12% annually?',
                choice_a: '6 mos.',
                choice_b: '12 mos.',
                choice_c: '18 mos.',
                choice_d: '24 mos.',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'What is the lowest point in the parabola y = x2 + 2x + 5?',
                choice_a: '(1, 0)',
                choice_b: '(0, 1)',
                choice_c: '(-1, 4)',
                choice_d: '(4, -1)',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'If M = R = 2W and MWR = 1372, what is the value of W?',
                choice_a: '7',
                choice_b: '9',
                choice_c: '12',
                choice_d: '16',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'Simplify ( 2U - 3E - 7 )<sup>2</sup> - ( 3E - 2U + 7 )<sup>2</sup>',
                choice_a: '-1',
                choice_b: '0',
                choice_c: '1',
                choice_d: '2',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'Find the remainder when (5W<sup>3</sup> - 2W<sup>2</sup> + 5W - 14) is divided by (W - 2)?',
                choice_a: '2',
                choice_b: '5',
                choice_c: '14',
                choice_d: '28',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'What is the radius of the largest circle that can be inscribed in a square whose area is 576 square units?',
                choice_a: '10 units',
                choice_b: '12 units',
                choice_c: '14 units',
                choice_d: '16 units',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: '35.2 to the power x, equals  7.5 to the power (x-2), solve for x.',
                choice_a: '-2.06',
                choice_b: '-2.10',
                choice_c: '-2.60',
                choice_d: '2.60',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'The product of the sum of 54,963 and 48, 876 and the difference of 20,007 and 19,987 is',
                choice_a: '2,067,680',
                choice_b: '2,066,780',
                choice_c: '2,077,680',
                choice_d: '2,076,780',
                correct_answer: 'D',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'Paul received from his parents the following amount for his daily expenses in school: Monday, P225; Tuesday, P250; Wednesday, P230; Thursday, P210. How much did Paul receive on Friday to average P240 as Paul\'s daily allowance for the week?',
                choice_a: '₱285',
                choice_b: '₱280',
                choice_c: '₱275',
                choice_d: '₱270',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'A woman has a 180mile-trip to make, of which the 1st third is over congested highways while the remainder is over a good freeway. If she averages 40miles/hr over the 1st 60miles, at what average speed in miles/hr must she drive the remaining 120miles to average 45miles/hr for the entire trip?',
                choice_a: 'Between 40 & 45',
                choice_b: 'Between 42 & 47',
                choice_c: 'Between 45 & 50',
                choice_d: 'Between 49 & 54',
                correct_answer: 'C',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'The following equations are INCORRECT except',
                choice_a: '{[(-36) ÷ (-9)] - (-15)} {(-2)(-3)} = -114',
                choice_b: '{[(-45) ÷ (-9)] - (-8)} {(-5) - (-4)} = -13',
                choice_c: '{(-4) x (-7)} - {[(-36) ÷ (-4)] - (-2)} = -17',
                choice_d: '{(-15) ÷ (-3)} - {-10 - [(-15) + (-5)]} = +5',
                correct_answer: 'B',
                released: 'false',
                timer: 0
            }, function(err, items) {});

            db.collection('questionnaire').insert({
                difficulty: 'isipisip',
                category: 'Mathematics',
                question: 'What are the complete factors of x<sup>4</sup> + 3x<sup>2</sup> + 4?',
                choice_a: '(x<sup>2</sup> – x + 2)(x<sup>2</sup> + x + 2)',
                choice_b: '(x<sup>2</sup> – x + 2)(x<sup>2</sup> + x – 2)',
                choice_c: '(x<sup>2</sup> + x – 2)(x<sup>2</sup> – x – 2)',
                choice_d: '(x<sup>2</sup> + x + 2)(x<sup>2</sup> – x – 2)',
                correct_answer: 'A',
                released: 'false',
                timer: 0
            }, function(err, items) {});
        },
        populateScoreboard: function() {
            /*
             * Scoreboard
             */

            db.collection('scoreboard').insert({
                college: 'CAS - Manila',
                total_score: 0
            }, function(err, items) {});

            db.collection('scoreboard').insert({
                college: 'CBA - Manila',
                total_score: 0
            }, function(err, items) {});

            db.collection('scoreboard').insert({
                college: 'CCSS - Manila',
                total_score: 0
            }, function(err, items) {});

            db.collection('scoreboard').insert({
                college: 'CDent - Manila',
                total_score: 0
            }, function(err, items) {});

            db.collection('scoreboard').insert({
                college: 'CEduc - Manila',
                total_score: 0
            }, function(err, items) {});

            db.collection('scoreboard').insert({
                college: 'CEng - Manila',
                total_score: 0
            }, function(err, items) {});

            db.collection('scoreboard').insert({
                college: 'CAS - Caloocan',
                total_score: 0
            }, function(err, items) {});

            db.collection('scoreboard').insert({
                college: 'CBA - Caloocan',
                total_score: 0
            }, function(err, items) {});

            db.collection('scoreboard').insert({
                college: 'CEng - Caloocan',
                total_score: 0
            }, function(err, items) {});

            db.collection('scoreboard').insert({
                college: 'CFAD - Caloocan',
                total_score: 0
            }, function(err, items) {});
        },
        resetQuestionnaire: function(callback) {
            db.collection('questionnaire').remove({}, function(err, items) {
                callback();
            });
        },
        resetScoreboard: function(callback) {
            db.collection('scoreboard').remove({}, function(err, items) {
                callback();
            });
        },
        resetAnswersheet: function(callback) {
            db.collection('answersheet').remove({}, function(err, items) {
                callback();
            });
        }
    };
}
