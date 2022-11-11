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
            user: this.userId,
            country: this.country,
            languageName: this.languageName
        }
    }

    setByObject(data) {
        this.id = data.settingsId;
        this.userId = data.user;
        this.country = data.country;
        this.languageName = data.languageName;
    }

}