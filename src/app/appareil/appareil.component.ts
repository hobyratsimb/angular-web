import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
	@Input() appareilName: string = '';
	
	@Input() appareilStatus:string='eteint';

	constructor(){}

	ngOnInit(){}

	getStatus(){
		return this.appareilStatus;
	}

	getColor(){
		if(this.appareilStatus==='allumé'){
			return 'green';
		}else if(this.appareilStatus==='eteint'){
			return 'red';
		}
		return null;
	}

}
