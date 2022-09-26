const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('key', 'secret');

sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

unpinMyPins = (hash) => {
  pinata.unpin(hash).then((result) => {
    //handle results here
    console.log(result);
  }).catch((err) => {
    //handle error here
    console.log(err);
  });
}

hashs = [
  "QmcCT8vLR2dZUApgMix3gFtG79SRsQn9zPMNwQNpNS9XRv",
  "QmNzP1pzrhhJ3wUR9pQ7HC7M83pQjtz8QrVpZg433vqey4",
  "QmPvWesoDk839su4p2CMEZQ7uPPoBzR9RDbreEJNFvwfk5",
  "QmT3gZjkDkSXzPxZX3AVixVZaSqajybUk5JfP3wnhpydbj",
  "QmSCMavZLbS9rauGenyyaRM1R3uLniQCCMFz6cLck4heSB",
  "Qmd4p7Q4T8aYvvKfCp8tHeVTERUeQFxP8TSZkfvtuFsevZ",
  "QmaKxUEKfePSVeYaueaJ3EG3aY4aMFUFqsQSTcuBGJvvbG",
  "QmbdBSE11knoMeNCo2Lgsp7xy26k23ZLddp2aVn9MCWnP6",
  "QmYZQn5Axyks3CWn7C8NzjLRtjQrq4pbELvt9PZD36PS9r",
  "QmeykfmmYUt5kMxUL5qnMp66s9J61rqKZkzGNr8Ci6Fb7B",
  "QmewZEoJU7Jq6GNDtcVpinxWv5xE5cbERUSU1QUhrUYce7",
  "QmckEuVX2nB2np7GUpZVs4SRwHVBtJk5CP9rMFq2mLfBoC",
  "QmeBipRhCGe1iZpAZVqd8CrBaAi1EaFPvSP2erq7G4mCFU",
  "QmVB2y62JJ8zapyh6bxSr752VKkuA5cNfng8LUyQe5mU3d",
  "QmPEAky591Ad3YDuQhqExp3bK4rb5XpVz5RXS2LYvGykw4",
  "QmbxjhSxYt7nc2ThtkG9w5meEXYkGxTKAbPxVxDVW6RfjZ",
  "QmWRw1ZZWQ8UDndPbZd8mLEyK3uSRzEVuoyrD53p5EhSm4",
  "QmVUgBG4B29fKaPTbASA4WM3wmuV1y8Q67yAYyb63NPArM",
  "Qmb5xLc4Yc6PfWjLJShqZbpWnwhjehQo8z3MRdnDLrfeJh",
];

(async () => {
  for (const hash of hashs) {
    unpinMyPins(hash);
    await sleep(1000);
  }
})();
