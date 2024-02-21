import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import axios from 'axios';
import { TOKEN, DATABASE_ID } from '../config/index';

// Firebase Admin 초기화
admin.initializeApp();

// Notion API를 호출하여 데이터를 가져오고 Firestore에 저장하는 Firebase Function
exports.fetchNotionData = functions.pubsub
  .schedule('every 24 hours')
  .onRun(async (context) => {
    try {
      const response = await axios.post(
        `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
        {},
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Notion-Version': '2022-06-28',
          },
        },
      );

      // 데이터를 Firestore에 저장
      const data = response.data;
      const firestore = admin.firestore();

      const docRef = firestore.collection('notionData').doc();
      await docRef.set(data);

      console.log('Data saved to Firestore');
    } catch (error) {
      console.error('Error fetching Notion data:', error);
    }
  });
