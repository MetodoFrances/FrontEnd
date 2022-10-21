<template>
  <div class="ps-container">
    <div class="inputsContainer p-input-filled first">
        <pv-input-text id="salePrice" type="number" v-model="loanDetails.salePrice" placeholder="Sale price"></pv-input-text>
        <pv-input-text class="inputText" type="number" v-model="loanDetails.years" placeholder="Years" min="1"></pv-input-text>
        <pv-input-text type="number" v-model="loanDetails.paymentFrecuencyInDays" placeholder="Payment frecuency in days" min="1"></pv-input-text>
        <pv-input-text type="number" v-model="loanDetails.daysPerYear" placeholder="Days Per Year" readonly></pv-input-text>
        <pv-input-text type="number" v-model="loanDetails.TEApercentage" placeholder="TEA percentage" min="0.0001" step="0.0001"></pv-input-text>
        <pv-input-text type="number" v-model="loanDetails.IGVpercentage" placeholder="TEA percentage" readonly></pv-input-text>
        <pv-input-text type="number" v-model="loanDetails.incomeTaxPercentage" placeholder="Income Tax Percentage" readonly></pv-input-text>
        <pv-input-text type="number" v-model="loanDetails.buyBackPercentage" placeholder="Buyback percentage" min="0.0001" step="0.0001"></pv-input-text>
    </div>
    <div class="inputsContainer p-input-filled second">
        <pv-input-text type="number" v-model="initialCosts.notarialCosts" placeholder="Notarial costs"></pv-input-text>
        <pv-input-text type="number" v-model="initialCosts.registrationCosts" placeholder="Registration costs" min="1" step="0.05"></pv-input-text>
        <pv-input-text type="number" v-model="initialCosts.appraisal" placeholder="Appraisal" min="1" step="0.05"></pv-input-text>
        <pv-input-text type="number" v-model="initialCosts.studyCommission" placeholder="Study commission" min="1" step="0.05"></pv-input-text>
    </div>
    <div class="inputsContainer p-input-filled third">
        <pv-input-text type="number" v-model="periodicCosts.periodicCommission" placeholder="Periodic Commission" min="0.05" step="0.05"></pv-input-text>
        <pv-input-text type="number" v-model="periodicCosts.riskInsurancePercentage" placeHolder="Risk insurance percentage" min="0.001" step="0.001"></pv-input-text>
    </div>
  </div>
  <div class="ps-buttons">
    <pv-button label="Get Payment Schedule" icon="pi pi-table" class="p-button-raised p-button-rounded p-button-warning" @click="getPaymentSchedule"/>
    <pv-button label="Get Leasing Results" icon="pi pi-caret-right" class="p-button-raised p-button-rounded p-button-warning"/>
    <pv-button label="Save Leasing" icon="pi pi-save" class="p-button-raised p-button-rounded p-button-warning" @click="saveLeasing"/>
  </div>
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
            initialCosts: new InitialCosts(null, null, null, null, null),
            periodicCosts: new PeriodicCosts(null, null),
            loanDetails: new LoanDetails(null, null, null, null, null, null),
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 1.5rem;
    border-radius: 10px;
}
.ps-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,45%);
    grid-template-rows: 25rem 25rem;
    grid-template-areas:
    "first second"
    "first third";
    column-gap: 10%;
    row-gap: 5rem;
    align-content: space-between;
    padding: 2rem;
}
.ps-buttons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 2.5rem 0;
}
.btn {
    color: #FFF;
}
.first {
    grid-area: first;
    background-color: rgb(221, 52, 52);
}
.second {
    grid-area: second;
    background-color: rgb(34, 152, 207);
}
.third {
    grid-area: third;
    background-color: rgb(69, 236, 63);
}
</style>