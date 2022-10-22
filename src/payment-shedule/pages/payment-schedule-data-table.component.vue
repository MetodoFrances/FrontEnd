<template>
  <div class="dataTable__container">
    <pv-datatable
    :value="paymentSchedule"
    responsiveLayout="scroll"
    :paginator="true"
    :rows="6"
    :scrollable="true"
    editMode="cell"
    @cell-edit-complete="onCellEditComplete"
  >
    <pv-column field="graceType" header="Grace_Type">
      <template #editor="{ data, field }">
        <pv-input-text v-model="data[field]" autofocus />
      </template>
    </pv-column>
    <pv-column v-for="col in columns" :field="col.field" :header="col.header" :key="col.field">
      <template #body="slotprops">
        <p class="column_centered">{{slotprops.data[col.field]}}</p>
      </template>
    </pv-column>
  </pv-datatable>
  </div>
</template>

<script>
import { InitialCosts } from "../../shared/services/inital-costs.js";
import { LoanDetails } from "../../shared/services/loan-details.js";
import { PeriodicCosts } from "../../shared/services/periodic-costs.js";
import { OpportunityCosts } from "../../shared/services/opportunity-costs.js";

export default {
  name: "payment-schedule-data-table",
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
      // Columnas
      columns: [
        { field: "period", header: "Period" },
        { field: "initialBalance", header: "Initial_Balance" },
        { field: "interest", header: "Interest" },
        { field: "fixedFee", header: "Fixed_Fee" },
        { field: "amortization", header: "Amortization" },
        { field: "riskInsurance", header: "Risk_Insurance" },
        { field: "periodicCommission", header: "Periodic_Comission" },
        { field: "buyback", header: "Buyback" },
        { field: "endingBalance", header: "Ending_Balance" },
        { field: "depreciation", header: "Depreciation" },
        { field: "taxSavings", header: "Tax_Savings" },
        { field: "IGVFee", header: "IGV_Fee" },
        { field: "grossCashFlow", header: "Gross_Cash_Flow" },
        { field: "cashFlowWithIGV", header: "Cash_Flow_With_IGV" },
        { field: "netCashFlow", header: "Net_Cash_Flow" },
        { field: "TCEAFlow", header: "TCEA_Flow" },
      ],
      editingRows: [],
    };
  },
  props: {
    initialCosts: InitialCosts,
    loanDetails: LoanDetails,
    periodicCosts: PeriodicCosts,
    opportunityCosts: OpportunityCosts,
    graceType: String,
    graceTypePeriods: Number,
  },
  methods: {
    intermediateCalcutions() {
      this.installmentsPerYear =
        this.loanDetails.daysPerYear / this.loanDetails.paymentFrecuencyInDays;
      this.totalInstallments =
        this.installmentsPerYear * this.loanDetails.years;
      this.IGV =
        (this.loanDetails.salePrice / (1.0 + this.loanDetails.IGVpercentage)) *
        this.loanDetails.IGVpercentage;
      this.loanDetails.saleValue = this.loanDetails.salePrice - this.IGV;
      this.TEPpercentage =
        Math.pow(
          1 + this.loanDetails.TEApercentage,
          this.loanDetails.paymentFrecuencyInDays / this.loanDetails.daysPerYear
        ) - 1;
      this.riskInsurance =
        (this.periodicCosts.riskInsurancePercentage *
          this.loanDetails.salePrice) /
        this.installmentsPerYear;
      this.leasingAmount =
        this.loanDetails.saleValue +
        this.initialCosts.notarialCosts +
        this.initialCosts.registrationCosts +
        this.initialCosts.appraisal +
        this.initialCosts.studyCommission +
        this.initialCosts.activationFee;
      this.depreciation = this.loanDetails.saleValue / this.totalInstallments;
      this.buyback =
        this.loanDetails.saleValue * this.loanDetails.buyBackPercentage;
    },
    calculatePaymentSchedule(arr, leasing, graceType) {
      const obj = new Object();
      leasing.initialBalance = leasing.endingBalance;
      const interest = leasing.initialBalance * this.TEPpercentage;
      if (graceType === "Partial") leasing.fixedFee = interest;
      if (graceType === "Total") leasing.fixedFee = 0.0;
      const amortization =
        graceType === "Total" ? 0.0 : leasing.fixedFee - interest;
      const taxSavings =
        (interest +
          this.riskInsurance +
          this.periodicCosts.periodicCommission +
          this.depreciation) *
        this.loanDetails.incomeTaxPercentage;
      const BuyBack =
        leasing.currentPeriod == this.totalInstallments ? this.buyback : 0.0;
      const IGVFee =
        (leasing.fixedFee +
          this.riskInsurance +
          this.periodicCosts.periodicCommission +
          BuyBack) *
        this.loanDetails.IGVpercentage;
      const grossCashFlow =
        leasing.fixedFee +
        this.riskInsurance +
        this.periodicCosts.periodicCommission +
        BuyBack;
      const cashFlowWithIGV = grossCashFlow + IGVFee;
      const netCashFlow = grossCashFlow - taxSavings;
      const TCEAflow = leasing.fixedFee;
      leasing.endingBalance =
        graceType === "Total"
          ? leasing.initialBalance + interest
          : leasing.initialBalance - amortization;
      if (leasing.endingBalance < 1.0) leasing.endingBalance = 0.0;
      obj.graceType = graceType;
      obj.period = leasing.currentPeriod;
      obj.initialBalance = leasing.initialBalance.toFixed(2);
      obj.interest = interest.toFixed(2);
      obj.fixedFee = leasing.fixedFee.toFixed(2);
      obj.amortization = amortization.toFixed(2);
      obj.riskInsurance = this.riskInsurance.toFixed(2);
      obj.periodicCommission = this.periodicCosts.periodicCommission;
      obj.buyback = BuyBack.toFixed(2);
      obj.endingBalance = leasing.endingBalance.toFixed(2);
      obj.depreciation = this.depreciation.toFixed(2);
      obj.taxSavings = taxSavings.toFixed(2);
      obj.IGVFee = IGVFee.toFixed(2);
      obj.grossCashFlow = grossCashFlow.toFixed(2);
      obj.cashFlowWithIGV = cashFlowWithIGV.toFixed(2);
      obj.netCashFlow = netCashFlow.toFixed(2);
      obj.TCEAFlow = TCEAflow.toFixed(2);
      arr.push(obj);

      if (graceType === "Total" || graceType === "Partial") {
        const remainingFees = this.totalInstallments - leasing.currentPeriod;
        leasing.fixedFee =
          (leasing.endingBalance * this.TEPpercentage) /
          (1 - Math.pow(1 + this.TEPpercentage, remainingFees * -1));
      }
    },
    validateTypeOfGracePeriod(arr, leasing) {
      for (
        leasing.currentPeriod;
        leasing.currentPeriod <= this.graceTypePeriods;
        ++leasing.currentPeriod
      )
        this.calculatePaymentSchedule(arr, leasing, this.graceType);
    },
    onCellEditComplete(e) {
      console.log(e.data);
    },
    PaymentScheduleReCalculation() {
      
    },
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
        fixedFee:
          (this.leasingAmount * this.TEPpercentage) /
          (1 - Math.pow(1 + this.TEPpercentage, this.totalInstallments * -1)),
      };
      this.validateTypeOfGracePeriod(arr, leasing);
      for (
        leasing.currentPeriod;
        leasing.currentPeriod <= this.totalInstallments;
        ++leasing.currentPeriod
      )
        this.calculatePaymentSchedule(arr, leasing, "None");
      return arr;
    },
  },
  mounted() {
    console.log(this.paymentSchedule);
  },
  created() {
    console.log(this.initialCosts, this.loanDetails,this.periodicCosts, this.graceType, this.graceTypePeriods);
  }
};
</script>

<style scoped>
.column_centered {
  text-align: center;
}
.dataTable__container {
  width: 100%;
  padding: 0 5%;
  margin-bottom: 4rem;
}
</style>
