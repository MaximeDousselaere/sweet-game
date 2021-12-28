import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-body',
  templateUrl: './game-body.component.html',
  styleUrls: ['./game-body.component.scss']
})
export class GameBodyComponent implements OnInit {

  multiplicateur : number = 1;
  bbStock : number = 0;
  bbBleuTombes : number = 0;
  prtBleu : number = 0;
  bbRougeTombes : number = 0;
  prtRouge : number = 0;
  banque = 0; // à chercher dans le fichier de données

  constructor() { }

  ngOnInit(): void {
  }

  /* Fonction qui désigne un bonbon gagnant */
  public onClickBtnBonbon(n : number) : void{
    var random = Math.floor(Math.random() * 100); // goes from 0 to 99 -> 100 values
    var winner = 1;
    if(random <= 50){
      winner = 0;
      this.bbBleuTombes++;
    }else{
      winner = 1;
      this.bbRougeTombes++;
    }

    //Stats : 
    this.prtBleu = (this.bbBleuTombes / (this.bbBleuTombes+this.bbRougeTombes))*100;
    this.prtRouge = (this.bbRougeTombes / (this.bbBleuTombes+this.bbRougeTombes))*100;
    this.prtBleu = Math.round(this.prtBleu * 100) / 100;
    this.prtRouge = Math.round(this.prtRouge * 100) / 100
    
    // win or not : 
    if(winner == n){
      // incrémentation du nombre de bonbons en stock
      if(this.bbStock==0){
        this.bbStock=1;
      }else{
        this.bbStock=this.bbStock*this.multiplicateur;
      }
      // modification du multiplicateur
      this.modifMultiplicateur();
    }else{
      this.bbStock=0; // reset du nombre de bonbons en stock
      this.multiplicateur=1; // reset du multiplicateur
    }
        
  }// end of onClickBtnBonbon


  /* Fonction qui incrémente le multiplicateur */
  public modifMultiplicateur(){
    switch(this.multiplicateur){
      case 1 : {
        this.multiplicateur=1.25;
        break;
      }
      case 1.25 : {
        this.multiplicateur=1.50;
        break;
      }
      case 1.50 : {
        this.multiplicateur=1.75;
        break;
      }
      case 1.75 : {
        this.multiplicateur=2;
        break;
      }
      default: { 
        this.multiplicateur=this.multiplicateur+1;
        break; 
     } 

    }
  }

  /* Met en banque les bonbons gagnés */
  public mettreEnBanque(){
    if(this.bbStock>0){ // si l'utilisateur a des bonbons en stock
      this.banque+=this.bbStock;
      this.banque = Math.round(this.banque)
      this.bbStock=0;
      this.multiplicateur=1;
    }
  }
}
