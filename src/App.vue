<template>
    <PaymentScheduleComponent></PaymentScheduleComponent>
    <PaymentScheduleDataTableComponent
      :initialCosts="initialCosts"
      :periodicCosts="periodicCosts"
      :loanDetails="loanDetails"
      :opportunityCosts="opportunityCosts"
      :graceType="graceType"
      :graceTypePeriods="graceTypePeriods"
    ></PaymentScheduleDataTableComponent>
</template>
<script>
import { InitialCosts } from "./shared/services/inital-costs.js";
import { LoanDetails } from "./shared/services/loan-details.js";
import { OpportunityCosts } from "./shared/services/opportunity-costs";
import { PeriodicCosts } from "./shared/services/periodic-costs.js";
import PaymentScheduleDataTableComponent from "./payment-shedule/pages/payment-schedule-data-table.component.vue";
import PaymentScheduleComponent from "./payment-shedule/pages/payment-schedule.component.vue";

export default {
  name: "App",
  components: {
    PaymentScheduleDataTableComponent,
    PaymentScheduleComponent
  },
  data() {
    return {
      msg: "Message",
      initialCosts: new InitialCosts(250.0, 150.0, 80.0, 100.5, 50.0),
      periodicCosts: new PeriodicCosts(10.0, 0.003),
      loanDetails: new LoanDetails(11800, 3, 30, 0.12, 0.01, 0.25),
      opportunityCosts: new OpportunityCosts(),
      graceType: "None",
      graceTypePeriods: 0,
    };
  },
};
</script>
<style></style>
