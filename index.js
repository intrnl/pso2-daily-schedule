let PST_OFFSET = 7 * 60;

let MIN_IN_MS = 60000;
let DAY_IN_MS = 86400000;

function getPSTDate () {
	let date = new Date();
	let offset = date.getTimezoneOffset();

	if (offset != PST_OFFSET) {
		date = new Date(date.getTime() - (offset * MIN_IN_MS) + (PST_OFFSET * MIN_IN_MS));
	}

	return date;
}

export function getDailySchedule (type, date = getPSTDate()) {
	let now = date.getTime();

	let data = require(`./data/${type}.json`);
	let start = new Date(data.start).getTime();
	let cycle = data.cycle;

	let day = (Math.abs(Math.round(start / DAY_IN_MS) - Math.round(now / DAY_IN_MS)) % cycle) + 1;

	return data.items.filter((item) => item.schedule.includes(day));
}
