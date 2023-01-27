class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.ValorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: '*',
            restar: '-',
        };
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirvalores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.ValorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirvalores();
    }

    computar(tipo) {
        tipo.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.ValorAnterior = this.valorActual || this.ValorAnterior;
        this.valorActual = ''; 
        this.imprimirvalores();
    }

    agregarNumero(numero) {
        if(numero == '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirvalores();
    }

    imprimirvalores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.ValorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const ValorAnterior = parseFloat(this.ValorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(ValorAnterior)) return
        this.valorActual = this.calculador[this.tipoOperacion](ValorAnterior, valorActual); 
    }
}