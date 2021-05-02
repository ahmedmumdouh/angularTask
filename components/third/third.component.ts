import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


images:Array<string> = ["/assets/lp-1.jpg","/assets/lp-2.jpg","/assets/lp-3.jpg"]
curSrc:string = this.images[0];
state:number = 0 ;
playStat:any;
playFlag:boolean = false ;

liftFun (){
    if (this.playFlag == true){
        return
    }
    else if(this.state <= 0){
      this.state = this.images.length - 1 ;
    }
    else{
      this.state-- ;
    }    
    this.curSrc= this.images[this.state];
}


 rightFun (){
    if (this.playFlag == true){
        return
    }
    else if (this.state >= this.images.length - 1){
      this.state = 0 ;
    }
    else{
      this.state++ ;
    }    
    this.curSrc = this.images[this.state]
}

playFun (){
  const that = this ;
    if (! this.playFlag){
      this.playStat = window.setInterval(()=>{
        if (that.state >= that.images.length - 1){
          that.state = 0 ;
        }
        else{
          that.state++ ;
        }    
        that.curSrc = that.images[that.state]
      },2000) ;
      this.playFlag = true ;
    }else{
      this.playFlag = false ;
      clearInterval(this.playStat) ;
    }
    
    
}





 
}
