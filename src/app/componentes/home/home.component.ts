import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = "calculadora";
  resultado = "";
  valorAtual = '';

  escreverInput(valor: string) {
    this.valorAtual += valor;
    this.resultado = this.valorAtual;
  }

  calculaResultado() {
    this.resultado = eval(this.valorAtual);
    this.valorAtual = this.resultado;
  }

  limpaInput() {
    this.valorAtual = '';
    this.resultado = this.valorAtual;
  }

  apagar() {
    this.valorAtual = this.valorAtual.slice(0, -1);
    this.resultado = this.valorAtual;
  }
}
