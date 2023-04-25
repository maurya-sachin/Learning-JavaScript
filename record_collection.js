/*Record Collection
Creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains
multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album
object, there are various properties describing information about the album. Not all albums have complete information.

The updateRecords function takes 4 arguments represented by the following function parameters:

records - an object containing several individual albums
id - a number representing a specific album in the records object
prop - a string representing the name of the album’s property to update
value - a string containing the information used to update the album’s property
Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, add the value to the end of the album's tracks array. You need to create this array first
if the album does not have a tracks property.
Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.*/

const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  
  function updateRecords(records, id, prop, value) {
    if (value === "") {
      delete records[id][prop];
    } 
    else if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
    } 
    else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } 
    else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');