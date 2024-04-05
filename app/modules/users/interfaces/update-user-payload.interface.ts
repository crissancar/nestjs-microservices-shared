import { UpdateUserRequestInterface } from '../../../webapp/users/interfaces/update-user-request.interface';
import { EventPayload } from '../../shared/interfaces/event-payload.interface';

export interface UpdateUserPayload extends EventPayload<UpdateUserRequestInterface> {}
