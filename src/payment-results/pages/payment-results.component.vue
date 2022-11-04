<template>
    
    <div class="group realtimedb">
      <div class="apartado">
        <div class="container">
          <Button class="cuadro">
            <b>
              Resultado del arrendamiento
            </b>
          </Button>
        </div>
         <Chart type="line"/>
        <div class="linea"></div>

        <div class="input-group ">
          <div class="col">
            <li> I.G.V. </li>
            <li> {{ IGV }} </li>
          </div>
          
          <div class="linea"></div>
          <div class="col">
            <li>Valor de venta del activo</li>
            <li>{{ saleValue }} </li>
          </div>
        
          <div class="linea"></div>
          <div class="col">
            <li>Monto del Leasing</li>
            <li>{{leasingAmount}}</li>
          </div>
          
          <div class="linea"></div>
          <div class="col">
            <li>% de TEP</li>
            <li>{{TEPpercentage}}</li>
          </div>
          
          <div class="linea"></div>
          <div class="col">
            <li>N° Cuotas por Año</li>
            <li>{{installmentsPerYear}}</li>   
          </div>
         
          <div class="linea"></div>
          <div class="col">
            <li>N° Total de Cuotas</li>
            <li>{{totalInstallments}}</li>
          </div>
          
        </div> 
      </div>
        
      <div class="apartado">
        <div class="container">
          <Button class="cuadro">
            <b>
              Resultado de gastos periódicos
            </b>
          </Button>
        </div>

        <div class="linea"></div>

        <div class="input-group justicy-content-between">
          <div class="col">
            <li> Seguro riesgo</li>
            <li>{{ riskInsurance}} </li>
          </div>
         
        </div> 
      </div>

      <div class="apartado">
        <div class="container">
          <Button class="cuadro">
            <b>
              Resultado totales por ...
            </b>
          </Button>
        </div>
         
        <div class="linea"></div>

        <div class="input-group justicy-content-between">
          <div class="col">
            <li>Intereses</li>
            <li>{{ intereses }} </li>
          </div>
          
          <div class="linea"></div>
          <div class="col">
            <li>Amortización del capital</li>
            <li>{{ amorticap }} </li>
          </div>
         
          <div class="linea"></div>
          <div class="col">
            <li>Seguro contra todo riesgo</li>
            <li>{{seguroctriesgo}}</li>
          </div>
         
          <div class="linea"></div>
          <div class="col">
            <li>Comisiones periodicas</li>
            <li>{{comisionesp}}</li>
          </div>
          
          <div class="linea"></div>
          <div class="col">
            <li>Recompra</li>
            <li>{{buyback}}</li>
          </div>
          
          <div class="linea"></div>
          <div class="col">
            <li>Desembolso total</li>
            <li>{{desembolso}}</li>
          </div>
         
        </div> 
      </div>
        
      <div class="apartado">
        <div class="container">
          <Button class="cuadro">
            <b>
              Resultado de indicadores de rentabilidad
            </b>
          </Button>
        </div>
         
        <div class="linea"></div>

        <div class="input-group justify-content-between">
          <div class="col">
            <li>TCEA Flujo Bruto </li>
            <li> {{ TCEAFB }} </li>
          </div>
          <div class="linea"></div>
          <div class="col">
            <li>TCEA Flujo Neto </li>
            <li>{{TCEAFN}}</li>
          </div>
          
          <div class="linea"></div>
          <div class="col">
            <li>VAN Flujo Bruto</li>
            <li>{{VANFB}}</li>
          </div>
        
          <div class="linea"></div>
          <div class="col">
            <li>VAN Flujo Neto</li>
            <li>{{VANFN}}</li>
          </div>
          
        
      </div>  
      </div>
        
    </div>
    
  </template>
  
  <script>
  import{InitialCosts} from "../../shared/service/Initial-Costs.js";
  import{LoanDetails} from "../../shared/service/Loan-Details.js";
  import{PeriodicCost} from "../../shared/service/Periodic-Costs.js";
  import{OportunityCosts} from "../../shared/service/Oportunity-Costs";
  //import PaymentScheduleDataTableComponent from "./payment-schedule-data-table.component.vue";

  export default{
    name: "payment-results",
    data(){
      return{
        initalCosts:new InitialCosts(250,150,80,100,50),
        loanDetails: new LoanDetails(11800,3,30,0.012,0.001,0.030),
        periodicCommission: new PeriodicCost(10,0.00030),
        oportunityCosts: new OportunityCosts(),


        TCEAFB: 15.168, // como ponerle porciento %
        TCEAFN: -6.324,// como ponerle porciento %
        VANFB: 318.36,
        VANFN: 2504.49,
      }
    },
    created(){
      
    },

    methods(){
      //paymentscheduledata esto es jalarlo desde el compomente de payment.
      this.IGV =
        (this.loanDetails.salePrice / (1.0 + this.loanDetails.IGVpercentage)) *
        this.loanDetails.IGVpercentage;
      
      //paymentscheduledata
      this.saleValue = this.loanDetails.salePrice - this.IGV;

      //paymentscheduledata
      this.leasingAmount =
        this.loanDetails.saleValue +
        this.initialCosts.notarialCosts +
        this.initialCosts.registrationCosts +
        this.initialCosts.appraisal +
        this.initialCosts.studyCommission +
        this.initialCosts.activationFee;

      //paymentscheduledata
      this.TEPpercentage =
        Math.pow(
          1 + this.loanDetails.TEApercentage,
          this.loanDetails.paymentFrecuencyInDays / this.loanDetails.daysPerYear
        ) - 1;
      //paymentscheduledata
      this.installmentsPerYear=this.loanDetails.daysPerYear/this.loanDetails.paymentFrecuencyInDays;

      //paymentscheduledata
      this.totalInstallments=this.installmentsPerYear/this.loanDetails.daysPerYear;

      //paymentscheduledata
      this.riskInsurance =
        (this.periodicCosts.riskInsurancePercentage *
          this.loanDetails.salePrice) /
        this.installmentsPerYear;

      //this.intereses=;
      //this.amorticap=;

      this.seguroctriesgo=this.riskInsurance*totalInstallments;

      this.comisionesp=this.periodicCosts.periodicCommission*this.totalInstallments;
      
      //paymentscheduledata
      this.buyback =
        this.loanDetails.saleValue * this.loanDetails.buyBackPercentage;

      this.desembolso=
        this.seguroctriesgo+this.comisionesp+this.buyback; //+this.intereses+this.amorticap

      
    },
    mounted(){
      this.$root.$on("receive-leasing-data", (initialCosts, loanDetails, periodicCosts, TCEAFB, TCEAFN, VANFB, VANFN) => {
        this.initialCosts = initialCosts;
        this.loanDetails = loanDetails;
        this.periodicCosts = periodicCosts;
        this.TCEAFB = TCEAFB;
        this.TCEAFN= TCEAFN;
        this.VANFB= VANFB;
        this.VANFN= VANFN;
      });
    }
  }
   </script>
  
  <style scoped>
   *{
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }

   .container{
    display: flex;
    justify-content: center;
   }
   b{
    text-shadow: 0px 3px 7px lightslategray;
   }
   .cuadro{
    font-size: 20px;
    padding-bottom: 3px;
    margin-bottom: 20px;
    text-align: center;
    flex-wrap: wrap;
    color: #FB8C00;
    text-transform: uppercase;
    border: #FB8C00 2px solid;
    border-radius:1mm;
    width: 13cm;
  }



   select{
    width: 100%;
    padding:10px;
   }
.apartado{
  padding: 20px;
}
   .group{
    width: 80%;
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    position: relative;
    overflow: hidden;
    justify-items: center;
   }
   .group.connectionState {
    margin: 10px auto 0;
    padding: 0 20px;
  }
  .linea {
    border-bottom: 2px solid orange;
    padding-bottom: 1px;
    margin-bottom: 6px;
    position: relative;
  }
  
  li{
   font-weight:normal;
   font-size:large;
   min-height: 50px;

  }
  .col{
    column-count: 2;
    list-style: none;
    column-gap: 100px;
    
    
  }
 
  </style>