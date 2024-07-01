const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('./submissionmlgc-naufaladi-4576a7d20f1f.json')

async function storeData(id, data) {
  try {
    const db = new Firestore({
      keyFilename : process.env.GOOGLE_APPLICATION_CREDENTIALS,
      projectId: 'submissionmlgc-naufaladi',
      keyFilename: pathKey,
    });

    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = storeData;
