/* eslint-disable @typescript-eslint/no-explicit-any */
import { format } from 'date-fns';

const groupMessagesByDate = (messages: any) => {
  if (!Array.isArray(messages)) {
    return {};
  }
  return messages.reduce(
    (acc: any, message: any) => {
      const date = format(new Date(message.createAt), 'yyyy-MM-dd');
      if (!acc[date]) acc[date] = [];
      acc[date].push(message);
      return acc;
    },
    {} as Record<string, any[]>
  );
};

const splitSenderReceiver = (groupedMessages: any, currentUserId: any) => {
  const result: Record<string, { sender: any[]; receiver: any[] }> = {};

  for (const [date, msgs] of Object.entries(groupedMessages) as [string, any[]][]) {
    result[date] = {
      sender: [],
      receiver: []
    };

    msgs.forEach((msg: any) => {
      if (msg.sender.id === currentUserId) {
        result[date].sender.push(msg);
      } else if (msg.receiver.id === currentUserId) {
        result[date].receiver.push(msg);
      }
    });
  }

  return result;
};

const splitMessageResponse = (groupedMessages: any, query: any) => {
  const result: Record<string, { query: any[]; answer: any[] }> = {};

  for (const [date, msgs] of Object.entries(groupedMessages) as [string, any[]][]) {
    result[date] = {
      query: [],
      answer: []
    };

    msgs.forEach((msg: any) => {
      if (query === 'query') {
        result[date].query.push(msg);
      }
      result[date].answer.push(msg);
    });
  }

  return result;
};

const mergeSortMessages = (receiverMessages: any, senderMessages: any) => {
  const senderWithSenderTrue = senderMessages.map((message: any) => ({ ...message, sender: true }));
  const receiverWithSenderFalse = receiverMessages.map((message: any) => ({ ...message, sender: false }));

  const merged = [...senderWithSenderTrue, ...receiverWithSenderFalse];

  merged.sort((a, b) => new Date(a.createAt).getTime() - new Date(b.createAt).getTime());

  return merged;
};

export { groupMessagesByDate, splitSenderReceiver, mergeSortMessages, splitMessageResponse };
