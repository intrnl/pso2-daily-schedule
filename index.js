let { Temporal } = require('proposal-temporal');


function getDailySchedule (type, date = Temporal.now.zonedDateTimeISO('America/Los_Angeles')) {
	let data = require(`./data/${type}.json`);
	let start = Temporal.ZonedDateTime.from(data.start);
	let cycle = data.cycle;

	let diff = Math.abs(date.since(start, { largestUnit: 'day', smallestUnit: 'day' }).days);
	let sched = (diff % cycle) + 1;

	return data.items.filter((item) => item.schedule.includes(sched));
}

console.log(getDailySchedule('quest-recommended'))
