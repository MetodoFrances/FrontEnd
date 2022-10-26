export class PeriodicCosts {
  constructor(periodicCommission, riskInsurancePercentage) {
    // Comisión periódica
    this.periodicCommission = periodicCommission;
    // Porcentaje de seguro riesgo
    this.riskInsurancePercentage = riskInsurancePercentage;
  }
  parseFloatAll() {
    this.periodicCommission = parseFloat(this.periodicCommission);
    this.riskInsurancePercentage = parseFloat(this.riskInsurancePercentage);
  }
  isValid() {
    return this.periodicCommission && this.riskInsurancePercentage;
  }
}
