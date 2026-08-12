import { describe, it, expect, vi } from "vitest";

describe("fetch del chat", () => {
  it("debería simular una respuesta correcta", async () => {
    const mockFetch = vi.fn();

    vi.stubGlobal("fetch", mockFetch);

    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        reply: "Hola, humano",
      }),
    });

    const response = await fetch("/api/functions");
    const data = await response.json();

    expect(response.ok).toBe(true);
    expect(data.reply).toBe("Hola, humano");
});

    it("debería llamar al fetch", async () => {
  const mockFetch = vi.fn();

  vi.stubGlobal("fetch", mockFetch);

  mockFetch.mockResolvedValue({
    ok: true,
    json: async () => ({
      reply: "Hola, humano",
    }),
  });

  await fetch("/api/functions");

  expect(mockFetch).toHaveBeenCalled();
});

it("debería llamar a la URL correcta", async () => {
  const mockFetch = vi.fn();

  vi.stubGlobal("fetch", mockFetch);

  mockFetch.mockResolvedValue({
    ok: true,
    json: async () => ({
      reply: "Hola, humano",
    }),
  });

  await fetch("/api/functions");

  expect(mockFetch).toHaveBeenCalledWith("/api/functions");
});

it("debería simular una respuesta con error", async () => {
  const mockFetch = vi.fn();

  vi.stubGlobal("fetch", mockFetch);

  mockFetch.mockResolvedValue({
    ok: false,
    json: async () => ({
      error: "Error al procesar la solicitud",
    }),
  });

  const response = await fetch("/api/functions");
  const data = await response.json();

  expect(response.ok).toBe(false);
  expect(data.error).toBe("Error al procesar la solicitud");
});

});