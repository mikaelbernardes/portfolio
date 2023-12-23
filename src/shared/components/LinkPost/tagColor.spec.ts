import { tagColors } from './tagColors';

describe('tagColors', () => {
	it('should contain the tag "#front" with the correct color', () => {
		expect(tagColors['#front']).toBe('bg-P100');
	});
  
	it('should contain the tag "#back" with the correct color', () => {
		expect(tagColors['#back']).toBe('bg-Back');
	});
  
	it('should contain the tag "#css" with the correct color', () => {
		expect(tagColors['#css']).toBe('bg-[#2AB8E6]');
	});
  
	it('should contain the tag "#javascript" with the correct color', () => {
		expect(tagColors['#javascript']).toBe('bg-[#F5CE35]');
	});
});
