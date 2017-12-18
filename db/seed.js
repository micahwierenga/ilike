let db = require( '../models' ).models;

let toyList = [
{
        name: "Magnetic Balls",
        toy_url: "https://www.amazon.com/Magnetic-Stanaway-Intelligence-Development-Decoration/dp/B071W227Q1/ref=sr_1_2?s=videogames&ie=UTF8&qid=1504015265&sr=8-2&keywords=magnetic+balls+diy",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/715h2ET8wCL._SL1001_.jpg",
        price: null,
        notes: null,
        order: 1,
        owned: 0
    },
    {
        name: "Nerf Modulus Regulator",
        toy_url: "https://www.amazon.com/Nerf-C1294F07-Modulus-Regulator-Toy/dp/B01MYFC4OD/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1504015948&sr=1-1&keywords=nerf+regulator",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/71GXVB4OpXL._SL1500_.jpg",
        price: null,
        notes: "",
        order: 2,
        owned: 0
    },
    {
        name: "AMOSTING Refill Darts 500PCS Bullet for Nerf N-Strike Elite Zombie Strike Rebelle - Blue",
        toy_url: "https://www.amazon.com/gp/aw/d/B01HTNSZ0M/ref=mp_s_a_1_2/144-5348048-3767716?ie=UTF8&qid=1504479947&sr=8-2-spons&pi=AC_SX236_SY340_QL65&keywords=nerf+darts&psc=1",
        image_url: "https://www.amazon.com/gp/aw/d/B01HTNSZ0M/ref=mp_s_a_1_2/144-5348048-3767716?ie=UTF8&qid=1504479947&sr=8-2-spons&pi=AC_SX236_SY340_QL65&keywords=nerf+darts&psc=1#immersive-view_1504480159645",
        price: null,
        notes: null,
        order: 3,
        owned: 0
    },
    {
        name: "Mega Bloks Halo UNSC Kodiak Siege Cannon",
        toy_url: "https://www.amazon.com/Mega-Bloks-Kodiak-Siege-Cannon/dp/B01ARGB8GQ",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/81SEz120SYL._SL1500_.jpg",
        price: null,
        notes: "",
        order: 4,
        owned: 0
    },
    {
        name: "Mega Bloks Halo Covenant Wraith Ambush",
        toy_url: "https://www.amazon.com/Mega-Bloks-Covenant-Wraith-Ambush/dp/B01ARGBBDG/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1504360904&sr=1-1-spons&keywords=mega+bloks+wraith&psc=1&smid=A1RYP75HASDMLC",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/61aWxfflu%2BL._SL1000_.jpg",
        price: null,
        notes: null,
        order: 5,
        owned: 0
    },
    {
        name: "Official Nerf N-Strike Elite Mega Series 10-Dart Refill Pack",
        toy_url: "https://www.amazon.com/Official-Nerf-N-Strike-10-Dart-Refill/dp/B00CXLQFYE",
        image_url: "https://www.amazon.com/Official-Nerf-N-Strike-10-Dart-Refill/dp/B00CXLQFYE#immersive-view_1504405352066",
        price: null,
        notes: null,
        order: 6,
        owned: 0
    }
]

let snackList = [
	{
        name: "Lay's Potato Chips",
        image_url: "http://www.fritolay.com/images/default-source/blue-bag-image/lays-classic.png?sfvrsn=2",
        order: 1
    },
    {
        name: "Goldfish Crackers",
        image_url: "https://fridg-front.s3.amazonaws.com/media/products/goldfish.jpg",
        order: 2
    },
    {
        name: "Snyder's Mini Pretzels",
        image_url: "https://www.images-iherb.com/l/SND-03410-1.jpg",
        order: 3
    },
    {
        name: "Rold Gold Tiny Twists",
        image_url: "http://www.fritolay.com/images/default-source/blue-bag-image/rold-gold-tiny-twists.png?sfvrsn=152563a_4",
        order: 4
    }
]

let recipeList = [
	{
        name: "Recipe 1",
        recipe_url: "recipe url 1",
        image_url: "url 1",
        instructions: "instructions 1",
        order: 1
    },
    {
        name: "Recipe 2",
        recipe_url: "recipe url 2",
        image_url: "url 2",
        instructions: "instructions 2",
        order: 2
    }
]

