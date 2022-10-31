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

        <div class="input-group justicy-content-between">
          <h3> I.G.V. {{ igv }} </h3>
          <div class="linea"></div>
          <h3>Valor de venta del activo {{ vventactivo }} </h3>
          <div class="linea"></div>
          <h3>Monto del Leasing {{montol}}</h3>
          <div class="linea"></div>
          <h3>% de TEP: {{TEP}}</h3>
          <div class="linea"></div>
          <h3>N° Cuotas por Año {{cuotasaños}}</h3>
          <div class="linea"></div>
          <h3>N° Total de Cuotas {{totalcuotas}}</h3>
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
          <h3> Seguro riesgo {{ igv }} </h3>
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
          <h3>Intereses {{ intereses }} </h3>
          <div class="linea"></div>
          <h3>Amortización del capital  {{ amorticap }} </h3>
          <div class="linea"></div>
          <h3>Seguro contra todo riesgo {{seguroctriesgo}}</h3>
          <div class="linea"></div>
          <h3>Comisiones periodicas {{comisionesp}}</h3>
          <div class="linea"></div>
          <h3>Recompra {{recompra}}</h3>
          <div class="linea"></div>
          <h3>Desembolso total {{desembolso}}</h3>
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

        <div class="input-group justicy-content-between">
          <h3>TCEA Flujo Bruto {{ TCEAFB }} </h3>
          <div class="linea"></div>
          <h3>TCEA Flujo Neto {{TCEAFN}}</h3>
          <div class="linea"></div>
          <h3>VAN Flujo Bruto {{VANFB}}</h3>
          <div class="linea"></div>
          <h3>VAN Flujo Neto {{VANFN}}</h3>
        
      </div>  
      </div>
        
    </div>
    
  </template>
  
  <script>
  import{InitialCosts} from "../../shared/service/InitialCosts.js";
  import{LoanDetails} from "../../shared/service/LoanDetails.js";
  import{PeriodicCommission} from "../../shared/service/PeriodicCommission.js";

  export default{
    name: "payment-results",
    data(){
      return{
        initalCosts:new InitialCosts(),
        loanDetails: new LoanDetails(),
        periodicCommission: new PeriodicCommission(),
      }
    },

    mounted(){
      /*this.$root.$on("receive-leasing-data", (initialCosts, loanDetails, periodicCommission) => {
        this.initialCosts = initialCosts;
        this.loanDetails = loanDetails;
        this.periodicCommission = periodicCommission;*/ 
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
  
  h3{
   font-weight:normal;
  }
  </style>