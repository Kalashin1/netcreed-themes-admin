import { FirebaseStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";
const CryptoJS = require('crypto-js');

export const uploadImage = async (file: any, storage: FirebaseStorage, folder: string) => {
  const extension = file.name;

  const key = CryptoJS.lib.WordArray.random(16)
  const name = `${key}.${extension}`;
  localStorage.setItem('name', name);


  const storageRef = ref(storage)
  const articleImagesRef = ref(storageRef, `${folder}/${name}`);

  const metadata = {
    contentType: file.type,
  };

  await uploadBytes(articleImagesRef, file, metadata);

  const url = await getDownloadURL(articleImagesRef);
  return { url, name }
}