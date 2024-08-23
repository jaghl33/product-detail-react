import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductImageViewer from '../components/ProductImageViewer';

describe('ProductImageViewer', () => {
  it('does not render without images', () => {
    render(<ProductImageViewer images={[]} />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});
