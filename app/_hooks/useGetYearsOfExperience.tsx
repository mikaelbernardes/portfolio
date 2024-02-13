
export function useGetYearsOfExperience() {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth() + 1;

	const yearsOfExperience = currentYear - 2021 - (currentMonth < 4 ? 1 : 0);

	return {yearsOfExperience};
}