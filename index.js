let { Temporal } = require('proposal-temporal');


function getDailySchedule (type, date = Temporal.now.zonedDateTimeISO()) {
	let data = require(`./data/${type}.json`);

	let start = Temporal.ZonedDateTime.from(data.start);
	let now = date.withTimeZone('America/Los_Angeles');

	let cycle = data.cycle;

	let diff = now.since(start, { largestUnit: 'day', smallestUnit: 'day' }).days;
	let day = (Math.abs(diff) % cycle) + 1;

	return data.items.filter((item) => item.schedule.includes(day));
}

console.log(getDailySchedule('quest-recommended'))
