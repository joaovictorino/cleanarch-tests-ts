import { createMocks } from "node-mocks-http";
import handler from "../../../pages/api/index";

describe("API Index", () => {
  test("test index", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({ valor: 1000 })
    );
  });
});
