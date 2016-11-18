import {
    Component,
    OnInit,
    Input,
    OnDestroy,
      OnChanges,
} from '@angular/core';
import {
    Mongo
} from 'meteor/mongo';
import {
    Meteor
} from 'meteor/meteor';
import { 
    Observable 
} from 'rxjs/Observable';
import { 
    Subscription 
} from 'rxjs/Subscription';
import { 
    MeteorObservable 
} from 'meteor-rxjs';
import {
    Productcategory
} from '../../../../../../both/collections/csvdata.collection';
import * as _ from 'lodash';
import template from './changehead.html';

@Component({
    selector: 'changehead',
    template
})

export class ChangeHeadComponent implements OnInit, OnDestroy, OnChanges {
    @Input() id: string;
    @Input() assigned_head_id: string;
    @Input() headlist: any[];
    show_head: any;
    constructor() {}
    ngOnInit() {   
      if(this.assigned_head_id) {     
         this.show_head=_.filter(this.headlist,{"_id": this.assigned_head_id});
      }
    }
    changeHead(newhead_id) {
      Meteor.call('changeheadtag', this.id, newhead_id, (error, response) => {
            if (error) {
                console.log(error.reason);
            } else {
                console.log(response);
            }
        });
    }
    ngOnChanges(changes: any){
       let assigned= changes["assigned_head_id"].currentValue;
      if(assigned) {     
         this.show_head=_.filter(this.headlist,{"_id": this.assigned_head_id});
      }
    }
    ngOnDestroy() {
  }
}