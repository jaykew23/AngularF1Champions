
export interface Champion {
  MRData: {
    StandingsTable: StandingsTable
  }
}

export interface StandingsTable {
      StandingsLists: Season[];
}

export interface Season {
  season: string;
  round: string;
  DriverStandings: DriverStandings[];
}

export interface DriverStandings {
  Driver: Driver;
}

export interface Driver {
  driverId: string;
  familyName: string;
  givenName: string;
}


export interface ChampionshipDisplay {
  year: string;
  winnersFullName: string;
}
