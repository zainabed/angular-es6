export class CardFactory {
  constructor(){
    this.records  = [
      { holder: 'ABC',card_number:'**** **** **** 2355', type:'private', limit:'3122$'},
      { holder: 'XVY',card_number:'**** **** **** 0143', type:'corporate', limit:'324$'},
      { holder: 'FDS',card_number:'**** **** **** 8222', type:'corporate', limit:'23$'},
      { holder: 'SDF',card_number:'**** **** **** 7236', type:'travel', limit:'543$'}
    ];
  }

  get records(){
    return this.records;
  }
}
