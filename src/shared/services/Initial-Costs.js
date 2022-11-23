export class InitialCosts{
    constructor(
        registrationCosts,
        notarialCosts,
        appraisal,
        studyCommission,
        activationFee
      ) {
        // Costes registrales
        this.registrationCosts = registrationCosts;
        // Costes notariales
        this.notarialCosts = notarialCosts;
        // Tasación
        this.appraisal = appraisal;
        // Comisión de estudio
        this.studyCommission = studyCommission;
        // Comisión de activación
        this.activationFee = activationFee;
      }
      parseFloatAll() {
        this.registrationCosts = parseFloat(this.registrationCosts);
        this.notarialCosts = parseFloat(this.notarialCosts);
        this.appraisal = parseFloat(this.appraisal);
        this.studyCommission = parseFloat(this.studyCommission);
        this.activationFee = parseFloat(this.activationFee);
      }
      isValid() {
        return (
          this.registrationCosts &&
          this.notarialCosts &&
          this.appraisal &&
          this.studyCommission &&
          this.activationFee
        );
      }
}