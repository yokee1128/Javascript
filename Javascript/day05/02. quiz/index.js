const data = [
  {
    id: 1,
    fullName: "Dalston Bowker",
    avatar: "https://robohash.org/magniporrovoluptatem.png?size=50x50&set=set1",
    university: "Universidade Santa Cecília dos Bandeirantes",
    department: "Research and Development",
  },
  {
    id: 2,
    fullName: "Kathy Stocks",
    avatar: "https://robohash.org/providentquiaaut.png?size=50x50&set=set1",
    university: "Technological Education Institute of Halkida, Euboea",
    department: "Training",
  },
  {
    id: 3,
    fullName: "Bud Scallan",
    avatar:
      "https://robohash.org/numquamnecessitatibusvoluptas.png?size=50x50&set=set1",
    university: "Samara State Aerospace University",
    department: "Marketing",
  },
  {
    id: 4,
    fullName: "Garrot Nibley",
    avatar: "https://robohash.org/optionequereiciendis.png?size=50x50&set=set1",
    university: "Singapore Management University",
    department: "Training",
  },
  {
    id: 5,
    fullName: "Clevie Bestwerthick",
    avatar: "https://robohash.org/corruptianiminihil.png?size=50x50&set=set1",
    university: "Open Polytechnic ",
    department: "Marketing",
  },
  {
    id: 6,
    fullName: "Mirna Beard",
    avatar:
      "https://robohash.org/maioresnecessitatibusmolestiae.png?size=50x50&set=set1",
    university: "Christian Theological Academy in Warszaw",
    department: "Sales",
  },
  {
    id: 7,
    fullName: "Tessy Onele",
    avatar: "https://robohash.org/officiisomnisaut.png?size=50x50&set=set1",
    university: "Bilkent University",
    department: "Support",
  },
  {
    id: 8,
    fullName: "Merrielle Allwright",
    avatar: "https://robohash.org/ducimusametquos.png?size=50x50&set=set1",
    university: "Seokyeong University",
    department: "Marketing",
  },
  {
    id: 9,
    fullName: "Davey Scotts",
    avatar: "https://robohash.org/voluptasminusut.png?size=50x50&set=set1",
    university: "Universite Amadou Hampaté Ba",
    department: "Services",
  },
  {
    id: 10,
    fullName: "Dannel Stoute",
    avatar:
      "https://robohash.org/solutaaperiamconsectetur.png?size=50x50&set=set1",
    university: "Center for Entrepreneurship and Small Business Management",
    department: "Engineering",
  },
  {
    id: 11,
    fullName: "Ambur Hebbard",
    avatar: "https://robohash.org/nequecumquequi.png?size=50x50&set=set1",
    university: "Kanazawa Institute of Technology",
    department: "Legal",
  },
  {
    id: 12,
    fullName: "Stephani Hanny",
    avatar: "https://robohash.org/quasinisiporro.png?size=50x50&set=set1",
    university: "Okayama Prefectural University",
    department: "Accounting",
  },
  {
    id: 13,
    fullName: "Fernanda Gadd",
    avatar: "https://robohash.org/utametcorrupti.png?size=50x50&set=set1",
    university: "University of the Incarnate World",
    department: "Support",
  },
  {
    id: 14,
    fullName: "Tommie Yearns",
    avatar: "https://robohash.org/doloresexpeditaquo.png?size=50x50&set=set1",
    university: "Renmin University of China",
    department: "Services",
  },
  {
    id: 15,
    fullName: "Melvin Vanetti",
    avatar: "https://robohash.org/optioetvoluptatem.png?size=50x50&set=set1",
    university: "Rollins College",
    department: "Sales",
  },
  {
    id: 16,
    fullName: "Alejandra Fehely",
    avatar: "https://robohash.org/laborefacilisiusto.png?size=50x50&set=set1",
    university: "Fachhochschule Flensburg",
    department: "Training",
  },
  {
    id: 17,
    fullName: "Rustie Killingback",
    avatar: "https://robohash.org/solutaetalias.png?size=50x50&set=set1",
    university: "Sheikhbahaee University",
    department: "Training",
  },
  {
    id: 18,
    fullName: "Almeda Turpie",
    avatar:
      "https://robohash.org/excepturivoluptasquis.png?size=50x50&set=set1",
    university: "International Colleges of Islamic Science",
    department: "Support",
  },
  {
    id: 19,
    fullName: "Gav Pellingar",
    avatar: "https://robohash.org/consecteturetsunt.png?size=50x50&set=set1",
    university: "University of Florence",
    department: "Human Resources",
  },
  {
    id: 20,
    fullName: "Virginie Biddle",
    avatar:
      "https://robohash.org/minusteneturinventore.png?size=50x50&set=set1",
    university: "John Cabot University",
    department: "Business Development",
  },
  {
    id: 21,
    fullName: "Quintina Quarton",
    avatar: "https://robohash.org/veritatisquiest.png?size=50x50&set=set1",
    university:
      "Fachhochschule Offenburg, Hochschule für Technik und Wirtschaft",
    department: "Research and Development",
  },
  {
    id: 22,
    fullName: "Kevin McGenn",
    avatar:
      "https://robohash.org/voluptatemetexplicabo.png?size=50x50&set=set1",
    university: "Lesley University",
    department: "Sales",
  },
  {
    id: 23,
    fullName: "Sabine Grevile",
    avatar: "https://robohash.org/ametutprovident.png?size=50x50&set=set1",
    university: "United States International University",
    department: "Product Management",
  },
  {
    id: 24,
    fullName: "Thibaut Winfindale",
    avatar:
      "https://robohash.org/maximevoluptatemconsequatur.png?size=50x50&set=set1",
    university: "Université Robert Schuman (Strasbourg III)",
    department: "Product Management",
  },
  {
    id: 25,
    fullName: "Marysa Howell",
    avatar:
      "https://robohash.org/voluptatesrecusandaeoptio.png?size=50x50&set=set1",
    university: "State University of New York College at Potsdam",
    department: "Business Development",
  },
  {
    id: 26,
    fullName: "Elaine Pawellek",
    avatar: "https://robohash.org/etimpeditcorporis.png?size=50x50&set=set1",
    university: "Arab Open University, Kuwait Branch",
    department: "Engineering",
  },
  {
    id: 27,
    fullName: "Amerigo Ianni",
    avatar: "https://robohash.org/commodienimquis.png?size=50x50&set=set1",
    university: "Technische Universität Berlin",
    department: "Engineering",
  },
  {
    id: 28,
    fullName: "Oralia Brideaux",
    avatar: "https://robohash.org/deseruntestculpa.png?size=50x50&set=set1",
    university: "University of Cebu",
    department: "Product Management",
  },
  {
    id: 29,
    fullName: "Dorie Marler",
    avatar: "https://robohash.org/eumperferendisnon.png?size=50x50&set=set1",
    university: "Universidad Regional Miguel Hidalgo",
    department: "Training",
  },
  {
    id: 30,
    fullName: "Sheree Maddern",
    avatar: "https://robohash.org/autemetomnis.png?size=50x50&set=set1",
    university: "St. Peter's College",
    department: "Business Development",
  },
  {
    id: 31,
    fullName: "Scotti Baldetti",
    avatar:
      "https://robohash.org/assumendaaspernaturquis.png?size=50x50&set=set1",
    university: "Yanbu University College",
    department: "Sales",
  },
  {
    id: 32,
    fullName: "Caterina MacLaren",
    avatar: "https://robohash.org/nemoquirem.png?size=50x50&set=set1",
    university: "Sultanah Bahiyah Polytechnic",
    department: "Sales",
  },
  {
    id: 33,
    fullName: "Justen Maylin",
    avatar:
      "https://robohash.org/repellatmolestiaeerror.png?size=50x50&set=set1",
    university: "Universidade Católica de Pelotas",
    department: "Support",
  },
  {
    id: 34,
    fullName: "Sayres Skouling",
    avatar:
      "https://robohash.org/quiaconsequatureveniet.png?size=50x50&set=set1",
    university: "New England Conservatory of Music",
    department: "Engineering",
  },
  {
    id: 35,
    fullName: "Onida Delcastel",
    avatar: "https://robohash.org/rerumofficiisiste.png?size=50x50&set=set1",
    university: "Anambra State University of Science and Technology",
    department: "Marketing",
  },
  {
    id: 36,
    fullName: "Russ Stanier",
    avatar: "https://robohash.org/enimipsumdolore.png?size=50x50&set=set1",
    university: "Ryszard Lazarski University of Commerce and Law in Warsaw",
    department: "Sales",
  },
  {
    id: 37,
    fullName: "Richy Dumphy",
    avatar:
      "https://robohash.org/quisquamnisitemporibus.png?size=50x50&set=set1",
    university: "Selcuk University",
    department: "Business Development",
  },
  {
    id: 38,
    fullName: "Noreen Hodgets",
    avatar: "https://robohash.org/dolordoloresut.png?size=50x50&set=set1",
    university: "Keio University",
    department: "Engineering",
  },
  {
    id: 39,
    fullName: "Gaultiero Scranedge",
    avatar: "https://robohash.org/facereevenietdolor.png?size=50x50&set=set1",
    university: "Federal University of Technology, Akure",
    department: "Product Management",
  },
  {
    id: 40,
    fullName: "Iorgos Dmitrienko",
    avatar:
      "https://robohash.org/beataeaccusantiumdolores.png?size=50x50&set=set1",
    university: "Universidad Academia de Humanismo Cristiano",
    department: "Research and Development",
  },
  {
    id: 41,
    fullName: "Dolly Maly",
    avatar:
      "https://robohash.org/voluptatemmolestiaecorporis.png?size=50x50&set=set1",
    university: "Jichi Medical School",
    department: "Legal",
  },
  {
    id: 42,
    fullName: "Lorianna Petken",
    avatar: "https://robohash.org/ettotamet.png?size=50x50&set=set1",
    university: "Centre Universitaire de Technologie",
    department: "Support",
  },
  {
    id: 43,
    fullName: "Helli McCrystal",
    avatar: "https://robohash.org/doloribusadsint.png?size=50x50&set=set1",
    university: "Virginia State University",
    department: "Research and Development",
  },
  {
    id: 44,
    fullName: "Gilda Battersby",
    avatar: "https://robohash.org/possimuseoset.png?size=50x50&set=set1",
    university: "Eindhoven University of Technology",
    department: "Services",
  },
  {
    id: 45,
    fullName: "Regan Janouch",
    avatar:
      "https://robohash.org/doloremquenostrumunde.png?size=50x50&set=set1",
    university: "Technical University of Civil Engineering Bucharest",
    department: "Training",
  },
  {
    id: 46,
    fullName: "Natassia Arnald",
    avatar: "https://robohash.org/aperiamsitnesciunt.png?size=50x50&set=set1",
    university: "Indian University",
    department: "Business Development",
  },
  {
    id: 47,
    fullName: "Esmaria McCunn",
    avatar: "https://robohash.org/doloremdolorumex.png?size=50x50&set=set1",
    university: "Universidad Central",
    department: "Support",
  },
  {
    id: 48,
    fullName: "Cooper Gerran",
    avatar: "https://robohash.org/aperiameossit.png?size=50x50&set=set1",
    university: "The McGregor School of Antioch University",
    department: "Business Development",
  },
  {
    id: 49,
    fullName: "Silvain Snoday",
    avatar: "https://robohash.org/vitaeipsumvel.png?size=50x50&set=set1",
    university: "Universidade Federal de Minas Gerais",
    department: "Human Resources",
  },
  {
    id: 50,
    fullName: "Jennie Mont",
    avatar: "https://robohash.org/laborequodporro.png?size=50x50&set=set1",
    university: "Université de Toulouse",
    department: "Product Management",
  },
  {
    id: 51,
    fullName: "Bobbie Yurukhin",
    avatar: "https://robohash.org/autipsumtempore.png?size=50x50&set=set1",
    university: "Ateneo de Naga University",
    department: "Services",
  },
  {
    id: 52,
    fullName: "Lucie Michelet",
    avatar: "https://robohash.org/utmagnivelit.png?size=50x50&set=set1",
    university: "Heythrop College, University of London",
    department: "Accounting",
  },
  {
    id: 53,
    fullName: "Hyman Kahane",
    avatar: "https://robohash.org/veroautquia.png?size=50x50&set=set1",
    university: "Iact College",
    department: "Services",
  },
  {
    id: 54,
    fullName: "Nettle Chad",
    avatar: "https://robohash.org/atquosvoluptatibus.png?size=50x50&set=set1",
    university: "Saint Mary's University",
    department: "Engineering",
  },
  {
    id: 55,
    fullName: "Nicolette Maylin",
    avatar: "https://robohash.org/abquireprehenderit.png?size=50x50&set=set1",
    university: "Divine Word College",
    department: "Marketing",
  },
  {
    id: 56,
    fullName: "Silvana Twomey",
    avatar: "https://robohash.org/remliberovitae.png?size=50x50&set=set1",
    university: "University of Wisconsin - Stout",
    department: "Engineering",
  },
  {
    id: 57,
    fullName: "Ebba Gridley",
    avatar: "https://robohash.org/sapienteullamnihil.png?size=50x50&set=set1",
    university: "University of Texas at Arlington",
    department: "Support",
  },
  {
    id: 58,
    fullName: "Stanislas Dalgleish",
    avatar:
      "https://robohash.org/similiquepossimusfugit.png?size=50x50&set=set1",
    university: "Hanoi University of Science & Technology",
    department: "Engineering",
  },
  {
    id: 59,
    fullName: "Meredith Barnwill",
    avatar: "https://robohash.org/etblanditiiseos.png?size=50x50&set=set1",
    university: "Universidade Lusófona de Humanidades e Technologias",
    department: "Product Management",
  },
  {
    id: 60,
    fullName: "Doris Bunce",
    avatar: "https://robohash.org/etnesciuntaliquam.png?size=50x50&set=set1",
    university: "Saudi Electronic University",
    department: "Legal",
  },
  {
    id: 61,
    fullName: "Glen Dewi",
    avatar: "https://robohash.org/debitisutsunt.png?size=50x50&set=set1",
    university: "Nicolaus Copernicus University of Torun",
    department: "Accounting",
  },
  {
    id: 62,
    fullName: "Teriann Cattermoul",
    avatar: "https://robohash.org/maximeassumendaodit.png?size=50x50&set=set1",
    university: "Jumeira University",
    department: "Sales",
  },
  {
    id: 63,
    fullName: "Merill Pillifant",
    avatar:
      "https://robohash.org/nihilreprehenderitsapiente.png?size=50x50&set=set1",
    university: "Centro Universitário Plinio Leite",
    department: "Accounting",
  },
  {
    id: 64,
    fullName: "Lorinda Callister",
    avatar: "https://robohash.org/insitdoloribus.png?size=50x50&set=set1",
    university: "Mercyhurst College",
    department: "Support",
  },
  {
    id: 65,
    fullName: "Sibel McDugal",
    avatar: "https://robohash.org/quiaomnisnam.png?size=50x50&set=set1",
    university: "University of Wales",
    department: "Sales",
  },
  {
    id: 66,
    fullName: "Jerrylee Dorrian",
    avatar: "https://robohash.org/voluptatibusabquidem.png?size=50x50&set=set1",
    university: "Université de Tunis El Manar",
    department: "Services",
  },
  {
    id: 67,
    fullName: "Torrin Loiterton",
    avatar:
      "https://robohash.org/exercitationemaccusantiumdistinctio.png?size=50x50&set=set1",
    university: "Black Hawk College",
    department: "Marketing",
  },
  {
    id: 68,
    fullName: "Natal Vondra",
    avatar: "https://robohash.org/velnobisillum.png?size=50x50&set=set1",
    university: "St. Ambrose University",
    department: "Marketing",
  },
  {
    id: 69,
    fullName: "Ikey Rickhuss",
    avatar: "https://robohash.org/autemvitaedolorem.png?size=50x50&set=set1",
    university: "Universidad de la Empresa (UDE)",
    department: "Support",
  },
  {
    id: 70,
    fullName: "Viviene Chater",
    avatar:
      "https://robohash.org/voluptatemsuscipitqui.png?size=50x50&set=set1",
    university: "Arizona State University, Polytechnic Campus",
    department: "Marketing",
  },
  {
    id: 71,
    fullName: "Guillaume Corser",
    avatar: "https://robohash.org/deseruntsitunde.png?size=50x50&set=set1",
    university: "Katowice School of Economics",
    department: "Legal",
  },
  {
    id: 72,
    fullName: "Reynard Trimby",
    avatar: "https://robohash.org/nostrumatquesaepe.png?size=50x50&set=set1",
    university: "International Islamic University Chittagong",
    department: "Accounting",
  },
  {
    id: 73,
    fullName: "Melessa Carragher",
    avatar: "https://robohash.org/autfacilisvitae.png?size=50x50&set=set1",
    university:
      "International University of Fundamental Studies, St. Petersburg",
    department: "Research and Development",
  },
  {
    id: 74,
    fullName: "Kingston Lambie",
    avatar:
      "https://robohash.org/necessitatibusperspiciatisvelit.png?size=50x50&set=set1",
    university: "University of Montana",
    department: "Training",
  },
  {
    id: 75,
    fullName: "Woody Iannuzzelli",
    avatar:
      "https://robohash.org/impeditharumdoloremque.png?size=50x50&set=set1",
    university: "Belarussian State Medical University",
    department: "Support",
  },
  {
    id: 76,
    fullName: "Sadye Emps",
    avatar: "https://robohash.org/illoplaceatprovident.png?size=50x50&set=set1",
    university: "Tokyo University of Information Sciences",
    department: "Business Development",
  },
  {
    id: 77,
    fullName: "Arin Bloggett",
    avatar: "https://robohash.org/etquiasaepe.png?size=50x50&set=set1",
    university: "Alverno College",
    department: "Sales",
  },
  {
    id: 78,
    fullName: "Dalli Maskelyne",
    avatar: "https://robohash.org/quamrerumnatus.png?size=50x50&set=set1",
    university: "Sulaimani Polytechnic University",
    department: "Accounting",
  },
  {
    id: 79,
    fullName: "Cristine Florence",
    avatar: "https://robohash.org/veritatisnihilvel.png?size=50x50&set=set1",
    university: "Universidad Particular de Chiclayo",
    department: "Business Development",
  },
  {
    id: 80,
    fullName: "Wilfred Barfoot",
    avatar:
      "https://robohash.org/natusprovidentvoluptas.png?size=50x50&set=set1",
    university: "Ruprecht-Karls-Universität Heidelberg",
    department: "Engineering",
  },
  {
    id: 81,
    fullName: "Barrie McLaren",
    avatar: "https://robohash.org/etrepudiandaeomnis.png?size=50x50&set=set1",
    university: "St. Petersburg State University",
    department: "Engineering",
  },
  {
    id: 82,
    fullName: "Xylina Poyner",
    avatar: "https://robohash.org/sedquivoluptatem.png?size=50x50&set=set1",
    university: "Universidad Privada Los Andes",
    department: "Human Resources",
  },
  {
    id: 83,
    fullName: "Graham Fletham",
    avatar:
      "https://robohash.org/assumendamolestiaeeum.png?size=50x50&set=set1",
    university: "Universidad Chapultepéc",
    department: "Marketing",
  },
  {
    id: 84,
    fullName: "Leland Sallis",
    avatar: "https://robohash.org/eautasperiores.png?size=50x50&set=set1",
    university: "Rheinische Friedrich-Wilhelms Universität Bonn",
    department: "Engineering",
  },
  {
    id: 85,
    fullName: "Ortensia Halbord",
    avatar: "https://robohash.org/nemoimpeditnon.png?size=50x50&set=set1",
    university: "Balqa Applied University",
    department: "Business Development",
  },
  {
    id: 86,
    fullName: "Jesse De La Coste",
    avatar: "https://robohash.org/repellateaautem.png?size=50x50&set=set1",
    university: "Nnamdi Azikiwe University",
    department: "Research and Development",
  },
  {
    id: 87,
    fullName: "Margalo Robertelli",
    avatar: "https://robohash.org/aliquidautveniam.png?size=50x50&set=set1",
    university: "DeVry Institute of Technology, Pomona",
    department: "Product Management",
  },
  {
    id: 88,
    fullName: "Rurik Brownfield",
    avatar: "https://robohash.org/esttemporaut.png?size=50x50&set=set1",
    university: "Hamadan University of Medical Sciences",
    department: "Engineering",
  },
  {
    id: 89,
    fullName: "Cort Dullaghan",
    avatar: "https://robohash.org/eumasperioresqui.png?size=50x50&set=set1",
    university: "Houghton College",
    department: "Legal",
  },
  {
    id: 90,
    fullName: "Valentijn Stubs",
    avatar: "https://robohash.org/sitoptioqui.png?size=50x50&set=set1",
    university: "St. Andrews Presbyterian College",
    department: "Legal",
  },
  {
    id: 91,
    fullName: "Fredrick Chadbourne",
    avatar: "https://robohash.org/recusandaequodut.png?size=50x50&set=set1",
    university: "University of Portharcourt",
    department: "Business Development",
  },
  {
    id: 92,
    fullName: "Karlis Permain",
    avatar: "https://robohash.org/eaevenietmagnam.png?size=50x50&set=set1",
    university: "Darul Takzim Institute of Technology",
    department: "Marketing",
  },
  {
    id: 93,
    fullName: "Warden Burghall",
    avatar:
      "https://robohash.org/abprovidentlaudantium.png?size=50x50&set=set1",
    university: "Kokushikan University",
    department: "Services",
  },
  {
    id: 94,
    fullName: "Leland Reder",
    avatar:
      "https://robohash.org/commodivoluptasmollitia.png?size=50x50&set=set1",
    university: "Kumaun University",
    department: "Support",
  },
  {
    id: 95,
    fullName: "Shaine Haylett",
    avatar:
      "https://robohash.org/delectuspraesentiumrerum.png?size=50x50&set=set1",
    university: "Universitas Kristen Maranatha",
    department: "Marketing",
  },
  {
    id: 96,
    fullName: "Charlton Bram",
    avatar: "https://robohash.org/dolorametimpedit.png?size=50x50&set=set1",
    university: "Mekelle Institute of Technology",
    department: "Engineering",
  },
  {
    id: 97,
    fullName: "Benn Swanne",
    avatar: "https://robohash.org/quinisicum.png?size=50x50&set=set1",
    university: "National Taiwan College of the Arts",
    department: "Product Management",
  },
  {
    id: 98,
    fullName: "Des Sarch",
    avatar:
      "https://robohash.org/blanditiisetarchitecto.png?size=50x50&set=set1",
    university: "Guangdong Polytechnic Normal University",
    department: "Accounting",
  },
  {
    id: 99,
    fullName: "Seumas Wrintmore",
    avatar: "https://robohash.org/nemolaudantiumrerum.png?size=50x50&set=set1",
    university: "Chuo Gakuin University",
    department: "Sales",
  },
  {
    id: 100,
    fullName: "Barnie Minnis",
    avatar: "https://robohash.org/impeditsintvoluptas.png?size=50x50&set=set1",
    university: "Zimbabwe Open University",
    department: "Accounting",
  },
  {
    id: 101,
    fullName: "Pen Timmis",
    avatar:
      "https://robohash.org/nullaculpaexercitationem.png?size=50x50&set=set1",
    university: "University of Nueva Caceres",
    department: "Engineering",
  },
  {
    id: 102,
    fullName: "Donavon Blaza",
    avatar:
      "https://robohash.org/similiqueodiodoloribus.png?size=50x50&set=set1",
    university: "Universidade Nova de Lisboa",
    department: "Product Management",
  },
  {
    id: 103,
    fullName: "Jeri Bertin",
    avatar:
      "https://robohash.org/aperiamrepudiandaeest.png?size=50x50&set=set1",
    university: "Toyohashi University of Technology",
    department: "Accounting",
  },
  {
    id: 104,
    fullName: "Chickie Colleymore",
    avatar: "https://robohash.org/culpavoluptasminus.png?size=50x50&set=set1",
    university: "Tokuyama University",
    department: "Services",
  },
  {
    id: 105,
    fullName: "Whitney Sturman",
    avatar:
      "https://robohash.org/idvoluptatemreiciendis.png?size=50x50&set=set1",
    university: "Pennsylvania State University - Lehigh Valley",
    department: "Business Development",
  },
  {
    id: 106,
    fullName: "Shelbi Lissemore",
    avatar: "https://robohash.org/etutaut.png?size=50x50&set=set1",
    university: "University of Nairobi",
    department: "Product Management",
  },
  {
    id: 107,
    fullName: "Teddie Orehead",
    avatar:
      "https://robohash.org/voluptatesnamexplicabo.png?size=50x50&set=set1",
    university: "University of the Philippines Los Banos",
    department: "Support",
  },
  {
    id: 108,
    fullName: "Fransisco Giordano",
    avatar:
      "https://robohash.org/distinctioidperferendis.png?size=50x50&set=set1",
    university: "Universidad de Playa Ancha de Ciencias de la Educacion",
    department: "Sales",
  },
  {
    id: 109,
    fullName: "Milli Dell 'Orto",
    avatar:
      "https://robohash.org/commodicumqueexpedita.png?size=50x50&set=set1",
    university: "Universidad Adventista del Plata",
    department: "Research and Development",
  },
  {
    id: 110,
    fullName: "Maureen Lindermann",
    avatar:
      "https://robohash.org/quisconsequaturplaceat.png?size=50x50&set=set1",
    university: "University of Kuopio",
    department: "Accounting",
  },
  {
    id: 111,
    fullName: "Cahra Graeber",
    avatar: "https://robohash.org/quiaautipsum.png?size=50x50&set=set1",
    university: "Philosophisch-Theologische Hochschule SVD Sankt Augustin",
    department: "Product Management",
  },
  {
    id: 112,
    fullName: "Marianne Carnelley",
    avatar: "https://robohash.org/adipisciutincidunt.png?size=50x50&set=set1",
    university: "HWP - Hamburger Universität für Wirtschaft und Politik",
    department: "Engineering",
  },
  {
    id: 113,
    fullName: "Roselle Canby",
    avatar: "https://robohash.org/ametquiaquisquam.png?size=50x50&set=set1",
    university: "Universidad Politecnica de Puerto Rico",
    department: "Product Management",
  },
  {
    id: 114,
    fullName: "Jeramie Orpyne",
    avatar:
      "https://robohash.org/reprehenderittemporibusdolor.png?size=50x50&set=set1",
    university: "Multnomah Bible College",
    department: "Sales",
  },
  {
    id: 115,
    fullName: "Nels O' Driscoll",
    avatar: "https://robohash.org/voluptassuntdolores.png?size=50x50&set=set1",
    university: "University of St. Andrews",
    department: "Legal",
  },
  {
    id: 116,
    fullName: "Jeremiah Woollett",
    avatar:
      "https://robohash.org/quisquamipsumvoluptatibus.png?size=50x50&set=set1",
    university: "Lucerne University of Applied Sciences and Arts ",
    department: "Sales",
  },
  {
    id: 117,
    fullName: "Kev Bachman",
    avatar: "https://robohash.org/occaecatimodihic.png?size=50x50&set=set1",
    university: "Instituto Tecnologico de Minatitlan",
    department: "Marketing",
  },
  {
    id: 118,
    fullName: "Reynold Foyston",
    avatar: "https://robohash.org/etrecusandaesed.png?size=50x50&set=set1",
    university: "University of Applied Sciences Basel (FHBB )",
    department: "Marketing",
  },
  {
    id: 119,
    fullName: "Kettie Buckston",
    avatar: "https://robohash.org/consecteturnoneos.png?size=50x50&set=set1",
    university: "Ecole Polytechnique",
    department: "Research and Development",
  },
  {
    id: 120,
    fullName: "Jessi Henzer",
    avatar: "https://robohash.org/natuseumdolorem.png?size=50x50&set=set1",
    university: "Catholic University in Zimbabwe",
    department: "Research and Development",
  },
  {
    id: 121,
    fullName: "Ki Cornier",
    avatar: "https://robohash.org/temporeetaut.png?size=50x50&set=set1",
    university: "Lanzhou University",
    department: "Sales",
  },
  {
    id: 122,
    fullName: "Patton Foynes",
    avatar: "https://robohash.org/fugaeiuseos.png?size=50x50&set=set1",
    university: "Regent College",
    department: "Services",
  },
  {
    id: 123,
    fullName: "Jamie Denny",
    avatar: "https://robohash.org/porrositet.png?size=50x50&set=set1",
    university: "University of Waikato",
    department: "Accounting",
  },
  {
    id: 124,
    fullName: "Florette Jillard",
    avatar: "https://robohash.org/enimadut.png?size=50x50&set=set1",
    university: "University of Balochistan",
    department: "Engineering",
  },
  {
    id: 125,
    fullName: "Maurits Palfreyman",
    avatar: "https://robohash.org/atquehicaut.png?size=50x50&set=set1",
    university: "St. George's University",
    department: "Support",
  },
  {
    id: 126,
    fullName: "Mira Du Pre",
    avatar:
      "https://robohash.org/nesciuntperspiciatisdeserunt.png?size=50x50&set=set1",
    university: "Fachhochschule Gießen-Friedberg",
    department: "Services",
  },
  {
    id: 127,
    fullName: "Vick Turton",
    avatar: "https://robohash.org/autemmolestiasut.png?size=50x50&set=set1",
    university: "Université de la Reunion",
    department: "Sales",
  },
  {
    id: 128,
    fullName: "Bibbye Rickeard",
    avatar: "https://robohash.org/rerumremrerum.png?size=50x50&set=set1",
    university: "Universidad Metropolitana de Honduras",
    department: "Marketing",
  },
  {
    id: 129,
    fullName: "Ailene Phillipps",
    avatar: "https://robohash.org/quiaremvoluptatem.png?size=50x50&set=set1",
    university: "Université du Centre, Sousse",
    department: "Human Resources",
  },
  {
    id: 130,
    fullName: "Gerianne Crumb",
    avatar:
      "https://robohash.org/aspernaturvoluptasvoluptatum.png?size=50x50&set=set1",
    university: "Universidad Salesiana",
    department: "Sales",
  },
  {
    id: 131,
    fullName: "Arvy Dallemore",
    avatar:
      "https://robohash.org/doloremeosreprehenderit.png?size=50x50&set=set1",
    university: "Tougaloo College",
    department: "Training",
  },
  {
    id: 132,
    fullName: "Cynthie Duchart",
    avatar: "https://robohash.org/doloresdolordolorem.png?size=50x50&set=set1",
    university: "Aga Khan University",
    department: "Services",
  },
  {
    id: 133,
    fullName: "Dehlia Swateridge",
    avatar: "https://robohash.org/veldelectusomnis.png?size=50x50&set=set1",
    university: "Stavropol State Technical University",
    department: "Marketing",
  },
  {
    id: 134,
    fullName: "Aida Bagot",
    avatar: "https://robohash.org/utautneque.png?size=50x50&set=set1",
    university: "Savannah State University",
    department: "Business Development",
  },
  {
    id: 135,
    fullName: "Gus Fairholm",
    avatar:
      "https://robohash.org/molestiaepraesentiumlabore.png?size=50x50&set=set1",
    university: "Taylor University, Fort Wayne Campus",
    department: "Support",
  },
  {
    id: 136,
    fullName: "Mercedes MacRanald",
    avatar: "https://robohash.org/utasperioresdelectus.png?size=50x50&set=set1",
    university:
      "Ecole Nationale Supérieur de Mécaniques et des Microtechniques",
    department: "Services",
  },
  {
    id: 137,
    fullName: "Iormina Stubbin",
    avatar: "https://robohash.org/voluptatemquiomnis.png?size=50x50&set=set1",
    university: "University of Sunderland",
    department: "Services",
  },
  {
    id: 138,
    fullName: "Yorgo Yarwood",
    avatar:
      "https://robohash.org/commodilaboreexpedita.png?size=50x50&set=set1",
    university: "Universidad Autónoma de Bucaramanga",
    department: "Business Development",
  },
  {
    id: 139,
    fullName: "Sean Mustill",
    avatar:
      "https://robohash.org/minimaoccaecatirepudiandae.png?size=50x50&set=set1",
    university: "K.N.Toosi University of Technology",
    department: "Marketing",
  },
  {
    id: 140,
    fullName: "Suzann Wesker",
    avatar: "https://robohash.org/placeatquaeratest.png?size=50x50&set=set1",
    university: "Universidad del Mar",
    department: "Sales",
  },
  {
    id: 141,
    fullName: "Lutero Done",
    avatar: "https://robohash.org/porrosedeum.png?size=50x50&set=set1",
    university: "Avondale College",
    department: "Training",
  },
  {
    id: 142,
    fullName: "Dorian Bravey",
    avatar: "https://robohash.org/consequunturestillum.png?size=50x50&set=set1",
    university: "Osaka Dental University",
    department: "Research and Development",
  },
  {
    id: 143,
    fullName: "Diena Sneaker",
    avatar: "https://robohash.org/quiaexcepturisit.png?size=50x50&set=set1",
    university: "California State University, Los Angeles",
    department: "Support",
  },
  {
    id: 144,
    fullName: "Corenda Attarge",
    avatar:
      "https://robohash.org/temporibusestdoloribus.png?size=50x50&set=set1",
    university: "Addis Ababa University",
    department: "Human Resources",
  },
  {
    id: 145,
    fullName: "William Kalb",
    avatar: "https://robohash.org/etetenim.png?size=50x50&set=set1",
    university: "University of the Cordilleras",
    department: "Research and Development",
  },
  {
    id: 146,
    fullName: "Roz Dorking",
    avatar: "https://robohash.org/velvoluptaset.png?size=50x50&set=set1",
    university: "California State University, San Marcos",
    department: "Engineering",
  },
  {
    id: 147,
    fullName: "Burke Beebee",
    avatar: "https://robohash.org/deseruntsedlabore.png?size=50x50&set=set1",
    university: "Universidad Central",
    department: "Engineering",
  },
  {
    id: 148,
    fullName: "Blanch Kempston",
    avatar: "https://robohash.org/fugaveritatissint.png?size=50x50&set=set1",
    university: "La Sierra University",
    department: "Product Management",
  },
  {
    id: 149,
    fullName: "Myrtia Zaniolo",
    avatar: "https://robohash.org/dignissimosquisautem.png?size=50x50&set=set1",
    university: "Theologische Fakultät Trier",
    department: "Services",
  },
  {
    id: 150,
    fullName: "Jaquenette Guise",
    avatar: "https://robohash.org/omniseiusvoluptatem.png?size=50x50&set=set1",
    university: "Shanghai Ocean University",
    department: "Research and Development",
  },
  {
    id: 151,
    fullName: "Alicia Sansam",
    avatar: "https://robohash.org/repudiandaeetnumquam.png?size=50x50&set=set1",
    university:
      "Ecole Nationale Supérieur d'Ingénieurs de Constructions Aéronautique",
    department: "Product Management",
  },
  {
    id: 152,
    fullName: "Stevy Blakeley",
    avatar: "https://robohash.org/perferendisnemoipsam.png?size=50x50&set=set1",
    university: "Murray State University",
    department: "Product Management",
  },
  {
    id: 153,
    fullName: "Jayson Webber",
    avatar:
      "https://robohash.org/consequaturaliquamnecessitatibus.png?size=50x50&set=set1",
    university: "Baker College of Auburn Hills",
    department: "Services",
  },
  {
    id: 154,
    fullName: "Leonid Broxton",
    avatar:
      "https://robohash.org/similiquerepudiandaenihil.png?size=50x50&set=set1",
    university: "Bellevue University",
    department: "Product Management",
  },
  {
    id: 155,
    fullName: "Timi Gayne",
    avatar: "https://robohash.org/earumsapienteut.png?size=50x50&set=set1",
    university: "Universidade Estadual do Piauí",
    department: "Sales",
  },
  {
    id: 156,
    fullName: "Lamar Keeley",
    avatar: "https://robohash.org/illumsuscipitsed.png?size=50x50&set=set1",
    university: "Sokoto State University ",
    department: "Sales",
  },
  {
    id: 157,
    fullName: "Kai Gregon",
    avatar: "https://robohash.org/magnieosaut.png?size=50x50&set=set1",
    university: "Zetech College",
    department: "Sales",
  },
  {
    id: 158,
    fullName: "Franchot Tankard",
    avatar: "https://robohash.org/autaliquiddistinctio.png?size=50x50&set=set1",
    university: "Ecole Supérieure d'Electricité",
    department: "Research and Development",
  },
  {
    id: 159,
    fullName: "Craggy Shovelton",
    avatar:
      "https://robohash.org/doloreseumconsequatur.png?size=50x50&set=set1",
    university: "Universitas Muhammadiyah Jember",
    department: "Services",
  },
  {
    id: 160,
    fullName: "Saundra Chataignier",
    avatar: "https://robohash.org/omnisofficiisrem.png?size=50x50&set=set1",
    university: "Technological Education Institute of Epiros",
    department: "Marketing",
  },
  {
    id: 161,
    fullName: "Ewan Harral",
    avatar: "https://robohash.org/veritatisinsit.png?size=50x50&set=set1",
    university: "Lutherische Theologische Hochschule Oberursel",
    department: "Engineering",
  },
  {
    id: 162,
    fullName: "Ruddie Warrender",
    avatar:
      "https://robohash.org/repellatplaceatconsequatur.png?size=50x50&set=set1",
    university: "Ecole Nationale Supérieure de Chimie de Paris",
    department: "Marketing",
  },
  {
    id: 163,
    fullName: "Correna Tytcomb",
    avatar:
      "https://robohash.org/teneturrepudiandaequibusdam.png?size=50x50&set=set1",
    university: "Jamia Millia Islamia University",
    department: "Legal",
  },
  {
    id: 164,
    fullName: "Halette Hatton",
    avatar: "https://robohash.org/enimofficiaeum.png?size=50x50&set=set1",
    university: "Brooks Institute of Photography",
    department: "Services",
  },
  {
    id: 165,
    fullName: "Mallorie Mowling",
    avatar: "https://robohash.org/cumqueeosillum.png?size=50x50&set=set1",
    university: "Nagoya University of Foreign Studies",
    department: "Marketing",
  },
  {
    id: 166,
    fullName: "Winna Rickell",
    avatar:
      "https://robohash.org/delenitiautdignissimos.png?size=50x50&set=set1",
    university: "Nigerian Defence Academy",
    department: "Legal",
  },
  {
    id: 167,
    fullName: "Ralf Lonsdale",
    avatar: "https://robohash.org/beataequonulla.png?size=50x50&set=set1",
    university: "Colorado Christian University",
    department: "Services",
  },
  {
    id: 168,
    fullName: "Perren Hawkett",
    avatar:
      "https://robohash.org/perferendismagnirerum.png?size=50x50&set=set1",
    university: "Tongji Medical University",
    department: "Sales",
  },
  {
    id: 169,
    fullName: "Thom Alessandrini",
    avatar:
      "https://robohash.org/voluptasdignissimossimilique.png?size=50x50&set=set1",
    university:
      "Insituto Universitario - Centro Latinoamericano de Economia Humana - IU Claeh",
    department: "Research and Development",
  },
  {
    id: 170,
    fullName: "Shepperd Boud",
    avatar:
      "https://robohash.org/architectoveritatisaut.png?size=50x50&set=set1",
    university: "Claremont Graduate University",
    department: "Accounting",
  },
  {
    id: 171,
    fullName: "Freida Serjeant",
    avatar:
      "https://robohash.org/nesciuntcumlaboriosam.png?size=50x50&set=set1",
    university: "Fachhochschule Aachen",
    department: "Accounting",
  },
  {
    id: 172,
    fullName: "Estrellita Petters",
    avatar: "https://robohash.org/similiquequieos.png?size=50x50&set=set1",
    university: "Indiana University-Purdue University at Indianapolis",
    department: "Business Development",
  },
  {
    id: 173,
    fullName: "Gibby Freake",
    avatar: "https://robohash.org/eumuttempore.png?size=50x50&set=set1",
    university: "Universidade Independente",
    department: "Marketing",
  },
  {
    id: 174,
    fullName: "Hugh Frazier",
    avatar: "https://robohash.org/corruptietquia.png?size=50x50&set=set1",
    university: "Fine Arts Academy in Poznan",
    department: "Training",
  },
  {
    id: 175,
    fullName: "Sybilla Ubee",
    avatar: "https://robohash.org/voluptatesdelectuset.png?size=50x50&set=set1",
    university: "Idaho State University",
    department: "Support",
  },
  {
    id: 176,
    fullName: "Marrissa Woolfitt",
    avatar: "https://robohash.org/doloremestsoluta.png?size=50x50&set=set1",
    university: "Ecole Catholique d'Arts & Metiers",
    department: "Support",
  },
  {
    id: 177,
    fullName: "Andreas Jacqueminet",
    avatar: "https://robohash.org/voluptatibusvitaesed.png?size=50x50&set=set1",
    university: "St. Anne University",
    department: "Training",
  },
  {
    id: 178,
    fullName: "Constantina Wisby",
    avatar: "https://robohash.org/nisiatsunt.png?size=50x50&set=set1",
    university: "El Shorouk Academy",
    department: "Engineering",
  },
  {
    id: 179,
    fullName: "Flora MacVaugh",
    avatar: "https://robohash.org/eumconsequaturillo.png?size=50x50&set=set1",
    university: "University of the Incarnate World",
    department: "Human Resources",
  },
  {
    id: 180,
    fullName: "Berny Giordano",
    avatar: "https://robohash.org/molestiasvelitbeatae.png?size=50x50&set=set1",
    university: "Université de Bouaké",
    department: "Marketing",
  },
  {
    id: 181,
    fullName: "Silvain McJury",
    avatar:
      "https://robohash.org/velitmollitiasimilique.png?size=50x50&set=set1",
    university: "Imam Reza University",
    department: "Sales",
  },
  {
    id: 182,
    fullName: "Carlee Burtwell",
    avatar: "https://robohash.org/estexblanditiis.png?size=50x50&set=set1",
    university: "University of New Brunswick",
    department: "Human Resources",
  },
  {
    id: 183,
    fullName: "Bebe Dryden",
    avatar: "https://robohash.org/liberononaut.png?size=50x50&set=set1",
    university: "Urmia University of Medical Sciences",
    department: "Accounting",
  },
  {
    id: 184,
    fullName: "Francois Tales",
    avatar:
      "https://robohash.org/repellatcupiditateaut.png?size=50x50&set=set1",
    university: "University of Wales",
    department: "Business Development",
  },
  {
    id: 185,
    fullName: "Leann Gommowe",
    avatar: "https://robohash.org/nequemolestiaeipsa.png?size=50x50&set=set1",
    university: "Greenwich University",
    department: "Business Development",
  },
  {
    id: 186,
    fullName: "Godart Blasdale",
    avatar: "https://robohash.org/utvelerror.png?size=50x50&set=set1",
    university: "Université de Technologie de Compiègne",
    department: "Sales",
  },
  {
    id: 187,
    fullName: "Ofelia Aysh",
    avatar:
      "https://robohash.org/architectosolutanatus.png?size=50x50&set=set1",
    university:
      "Pennsylvania State University at Harrisburg - The Capital College",
    department: "Engineering",
  },
  {
    id: 188,
    fullName: "Domenico Tayspell",
    avatar: "https://robohash.org/pariaturnisideleniti.png?size=50x50&set=set1",
    university: "University of Health Sciences Antigua",
    department: "Legal",
  },
  {
    id: 189,
    fullName: "Ki Duffie",
    avatar:
      "https://robohash.org/recusandaecommodisint.png?size=50x50&set=set1",
    university: "Universidad Técnica de Oruro",
    department: "Engineering",
  },
  {
    id: 190,
    fullName: "Rudyard Shewring",
    avatar:
      "https://robohash.org/beataetemporibusdolores.png?size=50x50&set=set1",
    university: "University of Rousse",
    department: "Services",
  },
  {
    id: 191,
    fullName: "Clarke Strawbridge",
    avatar: "https://robohash.org/autemsedet.png?size=50x50&set=set1",
    university: "Université Denis Diderot (Paris VII)",
    department: "Business Development",
  },
  {
    id: 192,
    fullName: "Afton Aldritt",
    avatar:
      "https://robohash.org/distinctioeaqueitaque.png?size=50x50&set=set1",
    university: "Lahore College for Women University",
    department: "Business Development",
  },
  {
    id: 193,
    fullName: "Luci Stother",
    avatar: "https://robohash.org/quodoloresin.png?size=50x50&set=set1",
    university: "Brigham Young University Hawaii",
    department: "Human Resources",
  },
  {
    id: 194,
    fullName: "Riane Keppe",
    avatar:
      "https://robohash.org/accusamusdoloresquidem.png?size=50x50&set=set1",
    university: "Université de Monastir",
    department: "Research and Development",
  },
  {
    id: 195,
    fullName: "Teresa Lickess",
    avatar:
      "https://robohash.org/similiquealiquamiusto.png?size=50x50&set=set1",
    university: "Missouri Baptist College",
    department: "Accounting",
  },
  {
    id: 196,
    fullName: "Philis Gainforth",
    avatar: "https://robohash.org/fugaetlabore.png?size=50x50&set=set1",
    university: "Kwangju University",
    department: "Support",
  },
  {
    id: 197,
    fullName: "Kath Jaqueme",
    avatar: "https://robohash.org/quodadipisciin.png?size=50x50&set=set1",
    university: "Missouri Southern State College",
    department: "Accounting",
  },
  {
    id: 198,
    fullName: "Alon Downgate",
    avatar: "https://robohash.org/etlaborumvelit.png?size=50x50&set=set1",
    university: "Nagoya University of Commerce and Business Administration",
    department: "Product Management",
  },
  {
    id: 199,
    fullName: "Annadiane Marten",
    avatar: "https://robohash.org/architectononenim.png?size=50x50&set=set1",
    university: "California College for Health Sciences",
    department: "Accounting",
  },
  {
    id: 200,
    fullName: "Franciskus Sweetland",
    avatar:
      "https://robohash.org/cupiditatemolestiaeet.png?size=50x50&set=set1",
    university: "Universitas Muhammadiyah Mataram",
    department: "Engineering",
  },
];

