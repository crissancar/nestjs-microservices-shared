import { LoginUserRequestInterface } from '../../../webapp/auth/interfaces/login-user-request.interface';
import { EventPayload } from '../../shared/interfaces/event-payload.interface';

export interface AuthenticateUserPayload extends EventPayload<LoginUserRequestInterface> {}
