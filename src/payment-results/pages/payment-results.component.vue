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
         
        <h2></h2>

        <div class="input-group justicy-content-between">
          <span> I.G.V. {{ igv }} </span>
        <h2></h2>
          <span>Valor de venta del activo {{ vventactivo }} </span>
        <h2></h2>
          <span>Monto del Leasing {{montol}}</span>
          <h2></h2>
          <span>% de TEP: {{TEP}}</span>
        <h2></h2>
          <span>N° Cuotas por Año {{cuotasaños}}</span>
        <h2></h2>
          <span>N° Total de Cuotas {{totalcuotas}}</span>
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

        <h2></h2>

        <div class="input-group justicy-content-between">
          <span> Seguro riesgo {{ igv }} </span>
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
         
        <h2></h2>

        <div class="input-group justicy-content-between">
          <span>Intereses {{ intereses }} </span>
        <h2></h2>
          <span>Amortización del capital  {{ amorticap }} </span>
        <h2></h2>
          <span>Seguro contra todo riesgo {{seguroctriesgo}}</span>
          <h2></h2>
          <span>Comisiones periodicas {{comisionesp}}</span>
        <h2></h2>
          <span>Recompra {{recompra}}</span>
        <h2></h2>
          <span>Desembolso total {{desembolso}}</span>
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
         
        <h2></h2>

        <div class="input-group justicy-content-between">
          <span>TCEA Flujo Bruto {{ TCEAFB }} </span>
        <h2></h2>
          <span>TCEA Flujo Neto {{TCEAFN}}</span>
          <h2></h2>
          <span>VAN Flujo Bruto {{VANFB}}</span>
        <h2></h2>
          <span>VAN Flujo Neto {{VANFN}}</span>
        
      </div>  
      </div>
        
    </div>
    
  </template>
  
  <script>
  import { InitialCosts } from "../../shared/services/InitialCosts.js";
  export default {
    name: "payment-results",
    data() {
      return {
        initialCosts: new InitialCosts(),
        loanDetails: null,
        periodicCommission: null

      }
    },
    mounted() {
      /*this.$root.$on("receive-leasing-data", (initialCosts, loanDetails, periodicCommission) => {
        this.initialCosts = initialCosts;
        this.loanDetails = loanDetails;
        this.periodicCommission = periodicCommission;
      });*/
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
    padding-bottom: 4px;
    margin-bottom: 20px;
    text-align: center;
    flex-wrap: wrap;
    color: #FB8C00;
    text-transform: uppercase;
    border: #FB8C00 2px solid;
    border-radius:1mm;
    width: 13cm;
  }

   h1{
    text-align: center;
    color: #FB8C00;
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
  h2 {
    font-size: 20px;
    border-bottom: 1px solid orange;
    padding-bottom: 4px;
    margin-bottom: 10px;
    position: relative;
  }
  
  </style>