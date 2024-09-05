import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Rewards } from './Rewards';

describe('Rewards component', () => {
  it('renders transaction data', async () => {
    const { getByText } = render(<Rewards />);
    await waitFor(() => getByText('Transcation Data:'));
    expect(getByText('Transcation Amount: $50 | Points Earned: 0')).toBeInTheDocument();
    expect(getByText('Transcation Amount: $120 | Points Earned: 40')).toBeInTheDocument();
    expect(getByText('Transcation Amount: $80 | Points Earned: 30')).toBeInTheDocument();
    expect(getByText('Transcation Amount: $150 | Points Earned: 100')).toBeInTheDocument();
  });

  it('calculates points correctly', () => {
    const calculatePoints = Rewards.calculatePoints;
    expect(calculatePoints(50)).toBe(0);
    expect(calculatePoints(100)).toBe(0);
    expect(calculatePoints(120)).toBe(40);
    expect(calculatePoints(150)).toBe(100);
    expect(calculatePoints(200)).toBe(190);
  });
});
