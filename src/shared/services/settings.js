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
            user_id: this.userId,
            country: this.country,
            language_name: this.languageName
        }
    }

    setByObject(data) {
        this.id = data.id;
        this.userId = data.user_id;
        this.country = data.country;
        this.languageName = data.language_name;
    }

}