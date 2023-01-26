import { Component } from '@angular/core';
import { Champion, Season, ChampionshipDisplay } from '../champion';
import {  Races, RaceWinner, RaceWinnerDisplay, Result } from '../race-winner';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})

export class ChampionshipsComponent {
  constructor(private championService: ChampionService) { }


  championshipDisplay!: ChampionshipDisplay;
  championshipDisplayList: string[] = [];
  tempDriver: string = '';

  output?: Champion;
  seasons?: Champion;

  winners?: RaceWinner;
  raceWinners?: Races[];
  raceWinnerDisplay!: RaceWinnerDisplay;
  winnerDisplayList: string[] = [];
  seasonsList?: Season[];

  ngOnInit(): void {
    this.getChampionships();
  }


  async getChampionships(): Promise<void> {
    (await this.championService.getChampionships())
      .subscribe(seasons => {
        this.seasons = <Champion>seasons
        this.setValue()
      });

  }


  async getRaceWinners(): Promise<void> {
    (await this.championService.getRaceWinners())
      .subscribe(winners => {
        this.winners = <RaceWinner>winners
        this.winnerDisplayList = [];
        console.log(this.winners);
        this.setSelectedRace()
      });

  }


  setValue(): void {
    if (this.seasons) { 
    let response = this.seasons.MRData.StandingsTable.StandingsLists;
      this.seasonsList = response;
      this.championshipDisplayList = [];

    

      this.seasonsList.forEach( (season) => {
        console.log(season);
        let championshipDisplayItem: ChampionshipDisplay = {
          year: season.season,
          winnersFullName: season.DriverStandings[0].Driver.givenName + ' ' + season.DriverStandings[0].Driver.familyName
        };

        var displayItem: string = championshipDisplayItem.year + ' Drivers Champion: ' + championshipDisplayItem.winnersFullName;

        this.championshipDisplayList.push(displayItem);
      }); 
  

      this.championshipDisplayList?.reverse();
  }
  }

  setSelectedRace(): void {
    if (this.winners) {
      let response = this.winners.MRData.RaceTable.Races;
      this.raceWinners = response;

      this.raceWinners.forEach((winner) => {

        let winnerDisplayItem: RaceWinnerDisplay = {
          round: winner.round,
          driverName: winner.Results[0].Driver.givenName + ' ' + winner.Results[0].Driver.familyName
        };

        var displayItem: string = 'Round: ' + winnerDisplayItem.round + ' Race Winner: ' + winnerDisplayItem.driverName;

        this.winnerDisplayList.push(displayItem);
      }); 
    }
  }

 
  
  onSelect(champion: string): void {
    console.log("Year selected");
    console.log(champion);
    this.getRaceWinners();
  }
  
}
