<template>
  <div class="ps-container">
    <div class="inputsContainer p-input-filled">
        <pv-input-text id="salePrice" type="number" v-model="loanDetails.salePrice" placeholder="Sale price"></pv-input-text>
        <pv-input-text class="inputText" type="number" v-model="loanDetails.years" placeholder="Years" min="1"></pv-input-text>
        <pv-input-text type="number" v-model="loanDetails.paymentFrecuencyInDays" placeholder="Payment frecuency in days" min="1"></pv-input-text>
        <pv-input-text type="number" v-model="loanDetails.daysPerYear" placeholder="Days Per Year" readonly></pv-input-text>
        <pv-input-text type="number" v-model="loanDetails.TEApercentage" placeholder="TEA percentage" min="0.0001" step="0.0001"></pv-input-text>
        <pv-input-text type="number" v-model="loanDetails.IGVpercentage" placeholder="TEA percentage" readonly></pv-input-text>
        <pv-input-text type="number" v-model="loanDetails.incomeTaxPercentage" placeholder="Income Tax Percentage" readonly></pv-input-text>
        <pv-input-text type="number" v-model="loanDetails.buyBackPercentage" placeholder="Buyback percentage" min="0.0001" step="0.0001"></pv-input-text>
    </div>
    <div class="inputsContainer p-input-filled">
        <pv-input-text type="number" v-model="initialCosts.notarialCosts" placeholder="Notarial costs"></pv-input-text>
        <pv-input-text type="number" v-model="initialCosts.registrationCosts" placeholder="Registration costs" min="1" step="0.05"></pv-input-text>
        <pv-input-text type="number" v-model="initialCosts.appraisal" placeholder="Appraisal" min="1" step="0.05"></pv-input-text>
        <pv-input-text type="number" v-model="initialCosts.studyCommission" placeholder="Study commission" min="1" step="0.05"></pv-input-text>
    </div>
  </div>
  <pv-button label="Get Payment Schedule" icon="pi pi-table" class="p-button-raised p-button-rounded p-button-warning" @click="getPaymentSchedule"/>
  <pv-button label="Get Leasing Results" icon="pi pi-caret-right" class="p-button-raised p-button-rounded p-button-warning"/>
  <pv-button label="Save Leasing" icon="pi pi-save" class="p-button-raised p-button-rounded p-button-warning" @click="saveLeasing"/>
</template>

<script>
import { InitialCosts } from "../../shared/services/inital-costs.js";
import { LoanDetails } from "../../shared/services/loan-details.js";
import { PeriodicCosts } from "../../shared/services/periodic-costs.js";
import { OpportunityCosts } from "../../shared/services/opportunity-costs.js";
import PaymentScheduleDataTableComponent from "./payment-schedule-data-table.component.vue";

export default {
    name: "payment-schedule",
    components: {
        PaymentScheduleDataTableComponent
    },
    data() {
        return {
            salePrice: null,
            initialCosts: new InitialCosts(250.0, 150.0, 80.0, 100.5, 50.0),
            periodicCosts: new PeriodicCosts(10.0, 0.003),
            loanDetails: new LoanDetails(11800, 3, 30, 0.12, 0.01, 0.25),
            opportunityCosts: new OpportunityCosts(),
            graceType: "None",
            graceTypePeriods: 0
        }
    },
    methods: {
        getPaymentSchedule() {
            console.log("Creating payment schedule");
        },
        saveLeasing() {

        }
    }
}
</script>

<style>
.inputsContainer {
    width: 30rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.ps-container {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    align-content: space-between;
}
.btn {
    color: #FFF;
}
</style>