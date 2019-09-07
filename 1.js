let biodata = {
    name: 'Rendi Wijiatmoko',
    address: 'Jl. LK II AFD. 10, RT.5/RW.0, Kel. Muara Wahau, Kec. Muara Wahau, Kab. Kutai Timur, Kalimantan Timur, 75655',
    hobbies: ['Coding', 'Memancing'],
    is_merried: false,
    school: {
        highSchool: 'Sampoerna Academy',
        university: 'Purwadhika'
    },
    skills: new Array("Golang", "Python","JavaScript")
};
let json = JSON.stringify(biodata);
console.log(json);