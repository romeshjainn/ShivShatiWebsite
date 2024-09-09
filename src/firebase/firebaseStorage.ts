import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const uploadFile = async (file) => {
  const storageRef = ref(storage, "registration-payments/" + file.name);
  try {
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export const getFileURL = async (filePath) => {
  const fileRef = ref(storage, filePath);
  try {
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    console.error("Error retrieving file:", error);
    return null;
  }
};
