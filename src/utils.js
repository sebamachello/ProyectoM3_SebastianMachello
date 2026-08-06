export function isValidMessage(message) {
  if (!message) return false;

  return message.trim().length > 0;
}