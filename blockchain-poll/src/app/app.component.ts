import { Component } from '@angular/core';
import { PollService } from './poll-service/poll.service';
import { Poll, PollForm, PollVote } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;
  activePoll: Poll = null;

  polls = this.pollService.getPolls();

  constructor(private pollService: PollService){}

setActivePoll(poll){
  this.activePoll = null;

  setTimeout(()=>{
    this.activePoll = poll;
  },100);
}

handlePollCreate(poll:PollForm){
  this.pollService.createPoll(poll);
}

handlePollVote(pollVoted: PollVote){
  this.pollService.vote(pollVoted.id,pollVoted.vote);
}
}
