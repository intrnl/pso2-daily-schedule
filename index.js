let { Temporal } = require('proposal-temporal');


function getDailySchedule (type, date = Temporal.now.zonedDateTimeISO(), region = 'GL') {
	let data = require(`./data/${type}.json`);

	let tz = region == 'JP' ? 'Asia/Tokyo' : region == 'GL' ? 'America/Los_Angeles' : null;
	let start = Temporal.PlainDate.from(data.start).toZonedDateTime(tz)
	let now = date.withTimeZone(tz);

	let cycle = data.cycle;

	let diff = now.since(start, { largestUnit: 'day', smallestUnit: 'day' }).days;
	let day = (Math.abs(diff) % cycle) + 1;

	return data.items.filter((item) => item.schedule.includes(day));
}

console.log(getDailySchedule('orders-daily'))
