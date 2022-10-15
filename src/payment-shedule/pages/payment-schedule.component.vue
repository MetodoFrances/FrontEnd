<template>
  <p>XDDD</p>
</template>

<script>
import { InitialCosts } from '../../shared/services/inital-costs.js';
import { LoanDetails } from '../../shared/services/loan-details.js';
import { PeriodicCosts } from '../../shared/services/periodic-costs.js';
import { OpportunityCosts } from '../../shared/services/opportunity-costs.js';

export default {
  name: "payment-schedule",
  data() {
    return {
      // Porcentaje TEP
      TEPpercentage: null,
      // Monto del leasing
      leasingAmount: null,
      // Total de cuotas
      totalInstallments: null,
      // Cuotas por año
      installmentsPerYear: null,
      IGV: null,
      // Seguro riesgo
      riskInsurance: null,
      // Depreciación
      depreciation: null,
      // Recompra
      buyback: null,
    }
  },
  props: {
    initialCosts: InitialCosts,
    loanDetails: LoanDetails,
    periodicCosts: PeriodicCosts,
    opportunityCosts: OpportunityCosts,
    graceType: String,
    graceTypePeriods: Number
  },
  methods: {
    intermediateCalcutions() {
      this.installmentsPerYear = this.loanDetails.daysPerYear / this.loanDetails.paymentFrecuencyInDays;
      this.totalInstallments = this.installmentsPerYear * this.loanDetails.years;
      this.IGV = (this.loanDetails.salePrice / (1.00 + this.loanDetails.IGVpercentage)) * this.loanDetails.IGVpercentage;
      this.loanDetails.saleValue = this.loanDetails.salePrice - this.IGV;
      this.TEPpercentage = Math.pow(1 + this.loanDetails.TEApercentage, this.loanDetails.paymentFrecuencyInDays / this.loanDetails.daysPerYear) - 1;
      this.riskInsurance = (this.periodicCosts.riskInsurancePercentage * this.loanDetails.salePrice) / this.installmentsPerYear;
      this.leasingAmount = this.loanDetails.saleValue + this.initialCosts.notarialCosts + this.initialCosts.registrationCosts + this.initialCosts.appraisal + this.initialCosts.studyCommission + this.initialCosts.activationFee
      this.depreciation = this.loanDetails.saleValue / this.totalInstallments;
      this.buyback = this.loanDetails.saleValue * this.loanDetails.buyBackPercentage;
    },
    calculatePaymentSchedule(arr,leasing,graceType) {
      const obj = new Object();
      leasing.initialBalance = leasing.endingBalance;
      const interest = leasing.initialBalance * this.TEPpercentage;
      if(graceType === "Partial") leasing.fixedFee = interest;
      if(graceType === "Total") leasing.fixedFee = 0.00;
      const amortization = (graceType === "Total")? 0.00: leasing.fixedFee - interest;
      const taxSavings = (interest + this.riskInsurance + this.initialCosts.periodicCommission + this.depreciation) * this.loanDetails.incomeTaxPercentage;
      const BuyBack = (leasing.currentPeriod == this.totalInstallments)? this.buyback: 0.00;
      const IGVFee = (leasing.fixedFee + this.riskInsurance + this.periodicCosts.periodicCommission + BuyBack) * this.loanDetails.IGVpercentage;
      const grossCashFlow = leasing.fixedFee + this.riskInsurance + this.periodicCosts.periodicCommission + BuyBack;
      const cashFlowWithIGV = grossCashFlow + IGVFee;
      const netCashFlow = grossCashFlow - taxSavings;
      const TCEAflow = leasing.fixedFee;
      leasing.endingBalance = (graceType === "Total")? leasing.initialBalance + interest: leasing.initialBalance - amortization;
      if(leasing.endingBalance < 1.00) leasing.endingBalance = 0.00;
      obj.initialBalance = leasing.initialBalance;
      obj.interest = interest;
      obj.fixedFee = leasing.fixedFee;
      obj.amortization = amortization;
      obj.riskInsurance = this.riskInsurance;
      obj.periodicCommission = this.periodicCosts.periodicCommission;
      obj.buyback = BuyBack;
      obj.endingBalance = leasing.endingBalance;
      obj.depreciation = this.depreciation;
      obj.taxSavings = taxSavings;
      obj.IGVFee = IGVFee;
      obj.grossCashFlow = grossCashFlow;
      obj.cashFlowWithIGV = cashFlowWithIGV;
      obj.netCashFlow = netCashFlow;
      obj.TCEAFlow = TCEAflow;
      arr.push(obj);

      if(graceType === "Total" || graceType === "Partial") {
        const remainingFees = this.totalInstallments - leasing.currentPeriod;
        leasing.fixedFee = (leasing.endingBalance * this.TEPpercentage) / (1 - Math.pow(1 + this.TEPpercentage, remainingFees * (-1)));
      }
    },
    validateTypeOfGracePeriod(arr,leasing) {
      for(leasing.currentPeriod; leasing.currentPeriod <= this.graceTypePeriods; ++leasing.currentPeriod)
        this.calculatePaymentSchedule(arr,leasing,this.graceType);
    }
  },
  computed: {
    // Cronograma de pagos
    paymentSchedule() {
      this.intermediateCalcutions();
      const arr = [];
      const leasing = {
        currentPeriod: 1,
        initialBalance: this.leasingAmount,
        endingBalance: this.leasingAmount,
        fixedFee: (this.leasingAmount * this.TEPpercentage) / (1 - Math.pow(1 + this.TEPpercentage, this.totalInstallments * (-1)))
      }
      this.validateTypeOfGracePeriod(arr,leasing);
      for(leasing.currentPeriod; leasing.currentPeriod <= this.totalInstallments; ++leasing.currentPeriod)
        this.calculatePaymentSchedule(arr,leasing,"N");
      return arr;
    }
  },
  mounted() {
    console.log(this.paymentSchedule);
  }
}
</script>

<style>

</style>