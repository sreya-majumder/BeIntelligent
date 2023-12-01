import axios from "axios";

//file or methods import
import { base_url, endpoints } from "./api-endpoints.js";


//user auth//

//signup//
export const _userSignup = async function (user) {
  const api_endpoint = `${base_url}${endpoints.userSignup}`;
  try {
    const response = await axios.post(api_endpoint, user);
      return response.data; // return a json with user
  } catch (err) {
    // console.log(err.response.data.message);
    console.log(err.message)
  }
};
//test signup
// const newUser ={username: "uniquename", firstName: "Faysel", lastName: "Rajo", email:"unique@gmail.com", password: "122345"}
// _userSignup(newUser).then(data => console.log(data))

//signup//
export const _userLogin = async function (credential) {
  const api_endpoint = `${base_url}${endpoints.userLogin}`;
  try {
    const response = await axios.post(api_endpoint, credential);
      return response.data; 
  } catch (err) {
    // console.log(err.response.data.message);
    console.log(err.message)
  }
};
// const credential ={username: "messi", firstName: "Faysel", lastName: "Rajo", email:"messi@gmail.com", password: "122345"}
// _userLogin(credential).then(data => console.log(data))



//get all books//
export const _fetchBooks = async function () {
  const api_endpoint = `${base_url}${endpoints.getBooks}`;
  try {
      const response = await axios.get(api_endpoint);
      return response.data.books; // returns list of book objects
  } catch (err) {
      console.log(err.message);
  }
};
//test fetchBooks
//fetchBooks().then(data => console.log(data));

//get single book //
export const _fetchBookById = async function (_id) {
  const api_endpoint = `${base_url}${endpoints.getBook}${_id}`;
  try {
      const response = await axios.get(api_endpoint);
      return response.data.book; //retruns a single book object
  } catch (err) {
      console.log(err.message);
  }
};
//test
// fetchBookById("655e5ff16f4a5dbb583faca7").then(data => console.log(data))


// ------- Shelves ---------- //
const tmpToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NTZhMGViMDhkODM2ZTFjNTQ0NzA1MGMiLCJlbWFpbCI6ImZheXNlbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImZheXNlbCIsImlhdCI6MTcwMTQ1MTU4NCwiZXhwIjoxNzAxNTM3OTg0fQ.GuWPgAJKdNWFN6UElovxM6txb64eo_8NzKa_Hqq1mQY"

//create a shelf //
export const _createShelf = async function (authToken, username, label) {
  const api_endpoint = `${base_url}/user/${username}/create-shelf`;

  // Request headers with Authorization token
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.patch(api_endpoint, {label}, {headers});
    // console.log(response)
      return response.data; //retruns a success message
  } catch (err) {
      console.log(err.message);
  }
};
//test
// _createShelf("faysel", "newOne", ).then(data => console.log(data))


//get all shelves of a user //
export const _getShelves = async function (username) {
  const api_endpoint = `${base_url}/user/${username}/shelves`;
  try {
    const response = await axios.get(api_endpoint);
      return response.data; //retruns a success message
  } catch (err) {
      console.log(err.message);
  }
};
//test
// _getShelves("faysel").then(data => console.log(data))


// delete shelf //
export const _deleteShelf = async function (authToken, username, label) {
  const api_endpoint = `${base_url}/user/${username}/delete-shelf/${label}`;
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.delete(api_endpoint, {headers});
      return response.data; //retruns a success message
  } catch (err) {
      console.log(err.message);
  }
};
//test
// _deleteShelf(tmpToken,"faysel", "newOne").then(data => console.log(data))



// add book to shelf //
export const _addBookToShelf = async function (authToken,username, label, bookId) {
  const api_endpoint = `${base_url}/user/${username}/shelves/${label}/add`;
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  }
  try {
    const response = await axios.patch(api_endpoint, {bookId}, {headers});
      return response.data; //retruns a success message
  } catch (err) {
      console.log(err.message);
  }
};
//test
// 



// remove book from shelf //
export const _removeFromShelf = async function (authToken,username, label, bookId) {
  const api_endpoint = `${base_url}/user/${username}/shelves/${label}/remove/${bookId}`;
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  }
  try {
    const response = await axios.patch(api_endpoint, {bookId}, {headers});
      return response.data; //retruns a success message
  } catch (err) {
      console.log(err);
  }
};
//test
// const tmpBookId = "655c96c9545a2f3bb0b7c128"
// _removeFromShelf(tmpToken, "faysel", "finance", tmpBookId).then((data)=> console.log(data))