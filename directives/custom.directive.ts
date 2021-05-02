import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(public myRef: ElementRef) {
    console.log(this.myRef);
    this.myRef.nativeElement.style.backgroundColor = this.color;
   }

   @HostListener('click') onClick(){
    this.myRef.nativeElement.style.backgroundColor = "red";
    this.myRef.nativeElement.style.color = "green";
   }

   @Input('appCustom') color:any = {
     bgColor:'black',
     fgColor:'white'
   } ;
}
