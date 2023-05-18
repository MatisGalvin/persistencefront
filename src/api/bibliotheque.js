import axios from "axios";
import { BASE_URL } from "../config";

export class Bibliotheque {
  // ================== LIVRES ====================
  static async getAllBooks() {
    const response = await axios.get(`${BASE_URL}/livres`);
    return response.data;
  }

  static async addBook() {
    const response = await axios.post(`${BASE_URL}/livre`);
    return response.data;
  }

  static async findBookById(idBook) {
    const response = await axios.get(`${BASE_URL}/livre?id=${idBook}`);
    return response.data;
  }

  static async updateBookById(idBook) {
    const response = await axios.patch(`${BASE_URL}/livre`, idBook);
    return response.data;
  }

  static async deleteBookById(idBook) {
    await axios.delete(`${BASE_URL}/livre?id=${idBook}`);
  }

  // ================== Adherent ===============

  static async getAllAdherents() {
    const response = await axios.get(`${BASE_URL}/adherents`);
    return response.data;
  }

  static async addAdherent() {
    const response = await axios.post(`${BASE_URL}/adherent`);
    return response.data;
  }

  static async findAdherentById(idAdherent) {
    const response = await axios.get(`${BASE_URL}/adherent?id=${idAdherent}`);
    return response.data;
  }

  static async updateAdherentById(idAdherent) {
    const response = await axios.patch(`${BASE_URL}/adherent`, idAdherent);
    return response.data;
  }

  static async deleteAdherentById(idAdherent) {
    await axios.delete(`${BASE_URL}/adherent?id=${idAdherent}`);
  }

  // ================ AUTEUR ==============

  static async getAllAuteurs() {
    const response = await axios.get(`${BASE_URL}/auteurs`);
    return response.data;
  }

  static async addAuteur() {
    const response = await axios.post(`${BASE_URL}/auteurs`);
    return response.data;
  }

  static async findAuteurById(idAuteur) {
    const response = await axios.get(`${BASE_URL}/auteurs?id=${idAuteur}`);
    return response.data;
  }

  static async updateAuteurById(idAuteur) {
    const response = await axios.patch(`${BASE_URL}/auteurs`, idAuteur);
    return response.data;
  }

  static async deleteAuteurById(idAuteur) {
    await axios.delete(`${BASE_URL}/auteurs?id=${idAuteur}`);
  }
}
