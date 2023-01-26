
export interface RaceWinner {
  MRData: {
    RaceTable: {
      Season: string,
      Races: Races[]
    }
  }
}

export interface Races {
  season: string;
  round: string;
  Results: Result[];
}

export interface Result {
  Driver: Driver;
}

export interface Driver {
  driverId: string;
  familyName: string;
  givenName: string;
}


export interface RaceWinnerDisplay {
  round: string;
  driverName: string;
}
