import { battle, Fgtr, FightResult, Specials } from './battle';
import { roster } from './roster';
import * as recordsJson from './records.json';
// import { writeFileSync } from 'fs';

type RecordTables = Record<string, { matches: number; wins: number }>;
type ProcessRecordTables = Record<string, { matches: number; wins: number; winRatio: number }>;

let records: RecordTables = recordsJson;

const newRoster = [...roster];

const checkRound = (round: Fgtr[]): round is [Fgtr, Fgtr] => {
	return round.length === 2;
};

function fitSchedule(arr: Fgtr[], schedule: [Fgtr, Fgtr][], round: Fgtr[]) {
	if (arr.length < 2) {
		return schedule;
	}
	const picknum = Math.floor(Math.random() * arr.length);
	const pickedFgtr = arr[picknum];
	newRoster.splice(picknum, 1);
	round.push(pickedFgtr);
	if (checkRound(round)) {
		schedule.push(round);
		return fitSchedule(arr, schedule, []);
	}
	return fitSchedule(arr, schedule, round);
}

const updateRecord = (competitor: Fgtr, result: FightResult) => {
	const theRecord = records[competitor.name];

	if (theRecord) {
		records[competitor.name].matches = theRecord.matches += 1;
		records[competitor.name].wins = competitor.name === result.winner ? (theRecord.wins += 1) : theRecord.wins;
	} else {
		records[competitor.name] = { matches: 1, wins: competitor.name === result.winner ? 1 : 0 };
	}
	return records;
};

const processResults = (records: RecordTables): ProcessRecordTables => {
	const processData: ProcessRecordTables = Object.keys(records).reduce((acc, current) => {
		return { ...acc, [current]: { ...records[current], winRatio: Math.round((records[current].wins / records[current].matches) * 100) } };
	}, {});

	const sortedData = Object.keys(processData).sort((a, b) => {
		return processData[a].winRatio > processData[b].winRatio ? -1 : 1;
	});

	const sortedProcessedData = sortedData.reduce((acc, current) => {
		return { ...acc, [current]: processData[current] };
	}, {});

	return sortedProcessedData;
};

export const runSchedule = () => {
	const setSchedule: [Fgtr, Fgtr][] = fitSchedule(newRoster, [], []);
	console.log(setSchedule);

	setSchedule.forEach((matchup) => {
		const result = battle(matchup[0], matchup[1]);
		console.log(result);

		records = updateRecord(matchup[0], result);
		records = updateRecord(matchup[1], result);
	});

	// console.log(processResults(records));
	return processResults(records);
	// writeFileSync('./records.json', JSON.stringify(processResults(records)), { encoding: 'utf8', flag: 'w' });
};
