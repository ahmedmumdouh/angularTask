import { Component, OnInit} from '@angular/core';

@Component({
    selector:'app-first', /** naming parent-loaded - child module name */
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})

export class FirstComponent {

// constructor() { }

// ngOnInit(): void {
    title:string = "hi****";
    name:string = "byeeeeeeeeeee";
    imageSrc:string ="source"
    textChanged(e:any){
        console.log(e.target.value)
        this.name = e.target.value ;
    }
    clicked(){
        this.title = this.title.toUpperCase() ;
    }
// }

}