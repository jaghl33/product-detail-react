import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemberRewardNote from '../components/product/MemberRewardNote';
import ProductData from '../../product-data.json';

describe('MemberRewardNote', () => {
  beforeEach(() => {
    render(<MemberRewardNote />);
  });

  it('replaces the %%coopMemberReward%% token with a link', () => {
    const link = screen.getByRole('link', { name: ProductData.product.membership.content.actions.coopMemberReward.text });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', ProductData.product.membership.content.actions.coopMemberReward.target);
  });

  it('creates correct image path', () => {
    const membershipImage = screen.getByAltText('Membership');
    expect(membershipImage).toHaveAttribute(
      'src',
      `/src${ProductData.product.membership.image.url}`,
    );
  });
});
