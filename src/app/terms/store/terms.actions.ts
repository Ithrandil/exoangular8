export class AddTerms {
  static readonly type = '[MH_TERMS] Add Terms';
  constructor(public payload: Terms) {}
}

export class GetTermsFromDB {
  static readonly type = '[MH_TERMS] Get Terms From DB';
}

export class GetOneTermsFromStateById {
  static readonly type = '[MH-TERMS] Get one Terms from state';
  constructor(public payload: string) {}
}

export class EditOneTerms {
  static readonly type = '[MH_TERMS] Edit One Terms';
  constructor(public payload: Terms) {}
}

export class RemoveOneTerms {
  static readonly type = '[MH_TERMS] Remove One Terms';
  constructor(public payload: string) {}
}
