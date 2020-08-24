class Movie {
    //Properti
    constructor (title, category,  duration){
        this.title = title;
        this.category = category;
        this.duration = duration;
    }
    //methode
    watch (){
        return  `1. Kamu memonton film ${this.title} dengan kategori ${this.category} berdurasi ${this.duration}`
    }
};




class Soundtrack extends Movie{
    
    constructor(title, duration, category, titlesong, singer){
        super(title, duration, category,);
        this.titlesong = titlesong;
        this.singer = singer;
    }

    movieSoundtrack(){
        return `2. Film ${this.title} memiliki lagu soundtrack berjudul ${this.titlesong} yang dinyanyikan oleh ${this.singer}`
    }
};



class Channel extends Movie{
    constructor(title, duration, category, channelName){
        super(title, duration, category);
        this.channelName = channelName;
    }

    streamAt(){
        return `3. Film ${this.title} ditayangkan di ${this.channelName}`; 
    }
}

//Instan object
let obj1 = new Movie('Suspicious Partner', 'Romance', '60 minutes');
let obj2 = new Soundtrack('Suspicious Partner', 'Romance', '60 minutes', 'How do you feel', 'Ridho Majid');
let obj3 = new Channel ('Suspicious Partner', 'Romance', '60 minutes', 'Netflix');

 console.log(obj1.watch());
 console.log(obj2.movieSoundtrack());
 console.log(obj3.streamAt());