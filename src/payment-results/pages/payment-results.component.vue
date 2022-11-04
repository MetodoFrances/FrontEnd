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
  import{InitialCosts} from "../../shared/service/Initial-Costs.js";
  import{LoanDetails} from "../../shared/service/Loan-Details.js";
  import{PeriodicCost} from "../../shared/service/Periodic-Costs.js";
  import{OportunityCosts} from "../../shared/service/Oportunity-Costs";
  //import PaymentScheduleDataTableComponent from "./payment-schedule-data-table.component.vue";

  export default{
    name: "payment-results",
    data(){
      return{
        initialCosts: new InitialCosts(250,150,80,100,50),
        loanDetails: new LoanDetails(11800,3,30,0.12,0.01,0.030),
        periodicCosts: new PeriodicCost(10,0.0030),
        oportunityCosts: new OportunityCosts(),
        seguroctriesgo: null,
        leasingAmount: null,
        IGV: null,

        TCEAFB: 15.168, // como ponerle porciento %
        TCEAFN: -6.324,// como ponerle porciento %
        VANFB: 318.36,
        VANFN: 2504.49,
        desembolso: null,
      }
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

        //this.intereses=;
        //this.amorticap=;

        this.seguroctriesgo=(this.riskInsurance*this.totalInstallments).toFixed(2);

        this.comisionesp=(this.periodicCosts.periodicCommission*this.totalInstallments).toFixed(2);
      
      //paymentscheduledata
        this.buyback =
          (this.saleValue * this.loanDetails.buyBackPercentage).toFixed(2);

        this.desembolso=
          (parseFloat(this.seguroctriesgo) + parseFloat(this.comisionesp) + parseFloat(this.buyback)).toFixed(2); //+this.intereses+this.amorticap falta sumar esos dos

      },
    },

    mounted(){ // pedir componente de payment-schedule TCEAFB / TCEAFN / VANFB / VANFN 
      this.calcute();
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