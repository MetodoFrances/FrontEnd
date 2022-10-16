export class InitialCosts {
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
}
