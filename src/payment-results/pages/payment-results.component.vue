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
            <li>{{TEPpercentage}} % </li>
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
            <li>{{ sintereses }} </li>
          </div>
          
          <div class="linea"></div>
          <div class="col">
            <li>Amortización del capital</li>
            <li>{{ samorticap }} </li>
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
            <li>TIR </li>
            <li> {{ tirN }} % </li>
          </div>
          <div class="linea"></div>
          <div class="col">
            <li>TCEA Flujo Bruto </li>
            <li> {{ TCEAFB }} % </li>
          </div>
          <div class="linea"></div>
          <div class="col">
            <li>TCEA Flujo Neto </li>
            <li>{{TCEAFN}} %</li>
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
  import { ReportsApiService } from "../services/payment-results.service";
  import{InitialCosts} from "../../shared/service/Initial-Costs.js";
  import{LoanDetails} from "../../shared/service/Loan-Details.js";
  import{PeriodicCost} from "../../shared/service/Periodic-Costs.js";
  import{OportunityCosts} from "../../shared/service/Oportunity-Costs";
  //import PaymentScheduleDataTableComponent from "./payment-schedule-data-table.component.vue";

  export default{
    name: "payment-results",
    data(){
      return{
        initialCosts: this.$dataTransfer.data[0],
         loanDetails: this.$dataTransfer.data[2],
         periodicCosts: this.$dataTransfer.data[1],
      
        oportunityCosts: new OportunityCosts(),
        seguroctriesgo: null,
        leasingAmount: null,
        IGV: null,

        sintereses:null,
        samorticap:null,
        TCEAFB: null, // traerlo del componente de paymente
        TCEAFN: null,// traerlo del componente de paymente
        VANFB: null, // traerlo del componente de paymente
        VANFN: null,// traerlo del componente de paymente
        tirN:null,

        desembolso: null,
      }
    },

    created() {
        // this.$route.params.id;
        // this.$dataTransfer.user.id;
        const reportsApiService = new ReportsApiService();
        reportsApiService.getLoansByUserId(this.$dataTransfer.user.id)
        
            .then(response => {
                this.loans = response.data
            })
            .catch(reason => {
                console.log(reason)
            });
    },
  
    methods:{
      //paymentscheduledata esto es jalarlo desde el compomente de payment.
      calcute(){
        this.IGV =
          ((this.loanDetails.salePrice / (1.0 + this.loanDetails.IGVpercentage)) *
          this.loanDetails.IGVpercentage).toFixed(2);
        
        //paymentscheduledata
        this.saleValue = (this.loanDetails.salePrice - this.IGV).toFixed(2);
        //paymentscheduledata
        this.leasingAmount =
          (parseFloat(this.saleValue) +
          parseFloat(this.initialCosts.notarialCosts)+
          parseFloat(this.initialCosts.registrationCosts) +
          parseFloat(this.initialCosts.appraisal) +
          parseFloat(this.initialCosts.studyCommission)+
          parseFloat(this.initialCosts.activationFee)).toFixed(2);

        //paymentscheduledata
        this.TEPpercentage =
         ((Math.pow(
            1 + this.loanDetails.TEApercentage,
            this.loanDetails.paymentFrecuencyInDays / this.loanDetails.daysPerYear
          ) - 1)*100).toFixed(7);
        //paymentscheduledata
        this.installmentsPerYear=this.loanDetails.daysPerYear/this.loanDetails.paymentFrecuencyInDays;

        //paymentscheduledata
        this.totalInstallments=this.installmentsPerYear*this.loanDetails.years;

        //paymentscheduledata
        this.riskInsurance =
         ((this.periodicCosts.riskInsurancePercentage *
            this.loanDetails.salePrice) /
          this.installmentsPerYear).toFixed(2);

        //this.sintereses=; suma de los intereses llamarlo de payment 
        //this.samorticap=; suma de los amortización llamarlo de payment 

        this.seguroctriesgo=(this.riskInsurance*this.totalInstallments).toFixed(2);

        this.comisionesp=(this.periodicCosts.periodicCommission*this.totalInstallments).toFixed(2);
      
      //paymentscheduledata
        this.buyback =
          (this.saleValue * this.loanDetails.buyBackPercentage).toFixed(2);

        this.desembolso=
          (parseFloat(this.seguroctriesgo) +
           parseFloat(this.comisionesp) + 
           parseFloat(this.buyback)+
           parseFloat(this.sintereses)+
           parseFloat(this.samorticap)).toFixed(2); //+this.intereses+this.amorticap falta sumar esos dos

      },
    },

    mounted(){
      this.tirN= this.$dataTransfer.tirN;
      this.sintereses = this.$dataTransfer.totalInterest;
      this.samorticap = this.$dataTransfer.totalAmortization;
      this.VANFB = this.$dataTransfer.vanB;
      console.log(this.VANFB);
      this.VANFN = this.$dataTransfer.vanN;
      this.calcute();
      //TCEAFB=this.TCEAFB;
      //TCEAFN=this.TCEAFN;
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