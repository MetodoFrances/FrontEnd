
<template>
    <div class="ps-container">
      <div class="inputsContainer p-input-filled first">
        <div class="inputsContainer__content">
          <label v-if="loanDetails.salePrice" for="salePrice" class="label"
            >Sale Price</label
          >
          <pv-input-text
            id="salePrice"
            type="number"
            v-model="loanDetails.salePrice"
            placeholder="Sale Price"
          ></pv-input-text>
        </div>
        <div class="inputsContainer__content">
          <label v-if="loanDetails.years" for="years" class="label">Years</label>
          <pv-input-text
            id="years"
            class="inputText"
            type="number"
            v-model="loanDetails.years"
            placeholder="Years"
            min="1"
          ></pv-input-text>
        </div>
        <div class="inputsContainer__content">
          <label
            v-if="loanDetails.paymentFrecuencyInDays"
            for="paymentFrecuencyInDays"
            class="label"
            >Payment frecuency in days</label
          >
          <pv-input-text
            id="paymentFrecuencyInDays"
            type="number"
            v-model="loanDetails.paymentFrecuencyInDays"
            placeholder="Payment frecuency in days"
            min="1"
          ></pv-input-text>
        </div>
        <div class="inputsContainer__content">
          <label for="daysPerYear" class="label">Days Per Year</label>
          <pv-input-text
            id="daysPerYear"
            type="number"
            v-model="loanDetails.daysPerYear"
            placeholder="Days Per Year"
            readonly
          ></pv-input-text>
        </div>
        <div class="inputsContainer__content">
          <label
            v-if="loanDetails.TEApercentage"
            for="TEApercentage"
            class="label"
            >% TEA</label
          >
          <pv-input-text
            id="TEApercentage"
            type="number"
            v-model="loanDetails.TEApercentage"
            placeholder="TEA percentage"
            min="0.0001"
            step="0.0001"
          ></pv-input-text>
        </div>
        <div class="inputsContainer__content">
          <label for="IGVpercentage" class="label">IGV Percentage</label>
          <pv-input-text
            id="IGVpercentage"
            type="number"
            v-model="loanDetails.IGVpercentage"
            placeholder="IGV Percentage"
            readonly
          ></pv-input-text>
        </div>
        <pv-input-text
          type="number"
          v-model="loanDetails.incomeTaxPercentage"
          placeholder="Income Tax Percentage"
          readonly
        ></pv-input-text>
        <div class="inputsContainer__content">
          <label
            v-if="loanDetails.buyBackPercentage"
            or="buyBackPercentage"
            class="label"
            >% Buyback</label
          >
          <pv-input-text
            id="buyBackPercentage"
            type="number"
            v-model="loanDetails.buyBackPercentage"
            placeholder="Buyback percentage"
            min="0.0001"
            step="0.0001"
          ></pv-input-text>
        </div>
      </div>
      <div class="inputsContainer p-input-filled second">
        <div class="inputsContainer__content">
          <label 
            v-if="initialCosts.notarialCosts" 
            for="notarialCosts" 
            class="label">Notarial Costs</label>
          <pv-input-text
            id="notarialCosts"
            type="number"
            v-model="initialCosts.notarialCosts"
            placeholder="Notarial costs"
          ></pv-input-text>
        </div>
        <div class="inputsContainer__content">
          <label 
            v-if="initialCosts.registrationCosts"
            for="registrationCosts"
            class="label">Registration Costs</label>
          <pv-input-text
            id="registrationCosts"
            type="number"
            v-model="initialCosts.registrationCosts"
            placeholder="Registration costs"
            min="1"
            step="0.05"
          ></pv-input-text>
        </div>
        <div class="inputsContainer__content">
          <label 
            v-if="initialCosts.appraisal"
            for="appraisal"
            class="label">Appraisal</label>
          <pv-input-text
            id="appraisal"
            type="number"
            v-model="initialCosts.appraisal"
            placeholder="Appraisal"
            min="1"
            step="0.05"
          ></pv-input-text>
        </div>
        <div class="inputsContainer__content">
          <label 
            v-if="initialCosts.studyCommission"
            for="studyCommission"
            class="label">Study Commission</label>
          <pv-input-text
            id="studyCommission"
            type="number"
            v-model="initialCosts.studyCommission"
            placeholder="Study commission"
            min="1"
            step="0.05"
          ></pv-input-text>
        </div>
        <div class="inputsContainer__content">
          <label 
          v-if="initialCosts.activationFee"
          for="activationFee"
          class="label">Activation Fee</label>
          <pv-input-text
            id="activationFee"
            type="number"
            v-model="initialCosts.activationFee"
            placeholder="Activacion Fee"
            min="1"
            step="0.05"
          ></pv-input-text>
        </div>
      </div>
      <div class="inputsContainer p-input-filled third">
        <div class="inputsContainer__content">
          <label 
            v-if="periodicCosts.periodicCommission"
            for="periodicCommission"
            class="label">Periodic Commission</label>
          <pv-input-text
            id="periodicCommission"
            type="number"
            v-model="periodicCosts.periodicCommission"
            placeholder="Periodic Commission"
            min="0.05"
            step="0.05"
          ></pv-input-text>
        </div>
        <div class="inputsContainer__content">
          <label 
            v-if="periodicCosts.riskInsurancePercentage"
            for="riskInsurancePercentage"
            class="label">Risk Insurance Percentage</label>
          <pv-input-text
            id="riskInsurancePercentage"
            type="number"
            v-model="periodicCosts.riskInsurancePercentage"
            placeHolder="Risk insurance percentage"
            min="0.001"
            step="0.001"
          ></pv-input-text>
        </div>
      </div>
    </div>
    <div class="ps-buttons">
      <pv-button
        label="Get Payment Schedule"
        icon="pi pi-table"
        class="p-button-raised p-button-rounded p-button-warning"
        @click="getPaymentSchedule"
      />
      <pv-button
        label="Get Leasing Results"
        icon="pi pi-caret-right"
        class="p-button-raised p-button-rounded p-button-warning"
        @click="setLeasingResults"
      />
      <pv-button
        label="Save Leasing"
        icon="pi pi-save"
        class="p-button-raised p-button-rounded p-button-warning"
        @click="saveLeasing"
      />
    </div>
    <div class="ps-data-table" v-if="displayable">
      <PaymentScheduleDataTableComponent
        :initialCosts="initialCosts"
        :periodicCosts="periodicCosts"
        :loanDetails="loanDetails"
        :opportunityCosts="opportunityCosts"
        :graceType="graceType"
        :graceTypePeriods="graceTypePeriods"
      ></PaymentScheduleDataTableComponent>
    </div>
  </template>
  
  <script>
  import { InitialCosts } from "../../shared/services/Initial-Costs.js";
  import { LoanDetails } from "../../shared/services/Loan-Details.js";
  import { PeriodicCosts } from "../../shared/services/Periodic-Costs.js";
  import { OpportunityCosts } from "../../shared/services/Opportunity-Costs.js";
  import PaymentScheduleDataTableComponent from "./payment-schedule-data-table.component.vue";
  //import { PaymentScheduleApiService } from "../services/payment-schedule.service.js";
  export default {
    name: "payment-schedule",
    components: {
      PaymentScheduleDataTableComponent,
    },
    data() {
      return {
        salePrice: null,
        initialCosts: new InitialCosts(250,150,80,100,50),
        loanDetails: new LoanDetails(11800,3,30,0.12,0.01,0.030),
        periodicCosts: new PeriodicCosts(10,0.0030),
        oportunityCosts: new OpportunityCosts(),
        graceType: "None",
        graceTypePeriods: 0,
        displayable: false,
        paymentScheduleApiService: new PaymentScheduleApiService(),
      };
    },
    methods: {
      getPaymentSchedule() {
        this.displayable = false;
        this.initialCosts.parseFloatAll();
        this.periodicCosts.parseFloatAll();
        this.loanDetails.parseFloatAll();
        if (
          !(
            this.initialCosts.isValid() &&
            this.periodicCosts.isValid() &&
            this.loanDetails.isValid()
          )
        ) {
          this.$toast.add({
            severity: "error",
            summary: "Invalid inputs",
            detail: "Try to check and try again",
            life: 3000,
          });
          return;
        }
        this.displayable = true;
      },
      saveLeasing() {
          if (!(
            this.initialCosts.isValid() &&
            this.periodicCosts.isValid() &&
            this.loanDetails.isValid()
          )
        ) {
          this.$toast.add({
            severity: "error",
            summary: "Invalid data",
            detail: "Try to check and try again",
            life: 3000,
          });
          return;
        }
        this.paymentScheduleApiService.getLoans().then((response) => {
          const newLoan = {
            loan_issue_date: new Date().toISOString().slice(0,19),
            sale_price: this.loanDetails.salePrice,
            loan_time: this.loanDetails.years,
            payment_frecuency: this.loanDetails.paymentFrecuencyInDays,
            buyback_percentage: this.loanDetails.buyBackPercentage,
            currency_id: 1,
            notarial_cost: this.initialCosts.notarialCosts,
            registration_cost: this.initialCosts.registrationCosts,
            appraisal: this.initialCosts.appraisal,
            study_commission: this.initialCosts.studyCommission,
            activation_commission: this.initialCosts.activationFee,
            periodic_commission: this.periodicCosts.periodicCommission,
            risk_insurance_percentage: this.periodicCosts.riskInsurancePercentage,
          };
          this.paymentScheduleApiService
            .createLoan(newLoan)
            .then((response) => {
              this.$toast.add({
                severity: "success",
                summary: "Loan was successfuly saved",
                detail: "You can find it in your leasing history",
                life: 3000,
              });
            })
            .catch((reason) => {
              console.log(reason);
              this.$toast.add({
                severity: "error",
                summary: "Loan could not be saved",
                detail: "Check your network connection or try again later",
                life: 3000,
              });
            });
        });
      },
      setLeasingResults() {
        this.$root.$emit(
          "receive-leasing-data",
          this.initialCosts,
          this.periodicCosts,
          this.loanDetails
        );
      },
    },
  };
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
    grid-template-columns: repeat(2, 45%);
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
    color: #fff;
  }
  .first {
    grid-area: first;
    background-color: rgb(216, 55, 49);
  }
  .second {
    grid-area: second;
    background-color: rgb(34, 152, 207);
  }
  .third {
    grid-area: third;
    background-color: rgb(69, 236, 63);
  }
  .label {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 1rem;
    transition: all 500ms;
    animation: labelInit 500ms ease 0ms 1 normal none;
  }
  @keyframes labelInit {
    0% {
      opacity: 0.2;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  .inputsContainer__content {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    .first,
    .second,
    .third {
      grid-area: unset;
    }
    .ps-container {
      grid-template-areas: unset;
      grid-template-rows: unset;
      grid-template-columns: 100%;
      column-gap: unset;
      row-gap: unset;
      row-gap: 3.5rem;
    }
    .first {
      height: 42rem;
    }
    .second {
      height: 27rem;
    }
    .third {
      height: 18rem;
    }
    .ps-buttons {
      height: 10rem;
      flex-direction: column;
      padding: 0 2rem;
    }
    .label {
      font-size: 1rem;
    }
  }
  </style>