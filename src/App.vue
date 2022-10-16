
<template>
  <div>
    <PaymentScheduleComponent
    :initialCosts="initialCosts"
    :periodicCosts="periodicCosts"
    :loanDetails="loanDetails"
    :opportunityCosts="opportunityCosts"
    :graceType="graceType"
    :graceTypePeriods="graceTypePeriods"
  ></PaymentScheduleComponent>
  </div>
</template>
<script>
import { InitialCosts } from './shared/services/inital-costs.js';
import { LoanDetails } from './shared/services/loan-details.js';
import { OpportunityCosts } from './shared/services/opportunity-costs';
import { PeriodicCosts } from './shared/services/periodic-costs.js';
import PaymentScheduleComponent from './payment-shedule/pages/payment-schedule.component.vue';

export default {
  name: "App",
  components: {
    PaymentScheduleComponent
  },
  data() {
    return {
      msg: "Message",
      initialCosts: new InitialCosts(250.00,150.00,80.00,100.50,50.00),
      periodicCosts: new PeriodicCosts(10.00,0.0030),
      loanDetails: new LoanDetails(11800,3,30,0.12,0.01,0.25),
      opportunityCosts: new OpportunityCosts(),
      graceType: "Total",
      graceTypePeriods: 5
    }
  }
}
</script>
<style>
</style>