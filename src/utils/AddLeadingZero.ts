function addLeadingZero(number: number) {
	const numString = number.toString();
	if (numString.length === 1) {
		return '0' + numString;
	} else {
		return numString;
	}
}

export function formatDate(dateString: string) {
	const [month, day, year] = dateString.split('/');
	const formattedDay = addLeadingZero(parseInt(day));
	const formattedMonth = addLeadingZero(parseInt(month));
	return `${formattedMonth}/${formattedDay}/${year}`;
}