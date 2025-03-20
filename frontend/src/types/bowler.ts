import { team } from "./team";

export interface bowler {
    bowlerId: number;
    bowlerFirstName: string;
    bowlerMiddleInit?: string;
    bowlerLastName: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
    teamId: number;
    team?: team; // Add the team object
}