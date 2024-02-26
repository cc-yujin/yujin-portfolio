import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig"; // 설정 파일로부터 설정을 가져옵니다.

const app = !(globalThis as any)._firebaseApp ? initializeApp(firebaseConfig) : (globalThis as any)._firebaseApp;
(globalThis as any)._firebaseApp = app; // 글로벌 변수에 저장하여 중복 초기화 방지

const db = getFirestore(app);

export default db;