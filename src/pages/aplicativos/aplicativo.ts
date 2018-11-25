import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AplicativoService } from '../../services/domain/aplicativo.service';
import { AplicativoDTO } from '../../models/aplicativo.dto';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { PessoaService } from './../../services/domain/pessoa.service';
import { PessoaDTO } from './../../models/pessoa.dto';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aplicativos',
  templateUrl: 'aplicativo.html',
})
export class AplicativosPage {

  itens: AplicativoDTO[] = [];
  page : number = 0;
  pessoaDTO: PessoaDTO;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public aplicativoService: AplicativoService,
    public loadingCtrl: LoadingController,
    public pessoaService: PessoaService) {
  }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData(){
    let loader = this.presentLoading();
    this.aplicativoService.findPageByPessoa(this.page, 10)
    .subscribe(response => {
      let start = this.itens.length;
      this.itens = this.itens.concat(response['content']);
      let end = this.itens.length - 1;
      loader.dismiss();
    },
    error => {
      loader.dismiss();
    });

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }

  showProdutos(aplicativo_id : string) {
    this.navCtrl.push('ProdutosPage', {aplicativo_id: aplicativo_id});    
  }
}
