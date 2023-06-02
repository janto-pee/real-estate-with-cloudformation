import SessionModel, { SessionInput } from "../model/session.model";

export const createSession = async (session: Partial<SessionInput>) => {
  const response = await SessionModel.create(session);
  return response;
};
export const findSession = async (session: Partial<SessionInput>) => {
  const response = await SessionModel.findOne(session );
  return response;
};

export const findSessionById = async (id: string) => {
  const session = await SessionModel.findById(id);
  return session;
};
