import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Poll, PollForm } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  getPolls(): Observable<Poll[]>{
    return of([
    {
      id:1,
      question:'Do you like Dogs or cats?',
      options:['Cats','Dogs','None'],
      thumbnail:'https://images.pexels.com/photos/9838766/pexels-photo-9838766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      results: [0,5,7,1],
      voted:true,
    },
    {
      id:2,
      question:'Best month for summer holidays?',
      options:['June','July','August'],
      thumbnail:'https://images.pexels.com/photos/9838766/pexels-photo-9838766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      results: [0,5,7,4],
      voted:false,
    },
    ]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber: number){
    console.log(pollId, voteNumber);
  }

  createPoll(poll:PollForm){
    console.log(poll);
  }
}
