class Profile {
    constructor(name, description, value) {
        this.name = name; this.description = description; this.value = value;
    }
    
}

let Profiles = [ 
    new Profile("Diretivo","descrição",0), 
    new Profile("Interativo","descrição",0), 
    new Profile("Social","descrição",0), 
    new Profile("Calculista","descrição",0)
];


function showProfile(){
    for(i = 0; i < Profiles.length; i++){
        console.log(Profiles[i].name)
    }
}


showProfile();