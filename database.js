/*

Tweet Format

{
  id: number,
  message: string,
  date_created: date
  date_modified: date
  deleted: boolean
}
*/

let tweetDatabse = [];


// Lists all tweets were deleted = false;
exports.getAll = () => {
  return [];
};

// Returns tweet with a specific id and where deleted = false
exports.getById = (id) => {

};

// Creates new tweet based on message. Automatically sets id, date_created, date_modifeid and deleted to appropirate values. date values should be current timestamp
exports.create = (message) => {

};

// Deleted a tweet by setting deleted to false and updating date_modified to current timestampt
exports.delete = (id) => {

};