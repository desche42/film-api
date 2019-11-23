const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.json')

class DB {
  constructor() {
    const data = fs.readFileSync(dataPath);
    this._data = JSON.parse(data);
  }

  get(key) {
    return this._data[key] || null;
  }

  set(key, val) {
    this._data[key] = val;
    this._updateFile();
  }

  _updateFile() {
    fs.writeFile(dataPath, JSON.stringify(this._data), () => {});
  }
}

// exportamos un objeto que contenga la bbdd para que solo
// se inicialize una vez
// los módulos de node son singletons
module.exports = new DB();
