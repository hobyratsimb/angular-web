import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-angular';
  isAuth:boolean=false;

  lastUpdate = new Promise((resolve,reject)=>{
    const date = new Date();
    setTimeout(
      ()=>{
        resolve(date);
      },2000
      );
  });
  }

  appareils = [
  	{
  		name:'Machine à laver',
  		status:'eteint'
  	},
  	{
  		name:'Ordinateur',
  		status:'eteint'
  	},
  	{
  		name:'Telephone',
  		status:'eteint'
  	}
  ];


  appareilOne = "Machine à laver";
  appareilTwo = "Frigo";
  appareilThree = "Ordinateur";

  constructor(){
  	setTimeout(
  		()=>{
  			this.isAuth = true;
  		},4000
  		);
  }

  onAllumer(){
  	console.log("On allume tout");
  }
}
