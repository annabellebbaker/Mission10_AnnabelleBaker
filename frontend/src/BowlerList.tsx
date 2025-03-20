import { useEffect, useState } from "react";
import {bowler} from "./types/bowler";

function BowlerList () {
    const [bowlers, setBowler] = useState<bowler[]>([]); // setting up a variable to be tied to this method, food array will be initialized

    // use effect helps with the request limit
    useEffect(() => {
        const fetchBowler = async () => {
            const response = await fetch('https://localhost:5000/Bowling'); // await fetch on API
            const data = await response.json(); // put data into response
            setBowler(data); // update array and put into database
        };
        fetchBowler();
    }, []);

    return (
        <>
            <h1>Bowling League Database</h1>
            <h2>This page displays the bowling league database of those in the OG Bowling Crew</h2>
            <table>
                <thead>
                    <tr>
                        <th>Bowler Name</th>
                        <th>Team Name</th>
                        <th>Bowler Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zipcode</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bowlers.map((b) => (
                            <tr key={b.bowlerId}>
                                <td>{b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}</td>
                                <td>{b.team ? b.team.teamName : 'No Team'}</td>
                                <td>{b.bowlerAddress}</td>
                                <td>{b.bowlerCity}</td>
                                <td>{b.bowlerState}</td>
                                <td>{b.bowlerZip}</td>
                                <td>{b.bowlerPhoneNumber}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default BowlerList;