import React from 'react';
import { mount } from 'cypress/react18';
import { Footer } from '@/layout/Footer';
import '../../app/globals.css';

describe('Footer Component', () => {
	beforeEach(() => {
		mount(<Footer />);
	});

	it('renders copyright information', () => {
		cy.get('[data-cy=footer-text]').should('include.text', '2023');
		cy.get('[data-cy=footer-text]').should('include.text', 'copyright ©');
		cy.get('[data-cy=footer-text]').should('include.text', 'Mikael Bernardes');
	});

	it('has a height of 128 units', () => {
		cy.get('[data-cy=footer]').should('exist');
		cy.get('[data-cy=footer]').should('have.css', 'height', '128px');
	});

	it('is centered and aligned at the bottom', () => {
		cy.get('[data-cy=footer]').should('have.css', 'justify-content', 'center');
		cy.get('[data-cy=footer]').should('have.css', 'align-items', 'flex-end');
	});
});
