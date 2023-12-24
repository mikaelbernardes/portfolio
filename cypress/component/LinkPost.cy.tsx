import React from 'react';
import { LinkPost } from '@/shared/components/LinkPost';
import { mount } from 'cypress/react18';
import '../../app/globals.css';

const testData = {
	title: 'Test Title',
	createdAt: '2023-12-24',
	description: 'Test Description',
	slug: 'test-slug',
	tags: ['tag1', 'tag2'],
};

describe('LinkPost Component', () => {
	beforeEach(() => {
		mount(<LinkPost {...testData} />);
	});

	it('renders title correctly', () => {
		cy.get('[data-cy=link-title]').should('have.text', testData.title);
	});

	it('renders createdAt and clock icon correctly', () => {
		cy.get('[data-cy=link-createdAt]').should('include.text', testData.createdAt);
		cy.get('[data-cy=link-clock-icon]').should('be.visible');
	});

	it('renders tags correctly', () => {
		testData.tags.forEach((tag) => {
			cy.get(`.text-white:contains(${tag})`).should('exist');
		});
	});

	it('renders description correctly', () => {
		cy.get('.text-T300').should('have.text', testData.description);
	});

	it('navigates to the correct link on click', () => {
		cy.get('.text-P100').click();
	});
}); 