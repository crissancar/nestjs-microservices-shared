import { CreateUserRequestInterface } from '../../../webapp/users/interfaces/create-user-request.interface';
import { EventPayload } from '../../shared/interfaces/event-payload.interface';

export interface CreateUserPayload extends EventPayload<CreateUserRequestInterface> {}
