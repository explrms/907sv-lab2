import { render, screen } from '@testing-library/react';
import { List } from '../components/List';

test('renders empty list', () => {
    const list = [];
    render(<List list={list} />);
    const element = screen.getByTestId('list');
    expect(element).toHaveTextContent('Список пуст');
});