import { Component, OnInit } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {

  enviado: boolean = false;

  _nome: string;
  _descricao: string;
  _pontuacao: string;
  

  constructor(private dataBaseService: ContatosDataBaseService) { }

  ngOnInit() {
  }

  enviarDados() {
    let novoContato = new ContatoModel(this._nome, this._descricao, this._pontuacao);

    this.dataBaseService.setContato(novoContato);

    this.enviado = ! this.enviado;
  }

  voltar() {
    this._nome = '';
    this._descricao = '';
    this._pontuacao = '';
    this.enviado = ! this.enviado;
  }
}