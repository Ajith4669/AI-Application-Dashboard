import HttpClient from "./http";

class CrudService {
  url = "";
  constructor() {
    this.http = new HttpClient();
  }
  list(filter = {}) {
    return this.http.get(this.url, { params: filter });
  }
  retrieve(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  add(data) {
    return this.http.post(`${this.url}`, data);
  }
  update(data, id) {
    return this.http.put(`${this.url}/${id}`, data);
  }
  patch(data, id) {
    return this.http.patch(`${this.url}/${id}`, data);
  }
  save(data) {
    return this.http.post(`${this.url}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
export default CrudService;
