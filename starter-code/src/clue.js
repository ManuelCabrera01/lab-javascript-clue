
// CHATRACTERS ARRAY
Characters = [

 mrGreen = {
     first_name:  " Jacob",
     last_name:    "Green",
     color:        "green",
     description:  "He has a lot of connections",
     age:          45,
     image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
     occupation:   'Entrepreneur'
},

 drOrchid = {
     rst_name:   'Doctor',
     st_name:    'Orchid',
     olor:      ' white',
     escription:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
     ge:          26,
     image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
     cupation:  ' Scientist'
    },

 profPlum = {
     first_name:   'Victor',
     last_name:    'Plum',
     color:        'purple,',
     description:  'Billiona,re video game designer',
     age:          22,
     image:        'https:metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
     occupation:  ' Designer'
    },

missScar = {
     first_name:   'Kasandra',
     last_name:    'Scar',
     color:        'red',
     description: ' She is an A-list movie star with a dark past',
     age:          31,
     image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scart.jpg',
     occupation:   'Actor'
    },

 mrsPeacock = {
     first_name:    'Eleanor',
     last_name:     'Peacock',
     color:         'blue',
     description:  "She is from a wealthy family and uses her status and money to earn popularity",
     age:          36,
     image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
     occupation:         'Socialité'
    },

mrMustard = {
     first_name:   'Jack',
     last_name:    'Mustard',
     color:        'yellow',
     description:  'He is a former football player who tries to get by on his former glory',
     age:          62,
     image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
     occupation:   'Retired Football player'}
]
//  WARPONS ARRAY
 Weapons = [

{name: 'rope',          weight: 10},
{name: 'knife',         weight: 8},
{name: 'candlestick',   weight: 2},
{name: 'dumbbell',      weight: 30},
{name: 'poison',        weight: 2},
{name: 'axe',            weight: 15},
{name: 'bat',           weight: 13},
{name: 'trophy',         weight: 25},
{name: 'pistol',         weight: 20},
]
// ROOMS ARRAY
Rooms =[
{name: 'Dinning Room'},
{name: 'Conservatory'},
{name: 'Kitchen'},
{name: 'Study'},
{name: 'Library'},
{name: 'Billiard Room'},
{name: 'Lounge'},
{name: 'Ballroom'},
{name: 'Hall'},
{name: 'Spa'},
{name: 'Living Room'},
{name: 'Observatory'},
{name: 'Theater'},
{name: 'Guest House'},
{name: 'Patio'}
]

 

// Characters Collection

//push elements to their arrays
var charactersArray = [];
Characters.forEach(element => {
    charactersArray.push(element)
});


// Rooms' Collection
var roomsArray = [];
Rooms.forEach(element => {
    roomsArray.push(element)
})

// Weapons Collection
var weaponsArray = [];
Weapons.forEach(element => {
    weaponsArray.push(element)
})

function randomSelector (arr){
theElement = arr[Math.floor(Math.random()*arr.length)]
return theElement;
}
randomSelector(weaponsArray)

function pickMistery(){

    let myArr = [];
    let character = randomSelector(charactersArray);
    let weapon =    randomSelector(weaponsArray);
    let room =      randomSelector(roomsArray);
    myArr.push(character,weapon,room);

    return myArr
    
}
function revealMistery(hipotesis ){
return hipotesis[0].first_name + " " + hipotesis[0].last_name + ' killed Mr.Boddy using the '+ hipotesis[1].name +' in the '+ hipotesis[2].name +'!!!!';

}

let misteryEnvelope = pickMistery();
console.log(revealMistery(misteryEnvelope));
