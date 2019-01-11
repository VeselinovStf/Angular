import { Component, OnChanges, Input, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'ds-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number = 4;
    starWidth: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 /5;
    }

    onClick(){
        this.notify.emit(`This rating is ${this.rating}`);
    }
}