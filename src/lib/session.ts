import { cookies } from 'next/headers';
import * as bcrypt from 'bcrypt';

export class Session {
  setSession = (expires, session) => {
    const result = cookies().set('session-key', session, { expires, httpOnly: true });
    return result;
  };

  removeSession = () => cookies().set('session-key', '', { expires: new Date(0) });

  getSession = async () => {
    const session = cookies().get('session-key')?.value;
    if (!session) return null;
    return await bcrypt.decode(session);
  };
}
