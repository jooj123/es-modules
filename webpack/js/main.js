import findLastIndex from 'lodash/findLastIndex';

function changeStatus(text) {
  let element = document.getElementById('status');
  element.innerHTML = text;
}

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

changeStatus(
  findLastIndex(users, function(o) { return o.user == 'pebbles'; })
);

