<template>
  <p>XDD</p>
</template>

<script>
import InitialCosts from '../../shared/services/inital-costs.js';
import LoanDetails from '../../shared/services/loan-details.js';
import PeriodicCosts from '../../shared/services/periodic-costs.js';
import OpportunityCosts from '../../shared/services/opportunity-costs.js';

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
      buyback: null
      // Cronograma de pagos
      //paymentSchedule : []
    }
  },
  props: {
    initialCosts: InitialCosts,
    loanDetails: LoanDetails,
    periodicCosts: PeriodicCosts,
    opportunityCosts: OpportunityCosts
  },
  methods: {
    intermediateCalcutions() {
      this.installmentsPerYear = this.loanDetails.daysPerYear / this.loanDetails.paymentFrecuencyInDays;
      this.totalInstallments = this.installmentsPerYear * this.loanDetails.years;
      this.IGV = (this.loanDetails.salePrice / (1.00 + this.loanDetails.IGVpercentage)) * this.loanDetails.IGVpercentage;
      this.loanDetails.saleValue = this.loanDetails.salePrice - IGV;
      this.TEPpercentage = Math.pow(1 + this.loanDetails.TEApercentage, this.loanDetails.paymentFrecuencyInDays / this.loanDetails.daysPerYear) - 1;
      this.riskInsurance = (this.periodicCosts.riskInsurancePercentage * this.loanDetails.salePrice) / this.installmentsPerYear;
    },
    calculatePaymentSchedule() {
      
    },
    validateTypeOfGracePeriod() {

    }
  },
  computed: {
    paymentSchedule() {
      const arr = [];
    }
  },
  mounted() {
    this.intermediateCalcutions();
    this.calculatePaymentSchedule();
  },
}
</script>

<style>

</style>