import { describe, it, expect } from "vitest";
import { isValidMessage } from "../src/utils.js";

describe("isValidMessage", () => {
  it("debería devolver true si el mensaje es válido", () => {
    expect(isValidMessage("Hola")).toBe(true);
  });

  it("deberia devolver false si el mensaje es una cadena vacía", () => {
    expect(isValidMessage("")).toBe(false);
  });
  it ("debería devolver false si el mensaje contiene solo espacios", () => {
    expect(isValidMessage("    ")).toBe(false);
  });
  it ("debería devolver true si el mensaje contiene texto y espacios", () => {
    expect(isValidMessage("  Hola  ")).toBe(true);
  });

});