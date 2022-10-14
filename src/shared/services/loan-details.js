export class LoanDetails {
    constructor(salePrice, years, paymentFrecuencyInDays, TEApercentage, buyBackPercentage, TNApecentage) {
        // Precio de venta del activo
        this.salePrice = salePrice;
        // Años
        this.years = years;
        // Frecuencia de pago en días
        this.paymentFrecuencyInDays = paymentFrecuencyInDays;
        // Días por año
        this.daysPerYear = 360.00;
        // Porcentaje TEA
        this.TEApercentage = TEApercentage;
        // Porcentaje IGV
        this.IGVpercentage = 0.18;
        // Porcentaje impuesto a la renta
        this.incomeTaxPercentage = 0.30;
        // Porcentaje recompra
        this.buyBackPercentage = buyBackPercentage;
        // Porcentaje tasa Nominal
        this.TNApecentage = TNApecentage;
        // Valor de venta del activo
        this.saleValue = 0.00;
    }
}