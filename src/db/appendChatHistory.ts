import { ChatMessage } from '../schemas'

// TODO: move to db and separate from Vector DB
export const chatHistoryInMemory: ChatMessage[] = []

export const appendChatHistory = (message: ChatMessage) => {
  chatHistoryInMemory.push(message)
}
