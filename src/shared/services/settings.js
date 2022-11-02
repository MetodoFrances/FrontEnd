export class Settings{
    constructor(
        userId,
        country,
        languageName
    ){

        //Id del usuario
        this.userId=userId;
        //País del usuario
        this.country=country;
        //Idioma o lenguaje
        this.languageName=languageName;

    }

    isValid(){
        return(
            this.userId &&
            this.country &&
            this.languageName
        );
    }

}