import { Component } from "@angular/core";

@Component({
    selector : 'app-products',
    templateUrl : './products.component.html'
})
export class ProductsComponent{
    productNames : string[] = ['Pen']

    onBtnAddNewClick(newProductName : string){
        this.productNames.push(newProductName)
    }

    onBtnRemoveClick(productName : string){
        this.productNames.splice(this.productNames.indexOf(productName), 1)
    }
}