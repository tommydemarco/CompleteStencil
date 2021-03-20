import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  theme: 'dark',
});

onChange('theme', value => {
  console.log('the theme was changed:', value);
});

export default state;
