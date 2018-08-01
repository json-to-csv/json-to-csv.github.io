function $$(id) {
  return document.getElementById(id);
}

function parseJSON(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    alert(error);
  }
}

function flattenObject(object) {
	var result = {};
	for (var key in object) {
		if (!object.hasOwnProperty(key)) continue;
    var value = object[key];
		if ((typeof value) == 'object') {
			var flatObject = flattenObject(value);
			for (var subkey in flatObject) {
				if (!flatObject.hasOwnProperty(subkey)) continue;
				result[key + '.' + subkey] = flatObject[subkey];
			}
		} else {
			result[key] = value;
		}
	}
	return result;
}

function flattenObjectsInArray(array) {
  return array.map(object => flattenObject(object));
}

function discoverKeys(arrayOfObjects) {
  return arrayOfObjects
    .flatMap(object => Object.keys(object))
    .filter((v, i, s) => s.indexOf(v) === i);
  /* alternative implementation
  return [...new Set(
    arrayOfObjects.flatMap(object => Object.keys(object));
  )];
  */
}

function tableToCSV(table) {
  return table.map(row => row.join(',')).join('\n');
}

function generateDataURL(data) {
  return 'data:application/octet-stream,' + encodeURIComponent(data);
}
