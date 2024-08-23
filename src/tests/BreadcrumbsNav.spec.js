import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BreadcrumbsNav from '../components/BreadcrumbsNav';
import ProductData from '../../product-data.json';

const { breadcrumbs } = ProductData.product;

describe('BreadcrumbsNav', () => {
  beforeEach(() => {
    render(<BreadcrumbsNav breadcrumbs={breadcrumbs} />);
  });

  it('displays ellipsis when there are more than two breadcrumbs', () => {
    expect(screen.getByText('. . .')).toBeInTheDocument();
  });

  it('displays correct number of breadcrumbs initially', () => {
    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems).toHaveLength(3);
  });

  it('toggles visibility of full breadcrumb list on ellipsis click', () => {
    fireEvent.click(screen.getByText('. . .'));
    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems).toHaveLength(breadcrumbs.length);
  });

  it('displays full breadcrumb list after ellipsis click', () => {
    fireEvent.click(screen.getByText('. . .'));
    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems).toHaveLength(breadcrumbs.length);
  });
});
