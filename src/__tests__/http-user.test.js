import {
  apiGet,
  apiPost,
  apiDelete,
  apiPut,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../http-user";
import { httpGet, httpPost, httpDelete, httpPut } from "../http";

jest.mock("../http");

describe("API functions", () => {
  beforeEach(() => {
    // Устанавливаем возвращаемые значения моков с `data` свойством
    httpGet.mockResolvedValue({ data: {} });
    httpPost.mockResolvedValue({ data: {} });
    httpPut.mockResolvedValue({ data: {} });
    httpDelete.mockResolvedValue({ data: {} });
  });
  // Очищаем моки после каждого теста
  afterEach(() => {
    jest.clearAllMocks();
  });
  // Тесты для функций API
  test("apiGet calls httpGet with correct path", async () => {
    // Запускаем тест
    await apiGet("test-path");
    // Проверяем, что httpGet был вызван с правильным путем
    expect(httpGet).toHaveBeenCalledWith("/api/test-path");
  });

  test("apiPost calls httpPost with correct path and payload", async () => {
    const payload = { key: "value" };
    await apiPost("test-path", payload);
    expect(httpPost).toHaveBeenCalledWith("/api/test-path", payload);
  });

  test("apiDelete calls httpDelete with correct path", async () => {
    await apiDelete("test-path");
    expect(httpDelete).toHaveBeenCalledWith("/api/test-path");
  });

  test("apiPut calls httpPut with correct path and payload", async () => {
    const payload = { key: "value" };
    await apiPut("test-path", payload);
    expect(httpPut).toHaveBeenCalledWith("/api/test-path", payload);
  });

  test("getUsers calls apiGet with 'users'", async () => {
    await getUsers();
    expect(httpGet).toHaveBeenCalledWith("/api/users");
  });

  test("createUser calls apiPost with 'users' and userData", async () => {
    const userData = { name: "John Doe" };
    await createUser(userData);
    expect(httpPost).toHaveBeenCalledWith("/api/users", userData);
  });

  test("updateUser calls apiPut with 'users/userId' and userData", async () => {
    const userId = "123";
    const userData = { name: "Jane Doe" };
    await updateUser(userId, userData);
    expect(httpPut).toHaveBeenCalledWith(`/api/users/${userId}`, userData);
  });

  test("deleteUser calls apiDelete with 'users/userId'", async () => {
    const userId = "123";
    await deleteUser(userId);
    expect(httpDelete).toHaveBeenCalledWith(`/api/users/${userId}`);
  });
});
