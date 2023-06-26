import './_key.scss';

const key = document.createElement('div');

key.classList.add('key');

key.textContent = `A`;

const appendKey = () => {
  document.body.append(key);
}

export {appendKey};