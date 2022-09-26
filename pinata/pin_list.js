const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('key', 'secret');

const filters = {
  status : 'pinned',
  pageLimit: 100,
  pageOffset: 10,
};
pinata.pinList(filters).then((result) => {
  result.rows.forEach(i => {
    console.log("\"" + i.ipfs_pin_hash + "\",")
  })
}).catch((err) => {
  console.log(err);
});