let lunchList = [
	{
		name: 'Lunch 1',
		lunch_url: 'lunch url 1',
		image_url: 'url 1',
		notes: 'notes 1',
		order: 1
	},
	{
		name: 'Lunch 2',
		lunch_url: 'lunch url 2',
		image_url: 'url 2',
		notes: 'notes 2',
		order: 2
	}
]

let gameList = [
	{
        name: "Halo Wars 2",
        game_url: "https://www.amazon.com/Halo-Wars-2-Xbox-One/dp/B013GZ67Y8/ref=sr_1_2?s=videogames&ie=UTF8&qid=1504015021&sr=1-2&keywords=halo+wars+2",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/91DWz5hvY0L._AC_SL1500_.jpg",
        price: null,
        notes: null,
        order: 1,
        owned: 0
    },
    {
        name: "Mario Kart 8 Deluxe - Nintendo Switch",
        game_url: "https://www.amazon.com/gp/aw/d/B01N1037CV/ref=mp_s_a_1_1/144-5348048-3767716?ie=UTF8&qid=1504480443&sr=8-1&pi=AC_SX236_SY340_QL65&keywords=mario+kart+8+deluxe+switch&dpPl=1&dpID=610a3DcyMpL&ref=plSrch",
        image_url: "https://www.amazon.com/gp/aw/d/B01N1037CV/ref=mp_s_a_1_1/144-5348048-3767716?ie=UTF8&qid=1504480443&sr=8-1&pi=AC_SX236_SY340_QL65&keywords=mario+kart+8+deluxe+switch&dpPl=1&dpID=610a3DcyMpL&ref=plSrch#immersive-view_1504480527538",
        price: null,
        notes: null,
        order: 2,
        owned: 0
    }
]

let equipmentList = [
    {
        name: "AUSDOM 1080P Webcam,Widescreen Video Calling and Recording, Computer Camera,Desktop or Laptop Webcam",
        equipment_url: "https://www.amazon.com/Widescreen-Calling-Recording-Computer-Desktop/dp/B01M642ZTC/ref=sr_1_1_sspa?s=musical-instruments&ie=UTF8&qid=1513545864&sr=1-1-spons&keywords=computer+camera&psc=1",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/61unTpAd0ML._SL1294_.jpg",
        price: null,
        notes: null,
        order: 1,
        owned: 0
    },
    {
        name: "Shure KSM9/SL Dual-Pattern Condenser Handheld Vocal Microphone, Champagne",
        equipment_url: "https://www.amazon.com/gp/product/B000G16L06/ref=ox_sc_sfl_title_18?ie=UTF8&psc=1&smid=A2MFLJLVAYUYZP",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/81gmcAYBFEL._SL1500_.jpg",
        price: null,
        notes: null,
        order: 2,
        owned: 0
    }
]

let jokeList = [
	{
        description: "A man with a wooden eye and a woman with a fake leg met and were immediately attracted to each other. Things began to get serious and he asked her, \"Would you like to make out?\" Excitedly, she exclaimed, \"Would I? Would I?\" Offended and disgusted, he replied, \"Peg leg! Peg leg!\"",
        order: 1
    },
    {
        description: "What do you call a man with no arms and no legs...\n1. Lying in front of the door: Matt\n2. Floating in the water: Bob\n3. Beneath a pile of leaves: Russell\n\nWhat do you call two men hanging above the window: Curt and Rod",
        order: 2
    }
]

let toyCreate = function() {
	return db.Toy.bulkCreate( toyList );
}

let gameCreate = function() {
	return db.Game.bulkCreate( gameList );
}

let equipmentCreate = function() {
    return db.Equipment.bulkCreate( equipmentList );
}

let snackCreate = function() {
    return db.Snack.bulkCreate( snackList );
}

let recipeCreate = function() {
    return db.Recipe.bulkCreate( recipeList );
}

let lunchCreate = function() {
    return db.Lunch.bulkCreate( lunchList );
}

let jokeCreate = function() {
	return db.Joke.bulkCreate( jokeList );
}

toyCreate()
.then( gameCreate )
.then( equipmentCreate )
.then( snackCreate )
.then( recipeCreate )
.then( lunchCreate )
.then( jokeCreate )
.then( function() {
	process.exit();
})