import http from "./setup";

export default class BoardsApi {
  async findAll() {
    const data = await http.get("/boards");
    console.log(data);
  }

  findOne() {}

  create() {}

  update() {}

  delete() {}
}
