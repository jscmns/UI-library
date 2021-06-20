import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';

//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create a dropdown
const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

//create a tab
const tab = new Tabs(document.querySelector('.tabs'));
tab.init();

const snackbar = new Snackbar;
snackbar.init();

const button = document.querySelector('.snackbar-trigger');
button.addEventListener('click', () => {
  snackbar.show('You clicked me!');
})



