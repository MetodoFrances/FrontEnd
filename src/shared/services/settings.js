export class Settings{
    constructor(
        userId,
        languageName
    ){

        //Id del usuario
        this.userId=userId
        //Idioma o lenguaje
        this.languageName=languageName;

    }

    isValid(){
        return(
            this.userId &&
            this.languageName
        );
    }

}