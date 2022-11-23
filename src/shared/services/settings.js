export class Settings{
    constructor(
        id,
        userId,
        country,
        languageName
    ){
        this.id = id;
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

    toObjectForCreating() {
        return {
            languageName: this.languageName,
            country: this.country,
            userId: this.userId
        }
    }

    setByObject(data) {
        this.id = data.id;
        this.userId = data.userId;
        this.country = data.country;
        this.languageName = data.languageName;
    }

}