// day04 method
// data.forEach((v) => {
//   const infoName = document.createElement("h2");
//   infoName.innerText = v.fullName;
//   const img = document.createElement("img");
//   img.src = v.avatar;
//   const university = document.createElement("h4");
//   university.innerText = v.university;
//   const department = document.createElement("h4");
//   department.innerText = v.department;

//   const box = document.createElement("div");
//   //   const info = document.querySelector(".info")

//   box.appendChild(img);
//   box.appendChild(infoName);
//   box.appendChild(university);
//   box.appendChild(department);

//   const container = document.querySelector(".container");
//   container.appendChild(box);
// });
// ----------------------------------------------------------------------
// fullName:
// avatar:
// university:
// department:

// const imgTag=(avatar) =>{
//     const img =
// }

data.forEach(({ avatar, department, fullName, university }) => {
  const cardList = document.querySelector(".cardList");
  cardList.insertAdjacentHTML(
    "beforeend",
    `
        <div class = "card">
            <div class="left">
                <div class="imageBox>
                    <img src="${avatar}" alt="">
                </div>
            </div>
            <div class = "right">
                <div class = "name">${fullName}</div>
                <div class = "info">
                    <div class = "university">${university}</div>
                    <div class = "department">${department}</div>
                </div>
            </div>
        </div>
        `
  );
});
